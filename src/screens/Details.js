import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useIsFocused} from '@react-navigation/native';
import {SalaryContext} from '../screens/context';

const {height, width} = Dimensions.get('window');

const Details = (props) => {
  const {state, setState} = React.useContext(SalaryContext);
  const {data} = props.route.params;

  const isFocused = useIsFocused();
  const getInitialData = async () => {};
  React.useEffect(() => {
    getInitialData();
  }, [props.navigation, isFocused]);

  const handleDelete = (ind) => {
    setState({...state, [data]: state[data].filter((e, idx) => idx !== ind)});
  };

  const Header = () => {
    return (
      <View
        style={{
          height: height * 0.1,
          width: width,
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
              color: 'white',
              fontSize: height * 0.04,
              fontWeight: 'bold',
            }}>
            Details
          </Text>
        </View>
        <TouchableOpacity>
          <Icon
            onPress={() => props.navigation.navigate('Form', {data: data})}
            name="ios-add-circle"
            type="ionicon"
            size={height * 0.05}
            style={{paddingLeft: 5}}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    );
  };
  const renderDetails = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Form', {data, index})}
        style={{
          height: height * 0.15,
          width: width * 0.9,
          backgroundColor: '#567085',
          marginTop: height * 0.03,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: width * 0.3,
              height: height * 0.15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: width * 0.28,
                height: height * 0.14,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {item.image ? (
                <Image
                  source={{uri: item.image}}
                  style={{height: height * 0.14, width: width * 0.28}}
                />
              ) : (
                <Icon
                  name="image-off-outline"
                  type="material-community"
                  size={height * 0.1}
                />
              )}
            </View>
          </View>
          <View
            style={{
              width: width * 0.6,
              height: height * 0.15,
              backgroundColor: '#230',
              borderWidth: 4,
              borderLeftWidth: 0,
              borderColor: '#89f',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                width: width * 0.5,
                height: height * 0.05,
                backgroundColor: '#fff',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: height * 0.03}}>
                  Name :
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: height * 0.03,
                    color: 'red',
                    marginLeft: width * 0.03,
                  }}>
                  {item.name ? item.name : '-'}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: width * 0.5,
                height: height * 0.05,
                backgroundColor: '#fff',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: height * 0.03}}>
                  Date :
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: height * 0.025,
                    color: 'red',
                    marginLeft: width * 0.03,
                  }}>
                  {item.dateOfJoining ? item.dateOfJoining : '-'}
                </Text>
              </View>
            </View>
          </View>
          {/* <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Name :
          </Text>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {item.name}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Date :
          </Text>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {item.dateOfJoining}
          </Text>
        </View>
        <View>
          <Icon
            name="ios-trash-outline"
            type="ionicon"
            color="red"
            size={height * 0.03}
            onPress={() => handleDelete(index)}
          /> */}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground
      source={require('../assets/bg5.jpg')}
      style={{height: height, width: width, backgroundColor: '#fff'}}>
      <Header />

      {Array.isArray(state[data]) && state[data].length ? (
        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          data={state[data]}
          renderItem={renderDetails}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View
          style={{
            height: height * 0.8,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#9e5823',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
              borderBottomLeftRadius: height * 0.05,
              borderTopRightRadius: height * 0.05,
              borderBottomWidth: height * 0.015,
              borderLeftWidth: height * 0.01,
              borderColor: '#fff',
              width: width * 0.8,
              height: height * 0.2,
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: '#fdf',
              }}>
              No Data Found, Please Click on + icon to add the data
            </Text>
          </View>
        </View>
      )}
    </ImageBackground>
  );
};

export default Details;
