import React, { Component } from 'react';
import { Item, Input, Icon } from 'native-base';

class InputIcon extends Component {
  state={
    text: '',
  }

  render() {
    const { text } = this.state;
    return (
      <Item>
        <Icon active name="home" />
        <Input
          ref={r => { this.input = r; }}
          placeholder="Icon Textbox"
          onChangeText={t => this.setState({ text: t })}
          value={text}
        />
      </Item>
    );
  }
}

export default InputIcon;