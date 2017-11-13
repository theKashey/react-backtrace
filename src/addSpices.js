import React from 'react';
import Breadcrumb from './Breadcrumb';

/**
 * @param {Function} spiceFabric - mix some spices
 * @return {Function}
 */
const addSpices = spiceFabric => WrappedComponent => props =>
  <Breadcrumb spiceFabric={spiceFabric}><WrappedComponent {...props} /></Breadcrumb>;

export default addSpices;
