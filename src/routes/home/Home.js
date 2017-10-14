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
import diagramUrl1 from './arf-6-diagram-1.jpg';
import diagramUrl2 from './arf-6-diagram-2.jpg';

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
        <h1 className={s.header}>ARF-6 Inhibitors</h1>
        <div className={s.separator} />
        <p className={s.bodyText}>
          A6 Pharmaceuticals is developing small molecule ARF6 inhibitors for a
          variety of conditions, with the lead indication being acute lung
          injury/acute respiratory distress. Because of the important role of
          ARF6 in a variety of pathogenic processes, other indications include
          cancer, diabetic retinopathy, severe cerebral malaria, and multiple
          sclerosis.
        </p>
      </div>
      <div className={s.subBodyTextContainer}>
        <p className={s.subBodyText}>
          ARF-6 is an intracellular convergence point for many inflammatory
          agents (e.g., lipopolysaccharides) and cytokines (e.g., IL-6), which,
          alone or together, can cause increased leakiness of blood vessels and
          more release of inflammatory agents, potentially creating the
          “cytokine storm” that leads to systemic inflammatory response
          syndrome, end organ failure, and death.
          <br />
          <br />
        </p>
        <div className={s.diagramContainer}>
          <img className={s.diagram} src={diagramUrl1} alt="ARF-6 diagram 1" />
          <p className={s.captionText}>
            {`Four well-known inflammatory pathways, IL-1R, IL-6R, TLR4, and VEGFR, have ARF6 as a common mediator. Activation of ARF6 leads to cadherin internalization, inducing vascular leak.`}
          </p>
        </div>
        <p className={s.subBodyText}>
          Researchers at the University of Utah led by Dr. Dean Li, together
          with A6, have shown that inhibiting ARF-6 effectively blocks a number
          of pro-inflammatory signalling pathways from inducing vascular leak.
          Importantly, ARF-6 inhibition does not appear to dampen the ability of
          the immune system. A variety of conditions can cause ARF-6-mediated
          vascular leak, including acute lung injury, serious viral infections,
          sepsis, and retinopathies. Due to high mortality and lack of available
          therapy for acute lung injury, A6’s development efforts have focused
          on developing our lead ARF-6 inhibitor, NAV-5093, for this condition.
          <br />
          <br />
          ALI, also known in its more severe form as acute respiratory distress
          syndrome (ARDS), is a life-threatening lung condition that prevents
          sufficient oxygenation of blood. Causes of ALI include aspiration,
          inhalation injury, bacterial and viral pneumonias, trauma, and sepsis.
          These can trigger an overwhelming inflammatory response (cytokine
          storm) that increases endothelial and epithelial permeability and
          efflux of inflammatory cells, protein, and water from the vascular
          system into the lung alveoli (air sacs). In many patients, this
          inflammatory response results in hypoxemia, multi-organ failure,
          cardiovascular collapse, shock, and death. There are approximately
          200,000 cases of ALI in the U.S. each year. The mortality rate of
          patients with ALI/ARDS is approximately 40%, and those who survive
          often have lasting lung damage and other disabilities associated with
          lack of oxygen to the brain.
          <br />
          <br />
        </p>
        <div className={s.diagramContainer}>
          <img className={s.diagram} src={diagramUrl2} alt="ARF-6 diagram 2" />
          <p className={s.captionText}>
            {`Reduction in LPS-induced bronchoalveolar lavage fluid (BALF) cell count by NAV-5093. Pooled data from several experiments. Each data point represents one mouse. *, p < 0.05, ****, p < 0.0001`}
          </p>
        </div>
        <span className={s.subBodyText}>
          <p className={s.subBodyText}>
            A6 has identified proprietary small molecules that block ARF-6
            activation. In animal models of disease, A6’s ARF-6 inhibitors have
            been shown to:
          </p>
          <ul className={s.listContainer}>
            <li className={s.listItem}>
              Reduce the effects of LPS in a model of acute lung injury;
            </li>
            <li className={s.listItem}>
              Improve survival in animal models of endotoxemia / sepsis;
            </li>
            <li className={s.listItem}>
              Improve survival in animals infected with antibiotic resistant
              bacteria;
            </li>
            <li className={s.listItem}>
              Improve survival in animals infected with cerebral malaria;
            </li>
            <li className={s.listItem}>
              Reduce retinal permeability in animal models of age-related
              macular degeneration and diabetic retinopathy; and,
            </li>
            <li className={s.listItem}>
              Significantly reduce inflammation in an animal model of rheumatoid
              arthritis.
            </li>
          </ul>
          <p className={s.subBodyText}>
            A6 is currently conducting IND-enabling studies with its clinical
            candidate for ALI/ARDS, NAV-5093 and expects to file an IND in late
            2018.
          </p>
        </span>
      </div>
    </div>
  </div>
);

export default withStyles(s)(Home);
