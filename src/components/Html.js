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
import serialize from 'serialize-javascript';

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    styles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        cssText: PropTypes.string.isRequired,
      }).isRequired,
    ),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { styles, scripts, app, children } = this.props;
    return (
      <html
        style={{ height: '100%', width: '100%' }}
        className="no-js"
        lang="en"
      >
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>A6 Pharmaceuticals</title>
          <meta
            name="description"
            content="A6 Pharmaceuticals. Salt Lake City, UT"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {scripts.map(script => (
            <link key={script} rel="preload" href={script} as="script" />
          ))}
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link
            rel="stylesheet"
            media="screen"
            href="https://fontlibrary.org/face/aileron"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Hind"
            rel="stylesheet"
          />
          {styles.map(style => (
            <style
              key={style.id}
              id={style.id}
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />
          ))}
        </head>
        <body style={{ height: '100%' }}>
          <div
            style={{ minHeight: '100%', position: 'relative' }}
            id="app"
            dangerouslySetInnerHTML={{ __html: children }}
          />
          <script
            dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}
          />
          {scripts.map(script => <script key={script} src={script} />)}
        </body>
      </html>
    );
  }
}

export default Html;
