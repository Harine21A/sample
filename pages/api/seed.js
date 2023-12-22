//import {createRouter} from 'next-connect';
import Product from '../../models/Product';
import db from '../../utils/db';
import data from '../../utils/data';

//const handler = createRouter();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await db.connect();
    await Product.deleteMany();
    await Product.insertMany(data.products);
    await db.disconnect();
    res.status(200).json({ message: 'Seeded successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}