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
import s from './Home.css';
import imgUrl1 from './cell-pic-1.jpg';
import imgUrl2 from './cell-pic-2.jpg';

// TODO: break all this text out into separate files!
const Home = () => (
  <div className={s.root}>
    <div className={s.container}>
      <div className={s.imageContainerLeft}>
        <img className={s.image} alt="Cancer cell before" src={imgUrl1} />
      </div>
      <div className={s.imageContainer}>
        <img className={s.image} alt="Cancer cell after" src={imgUrl2} />
      </div>
      <div className={s.textContainer}>
        <h1 className={s.header}>ARF6 Inhibitors</h1>
        <div className={s.separator} />
        <p className={s.bodyText}>
          A6 Pharmaceuticals is developing small molecule ARF6 inhibitors for a
          variety of conditions. Because ARF6 plays a critical role in
          pathologic protein trafficking, inhibition of ARF6, using our
          proprietary compounds, has been shown to be effective in animal models
          of acute lung injury/acute respiratory distress, certain types of
          cancer, diabetic retinopathy, age-related macular degeneration, and
          severe cerebral malaria.
        </p>
      </div>
    </div>
  </div>
);

export default withStyles(s)(Home);
