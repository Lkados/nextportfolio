import { supabase } from "../../pages/api/supabase";
import { PersonalDetails, WorkDetails } from "./types";

export async function getPersonalDetails(): Promise<PersonalDetails | boolean> {
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

export async function getWorkDetails(): Promise<WorkDetails | boolean> {
  try {
    let { data: work, error } = await supabase
      .from('work')
      .select('*')
      .single()
    return work ;
  } catch (err){
    return false;
  }
}