import React from 'react';
import {Text, View} from 'react-native';

const HistoryRow = ({index}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        backgroundColor: index % 2 === 0 ? 'transparent' : '#e8e2e2',
      }}>
      <View style={{flexGrow: 1, width: '50%'}}>
        <Text style={{color: 'gray'}}>Ujjawal dsjkfh adkjfba</Text>
      </View>
      <Text style={{color: 'gray', flexGrow: 1, textAlign: 'right'}}>
        16-10-2024
      </Text>
    </View>
  );
};

export default HistoryRow;
