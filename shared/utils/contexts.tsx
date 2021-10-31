import { createContext } from 'react';
import {PersonalDetails } from './types';

export const PersonalDetailsContext = createContext<PersonalDetails | any>(null);

