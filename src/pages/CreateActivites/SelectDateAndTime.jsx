import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import CustomDatePicker from '../../components/CustomDatePicker';
import CustomInput from '../../components/CustomInput';

const SelectDateAndTime = () => {
  const theme = useTheme();
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View
          style={{
            height: '100%',
            padding: 16,
            backgroundColor: theme.colors.bgColor,
          }}>
          <Image source={require('../../../assets/images/activity.png')} />

          <View
            style={{
              marginVertical: 40,
            }}>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 28,
                fontFamily: 'LilitaOne',
                fontWeight: 400,
              }}>
              Select Date & Time
            </Text>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 12,
                fontFamily: 'Inter-Regular',
                fontWeight: 400,
              }}>
              Let's do the activity at the spot that works for you!
            </Text>
          </View>
          <View>
            <CustomDatePicker />
            <CustomDatePicker />
          </View>
          <View>
            <CustomInput
              placeHolder="Write a note for the group"
              multiline={true}
              numberOfLines={8}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SelectDateAndTime;
