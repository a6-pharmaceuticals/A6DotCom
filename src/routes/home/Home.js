import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import imgUrl1 from './cell-pic-1.jpg';
import imgUrl2 from './cell-pic-2.jpg';

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
          ARF6 plays a critical role in pathologic protein trafficking in
          conditions as seemingly diverse as acute lung injury and melanoma. A6
          Pharmaceuticals has identified proprietary small molecule inhibitors
          of ARF6. Using these compounds, we have demonstrated efficacy in
          <span style={{ fontStyle: 'italic' }}>{` in vivo `}</span>
          models of disease including uveal melanoma, malignant sarcoma, acute
          lung injury/acute respiratory distress syndrome, multi-drug resistant
          gram negative bacterial pneumonia, and diabetic retinopathy.
          <br />
          <br />
          A6 is aggressively advancing its lead program in acute respiratory
          distress syndrome through IND and into Phase 1 safety and proof of
          concept, and its pancreatic cancer program through proof of concept in
          animals and into IND-enabling studies.
          <br />
          <br />
          A6 is guided by a team of senior managers, scientists, directors, and
          advisors with extensive experience in the pharma industry, finance,
          regulatory affairs, clinical practice, and basic research.
        </p>
      </div>
    </div>
  </div>
);

export default withStyles(s)(Home);
