import { createContext } from 'react';

export const EnvironmentContext = createContext<{
  Link: React.FunctionComponent<{
    href: string;
    children: React.ReactNode;
  }>;
}>({
  Link: () => null,
});
