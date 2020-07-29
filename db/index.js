import { Pool } from "pg";
const pool = new Pool();
export default async function db(text, params) {
  const start = Date.now();
  const response = await pool.query(text, params);
  const duration = Date.now() - start;

  console.info("executed query", {
    query: text,
    duration: `${duration/1000}s`,
    rows: response.rowCount,
  });
  return response;
}
