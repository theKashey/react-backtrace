One said:

### Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.

The question - how he will find you?

[![NPM](https://nodei.co/npm/react-backtrace.png?downloads=true&stars=true)](https://nodei.co/npm/backtrace/) [![Greenkeeper badge](https://badges.greenkeeper.io/theKashey/react-backtrace.svg)](https://greenkeeper.io/)

You can use react-traceback for analytics, understanding position in the tree, all the things... 

# Usage

```javascript
import Breadcrumb from 'react-backtrace';
import {leaveBreadcrumb,withBreadcrumb,addSpices,connectBacktrace} from 'react-backtrace';

// Mark markup
const MyForm = (props) => (
  <Form>
    <Breadcrumb crumb="section1">
       .....
    </Breadcrumb>
    <Breadcrumb crumb="submit">
      <Button />
    </Breadcrumb>
  </Form>
);
 
// Mark component
const MarkedComponent = leaveBreadcrumb('hunter-mark')(MyComponent)


// Enhance component with backtrace function
class Page extends Component{
  componentDidMount() {
    this.props.backtrace('pageView');
  }
}
withBreadcrumb(Page); 


// Store some information by the way

addSpices(payload => ({youPassTheBorder: true}))(InternalComponent);


// Connect to the outer API
connectBacktrace(callback)(Application)

```


## API
 1. Breadcrumb - leaves a crumb behind
 2. (HOC)leaveBreadcrumb(crumb:string)(Component) - is a HOC for the same sake.
 3. (HOC)withBreadcrumb(Component) - provision a Component with backtrace function
 4. (HOC)addSpices(function)(Component) - allows you to modify payload by the way
 5. (HOC)connectBacktrace(function)(Component) - connects to the top-level API
 

## Composition
 `connectBacktrace` is the start, and is the end for a breadcrumb.
  
 ```js
  const NextComponent = leaveBreadcrumb(LastComponent);
  const Middleware = connectBacktrace(middlewareCallback)(NextComponent);
  
```
 