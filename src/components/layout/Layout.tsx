import { Fragment, FC } from 'react';

import Navbar from './Navbar';

import { ChildrenProps } from '../../types';

const Layout:FC<ChildrenProps> = ({children}) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;