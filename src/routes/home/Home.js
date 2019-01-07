import React from 'react';
import Cosmic from 'cosmicjs';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { content: {} };
  }

  componentDidMount() {
    // retrieve content from CMS (Cosmicjs)
    const api = Cosmic();
    const bucket = api.bucket({ slug: 'a6-pharmaceuticals' });
    bucket
      .getObject({
        slug: 'home-page',
      })
      .then(res => {
        this.setState({ content: res.object.metadata });
      });
  }

  render() {
    // TODO: get rid of body_text metadata field in Cosmic for this page
    const {
      body_text_plain: bodyTextPlain,
      header_text: headerText,
      image_1: image1,
      image_2: image2,
    } = this.state.content;

    if (!bodyTextPlain) return null;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.imageContainerLeft}>
            <img
              className={s.image}
              alt="Cancer cell before"
              src={image1.url}
            />
          </div>
          <div className={s.imageContainer}>
            <img className={s.image} alt="Cancer cell after" src={image2.url} />
          </div>
          <div className={s.textContainer}>
            <h1 className={s.header}>{headerText}</h1>
            <div className={s.separator} />
            <div
              className={s.bodyText}
              dangerouslySetInnerHTML={{ __html: bodyTextPlain }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
