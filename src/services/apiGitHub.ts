const URL_API = "https://api.github.com";
export async function getAllUsers() {
  const res = await fetch(`${URL_API}/users`);
  if (!res.ok) {
    console.log("Error");
  }
  const users = res.json();
  console.log(users);
  return users;
}
export async function getUserById(id: Number) {
  const res = await fetch(`${URL_API}/users/${id}`);
  if (!res.ok) {
    throw new Error(`Error fetching user with login: ${id}`);
  }
  const data = await res.json();

  return data;
}
