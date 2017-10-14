/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  // TODO: break this out into smaller components
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>{this.props.title}</h1>
          <h3 className={s.subTitle}>Phone:</h3>
          <p className={s.content}>801-587-1417</p>
          <h3 className={s.subTitle}>Email:</h3>
          <a
            className={s.content}
            href="mailto:info@a6pharma.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@a6pharma.com
          </a>
          <h3 className={s.subTitle}>Address:</h3>
          <p className={s.content}>383 Colorow Drive, SLC, UT 84108</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contact);
