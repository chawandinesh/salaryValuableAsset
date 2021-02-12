import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  ImageBackground,
  Alert,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Divider, AirbnbRating} from 'react-native-elements';
import {height, width} from '../components/dimensions';
export default function HomeScreen(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const handlePress = () => {
    alert('pressed');
  };

  const ButtonItem = ({text}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          switch (text) {
            case 'Job Details':
              props.navigation.navigate('CategoriesScreen');
              break;
            case 'All Details':
              props.navigation.navigate('AllDetails');
              break;
            case 'About Us':
              props.navigation.navigate('AboutScreen');
              break;
            case 'Rate Us':
              setModalVisible(true);
              break;
            default:
              break;
          }
        }}
        style={{
          width: width * 0.6,
          height: height * 0.08,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 4,
          borderRadius: 10,
          marginVertical: 10,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: height * 0.03}}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };

  const ModalItem = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{
                width: width * 0.2,
                height: width * 0.2,
                margin: height * 0.01,
              }}
              resizeMode="stretch"
              source={require('../assets/icon1.png')}
            />
            <Text
              style={[{...styles.modalText, fontSize: 20, fontWeight: 'bold'}]}>
              Enjoying Salary Asset?
            </Text>
            <Text style={{fontSize: 15}}>Tap a star to rate it on the</Text>
            <Text style={{fontSize: 15}}>App Store.</Text>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />

            <View style={{paddingVertical: 10}}>
              <AirbnbRating showRating={false} />
            </View>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />

            {/* <View style={{borderWidth:1,width: width * 0.9, borderColor:'gray'}}></View> */}
            <TouchableOpacity
              // style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text
                style={[
                  {
                    ...styles.textStyle,
                    color: '#000',
                    fontSize: height * 0.024,
                    paddingTop: height * 0.012,
                  },
                ]}>
                Not Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <ImageBackground source={require('../assets/bg4.jpg')} style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          width,
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: height * 0.15,
            borderBottomWidth: 10,
            borderLeftWidth: 5,
            borderBottomColor: '#3955a8',
            borderLeftColor: '#f33',
            width: width * 0.95,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 3,
            borderTopRightRadius: height * 0.03,
            borderBottomLeftRadius: height * 0.03,
            backgroundColor: 'rgb(135, 114, 61)',
          }}>
          <Text
            style={{
              fontSize: height * 0.05,
              fontWeight: 'bold',
              color: '#fffc45',
            }}>
            Salary
          </Text>
          <Text
            style={{
              fontSize: height * 0.04,
              fontWeight: 'bold',
              color: '#5afa4f',
            }}>
            - A Valuable Asset
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: height * 0.53,
            backgroundColor: 'rgba(217, 176, 72,0.5)',
            borderTopWidth: height * 0.03,
            borderRightWidth: height * 0.02,
            borderLeftWidth: height * 0.02,
            borderTopColor: 'skyblue',
            borderRightColor: 'darkred',
            borderLeftColor: 'darkred',
            // borderColor:'black',
            width: width * 0.85,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: height * 0.5,
              backgroundColor: 'rgba(0,0,0,0.5)',
              width: width * 0.8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ButtonItem text="Job Details" even={true} />
            <ButtonItem text="All Details" even={false} />
            <ButtonItem text="About Us" />
            <ButtonItem text="Rate Us" />
          </View>
        </View>
      </View>
      <ModalItem />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // rest of the styles
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    // change the color property for better output
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
