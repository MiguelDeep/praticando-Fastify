import fastify from "fastify";
import { createUser } from "./routes/create-user";
import { listUser } from "./routes/list-users";
import { updateUser } from "./routes/update-user";
import 'dotenv'
import { userDelete } from "./routes/deleteUser";

const app = fastify();
/*const HOST = process.env.HOST || 'localhost';
const PORT : any = process.env.PORT || 1111;
*/
app.register(createUser)
app.register(listUser)
app.register(userDelete)
app.register(updateUser)


app.get("*", (req, replay) => {
  return replay.code(200).send({ message: "Acesse a uma rota." });
})

app.listen({ port:3333}).then(() => {
  console.log("Server is listening on port ");
})