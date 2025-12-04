import { createClient } from "@supabase/supabase-js";

// Try to get from environment variables, fallback to hardcoded values
const SUPABASE_URL = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.PUBLIC_SUPABASE_URL)
  ? import.meta.env.PUBLIC_SUPABASE_URL
  : "https://mvbyxrayskzpyowmqohd.supabase.co";

const SUPABASE_ANON_KEY = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.PUBLIC_SUPABASE_ANON_KEY)
  ? import.meta.env.PUBLIC_SUPABASE_ANON_KEY
  : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12Ynl4cmF5c2t6cHlvd21xb2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2OTU5MDEsImV4cCI6MjA4MDI3MTkwMX0.NJZPrINZkccbr88KvH4uEeAD9kYc7EmVPHmxH9y9PDg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
