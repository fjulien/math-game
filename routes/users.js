import { Router } from "express";
import db from "../db";
import { select } from "sql-bricks";
const router = Router();

const sql = {
  USERS:"users",
  PSEUDO:"pseudo",
  SCORE:"score"
};
router.get("", async (repuest, APIResponse) => {
  const text = select().from(sql.USERS).toString();
  try {
    const sqlResponse = await db(text);
    APIResponse.json(sqlResponse.rows);
  } catch ({ stack }) {
    console.error(stack);
    APIResponse.status(404).json(stack);
  }
});

// router.post("/users", async (repuest, APIResponse) => {
//   const client = await pool.connect();
//   const queryPrepared = {
//     text: "INSERT INTO public.users (pseudo) VALUES ( $1 )",
//     values: [repuest.body.pseudo],
//   };
//   pool.connect((err, client, done) => {
//     if (err) throw err;
//     client.query(queryPrepared, [1], (err, sqlResponse) => {
//       done();
//       if (err) {
//         console.log(err.detail);
//         APIResponse.status(404).json(err.detail);
//       } else {
//         console.log(sqlResponse.rows[0]);
//         APIResponse.json(sqlResponse.rows);
//       }
//     });
//   });
// });

export default router;
