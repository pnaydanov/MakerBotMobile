import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { actions as scheduleActions } from 'features/schedule/redux';
import swipeDirection, { getSwipeDirection } from 'features/schedule/model/swipeDirection';

import Swiper from 'react-native-swiper';
import Timeline from 'components/Timeline';
import Calendar from 'components/Calendar';

class Schedule extends Component {
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
      <Fragment>
        <Calendar
          onDateSelected={this._onCalendarDateSelected}
          date={curDate}
        />
        <Swiper
          ref={r => { this.swiper = r; }}
          showsButtons={false}
          showsPagination={false}
          onIndexChanged={this._onIndexChanged}>
          <Timeline />
          <Timeline />
          <Timeline />
        </Swiper>
      </Fragment>
    );
  }

  /** Обрабатывает выделение даты компонента Calendar
   * @param {date} date - дата
   */
  @bind
  _onCalendarDateSelected(date) {
    const { setCurDate } = this.props;
    setCurDate(moment(date).valueOf());
    this.swiper.scrollBy(0);
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
    curDate: state.schedule.curDate,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    setCurDate: scheduleActions.setCurDate,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
