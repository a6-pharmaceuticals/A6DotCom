/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import root from 'window-or-global';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './A6-logo.svg';

class Header extends React.Component {
  render() {
    let pathname = '';
    if (root && root.window && root.window.location) {
      pathname = root.window.location.pathname;
    }
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.brand} to="/">
            <img src={logoUrl} className={s.logo} alt="React" />
          </Link>
          <Navigation pathname={pathname} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
