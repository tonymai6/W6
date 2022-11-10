import { getUsers } from "./api.service";

const data = await getUsers();

console.log(data);
