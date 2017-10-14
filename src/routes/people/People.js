/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { peopleInfo, advisorInfo } from './constants';
import s from './People.css';

// TODO: break down into further components
const People = () => (
  <div className={s.root}>
    <div className={s.container}>
      <h2 className={s.subTitle}>Staff</h2>
      {peopleInfo.map(person => (
        <div className={s.personContainer}>
          <h3 className={s.personName}>{person.name}</h3>
          <h4 className={s.personTitle}>{person.title}</h4>
          {person.paragraphs.map(paragraph => (
            <span className={s.bodyText}>
              {paragraph}
              <br />
              <br />
            </span>
          ))}
        </div>
      ))}
      <h2 className={s.subTitle}>Advisors</h2>
      {advisorInfo.map(advisor => (
        <div className={s.personContainer}>
          <h3 className={s.advisorName}>{advisor.name}</h3>
          {advisor.paragraphs.map(paragraph => (
            <span className={s.bodyText}>
              {paragraph}
              <br />
              <br />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default withStyles(s)(People);
