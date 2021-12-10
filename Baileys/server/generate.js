var faker = require('faker');

var database = { member: [] };

for (var i = 1; i <= 10; i++) {
  database.member.push({
    // productid: faker.datatype.uuid(),
    // membershiptype: faker.datatype(string),
  });
}

console.log(JSON.stringify(database));
