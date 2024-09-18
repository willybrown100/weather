import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hikklszfkbcznbrkswbj.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhpa2tsc3pma2Jjem5icmtzd2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0ODAzOTcsImV4cCI6MjA0MjA1NjM5N30.Clv92WZ28Yth8ZwefM_QGZ-THRTloqpGf9iT7TQ9K2c";
export const supabase = createClient(supabaseUrl, supabaseKey);
