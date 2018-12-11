import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalendarStrip from 'react-native-calendar-strip';

import styles from './style';

class Calendar extends Component {
  static propTypes = {
    onDateSelected: PropTypes.func.isRequired,
    date: PropTypes.number.isRequired,
  }

  render() {
    const { date, onDateSelected } = this.props;
    return (
      <CalendarStrip
        style={styles.common}
        onDateSelected={onDateSelected}
        selectedDate={date}
        daySelectionAnimation={{
          type: 'border',
          duration: 200,
          borderWidth: 2,
          borderHighlightColor: '#5cab74',
        }}
      />
    );
  }
}

export default Calendar;
