import React from 'react'
import { View, SafeAreaView, Image, Text } from 'react-native';
import CustomAccordion from '../../components/CustomAccordion';
import { ImgContainer } from '../../styledcomponents/GlobalStyles';
import { useTheme } from 'react-native-paper'

const CreateSchedule = () => {
  const theme = useTheme();
    return(
        <SafeAreaView>
          <View 
             style={{
               height:'100%',
               padding:16,
               backgroundColor:theme.colors.bgColor
              }}>
           
           <ImgContainer>
             <Image source={require('../../../assets/images/activity.png')}/>
           </ImgContainer>

           <View style={{
              marginVertical:40
           }}>
              <Text style={{
                color: theme.colors.white,
                fontSize:28,
                fontFamily: 'LilitaOne',
                fontWeight: 400,
              }}>
                Select Activity Type
              </Text>
               <Text style={{
                color: theme.colors.white,
                fontSize: 12,
                fontFamily: 'Inter-Regular',
                fontWeight: 400,
               }} >
                Lorem Epson is a dummy text to fill the sentences.
              </Text>
           </View>
           
            <CustomAccordion 
              title="General" description="" />
            <CustomAccordion title="Honour" />
          </View>
         </SafeAreaView>
    )
}

export default CreateSchedule;