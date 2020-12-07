const pool = require('./utils/pool');

module.exports = class Album {
  id;
  artist;
  album_title;
  year_of;

  constructor(row) {
    this.id = row.id;
    this.artist = row.artist;
    this.album_title = row.album_title;
    this.year_of = row.year_of;
  }

  static async insert({ artist, album_title, year_of }) {
    const { rows } = await pool.query(
      'INSERT INTO albums (artist, album_title, year_of) VALUES ($1, $2, $3) RETURNING *', [artist, album_title, year_of]
    );
    return new Album(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query('SELECT * FROM albums');

    return rows.map(row => new Album(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM albums WHERE id=$1', [id]
    );

    if(!rows[0]) throw new Error(`No album with id ${id}`);
    return new Album(rows[0]);
  }

  static async update(id, { artist, album_title, year_of }) {
    const { rows } = await pool.query(
      `UPDATE albums
        SET artist=$1,
            album_title=$2,
            year_of=$3
        WHERE id=$4
        RETURNING *`,
      [artist, album_title, year_of, id]
    );
    return new Album(rows[0]);
  }
  
  static async delete(id) {
    const { rows } = await pool.query('DELETE FROM albums WHERE id=$1 RETURNING *', [id]);

    return new Album(rows[0]);
  }
};
