import React from 'react';
import classNames from '@sindresorhus/class-names';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './LoadingSpinner.css';

// NOTE: see CSS file for open-source credit
class LoadingSpinner extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <h2 className={s.title}>Loading...</h2>
        <div
          className={classNames({
            [s.la_ball_beat]: true,
            [s.la_2x]: true,
            [s.la_dark]: true,
          })}
        >
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(LoadingSpinner);
