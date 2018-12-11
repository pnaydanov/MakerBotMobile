import React, { Component } from 'react';
import moment from 'moment';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { actions as sheduleActions } from 'features/shedule/redux';
import swipeDirection, { getSwipeDirection } from 'features/shedule/model/swipeDirection';

import Swiper from 'react-native-swiper';
import Timeline from 'components/Timeline';

class Shedule extends Component {
  state={
    curIndex: 0,
  }

  static propTypes = {
    setCurDate: PropTypes.func.isRequired,
    curDate: PropTypes.number.isRequired,
  }

  render() {
    const { curDate } = this.props;
    return (
      <Swiper
        showsButtons={false}
        showsPagination={false}
        onIndexChanged={this._onIndexChanged}>
        <Timeline date={curDate} />
        <Timeline date={curDate} />
        <Timeline date={curDate} />
      </Swiper>
    );
  }

  /**
   * Обработка swipe слайда
   * @param {number} index - Индекс нового слайда
   */
  @bind
  _onIndexChanged(index) {
    const { setCurDate, curDate } = this.props;
    const { curIndex } = this.state;

    const direction = getSwipeDirection(index, curIndex);
    const setDate = {
      [swipeDirection.LEFT]: () => setCurDate(moment(curDate).add(1, 'd').valueOf()),
      [swipeDirection.RIGHT]: () => setCurDate(moment(curDate).subtract(1, 'd').valueOf()),
    };

    setDate[direction]();
    this.setState({ curIndex: index });
  }
}

function mapStateToProps(state) {
  return {
    curDate: state.shedule.curDate,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    setCurDate: sheduleActions.setCurDate,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Shedule);
