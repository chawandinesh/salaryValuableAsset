import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, width} from '../components/dimensions';
export default function AboutUs(props) {
  const Header = () => {
    return (
      <View
        style={{
          width,
          height: height * 0.1,
          backgroundColor: '#121',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Icon
            onPress={() => props.navigation.goBack()}
            name="ios-arrow-back-outline"
            type="ionicon"
            size={height * 0.05}
            style={{paddingLeft: 5}}
            color="#fff"
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: height * 0.04,
            }}>
            About Us
          </Text>
        </View>
        <View></View>
      </View>
    );
  };

  return (
    <ImageBackground source={require('../assets/bg4.jpg')} style={{flex: 1}}>
      <Header />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: height * 0.9,
        }}>
        <View
          style={{
            height: height * 0.5,
            width: width * 0.8,
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            sljfsljflajldsj sljfdlsjf
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
