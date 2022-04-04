import { RegReduserType } from './types';

export const GetUserEmail = (state: RegReduserType) => state.email;
export const GetUserPassword = (state: RegReduserType) => state.password;
