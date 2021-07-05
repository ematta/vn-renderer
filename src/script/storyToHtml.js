const path = require("path");
const fs = require("fs");
const ejs = require("ejs");

const story = fs.readFileSync(
  path.join(__dirname, "..", "..", "story.json"),
  "utf8"
);
const template = fs.readFileSync(
  path.join(__dirname, "..", "view/render.ejs"),
  "utf8"
);
const body = ejs.render(template, { storyContentRaw: story });

fs.writeFileSync(path.join(__dirname, "..", "..", "index.html"), body);
