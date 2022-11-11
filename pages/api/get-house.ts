import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if(req.method === 'GET' && req.query.id) {
        const client = await clientPromise;
        const db = await client.db("pfs-test");
        const data = await db.collection("pfs-data").findOne({id: req.query.id});
        res.json(data);
    }
}