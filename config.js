// =============================
// FAH SUPABASE CONFIGURATION
// =============================
// Paste your Supabase Project URL and Publishable Key below.
// The publishable/anon key is safe to use in browser code when
// Supabase Row Level Security policies are configured correctly.

const SUPABASE_URL = "https://liriobketiuikyvbejba.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ncAryAxZZ7TsLT2KlGIk0g_qYSDYvJB";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
