import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = typeof import.meta !== "undefined" && import.meta.env && import.meta.env.PUBLIC_SUPABASE_URL ? import.meta.env.PUBLIC_SUPABASE_URL : process.env.SUPABASE_URL;

const SUPABASE_ANON_KEY = typeof import.meta !== "undefined" && import.meta.env && import.meta.env.PUBLIC_SUPABASE_ANON_KEY ? import.meta.env.PUBLIC_SUPABASE_ANON_KEY : process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn("Supabase: Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables.");
}

export const supabase = createClient(SUPABASE_URL || "", SUPABASE_ANON_KEY || "");

export async function fetchAbonnement() {
  const { data, error } = await supabase.from("abonnement_content").select("*").order("id", { ascending: true });

  if (error) {
    console.error("Supabase fetchAbonnement error:", error.message || error);
    return [];
  }

  return data || [];
}

export async function fetchAbonnementSection(sectionName) {
  const { data, error } = await supabase.from("abonnement_content").select("*").eq("section", sectionName).order("id", { ascending: true });

  if (error) {
    console.error("Supabase fetchAbonnementSection error:", error.message || error);
    return [];
  }

  return data || [];
}
