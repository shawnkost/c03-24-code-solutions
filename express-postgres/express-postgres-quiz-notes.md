# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

  - The purpose of the `pg` package is to give us a way of connecting and interacting with our PostgreSQL database

- How do you tell `pg` which database to connect to?

  - You tell `pg` which database to connect to by creating a new `Pool` and passing in a `connectionString`

- How do you send SQL to PostgreSQL from your Express server?

  - You can send SQL to PostgreSQL utilizing the `pg` package you import, and doing `pg.query()` or saving `pg` to a variable and do something like `db.query()`.

- How do you get the rows return from the SQL query?

  - You save the result of `await db.query` to a variable, and it will return an array.

- What must you always remember to put around your asynchronous route handlers? Why?

  - You must always remember to put a try/catch block around your asynchronous route handlers to properly catch and show errors.

- What is a SQL Injection Attack and how do you avoid it in `pg`?

  - SQL injection attacks are when users try to insert direct SQL queries into your database. To avoid this using `pg`, we can use the `$` to match the values and pass those into `db.query` instead

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
