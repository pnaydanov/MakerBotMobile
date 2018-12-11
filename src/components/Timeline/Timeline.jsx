import React, { Component, Fragment } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { bind } from 'decko';

import styles from './style';

class TimelineComponent extends Component {
  constructor() {
    super();
    this.data = [
      { time: '00:00', title: 'Event 1', description: 'Event 1 Description', lineColor: '#5cab74', circleColor: '#5cab74' },
      { time: '01:00', title: 'Event 2', description: 'Event 1 Description' },
      { time: '02:00', title: 'Event 3', description: 'Event 1 Description' },
      { time: '03:00', title: 'Event 4', description: 'Event 1 Description' },
      { time: '04:00', title: 'Event 5', description: 'Event 1 Description' },
      { time: '05:00', title: 'Event 6', description: 'Event 1 Description' },
      { time: '06:00', title: 'Event 7', description: 'Event 1 Description' },
      { time: '07:00', title: 'Event 8', description: 'Event 1 Description' },
      { time: '08:00', title: 'Event 9', description: 'Event 1 Description' },
      { time: '09:00', title: 'Event 10', description: 'Event 1 Description' },
      { time: '10:00', title: 'Event 11', description: 'Event 2 Description' },
      { time: '11:00', title: 'Event 12', description: 'Event 3 Description' },
      { time: '12:00', title: 'Event 13', description: 'Event 4 Description' },
      { time: '13:00', title: 'Event 14', description: 'Event 5 Description' },
      { time: '14:00', title: 'Event 15', description: 'Event 5 Description' },
      { time: '15:00', title: 'Event 16', description: 'Event 5 Description' },
      { time: '16:00', title: 'Event 17', description: 'Event 5 Description' },
      { time: '17:00', title: 'Event 18', description: 'Event 5 Description' },
      { time: '18:00', title: 'Event 19', description: 'Event 5 Description' },
      { time: '19:00', title: 'Event 20', description: 'Event 5 Description' },
      { time: '20:00', title: 'Event 21', description: 'Event 5 Description' },
      { time: '21:00', title: 'Event 22', description: 'Event 5 Description' },
      { time: '22:00', title: 'Event 23', description: 'Event 5 Description' },
      { time: '23:00', title: 'Event 24', description: 'Event 5 Description' },
      { time: '24:00', title: 'Event 25', description: 'Event 5 Description' },
    ];
  }

  render() {
    return (
      <Timeline
        separator
        data={this.data}
        circleSize={20}
        circleColor="rgb(45,156,219)"
        lineColor="rgb(45,156,219)"
        timeContainerStyle={styles.timeContainerStyle}
        timeStyle={styles.timeStyle}
        descriptionStyle={styles.descriptionStyle}
        innerCircle="dot"
        options={{
          style: { paddingTop: 5 },
        }}
        renderDetail={this.renderEvent}
    />
    );
  }

  @bind
  _renderEvent(rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>;
    let desc = null;
    if (rowData.description) {
      desc = (
        <View style={styles.descriptionContainer}>
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <TouchableHighlight onPress={() => console.log('press')} underlayColor="gray">
          <Fragment>
            {title}
            {desc}
          </Fragment>
        </TouchableHighlight>
      </View>
    );
  }
}

export default TimelineComponent;
