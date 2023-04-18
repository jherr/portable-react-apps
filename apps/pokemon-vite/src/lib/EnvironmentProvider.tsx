import { Link } from 'react-router-dom';

import { EnvironmentContext } from '@portable-react-apps/pokemon-ui';

const LinkWrapper = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return <Link to={href}>{children}</Link>;
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
