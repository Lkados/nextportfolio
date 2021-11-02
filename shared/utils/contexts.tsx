import { createContext } from 'react';
import { PersonalDetails, WorkDetails } from "./types";

export const PersonalDetailsContext = createContext<PersonalDetails | any>(null);
export const WorkDetailsContext = createContext<WorkDetails | any>(null);

