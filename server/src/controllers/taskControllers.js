const Task = require("../../models/taskModel");

exports.getTasks = async (req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => console.log(err));
};

exports.addTask = (req, res) => {
  const { body, files } = req
  const { title, location, date, participant, note } = body;
  const newTask = new Task({
    title: title,
    location: location,
    date: date,
    participant: participant,
    note: note,
    picture: files.picture[0].filename,
  });

  newTask
    .save()
    .then(() =>
      res.json({
        message: "Task successfully added!",
      })
    )
    .catch((err) =>
      res.status(400).json({
        error: err,
        message: "Error creating account",
      })
    );
};
