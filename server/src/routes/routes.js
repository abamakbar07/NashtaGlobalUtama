const express = require("express");
const { getTasks, addTask } = require("../controllers/taskControllers");

const router = express.Router();

router.get("/coba", (req, res) => {
  res.send({
    status: "success",
  });
});

router.get("/tasks", getTasks);
router.post("/task", addTask);

module.exports = router;
