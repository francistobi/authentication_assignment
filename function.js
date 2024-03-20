const fs = require("fs");

function findUser(username) {
  const rawData = fs.readFileSync("./database.json", "utf8");
  const users = JSON.parse(rawData);
  return users.find((user) => user.username === username);
}

module.exports = {
  findUser,
};
