import moment from 'moment';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import IconGoogle from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {getListNoteAction} from '../../redux/diary/actions';
import {notesCollection} from '../../services/firebase/Firebase';

import styles from './styles';
class Home extends Component {
  constructor(props) {
    super(props);
    this.props.retrieveNote();
   
  }

  createOne = () => {
    const {navigation} = this.props;
    navigation.navigate({
      name: 'NEW_NOTE',
      params: 'Hello ',
    });
  };
  setHeaderRight = () => {
    return (
      <Button
        onPress={() => {
          this.props.navigation.navigate({name: 'LOGIN'})
        }}
        type="clear"
        style={{
          marginRight: 20,
        }}
        icon={<IconGoogle name="google" size={20} color="#A11" />}
      />
    );
  };
  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: this.setHeaderRight,
    });

    notesCollection.orderBy('time', 'desc').onSnapshot((querySnapshot) => {
      this.props.retrieveNote();
    });
  }

  // E1BEE8
  renderItem = ({item}) => {
    return (
      <View
        style={{
          marginVertical: 8,
          marginHorizontal: 16,
        }}>
        <Text>{moment(new Date(item.date)).fromNow() || ''}</Text>
        <View
          style={{
            backgroundColor: item.color || '#E1BEE8',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 10,
            flex: 1,
            flexDirection: 'row',
          }}>
          <View>
            <Text style={styles.time}>
              {moment(new Date(item.time)).format('HH:mm A') || ''}
            </Text>
          </View>
          <View>
            <View>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View>
              <Text style={styles.title}>{item.content}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    if (this.props.route && this.props.route.params) {
      if (this.props.route.params.key === 'RETRIEVE_FIREBASE') {
        // console.log('GET FIREBASE');
        // this.props.retrieveNote();
      }
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.flatListStyle}
          data={this.props.listNote.map((e, idx) => ({idx, ...e}))}
          renderItem={this.renderItem}
          keyExtractor={(item) => String(item.idx)}
        />
        <Button
          onPress={this.createOne}
          containerStyle={styles.floatButton}
          icon={
            <Icon
              name="edit-2"
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
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listNote: state.diary.listNote,
  };
};
const mapDispatchToProps = (dispatch) => ({
  retrieveNote: () => {
    dispatch(getListNoteAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
