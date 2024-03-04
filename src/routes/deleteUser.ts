import { FastifyInstance } from "fastify"
import { prisma } from "../db/prisma";
import { z } from "zod";


export async function userDelete(app:FastifyInstance){
app.delete("/userDelete/:Id", async (req, replay) => {
 
const getUserId = z.object({
  Id: z.string().uuid()
}) 

const { Id } = getUserId.parse(req.params);

const user = await prisma.userDB.delete({
   where:{
    id: Id,
   }
 })
  return replay.code(200).send({message:"Sucesso"}) 
})
}