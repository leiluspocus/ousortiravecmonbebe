import { supabase } from '../lib/supabaseClient'
import { type Spot } from '../types/Spot'

async function getSpots(): Promise<Array<Spot>> {
  const { data } = await supabase.from('spots').select()
  if (data === undefined || data === null) return []
  return data
}

async function insertSpot(spot: Spot): Promise<Boolean> {
  const { data, error } = await supabase
    .from('spots')
    .insert({ ...spot }, { returning: 'minimal' })
    .select()
  return true
}

export { getSpots, insertSpot }
