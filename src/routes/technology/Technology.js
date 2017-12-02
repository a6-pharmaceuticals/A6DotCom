/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import { Collapse } from 'react-collapse';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Technology.css';
import diagramUrl1 from './arf-6-diagram-1.jpg';
import diagramUrl2 from './arf-6-diagram-2.jpg';
import cancerDiagramUrl1 from './arf6-cancer-1.png';
import cancerDiagramUrl2 from './arf6-cancer-2.png';
import cancerDiagramUrl3 from './arf6-cancer-3.png';

class Technology extends React.Component {
  // TODO: components!!!!
  render() {
    const captionBoldStyle = { display: 'inline', fontWeight: '600' };
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.headerContainer}>
            <h2 className={s.header}>ARF6 and Vascular Leak</h2>
          </div>
          <div className={s.subBodyTextContainer}>
            <p className={s.subBodyText}>
              {`ARF6 is an intracellular convergence point for many inflammatory
              agents (e.g., lipopolysaccharides) and cytokines (e.g., IL-6), which,
              alone or together, can cause increased leakiness of blood vessels and
              more release of inflammatory agents, potentially creating the
              “cytokine storm” that leads to systemic inflammatory response
              syndrome, end organ failure, and death.`}
              <br />
              <br />
            </p>
            <div className={s.diagramContainer}>
              <img
                className={s.diagram}
                src={diagramUrl1}
                alt="ARF6 diagram 1"
              />
              <span className={s.captionText}>
                <p style={captionBoldStyle}>
                  {`Four well-known inflammatory pathways, IL-1R, IL-6R, TLR4, and VEGFR, have ARF6 as a common mediator. `}
                </p>
                {`Activation of ARF6 leads to cadherin internalization, inducing vascular leak.`}
              </span>
            </div>
            <p className={s.subBodyText}>
              {`Researchers at the University of Utah led by Dr. Dean Li, together
              with A6, have shown that inhibiting ARF6 effectively blocks a number
              of pro-inflammatory signalling pathways from inducing vascular leak.
              Importantly, ARF6 inhibition does not appear to dampen the ability of
              the immune system. A variety of conditions can cause ARF6-mediated
              vascular leak, including acute lung injury, serious viral infections,
              sepsis, and retinopathies. Due to high mortality and lack of available
              therapy for acute lung injury, A6’s development efforts have focused
              on developing our lead ARF6 inhibitor, NAV-5093, for this condition.`}
              <br />
              <br />
              {`ALI, also known in its more severe form as acute respiratory distress
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
              lack of oxygen to the brain.`}
              <br />
              <br />
            </p>
            <div className={s.diagramContainer}>
              <img
                className={s.diagram}
                src={diagramUrl2}
                alt="ARF6 diagram 2"
              />
              <span className={s.captionText}>
                <p style={captionBoldStyle}>
                  {`Reduction in LPS-induced bronchoalveolar lavage fluid (BALF) cell count by NAV-5093. `}
                </p>
                {`Pooled data from several experiments. Each data point represents one mouse. *, p < 0.05, ****, p < 0.0001`}
              </span>
            </div>
            <span className={s.subBodyText}>
              <p className={s.subBodyText}>
                {`A6 has identified proprietary small molecules that block ARF6
                activation. In animal models of disease, A6’s ARF6 inhibitors have
                been shown to:`}
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
                  Significantly reduce inflammation in an animal model of
                  rheumatoid arthritis.
                </li>
              </ul>
              <p className={s.subBodyText}>
                {`A6 is currently conducting IND-enabling studies with its clinical
                candidate for ALI/ARDS, NAV-5093 and expects to file an IND in Q2
                2018.`}
              </p>
            </span>
          </div>

          <div className={s.headerContainer}>
            <h2 className={s.header}>ARF6 and Cancer</h2>
          </div>
          <h3 className={s.subHeader}>Uveal Melanoma</h3>
          <div className={s.subBodyTextContainer}>
            <p className={s.subBodyText}>
              {`Uveal melanoma (UM) is the most common primary ocular malignancy
                and accounts for 3-5% of all melanomas.  UM is an orphan disease
                with an incidence of approximately 2000 cases per year in the US.
                Half of all patients develop metastases, usually to the liver,
                and there is no effective treatment for metastatic UM.
                Pharmacologic inhibition of ARF6 using A6’s proprietary small
                molecules blocks tumor formation and growth in an animal eye cancer
                model, and also significantly inhibits UM cell invasion in a
                cell culture model.`}
              <br />
              <br />
            </p>
            <p className={s.subBodyText}>
              {`The vast majority (~90%) of UMs are characterized by oncogenic
                mutations in two proteins, GNAQ or GNA11. ARF6, a GTPase which is
                part of the larger superfamily of RAS GTPases, is required for
                transmitting the growth signals from certain oncogenes, including
                GNAQ, which are mutated in many types of cancer. ARF6 exerts its
                effect on oncogene signaling by controlling protein trafficking,
                acting as a so-called “traffic cop” to affect intracellular
                localization. Experiments carried out at the University of Utah
                and A6 have shown that oncogenic GNAQ promotes ARF6 activation,
                and that ARF6 in turn mediates downstream GNAQ signaling,
                including transactivation of β-catenin in uveal melanoma.`}
            </p>
            <div className={s.diagramCancerContainer}>
              <img
                className={s.cancerDiagram}
                src={cancerDiagramUrl1}
                alt="ARF6 and cancer 1"
              />
              <span className={s.captionText}>
                <p style={captionBoldStyle}>
                  {`Oncogenic GNAQ/ARF6 signaling pathway depicting the role of ARF6
                    in controlling the trafficking of mutant GNAQQ209L and the subcellular
                    localization of β-catenin. `}
                </p>
                From Yoo et al., Cancer Cell 29:1 (2016).
              </span>
            </div>
            <div
              style={{ maxWidth: '725px' }}
              className={s.diagramCancerContainer}
            >
              <img
                className={s.cancerDiagram}
                src={cancerDiagramUrl2}
                alt="ARF6 and cancer 2"
              />
              <span className={s.captionText}>
                <p style={captionBoldStyle}>
                  {`Blocking ARF6 reduces the incidence and size of uveal
                    melanomas in an orthotopic mouse model. `}
                </p>
                {`(A) Histopathology
                  images from eyes engrafted with uveal melanoma (Mel202) cells
                  expressing either control or ARF6 shRNAs.  (C) Histopathology
                  images of eyes engrafted with Mel202 cells from mice treated
                  with vehicle or ARF6 inhibitor (NAV-2729).  Arrows in (A)
                  and (C) indicate tumors of uveal melanoma cells. (B and D)
                  Left: Number of eyes with and without a tumor.  Right:
                  Primary tumor size.  *, p < 0.05, ***, p < 0.001.  All mice
                  were engrafted in the posterior chamber of the eye with
                  Mel202 cells.  (A and B) Tumors were allowed to grow for
                  5 weeks until sacrifice.  (C and D) Daily intraperitoneal
                  injection of NAV-2729 (30 mg/kg) was initiated immediately
                  after injection of Mel202 cells, and continued for 5 weeks
                  until sacrifice.  No signs of toxicity were observed in
                  these studies.  From Yoo et al., Cancer Cell 29:1 (2016).`}
              </span>
            </div>
            <p
              style={{ display: 'block', marginTop: '15px' }}
              className={s.subBodyText}
            >
              {`Oncogenic mutations in GNAQ or GNA11 are present not only in
                UM, but also in 5.6% of tumors across all cancer types,
                indicating that ARF6 inhibition may be broadly applicable in
                GNAQ/GNA11-mutant cancers.`}
            </p>
          </div>
          <h3 style={{ marginTop: '0' }} className={s.subHeader}>
            Cutaneous Melanoma
          </h3>
          <div className={s.subBodyTextContainer}>
            <p className={s.subBodyText}>
              {`Cutaneous melanoma (CM), or melanoma of the skin, is the most
                common subtype of malignant melanoma with 76,000 cases per year
                in the US.  Melanoma accounts for less than 5% of all skin cancers,
                but is aggressive and responsible for approximately 75% of all
                deaths from skin cancer worldwide, due to its tendency to metastasize
                throughout the body.  When detected early, CM can be treated
                surgically, but there is no broadly effective treatment for
                metastatic CM.`}
              <br />
              <br />
            </p>
            <p className={s.subBodyText}>
              {`We have shown that ARF6 stimulates WNT5A/β-catenin activity during
                melanoma invasion and metastasis, and that pharmacologic inhibition
                of ARF6 impedes spontaneous metastasis in a mouse model of melanoma,
                suggesting that blocking ARF6 provides a means of inhibiting oncogenic
                WNT/β-catenin signaling in malignant melanoma. `}
            </p>

            <div
              style={{ maxWidth: '675px' }}
              className={s.diagramCancerContainer}
            >
              <img
                className={s.cancerDiagram}
                src={cancerDiagramUrl3}
                alt="ARF6 and cancer 3"
              />
              <span className={s.captionText}>
                <p style={captionBoldStyle}>
                  {`Pharmacologic inhibition of ARF6 reduces spontaneous pulmonary
                    metastasis in the LOX-IMVI melanoma xenograft model. `}
                </p>
                {`Left panel:
                  Gross and histopathology images of lungs from mice treated with
                  vehicle (DMSO) or ARF6 inhibitor (ARF6i).  Arrows indicate hemorrhagic
                  foci of micrometastases.  Treatment with an ARF6 inhibitor significantly
                  reduced both the number of metastatic foci (middle panel) and the
                  number of mice with metastases (right panel).  Mice were engrafted
                  subcutaneously with LOX cells, tumors were allowed to establish for
                  5 days, and then mice were treated daily by intraperitoneal injection
                  for 3 weeks until sacrifice.  From Grossmann et al., Sci. Signaling
                  6:ra14.`}
              </span>
            </div>

            <span
              style={{ marginTop: '10px', display: 'block' }}
              className={s.subBodyText}
            >
              <p className={s.subBodyText}>
                {`A6 is exploring the use of proprietary small-molecule ARF6 inhibitors in:`}
              </p>
              <ul className={s.listContainer}>
                <li className={s.listItem}>
                  Uveal melanoma proliferation and metastasis
                </li>
                <li className={s.listItem}>Cutaneous melanoma metastasis</li>
                <li className={s.listItem}>
                  Malignant schwannoma tumorigenesis
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Technology);
