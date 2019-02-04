import React from 'react';
import Cosmic from 'cosmicjs';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import withErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import s from './People.css';

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      advisorSections: null,
      cosmicError: false,
      isLoading: true,
      managerSections: null,
    };
  }

  componentDidMount() {
    // retrieve content from CMS (Cosmicjs)
    const api = Cosmic();
    const bucket = api.bucket({ slug: 'a6-pharmaceuticals' });

    // NOTE: the order of the content objects in the res.objects array
    // will stay consistent on the Cosmicjs side
    const managerPromise = bucket
      .getObjects({
        type: 'people-page-manager-sections',
      })
      .then(res => res.objects)
      .catch(() => {
        throw new Error('CMS fetch for manager sections failed!');
      });
    const advisorPromise = bucket
      .getObjects({
        type: 'people-page-advisor-sections',
      })
      .then(res => res.objects)
      .catch(() => {
        throw new Error('CMS fetch for advisor sections failed!');
      });

    // TODO: get rid of throwExpression lint error
    Promise.all([managerPromise, advisorPromise])
      .then(values => {
        this.setState({
          advisorSections: values[1],
          managerSections: values[0],
          isLoading: false,
        });
      })
      .catch(() => this.setState({ cosmicError: true, isLoading: false }));
  }

  render() {
    const { advisorSections, managerSections } = this.state;

    if (this.state.cosmicError) throw new Error('Cosmic fetch failed!');
    if (this.state.isLoading || !advisorSections || !managerSections) {
      return (
        <div className={s.container}>
          <LoadingSpinner />
        </div>
      );
    }

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2 className={s.subTitle}>Management</h2>
          {managerSections.map(managerObject => {
            const { bio, name, photo, title } = managerObject.metadata;

            return (
              <div className={s.personContainer}>
                <img alt={name} className={s.personImage} src={photo.url} />
                <div className={s.personTextContainer}>
                  <h3 className={s.personName}>{name}</h3>
                  <h4 className={s.personTitle}>{title}</h4>
                  <div
                    className={s.bodyText}
                    dangerouslySetInnerHTML={{ __html: bio }}
                  />
                </div>
              </div>
            );
          })}
          <h2 className={s.subTitle}>Advisors</h2>
          {advisorSections.map(advisorObject => {
            const { bio, name } = advisorObject.metadata;

            return (
              <div className={s.advisorContainer}>
                <h3 className={s.advisorName}>{name}</h3>
                <div
                  className={s.bodyText}
                  dangerouslySetInnerHTML={{ __html: bio }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withErrorBoundary(withStyles(s)(People));
