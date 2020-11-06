import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {setNoteAction,clearNoteAction, saveNoteAction} from '../../redux/diary/actions';

import {Card} from 'react-native-elements';
import BottomTab from './container/BottomTab';
import styles from './styles';
import {connect} from 'react-redux';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleError:  null,
      contentError: null
    }
  }
  submitForm = () => {
    const data = this.props.currentNote;
    const {title} = data
    if (!title) {
      this.setState({titleError: "Title is not null dude"})
    } else {
      this.props.saveNote()
      const {navigation} = this.props;
      navigation.navigate({name : "HOME_SCREEN", params: {
        key: "RETRIEVE_FIREBASE"
      }})
      this.props.clearNote()
    }
  };
  onChangeTitle = (text) => {
    this.props.setNewNote({title: text});
  };
  onChangeText = (text) => {
    this.props.setNewNote({content: text});
  };
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.cardStyle}>
          <Card.Title>Create new note dude</Card.Title>
          <Input
            placeholder="Title"
            onChangeText={(text) => this.onChangeTitle(text)}
            inputContainerStyle={styles.inputStyle}
            errorMessage={this.state.titleError}
          />
          <Input
            placeholder="Text"
            multiline
            onChangeText={(text) => this.onChangeText(text)}
            inputContainerStyle={styles.inputStyle}
            errorMessage={this.state.contentError}
          />
        </Card>
        <Button
          onPress={this.submitForm}
          containerStyle={styles.floatButton}
          icon={
            <Icon
              name="check"
              size={30}
              color="white"
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            />
          }
          type="solid"
        />
        <BottomTab />
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
  clearNote: () => {
    dispatch(clearNoteAction());
  },
  saveNote: () => {
    dispatch(saveNoteAction())
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(NewNote);
