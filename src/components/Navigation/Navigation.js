// TODO: remove once we don't need to setstate in componentDidMount
/* eslint-disable */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      linkSelected: 0,
    };
  }

  componentDidMount() {
    const { pathname } = this.props;
    if (pathname === '/') {
      this.setState({ linkSelected: 0 });
    } else if (pathname === '/people') {
      this.setState({ linkSelected: 1 });
    } else if (pathname === '/contact') {
      this.setState({ linkSelected: 2 });
    } else {
      this.setState({ linkSelected: -1 });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps;
    if (pathname === '/') {
      this.setState({ linkSelected: 0 });
    } else if (pathname === '/people') {
      this.setState({ linkSelected: 1 });
    } else if (pathname === '/contact') {
      this.setState({ linkSelected: 2 });
    } else {
      this.setState({ linkSelected: -1 });
    }
  }

  render() {
    const { linkSelected } = this.state;
    const selectLink = id => {
      this.setState({ linkSelected: id });
    };
    const renderLink = (attrs, index) => (
      <Link
        key={`nav-link-${index}`}
        className={attrs.className}
        to={attrs.href}
        onClick={() => {
          selectLink(index);
        }}
        onTouchStart={() => {
          selectLink(index);
        }}
      >
        {attrs.text}
      </Link>
    );

    const navLinksStyles = [
      {
        text: 'Home',
        className: linkSelected === 0 ? s.navLinkSelected : s.navLink,
        href: '/',
      },
      {
        text: 'People',
        className: linkSelected === 1 ? s.navLinkSelected : s.navLink,
        href: '/people',
      },
      {
        text: 'Contact',
        className: linkSelected === 2 ? s.navLinkSelected : s.navLink,
        href: '/contact',
      },
    ];

    return (
      <div className={s.root} role="navigation">
        {navLinksStyles.map(renderLink)}
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
