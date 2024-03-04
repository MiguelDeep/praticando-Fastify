import { FastifyInstance } from "fastify"
import z from "zod"
import { prisma } from "../db/prisma";

export async function updateUser(app:FastifyInstance){
app.put("/userUpdate/:updateId", async (req, replay) => {
  
  
  const userUpdate =z.object({
    updateId : z.string().uuid()
  }) ;
  const User= z.object({
  name : z.string(),
  email: z.string(),
  password : z.string()
})

const  Users   = User.parse(req.body);
const {updateId } = userUpdate.parse(req.params)



  const user = await prisma.userDB.update({
    where :{
      id : updateId
    },
    data : Users
  })

  return replay.code(200).send({message:"sucess"})
})
}
