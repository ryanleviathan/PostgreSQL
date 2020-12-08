const request = require('supertest');
const app = require('../index.js');
const pool = require('../utils/pool.js');

describe('app endpoints', () => {
  
  afterAll(async() => {
    await pool.query(
      'truncate table albums'
    );
    await pool.end();
  });

  it('creates an album in /albums', async() => {
    const res = await request(app)
      .post('/albums')
      .send({
        artist: 'PARTYNEXTDOOR',
        album_title: 'PARTYMOBILE',
        year_of: 2020
      });

    await expect(res.body).toEqual({
      "artist": "PARTYNEXTDOOR",
      "album_title": "PARTYMOBILE",
      "id": "30",
      "year_of": 2020
    });
  });
  it('reads all albums in /albums', async() => {
    const res = await request(app)
      .get('/albums');

    expect(res.body).toEqual([{
      "artist": "PARTYNEXTDOOR",
      "album_title": "PARTYMOBILE",
      "id": "30",
      "year_of": 2020
    }]);
  });
  it('updates an album by id in /albums', async() => {
    const res = await request(app)
      .put('/albums/30')
      .send({
        artist: 'PARTYNEXTDOOR',
        album_title: 'PARTYNEXTDOOR 3',
        year_of: 2016
      });

    expect(res.body).toEqual({
      "artist": "PARTYNEXTDOOR",
      "album_title": "PARTYNEXTDOOR 3",
      "id": "30",
      "year_of": 2016
    });
  });
  it('deletes an album by id from /albums', async() => {
    const res = await request(app)
      .delete('/album/30')
      .send({
        artist: 'PARTYNEXTDOOR',
        album_title: 'PARTYNEXTDOOR 3',
        year_of: 2016
      });

    expect(res.body).toEqual({});
  });
});
