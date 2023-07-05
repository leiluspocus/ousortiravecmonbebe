import { supabase } from '../lib/supabaseClient'

export default async function getSpots() {
  const { data } = await supabase.from('spots').select()
  return data
}
