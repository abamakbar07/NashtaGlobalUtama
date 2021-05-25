const Task = require("../../models/taskModel");

exports.getTasks = async (req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => console.log(err));
};

exports.addTask = (req, res) => {
  const { title, location, date, participant, note, picture } = req.body;
  const newTask = new Task({
    title: title,
    location: location,
    date: date,
    participant: participant,
    note: note,
    picture: picture,
  });

  console.log(req.body)

  newTask
    .save()
    .then(() =>
      res.json({
        message: "Created product successfully",
      })
    )
    .catch((err) =>
      res.status(400).json({
        error: err,
        message: "Error creating account",
      })
    );
};
