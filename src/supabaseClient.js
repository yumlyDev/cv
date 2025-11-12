import { createClient } from '@supabase/supabase-js';

// Sustituye por tus propias claves
const SUPABASE_URL = 'https://ffwcqbwwsmvhlhmutsjh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmd2NxYnd3c212aGxobXV0c2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5ODI4MjUsImV4cCI6MjA3ODU1ODgyNX0.GSnqRERuOuJBvJZgf-bRH22JvaP7awYBAdjoxONTelc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
