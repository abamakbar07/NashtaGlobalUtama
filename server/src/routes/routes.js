const express = require("express");
const { getTasks, addTask } = require("../controllers/taskControllers");
const { uploadTaskImage } = require("../middlewares/uploadTask");

const router = express.Router();

router.get("/coba", (req, res) => {
  res.send({
    status: "success",
  });
});

router.get("/tasks", getTasks);
router.post("/task", uploadTaskImage("picture"), addTask);

module.exports = router;
