import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

const ORDER_ITEMS: Record<string, Record<string, number>> = {
    newest: {
        list_date: -1,
    },
    oldest: {
        list_date: 1,
    },
    mostPrice: {
        naturalPrice: -1,
    },
    lessPrice: {
        naturalPrice: 1,
    },
    mostBath: {
        property_bathsFull: -1,
    },
    lessBath: {
        property_bathsFull: 1,
    },
    mostBedrooms: {
        property_bedrooms: -1,
    },
    lessBedrooms: {
        property_bedrooms: 1,
    },
    mostArea: {
        property_area: -1,
    },
    lessArea: {
        property_area: 1,
    },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>){
    if(req.method === 'GET'){
        try{
            const client = await clientPromise;
            const db = client.db("pfs-test");
            // Obtain filters and queries from the request
            const order = ORDER_ITEMS[req.query.order as string || 'newest'];
            const city: any = req.query.city;
            const page = req.query.page as string || 1;
            const perPage = 50;
            // Obtain the collection filtering by city and ordering by the selected order with pagination
            const data = await db.collection("pfs-data").
                find({city: city.split(",")[0] }).skip((Number(page) - 1) * perPage)
                .limit(perPage).sort(order).toArray();
            res.json(data);
        }catch(error) {
            console.log(error)
        }
    }
}