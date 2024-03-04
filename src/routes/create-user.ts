import { FastifyInstance } from "fastify"
import { prisma } from "../db/prisma"

export async function createUser(app:FastifyInstance){
app.post("/createUser",async (req, replay) => {
 const dataUser : any= req.body;
  
const user = await prisma.userDB.create({
  data:dataUser
})

  return replay.code(200).send({message:"sucesso"})
})
}