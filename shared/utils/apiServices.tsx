import { supabase } from "../../pages/api/supabase";
import { PersonalDetails } from  "./types";

export default async function getPersonalDetails(): Promise<PersonalDetails | boolean> {
  try {
    let { data: users, error } = await supabase
      .from('users')
      .select('*')
      .single()
    return users ;
  } catch (err){
    return false;
  }
}