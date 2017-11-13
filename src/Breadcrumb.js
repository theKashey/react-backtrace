import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BREAD_CONTEXT, { CONTEXT_NAME } from './context';

class Breadcrumb extends Component {
  static childContextTypes = {
    ...BREAD_CONTEXT,
  };

  static contextTypes = {
    ...BREAD_CONTEXT,
  };

  static propTypes = {
    crumb: PropTypes.string,
    children: PropTypes.element.isRequired,
    spiceFabric: PropTypes.func,
  };

  static defaultProps = {
    crumb: undefined,
    spiceFabric: undefined,
  };

  getChildContext() {
    return {
      [CONTEXT_NAME]: {
        breadcrumbs: this.getBreadcrumbs(),
        backtrace: this.backtrace,
      },
    };
  }

  getBreadcrumbs() {
    return this.props.crumb
      ? [...this.context[CONTEXT_NAME].breadcrumbs, this.props.crumb]
      : this.context[CONTEXT_NAME].breadcrumbs;
  }

  backtrace = (name, payload) => {
    const { crumb } = this.props;
    this.context[CONTEXT_NAME].backtrace([
      ...(crumb ? [crumb] : []),
      ...(typeof name === 'string' ? [name] : name),
    ], {
      ...payload,
      ...(this.props.spiceFabric ? this.props.spiceFabric(payload) : {}),
    });
  };

  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}

export default Breadcrumb;
