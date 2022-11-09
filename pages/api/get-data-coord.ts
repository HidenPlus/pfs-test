import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>){
    if(req.method === 'GET'){
        try{
            const client = await clientPromise;
            const db = client.db("pfs-test");
            
            const data = await db.collection("pfs-data").find({}).limit(100).toArray();
            res.json(data);
        }catch(error) {
            console.log(error)
        }
    }
}