import clientPromise from "../../lib/mongodb"

export default async function handler(req, res) {

  const client = await clientPromise;

  const db = client.db("nextjs-mongodb-atlas-demo");

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body)
      let newUserWaiting = await db.collection("waitingList").insertOne(bodyObject)
      res.json(newUserWaiting.ops[0])
      break

    case "GET":
      const usersWaiting = await db.collection("waitingList").find({}).toArray()
      res.json({ status: 200, data: usersWaiting })
      break
  }
}