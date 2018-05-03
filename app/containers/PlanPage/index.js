/**
 *
 * PlanPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPlanPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class PlanPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        PlanPage
      </div>
    );
  }
}

PlanPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  planPage: makeSelectPlanPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'planPage', reducer });
const withSaga = injectSaga({ key: 'planPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PlanPage);
