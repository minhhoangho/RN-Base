import React, {Component} from 'react';
import {View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomModal from '../Modal';
import styles from './styles';

const tabs = [
  {
    icon: 'calendar-outline',
    type: 'calendar',
  },
  {
    icon: 'md-time-outline',
    type: 'time',
  },
  {
    icon: 'color-palette-outline',
    type: 'palette',
  },
  {
    icon: 'md-trash-outline',
    type: 'trash',
  },
];

export default class BottomTab extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: -1,
      modalVisible: false,
    };
  }

  disableVisible = () => {
    this.setState({modalVisible: false});
  };

  renderItem = ({icon}) => (
    <Icon name={icon} size={30} color="#606060" style={styles.iconBadget} />
  );
  updateIndex = (selectedIndex) => {
    this.setState({selectedIndex, modalVisible: true});
  };
  render() {
    const buttons = tabs.map((e) => this.renderItem({icon: e.icon}));
    const {selectedIndex} = this.state;
    return (
      <View style={styles.bottomTab}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          selectedTextStyle={{
            color: '#795445',
          }}
          selectedButtonStyle={{
            backgroundColor: '#FFEE',
          }}
          buttons={buttons}
          containerStyle={styles.bottomTab}
        />
        {this.state.modalVisible && (
          <CustomModal
            visible={true}
            disableVisible={this.disableVisible}
            type={
              this.state.selectedIndex !== -1 &&
              tabs[this.state.selectedIndex].type
            }
          />
        )}
      </View>
    );
  }
}
