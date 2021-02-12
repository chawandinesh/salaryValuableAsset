import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {width, height} from '../components/dimensions';
import {SalaryContext} from './context';
export default function Categories(props) {
  const {state, setState, fathima} = React.useContext(SalaryContext);
  console.log(state, fathima);
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
            Categories
          </Text>
        </View>
        <View></View>
      </View>
    );
  };
  const renderContent = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Details', {data: item})}
        style={{
          width: width * 0.9,
          height: height * 0.17,
          backgroundColor: 'darkred',
          borderColor: '#fff',
          borderTopRightRadius: height * 0.05,
          borderBottomLeftRadius: height * 0.05,
          borderWidth: height * 0.02,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: height * 0.035,
        }}>
        <View
          style={{
            backgroundColor: '#61aad4',
            borderWidth: 3,
            borderTopRightRadius: height * 0.02,
            borderBottomLeftRadius: height * 0.02,
            width: width * 0.7,
            borderLeftWidth: height * 0.009,
            borderRightWidth: height * 0.009,
            borderBottomWidth: height * 0.008,
            height: height * 0.1,
            alignItems: 'center',
            justifyContent: 'center',  
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: height * 0.04,
              fontWeight: 'bold',
            }}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
      // <TouchableOpacity
      //   onPress={() => props.navigation.navigate('Details', {data: item})}
      //   style={{
      //     width: width * 0.9,
      //     height: height * 0.17,
      //     borderWidth: 2,
      //     borderRadius: height * 0.03,
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     marginTop: height * 0.035,
      //     // backgroundColor: '#425df5',
      //   }}>
      //   <Text
      //     style={{color: '#fff', fontSize: height * 0.04, fontWeight: 'bold'}}>
      //     {item}
      //   </Text>
      // </TouchableOpacity>
    );
  };

  const Content = () => {
    return (
      <FlatList
        contentContainerStyle={{alignItems: 'center'}}
        data={['Full Time', 'Part Time', 'Casual', 'Fixed Terms']}
        renderItem={renderContent}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };
  return (
    <ImageBackground source={require('../assets/bg5.jpg')} style={{flex: 1}}>
      <Header />
      <Content />
    </ImageBackground>
  );
}
