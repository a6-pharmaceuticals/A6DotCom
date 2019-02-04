import React from 'react';
import Cosmic from 'cosmicjs';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import withErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import s from './Contact.css';

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      content: null,
      cosmicError: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    // retrieve content from CMS (Cosmicjs)
    const api = Cosmic();
    const bucket = api.bucket({ slug: 'a6-pharmaceuticals' });
    bucket
      .getObject({
        slug: 'contact-page',
      })
      .then(res => {
        this.setState({ content: res.object.metadata, isLoading: false });
      })
      .catch(() => this.setState({ cosmicError: true, isLoading: false }));
  }

  render() {
    if (this.state.cosmicError) throw new Error('Cosmic fetch failed!');

    if (this.state.isLoading || !this.state.content) {
      return (
        <div className={s.container}>
          <LoadingSpinner />
        </div>
      );
    }

    const { address, email, phone_number: phoneNumber } = this.state.content;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2 className={s.title}>{this.props.title}</h2>
          <h3 className={s.subTitle}>Phone:</h3>
          <p className={s.content}>{phoneNumber}</p>
          <h3 className={s.subTitle}>Email:</h3>
          <a
            className={s.content}
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {email}
          </a>
          <h3 className={s.subTitle}>Address:</h3>
          <p className={s.content}>{address}</p>
        </div>
      </div>
    );
  }
}

export default withErrorBoundary(withStyles(s)(Contact));
