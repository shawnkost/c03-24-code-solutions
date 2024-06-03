import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "films"
        order by "replacementCost" desc
        limit 2;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.json(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (!Number.isInteger(+filmId)) {
      throw new ClientError(400, 'filmId must be an integer');
    }
    const sql = `
      select *
        from "films"
        where "filmId" = $1;
    `;
    const result = await db.query(sql, [filmId]);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `cannot find film with filmId ${filmId}`);
    }
    res.json(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
