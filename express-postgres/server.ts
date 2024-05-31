import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

// only create ONE pool for your whole server.
// Note the database name at the end of the connection string.
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
      select "title",
             "filmId"
        from "films"
        order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.send(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (!filmId) {
      throw new ClientError(400, 'filmId is required');
    }
    if (isNaN(Number(filmId))) {
      throw new ClientError(400, 'filmId must be a number');
    }
    const sql = `
      select *
        from "films"
        where "filmId" = $1;
    `;
    const result = await db.query(sql, [filmId]);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, 'film not found');
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, title } = req.query;
    if (!filmId) {
      throw new ClientError(400, 'filmId is required');
    }
    if (isNaN(Number(filmId))) {
      throw new ClientError(400, 'filmId must be a number');
    }
    if (!title) {
      throw new ClientError(400, 'title is required');
    }
    const sql = `
      update "films"
         set "title" = $1
       where "filmId" = $2
     returning *;
    `;
    await db.query(sql, [title, filmId]);
    res.send('Film updated successfully');
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
