import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabase/page'; // Adjust the import path if needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // if (req.method === 'POST') {
    const { name, email, age } = req.body;

    const { data, error } = await supabase
      .from('profiles') // Ensure the table name is correct
      .insert([{ name, email, age }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ data });
  // } else {
  //   res.setHeader('Allow', ['POST']);
  //   return res.status(405).end(`Method ${req.method} Not Allowed`);
  // }
}
