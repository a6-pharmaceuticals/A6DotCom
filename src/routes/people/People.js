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
import alanPicUrl from './assets/alan_mgmt.jpg';
import danielPicUrl from './assets/daniel_mgmt.jpg';
import davePicUrl from './assets/dave_mgmt.jpg';
import hunterPicUrl from './assets/hunter_mgmt.jpg';

const getPhoto = index => {
  switch (index) {
    case 0:
      return hunterPicUrl;
    case 1:
      return davePicUrl;
    case 2:
      return alanPicUrl;
    case 3:
      return danielPicUrl;
    default:
      return null;
  }
};

// TODO: break down into further components
const People = () => (
  <div className={s.root}>
    <div className={s.container}>
      <h2 className={s.subTitle}>Management</h2>
      {peopleInfo.map((person, index) => (
        <div className={s.personContainer}>
          <img
            className={s.personImage}
            src={getPhoto(index)}
            alt={person.imgAlt}
          />
          <div className={s.personTextContainer}>
            <h3 className={s.personName}>{person.name}</h3>
            <h4 className={s.personTitle}>{person.title}</h4>
            {person.paragraphs.map(paragraph => (
              <span className={s.bodyText}>
                {paragraph}
                <br />
              </span>
            ))}
          </div>
        </div>
      ))}
      <h2 className={s.subTitle}>Advisors</h2>
      {advisorInfo.map(advisor => (
        <div className={s.advisorContainer}>
          <h3 className={s.advisorName}>{advisor.name}</h3>
          {advisor.paragraphs.map(paragraph => (
            <span className={s.bodyText}>
              {paragraph}
              <br />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default withStyles(s)(People);
