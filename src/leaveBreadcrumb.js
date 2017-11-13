import React from 'react';
import Breadcrumb from './Breadcrumb';

/**
 * @param {String } crumb - breadcrumb to leave
 * @return {Function}
 */
const leaveBreadcrumb = crumb => WrappedComponent => props =>
  <Breadcrumb crumb={crumb}><WrappedComponent {...props} /></Breadcrumb>;

export default leaveBreadcrumb;
