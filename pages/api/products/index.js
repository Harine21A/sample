//import {createRouter} from 'next-connect';
import Product from '../../../models/Product';
import db from '../../../utils/db';

//const handler = createRouter();

export default async function handler(req, res) {
  if (req.method === 'GET') {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
}
}