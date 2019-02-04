import React from 'react';
import Cosmic from 'cosmicjs';
import LazyLoad from 'react-lazyload';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import withErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import s from './Technology.css';

class Technology extends React.Component {
  constructor() {
    super();
    // TODO: replace null w/ {} when there's a proper loading state
    this.state = {
      cancerBodyText: null,
      cancerImages: null,
      cosmicError: false,
      isLoading: true,
      vascularLeakBodyText: null,
      vascularLeakImages: null,
    };
  }

  componentDidMount() {
    // retrieve content from CMS (Cosmicjs)
    const api = Cosmic();
    const bucket = api.bucket({ slug: 'a6-pharmaceuticals' });

    // NOTE: the order of the content objects in the res.objects array
    // will stay consistent on the Cosmicjs side
    bucket
      .getObjects({
        type: 'technology-page-contents',
      })
      .then(res => {
        this.setState({
          vascularLeakBodyText: res.objects[0].metadata,
          vascularLeakImages: res.objects[1].metadata,
          cancerBodyText: res.objects[2].metadata,
          cancerImages: res.objects[3].metadata,
          isLoading: false,
        });
      })
      .catch(() => this.setState({ cosmicError: true, isLoading: false }));
  }

  render() {
    const {
      cancerBodyText,
      cancerImages,
      vascularLeakBodyText,
      vascularLeakImages,
    } = this.state;

    if (this.state.cosmicError) throw new Error('Cosmic fetch failed!');

    if (
      this.state.isLoading ||
      (!cancerBodyText &&
        !cancerImages &&
        !vascularLeakBodyText &&
        !vascularLeakImages)
    ) {
      return (
        <div className={s.container}>
          <LoadingSpinner />
        </div>
      );
    }

    const aliGraphContainerStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '500px',
    };

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.headerContainer}>
            <h2 className={s.header}>ARF6 and Vascular Leak</h2>
          </div>
          <div className={s.subBodyTextContainer}>
            <div
              className={s.subBodyText}
              dangerouslySetInnerHTML={{
                __html: vascularLeakBodyText.paragraphs_1_through_3,
              }}
            />
            <div className={s.diagramContainer}>
              <LazyLoad height="100%" once>
                <img
                  className={s.diagram}
                  src={vascularLeakImages.image_1.url}
                  alt="ARF6 diagram 1"
                  style={{ boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.5)' }}
                />
              </LazyLoad>
              <div
                className={s.captionText}
                dangerouslySetInnerHTML={{
                  __html: vascularLeakImages.image_1_caption,
                }}
              />
            </div>
            <div
              className={s.subBodyText}
              dangerouslySetInnerHTML={{
                __html: vascularLeakBodyText.paragraphs_3_and_4,
              }}
            />
            <div style={aliGraphContainerStyles} className={s.diagramContainer}>
              <LazyLoad height="100%" once>
                <img
                  className={s.diagram}
                  src={vascularLeakImages.image_2.url}
                  alt="ARF6 diagram 2"
                  style={{
                    maxHeight: '375px',
                    minHeight: '285px',
                    boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.5)',
                  }}
                />
              </LazyLoad>
              <div
                className={s.captionText}
                dangerouslySetInnerHTML={{
                  __html: vascularLeakImages.image_2_caption,
                }}
              />
            </div>
            <div
              className={s.subBodyText}
              dangerouslySetInnerHTML={{
                __html: vascularLeakBodyText.bullet_section,
              }}
            />
          </div>

          <div className={s.headerContainer}>
            <h2 className={s.header}>ARF6 and Cancer</h2>
          </div>
          <h3 className={s.subHeader}>Uveal Melanoma</h3>
          <div className={s.subBodyTextContainer}>
            <div
              className={s.subBodyText}
              dangerouslySetInnerHTML={{
                __html: cancerBodyText.paragraphs_1_and_2,
              }}
            />
            <div className={s.diagramCancerContainer}>
              <LazyLoad height="100%" once>
                <img
                  className={s.cancerDiagram}
                  src={cancerImages.image_1.url}
                  alt="ARF6 and cancer 1"
                />
              </LazyLoad>
              <div
                className={s.captionText}
                dangerouslySetInnerHTML={{
                  __html: cancerImages.image_1_caption,
                }}
              />
            </div>
            <div
              style={{ maxWidth: '725px' }}
              className={s.diagramCancerContainer}
            >
              <LazyLoad height="100%" once>
                <img
                  className={s.cancerDiagram}
                  src={cancerImages.image_2.url}
                  alt="ARF6 and cancer 2"
                />
              </LazyLoad>
              <div
                className={s.captionText}
                dangerouslySetInnerHTML={{
                  __html: cancerImages.image_2_caption,
                }}
              />
            </div>
            <div
              className={s.subBodyText}
              dangerouslySetInnerHTML={{
                __html: cancerBodyText.paragraph_3,
              }}
              style={{ display: 'block', marginTop: '15px' }}
            />
          </div>
          <h3 style={{ marginTop: '0' }} className={s.subHeader}>
            Cutaneous Melanoma
          </h3>
          <div style={{ marginBottom: '0' }} className={s.subBodyTextContainer}>
            <div
              className={s.subBodyText}
              dangerouslySetInnerHTML={{
                __html: cancerBodyText.paragraphs_4_and_5,
              }}
            />
            <div
              style={{ maxWidth: '675px' }}
              className={s.diagramCancerContainer}
            >
              <LazyLoad height="100%" once>
                <img
                  className={s.cancerDiagram}
                  src={cancerImages.image_3.url}
                  alt="ARF6 and cancer 3"
                />
              </LazyLoad>
              <div
                className={s.captionText}
                dangerouslySetInnerHTML={{
                  __html: cancerImages.image_3_caption,
                }}
              />
            </div>

            <span
              className={s.subBodyText}
              dangerouslySetInnerHTML={{
                __html: cancerBodyText.bullet_section,
              }}
              style={{ marginTop: '10px', display: 'block' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withErrorBoundary(withStyles(s)(Technology));
