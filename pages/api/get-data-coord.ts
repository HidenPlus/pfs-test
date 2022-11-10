import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

const ORDER_ITEMS: Record<string, Record<string, number>> = {
    newest: {
        date: -1,
    },
    oldest: {
        date: 1,
    },
    mostPrice: {
        price: -1,
    },
    lessPrice: {
        price: 1,
    },
    mostBath: {
        bath: -1,
    },
    lessBath: {
        bath: 1,
    },
    mostBedrooms: {
        bedrooms: -1,
    },
    lessBedrooms: {
        bedrooms: 1,
    },
    mostArea: {
        area: -1,
    },
    lessArea: {
        area: 1,
    },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>){
    if(req.method === 'GET'){
        try{
            const client = await clientPromise;
            const db = client.db("pfs-test");
            const order = ORDER_ITEMS[req.query.order as string || 'newest'];
            const city: any = req.query.city;
            const data = await db.collection("pfs-data").find({city: city.split(",")[0] }).sort(order).limit(50).toArray();
            console.log(data);
            res.json(data);
        }catch(error) {
            console.log(error)
        }
    }
}