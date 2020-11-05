/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  PermissionsAndroid,
} from 'react-native';

import CallLogs from 'react-native-call-log';

const Loglist = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    (async () => {
      {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
            {
              title: 'Call Log Example',
              message: 'Access your call logs',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            CallLogs.loadAll().then((c) => setListData(c));
          } else {
            console.log('Call Log permission denied');
          }
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }, []);

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View>
        <Text style={styles.textStyle}>
          Name : {item.name ? item.name : 'NA'}
          {'\n'}
          DateTime : {item.dateTime}
          {'\n'}
          Duration : {item.duration}
          {'\n'}
          PhoneNumber : {item.phoneNumber}
          {'\n'}
          RawType : {item.rawType}
          {'\n'}
          Timestamp : {item.timestamp}
          {'\n'}
          Type : {item.type}
        </Text>
      </View>
    );
  };
  const ItemViewList = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        ItemSeparatorComponent={ItemViewList}
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Loglist;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  border: {
    borderColor: '#941515',
    borderWidth: 2,
    borderRadius: 10,
    height: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
    marginVertical: 10,
  },
  Txt: {
    fontSize: 20,
    color: '#2e2929',
    fontWeight: '500',
  },
});
