import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BREAD_CONTEXT, { CONTEXT_NAME } from './context';

export class BreadcrumbStart extends Component {
  static childContextTypes = {
    ...BREAD_CONTEXT,
  };

  static propTypes = {
    backtrace: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  };

  getChildContext() {
    return {
      [CONTEXT_NAME]: {
        breadcrumbs: [],
        backtrace: this.props.backtrace,
      },
    };
  }

  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}

const connect = (callback) => (WrappedComponent) => (props) =>
    <BreadcrumbStart backtrace={callback}><WrappedComponent {...props} /></BreadcrumbStart>;

export default connect;
