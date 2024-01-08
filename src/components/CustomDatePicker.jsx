import React, {useState} from 'react';
import {Pressable, View, Text, Modal} from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';

const CustomDatePicker = () => {
  const [selectDateModal, setSelectDateModal] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState();

  const handleChagneDate = () => {
    setSelectedStartDate('okokoko');
  };

  const handleOnPressSelectDate = () => {
    setSelectDateModal(true);
  };
  return (
    <>
      <View style={{width: '100%', marginBottom: 24}}>
        <View
          style={{
            backgroundColor: 'white',
            height: 52,
            borderRadius: 12,
            paddingHorizontal: 16,
            justifyContent: 'center',
          }}>
          <Pressable onPress={handleOnPressSelectDate}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
              }}>
              {selectedStartDate ? selectedStartDate : 'Select Date'}
            </Text>
          </Pressable>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={selectDateModal}
          onDismiss={() => console.log('okokoko')}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 372,
                padding: 15,
                borderRadius: 15,
                shadowRadius: 20,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowOffset: {width: 0, height: 0},
              }}>
              <View
                style={{
                  padding: 20,
                  backgroundColor: '#121212',
                  borderRadius: 8,
                }}>
                <DateTimePicker
                  value={selectedStartDate}
                  onValueChange={date => setSelectedStartDate(date)}
                  selectedItemColor="red"
                  headerButtonsPosition="right"
                  headerButtonColor="white"
                  selectedItemStyle={{
                    borderRadius: 100,
                  }}
                  todayContainerStyle={{
                    borderWidth: 1,
                    borderRadius: 100,
                  }}
                  mode="date"
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}>
                  <Pressable onPress={() => setSelectDateModal(false)}>
                    <View
                      style={{
                        height: 32,
                        width: 62,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                      }}>
                      <Text style={{fontSize: 12}}>Cancel</Text>
                    </View>
                  </Pressable>

                  <Pressable onPress={() => console.log('setDate')}>
                    <View
                      style={{
                        height: 32,
                        width: 62,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        borderWidth: 1,
                        backgroundColor: 'gray',
                      }}>
                      <Text style={{fontSize: 12}}>Save</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default CustomDatePicker;
