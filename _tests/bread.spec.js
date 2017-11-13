import React, {Component} from 'react';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import {mount} from 'enzyme';
import Breadcrumb, {withBreadcrumb, addSpices} from '../src/index';
import {BreadcrumbStart} from '../src/connect';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('react-breadcrums', () => {

  class OnMount extends Component {
    componentDidMount() {
      this.props.backtrace('hit', {test: 1})
    }

    render() {
      return <div>*</div>
    }
  }

  const CallOnMount = withBreadcrumb(OnMount);

  it('Integration test', () => {
    const backtrace = sinon.stub();
    mount(
      <BreadcrumbStart backtrace={backtrace}>
        <Breadcrumb crumb="one">
          <Breadcrumb crumb="two">
            <Breadcrumb crumb="three">
              <Breadcrumb crumb="four">
                <CallOnMount/>
              </Breadcrumb>
            </Breadcrumb>
          </Breadcrumb>
        </Breadcrumb>
      </BreadcrumbStart>
    );

    expect(backtrace).to.be.calledWithMatch(['one', 'two', 'three', 'four', 'hit'], {test: 1})
  });

  it('Test add spice', () => {
    const backtrace = sinon.stub();
    const CallWithSpice = addSpices((props) => ({
      spice: true,
      num: props.test + 1
    }))(CallOnMount);
    mount(
      <BreadcrumbStart backtrace={backtrace}>
        <Breadcrumb crumb="one">
          <Breadcrumb crumb="">
            <Breadcrumb crumb="two">
              <CallWithSpice/>
            </Breadcrumb>
          </Breadcrumb>
        </Breadcrumb>
      </BreadcrumbStart>
    );

    expect(backtrace).to.be.calledWithMatch(['one', 'two', 'hit'], {test: 1, spice: true})
  });

});
