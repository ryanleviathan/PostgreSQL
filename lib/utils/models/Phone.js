const pool = require('./utils/pool');

module.exports = class Phone {
  id;
  make;
  model;
  five_g;

  constructor(row) {
    this.id = row.id;
    this.make = row.make;
    this.model = row.model;
    this.five_g = row.five_g;
  }

  static async insert({ make, model, five_g }) {
    const { rows } = await pool.query(
      'INSERT INTO phones (make, model, five_g) VALUES ($1, $2, $3) RETURNING *', [make, model, five_g]
    );
    return new Phone(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query('SELECT * FROM phones');

    return rows.map(row => new Phone(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM phones WHERE id=$1', [id]
    );

    if(!rows[0]) throw new Error(`No phone with id ${id}`);
    return new Phone(rows[0]);
  }

  static async update(id, { make, model, five_g }) {
    const { rows } = await pool.query(
      `UPDATE phones
        SET make=$1,
            model=$2,
            five_g=$3
        WHERE id=$4
        RETURNING *`,
      [make, model, five_g, id]
    );
    return new Phone(rows[0]);
  }
  
  static async delete(id) {
    const { rows } = await pool.query('DELETE FROM phones WHERE id=$1 RETURNING *', [id]);

    return new Phone(rows[0]);
  }
};
