import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number;
};

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select * from "grades"
      `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    checkGradeId(gradeId);
    const sql = `
      select * from "grades"
      where "gradeId" = $1
      `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const student = result.rows[0];
    if (!student)
      throw new ClientError(404, `student with gradeId ${gradeId} not found`);
    res.json(student);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    checkGradeContent({ name, course, score });
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const student = result.rows[0];
    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    checkGradeId(gradeId);
    const { name, course, score } = req.body;
    checkGradeContent({ name, course, score });
    const sql = `
      update "grades"
      set "name" = $1, "course" = $2, "score" = $3
      where "gradeId" = $4
      returning *`;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const student = result.rows[0];
    if (!student)
      throw new ClientError(404, `student with gradeId ${gradeId} not found`);
    res.json(student);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    checkGradeId(gradeId);
    const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const student = result.rows[0];
    if (!student)
      throw new ClientError(404, `student with gradeId ${gradeId} not found`);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

function checkGradeId(gradeId: string): void {
  const id = Number(gradeId);
  if (!Number.isInteger(id)) {
    throw new ClientError(400, 'id must be an integer');
  }
}

function checkGradeContent(grade: unknown): void {
  const { name, course, score } = grade as Grade;
  if (!name) {
    throw new ClientError(400, 'name is required');
  }
  if (!course) {
    throw new ClientError(400, 'course is required');
  }
  if (!Number.isInteger(+score)) {
    throw new ClientError(400, 'score must be an integer');
  }
  if (score < 0 || score > 100) {
    throw new ClientError(400, 'score must be between 0 and 100');
  }
}
