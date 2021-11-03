import { supabase } from "../../pages/api/supabase";
import { PersonalDetails, Project, SkillsCards, WorkDetails } from "./types";

export async function getPersonalDetails(): Promise<PersonalDetails | boolean> {
  try {
    let { data: users, error } = await supabase
      .from('users')
      .select('*')
      .single()
    console.log(users)
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
    console.log(work)
    return work ;
  } catch (err){
    return false;
  }
}
export async function getSkillsCards(): Promise<SkillsCards[] | boolean | null> {
  try {
    let { data: skills, error } = await supabase
      .from('skills')
      .select('*')
      .order('id')
    return skills ;
  } catch (err){
    return false;
  }
}

export async function getProjectsDetails(): Promise<Project[] | boolean | null> {
  try {
    let { data: project, error } = await supabase
      .from('project')
      .select('*')
    return project;
  } catch (err){
    return false;
  }
}