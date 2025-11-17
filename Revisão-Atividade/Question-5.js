function getUserNameOrLoginCTA(user) {
  return user.name || "<a href='/login'>Entrar</a>";
}

const user1 = { name: "Ana" };
const user2 = { name: "" };        // string vazia → falsy
const user3 = {};                  // name indefinido → falsy

console.log(getUserNameOrLoginCTA(user1));
// "Ana"

console.log(getUserNameOrLoginCTA(user2));
// "<a href='/login'>Entrar</a>"

console.log(getUserNameOrLoginCTA(user3));
// "<a href='/login'>Entrar</a>"
