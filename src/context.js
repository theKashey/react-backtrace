import PropTypes from 'prop-types';

export const CONTEXT_NAME = '@@react-backtrace';

export const ContextType = PropTypes.shape({
  breadcrumbs: PropTypes.arrayOf(PropTypes.string),
  backtrace: PropTypes.func,
});

const BREAD_CONTEXT = {
  [CONTEXT_NAME]: ContextType,
};

export default BREAD_CONTEXT;
