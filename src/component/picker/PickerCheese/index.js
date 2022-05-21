import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { StyleSheet } from 'react-native';

export default function PickerCheese(props) {

  const [sauceType, setSauceType] = useState([]);

  return (
    <View>
      <Picker
        style={{ width: 170, height: 30, color: '#ff0000' }}                   
        selectedValue={sauceType}
        onValueChange={(itemSelect, indexItem) => {
          setSauceType(itemSelect);                                  
        }}        
      >
        <Picker.Item key={0} label={"Barbecue"} value={"Barbecue"} />
        <Picker.Item key={1} label={"Maionese"} value={"Maionese"} />
        
      </Picker>
    </View>
  );
}
