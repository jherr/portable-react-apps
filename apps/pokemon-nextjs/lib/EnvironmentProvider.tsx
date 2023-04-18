import Link from 'next/link';

import { EnvironmentContext } from '@portable-react-apps/pokemon-ui';

const LinkWrapper = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return <Link href={href}>{children}</Link>;
};

const EnvironmentContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EnvironmentContext.Provider
      value={{
        Link: LinkWrapper,
      }}
    >
      {children}
    </EnvironmentContext.Provider>
  );
};

export default EnvironmentContextProvider;
