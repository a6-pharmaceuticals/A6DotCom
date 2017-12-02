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

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Menu from 'react-burger-menu/lib/menus/slide';
import Link from '../Link';

var burgerStyles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
    right: '20px',
  },
  bmBurgerBars: {
    background: 'rgb(50, 99, 153)',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: 'rgb(251, 251, 251)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    position: 'fixed',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: '0',
  },
  bmMenuWrap: {
    top: '0',
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 3px 0px',
  },
}

class Navigation extends React.Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      isOpen: false,
      linkSelected: 0,
    };
  }

  componentDidMount() {
    const { pathname } = this.props;
    if (pathname === '/') {
      this.setState({ linkSelected: 0 });
    } else if (pathname === '/technology') {
      this.setState({ linkSelected: 1 });
    } else if (pathname === '/people') {
      this.setState({ linkSelected: 2 });
    } else if (pathname === '/contact') {
      this.setState({ linkSelected: 3 });
    } else {
      this.setState({ linkSelected: -1 });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps;
    if (pathname === '/') {
      this.setState({ linkSelected: 0 });
    } else if (pathname === '/technology') {
      this.setState({ linkSelected: 1 });
    } else if (pathname === '/people') {
      this.setState({ linkSelected: 2 });
    } else if (pathname === '/contact') {
      this.setState({ linkSelected: 3 });
    } else {
      this.setState({ linkSelected: -1 });
    }
  }

  render() {
    const { linkSelected, isOpen } = this.state;
    const closeNav = () => {
      this.setState({ isOpen: false });
    }
    const selectLink = id => {
      this.setState({ linkSelected: id });
      closeNav();
    };
    const openNav = () => {
      this.setState({ isOpen: true });
    }
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
        className: classNames({
          [s.navLinkSelected]: linkSelected === 0,
          [s.navLink]: linkSelected !== 0,
          'menu-item': true,
        }),
        href: '/',
      },
      {
        text: 'Technology',
        className: classNames({
          [s.navLinkSelected]: linkSelected === 1,
          [s.navLink]: linkSelected !== 1,
          'menu-item': true,
        }),
        href: '/technology',
      },
      {
        text: 'People',
        className: classNames({
          [s.navLinkSelected]: linkSelected === 2,
          [s.navLink]: linkSelected !== 2,
          'menu-item': true,
        }),
        href: '/people',
      },
      {
        text: 'Contact',
        className: classNames({
          [s.navLinkSelected]: linkSelected === 3,
          [s.navLink]: linkSelected !== 3,
          'menu-item': true,
        }),
        href: '/contact',
      },
    ];

    return (
      <Menu onClick={openNav} isOpen={isOpen} styles={burgerStyles} role="navigation" right>
        {navLinksStyles.map(renderLink)}
      </Menu>
    );
  }
}

export default withStyles(s)(Navigation);
