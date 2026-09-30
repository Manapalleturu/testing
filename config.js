// FAH Supabase configuration
// Replace ONLY these two values with your Supabase Project URL and Publishable Key.
// Never put a Supabase secret/service-role key in this file.

const SUPABASE_URL = "https://liriobketiuikyvbejba.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ncAryAxZZ7TsLT2KlGIk0g_qYSDYvJB";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
