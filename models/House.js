const pool = require('../utils/pool');

module.exports = class House {
  id;
  bedrooms;
  bathrooms;
  sqr_footage;

  constructor(row) {
    this.id = row.id;
    this.bedrooms = row.bedrooms;
    this.bathrooms = row.bathrooms;
    this.sqr_footage = row.sqr_footage;
  }

  static async insert({ bedrooms, bathrooms, sqr_footage }) {
    const { rows } = await pool.query(
      'INSERT INTO houses (bedrooms, bathrooms, sqr_footage) VALUES ($1, $2, $3) RETURNING *', [bedrooms, bathrooms, sqr_footage]
    );
    return new House(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query('SELECT * FROM houses');

    return rows.map(row => new House(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM houses WHERE id=$1', [id]
    );

    if(!rows[0]) throw new Error(`No house with id ${id}`);
    return new House(rows[0]);
  }

  static async update(id, { bedrooms, bathrooms, sqr_footage }) {
    const { rows } = await pool.query(
      `UPDATE houses
        SET bedrooms=$1,
            bathrooms=$2,
            sqr_footage=$3
        WHERE id=$4
        RETURNING *`,
      [bedrooms, bathrooms, sqr_footage, id]
    );
    return new House(rows[0]);
  }
  
  static async delete(id) {
    const { rows } = await pool.query('DELETE FROM houses WHERE id=$1 RETURNING *', [id]);

    return new House(rows[0]);
  }
};
