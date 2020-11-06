/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Overlay, Slider} from 'react-native-elements';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {ColorPicker} from 'react-native-color-picker';
import styles from './styles';
// import Icon  from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {setNoteAction} from '../../../../redux/diary/actions';
class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
    };
  }
  // this.props.setNewNote(payload);
  close = () => {
    console.log('CustomModal ->  this.setState({visible: false});');

    this.setState({visible: false});
    this.props.disableVisible();
  };
  handleConfirmDate = (date) => {
    const {
      nativeEvent: {timestamp},
      type,
    } = date;
    if (type === 'set') {
      this.close();
      this.props.setNewNote({date: new Date(timestamp)});
    } else {
      this.close();
    }
    // console.log('handleConfirmDate -> date', date);
  };
  handleConfirmTime = (time) => {
    const {
      nativeEvent: {timestamp},
      type,
    } = time;
    if (type === 'set') {
      this.close();
      this.props.setNewNote({time: new Date(timestamp)});
    } else {
      this.close();
    }
  };

  handleSelectColor = (color) => {
    this.close();
    this.props.setNewNote({color});
  };
  handleDelete = (id) => {};
  renderModal = (type) => {
    console.log('CustomModal -> renderModel ', type);
    switch (type) {
    // eslint-disable-next-line indent
      case 'calendar': {
      if (this.state.visible) {
        return (
          <RNDateTimePicker
            testID="dateTimePicker"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              zIndex: 1000,
            }}
            value={new Date()}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={this.handleConfirmDate}
          />
        );
      }
      return null;
    }
    case 'time': {
      if (this.state.visible) {
        return (
          <RNDateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={this.handleConfirmTime}
          />
        );
      }
      return null;
    }

    case 'palette':
      return (
        <Overlay isVisible={this.state.visible} onBackdropPress={this.close}>
          <ColorPicker
            style={styles.colorPicker}
            onColorSelected={this.handleSelectColor}
            sliderComponent={Slider}
            hideSliders
          />
        </Overlay>
      );
    case 'trash':
      if (this.props.id) {
        this.handleDelete(this.props.id);
      }
      break;
    default:
      break;
    }

    return null;
  };
  render() {
    console.log(
      'CustomModal -> render -> this.state.visible',
      this.state.visible,
    );
    return (
      <View>
        {(this.state.visible &&
          this.props.type &&
          this.renderModal(this.props.type)) || <ActivityIndicator />}
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  currentNote: state.diary.currentNote,
});
const mapDispatchToProps = (dispatch) => ({
  setNewNote: (payload) => {
    dispatch(setNoteAction(payload));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);
