import { Fragment, FC } from 'react';

import Navbar from './Navbar';

type Props = { children: React.ReactNode };

const Layout:FC<Props> = ({children}) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;