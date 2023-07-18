const fs = require("fs");
const dataFilePath = "./db/db.json";
let data = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));

module.exports = function(app) {
  app.get("/api/notes", (req, res) => {
    res.json(data);
  });

  app.get("/api/notes/:id", (req, res) => {
    const noteId = Number(req.params.id);
    res.json(data[noteId]);
  });

  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    const uniqueId = data.length.toString();
    newNote.id = uniqueId;
    data.push(newNote);

    fs.writeFileSync(dataFilePath, JSON.stringify(data));

    res.json(data);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const noteId = req.params.id;
    data = data.filter((currentNote) => currentNote.id !== noteId);

    data.forEach((currentNote, index) => {
      currentNote.id = index.toString();
    });

    fs.writeFileSync(dataFilePath, JSON.stringify(data));
    res.json(data);
  });
};
