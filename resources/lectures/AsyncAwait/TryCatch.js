let json = { "age": 30 }; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors
  console.log(user.name); // no name!
} catch (e) {
  console.error(`Invalid ${user} data!`);
}
