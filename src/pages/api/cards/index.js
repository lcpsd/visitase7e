import {getSession} from 'next-auth/react'
import clientPromise from "../../../utils/mongodb"

export default async function handler(req, res) {
    const client = await clientPromise;

    const db = client.db(process.env.MONGODB_DATABASE);

    const session = await getSession({req});

    switch (req.method) {
        case "POST":
            const register = await db.collection("cards").insertOne(req.body)
        
            register.acknowledged ? res.json({status: 200, message: "User added to waiting list"}) 
            : res.json({status: 500, message: "Error adding user to waiting list"})
    
        break

        case "GET":
            res.json({ status: 200, data: await db.collection("cards").find({created_by: session.user.email}).toArray() })
        break
    }
}