import React from 'react';
import BREAD_CONTEXT, { CONTEXT_NAME} from './context';

/**
 * Provision WrappedComponent with backtrace and breadcrubms.
 * @param {ReactComponent} WrappedComponent
 * @params {ReactComponent}
 */
const withBreadcrumbs = (WrappedComponent) => {
  const WithBreadcrumbs = (props, context) => {
    const { backtrace, breadcrumbs } = context[CONTEXT_NAME];
    return <WrappedComponent {...props} backtrace={backtrace} breadcrumbs={breadcrumbs}/>;
  };

  WithBreadcrumbs.contextTypes = {
    ...BREAD_CONTEXT,
  };

  return WithBreadcrumbs;
};


export default withBreadcrumbs;
