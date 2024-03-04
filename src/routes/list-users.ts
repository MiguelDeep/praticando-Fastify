import { FastifyInstance } from "fastify"
import { prisma } from "../db/prisma"

export async function listUser(app: FastifyInstance) {
  app.get("/viewUsers", async (req, replay) => {
    const user = await prisma.userDB.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        createdAt: true
      }
})
  
    return replay.send(user)
  })
}