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
          paddingTop: height * 0.05,
          height: height * 0.15,
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
            height: height * 0.7,
            width: width * 0.9,
            backgroundColor: 'rgba(0,0,0,0.7)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              paddingHorizontal: height * 0.02,
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: '#ebe459',
                textAlign: 'center',
              }}>
              This is simple, amazing and ads free app for functions.
            </Text>
            <Text
              style={{
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'center',
                paddingTop: height * 0.04,
              }}>
              In this app, there are various types of salary categories Full
              time, Part time, Casual, Fixed Terms.
            </Text>
            <Text
              style={{
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'center',
                paddingTop: height * 0.05,
              }}>
              Also in this app, you can manage your function details.{"\n"}
            </Text>
            <Text
              style={{
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: '#f66',
                textAlign: 'center',
                paddingTop: height * 0.01,
              }}>
              Enjoy the App
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
