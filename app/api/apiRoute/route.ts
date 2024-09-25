// pages/api/feedback.ts

import { supabase } from '@/app/supabase/page';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const { data, error } = await supabase
      .from('feedback')
      .insert([{ name, email, message }]);

    if (error) {
      console.error('Error inserting feedback:', error);
      return res.status(500).json({ error: 'Failed to submit feedback' });
    }

    return res.status(200).json({ message: 'Feedback received successfully!', data });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
