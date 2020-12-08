const request = require('supertest');
const app = require('../index.js');

describe('app endpoints', () => {
  it.only('creates an album in /albums', async() => {
    const res = await request(app)
      .post('/albums')
      .send({
        artist: 'PARTYNEXTDOOR',
        album_title: 'PARTYMOBILE',
        year_of: 2020
      });

    expect(res.body).toEqual({
      artist: 'PARTYNEXTDOOR',
      album_title: 'PARTYMOBILE',
      year_of: 2020
    });
  });
  it('reads all albums in /albums', async() => {
    const res = await request(app)
      .get('/albums');

    expect(res.body).toEqual({
      artist: 'PARTYNEXTDOOR',
      album_title: 'PARTYMOBILE',
      year_of: 2020
    });
  });
  it('updates an album in /albums', async() => {
    const res = await request(app)
      .put('/albums/1')
      .send({
        artist: 'PARTYNEXTDOOR',
        album_title: 'PARTYNEXTDOOR 3',
        year_of: 2016
      })
      .get('/albums');

    expect(res.body).toEqual({
      artist: 'PARTYNEXTDOOR',
      album_title: 'PARTYNEXTDOOR 3',
      year_of: 2016
    });
  });
  it('deletes an album from /albums', async() => {
    const res = await request(app)
      .delete('/album/1')
      .send({
        artist: 'PARTYNEXTDOOR',
        album_title: 'PARTYNEXTDOOR 3',
        year_of: 2016
      });

    expect(res.body).toEqual({
      artist: 'PARTYNEXTDOOR',
      album_title: 'PARTYNEXTDOOR 3',
      year_of: 2016
    });
  });
});
