import { createClient } from "@supabase/supabase-js";

// TODO USE THIS OBJECT TO FETCH THE DATA
const supabaseUrl = "";
const supabaseAnonKey = "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
