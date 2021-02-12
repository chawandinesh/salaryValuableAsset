import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import {useIsFocused} from '@react-navigation/native';
import {SalaryContext} from '../screens/context';

const {height, width} = Dimensions.get('window');

const AllDetails = (props) => {
  const {state, setState} = React.useContext(SalaryContext);
  const allData = Object.values(state);
  console.log(allData.flat(), 'allData');

  const isFocused = useIsFocused();
  const getInitialData = async () => {};
  React.useEffect(() => {
    getInitialData();
  }, [props.navigation, isFocused]);

  const Header = () => {
    return (
      <View
        style={{
          height: height * 0.1,
          width: width,
          backgroundColor: 'blue',
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
              fontSize: height * 0.034,
              fontWeight: 'bold',
            }}>
            All Details
          </Text>
        </View>
        <View></View>
      </View>
    );
  };
  const renderDetails = ({item, index}) => {
    return (
      <View
        style={{
          height: height * 0.15,
          width: width * 0.9,
          backgroundColor: 'gray',
          marginTop: height * 0.03,
          justifyContent: 'center',
          alignItems: 'center',
          // flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
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
      </View>
    );
  };
  const arraydata = Object.values(state).flat();
  return (
    <View style={{height: height, width: width, backgroundColor: '#fff'}}>
      <Header />

      {Array.isArray(arraydata) && arraydata.length ? (
        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          data={arraydata}
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
          <View></View>
          <Text
            style={{
              fontSize: height * 0.04,
              fontWeight: 'bold',
              color: '#fdf',
            }}>
            No Data
          </Text>
        </View>
      )}
    </View>
  );
};

export default AllDetails;
