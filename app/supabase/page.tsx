
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!; // Add your Supabase URL here
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!; // Add your Supabase anon key here

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
