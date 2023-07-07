import { supabase } from '../lib/supabaseClient'
import { type Spot } from '../types/Spot'

export default async function getSpots(): Promise<Array<Spot>> {
  const { data } = await supabase.from('spots').select()
  if (data === undefined || data === null) return []
  return data
}
