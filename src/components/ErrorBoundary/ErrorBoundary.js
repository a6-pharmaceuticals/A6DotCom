import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './ErrorBoundary.css';

// Higher order component that will return the WrappedComponent with an error
// boundary.
function withErrorBoundary(WrappedComponent) {
  class Wrapped extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    // eslint-disable-next-line
    componentDidCatch(error, info) {
      // TODO: have this log an error to a logging service such as SumoLogic or Sentry
      console.error(error, info);
      this.setState({ hasError: true });
    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div className={s.container}>
            <h2 className={s.title}>Sorry, an error has occurred.</h2>
            <span className={s.content}>
              Please try reloading the page, or try again later.
            </span>
          </div>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  return withStyles(s)(Wrapped);
}

export default withErrorBoundary;
