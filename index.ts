import { PrismaClient } from "@prisma/client";
import express from 'express'
const app =express();
// const db = new PrismaClient();


app.get('/', (req, res) => {
    res.json('Hello World');
});

// app.get('/users', async (req:Request, res:Response) => {
//     const users = await db.user.findMany();
//     res.json(users);
// });


app.listen(3000,()=>{
    console.log("Listening on port 3000");
})