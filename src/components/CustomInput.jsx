import React from 'react';
import {View, TextInput} from 'react-native';

const CustomInput = ({placeHolder, multiline, numberOfLines}) => {
  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          borderWidth: 1,
          borderRadius: 12,
          paddingHorizontal: 10,
        }}>
        <TextInput
          placeholder={placeHolder}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      </View>
    </>
  );
};

export default CustomInput;
