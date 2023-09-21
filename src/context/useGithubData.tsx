import { RepoDetails, UserDetails } from '@/utils/globatTypes';
import React, { createContext, useReducer, useContext, ReactNode } from 'react';

export interface GithubData {
  repos: RepoDetails[];
  selectedUser: UserDetails;
  users: UserDetails[];
}

interface GithubDataAction {
  type: string;
  payload: any;
}

interface GithubDataContextType {
  state: GithubData;
  dispatch: React.Dispatch<GithubDataAction>;
}

const GithubDataContext = createContext<GithubDataContextType | undefined>(undefined);

const initialState: GithubData = {
  repos: [],
  selectedUser: {},
  users: [],
};

const githubDataReducer = (state: GithubData, action: GithubDataAction): GithubData => {
  switch (action.type) {
    case 'ADD_USERS':
      return {
        ...state,
        users: action.payload,
      };
    case 'SELECTED_USER':
      return {
        ...state,
        selectedUser: action.payload,
      };
    case 'ADD_REPOS':
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};

interface GithubDataProviderProps {
  children: ReactNode;
}

export const useGithubData = (): GithubDataContextType => {
  const context = useContext(GithubDataContext);
  if (!context) {
    throw new Error('useGithubData must be used within a GithubDataProvider');
  }
  return context;
};

export const GithubDataProvider: React.FC<GithubDataProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(githubDataReducer, initialState);

  return (
    <GithubDataContext.Provider value={{ state, dispatch }}>
      {children}
    </GithubDataContext.Provider>
  );
};
