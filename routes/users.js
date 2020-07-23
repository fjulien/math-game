const { Router } = require("express");

const router = Router();

router.get("/users", (req, res) => {
  //   const request = "SELECT * FROM public.page";
  //   conf.query(request, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //       res.sendStatus(500);
  //     } else {
  const users = {
    name: "julien",
    score: 50,
  };
  setTimeout(() => res.json(users).status(200), 5500);

  // }
  //   });
});

router.post("/users", (req, res) => {
  const { pseduo } = req.body;
  //   const request = "SELECT * FROM public.page";
  //   conf.query(request, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //       res.sendStatus(500);
  //     } else {
  setTimeout(() => res.json({"id":13}), 5500);

  // }
  //   });
});

module.exports = router;
