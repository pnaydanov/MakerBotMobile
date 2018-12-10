import React, { Component, Fragment } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Timeline from 'react-native-timeline-listview';

import styles from './style';

class Shedule extends Component {
  constructor() {
    super();
    this.renderEvent = this.renderEvent.bind(this);
    this.data = [
      { time: '09:00', title: 'Event 1', description: 'Event 1 Description', lineColor: 'green', circleColor: 'green' },
      { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
      { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
      { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
      { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
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
        timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
        timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
        descriptionStyle={{ color: 'gray' }}
        innerCircle="dot"
        options={{
          style: { paddingTop: 5 },
        }}
        renderDetail={this.renderEvent}
      />
    );
  }

  renderEvent(rowData, sectionID, rowID) {
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

export default Shedule;
