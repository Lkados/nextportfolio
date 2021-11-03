import { createContext } from 'react';
import { PersonalDetails, Project, SkillsCards, WorkDetails } from "./types";

export const PersonalDetailsContext = createContext<PersonalDetails | any>(null);
export const WorkDetailsContext = createContext<WorkDetails | any>(null);
export const ProjectDetailsContext = createContext<Project[] | any>(null);
export const SkillsCardsContext = createContext<SkillsCards[] | any>(null);