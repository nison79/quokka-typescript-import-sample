import * as _ from "lodash";

const users = [
  { id: 1, name: "Amandi", group: 25 },
  { id: 2, name: "Nick", group: 35 },
  { id: 3, name: "AmandiHello", group: 25 },
];

const filteredUsers = _.filter(users, { group: 25 });

console.log(filteredUsers);

const expectedUsers = _.map(filteredUsers, { name: "Amandi" });
console.log(expectedUsers);
