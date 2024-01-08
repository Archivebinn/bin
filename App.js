import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { StatusBar } from 'react-native'
import StartScreen from './src/pages/StartScreen'
import { NavigationContainer } from '@react-navigation/native'


const theme = {
   colors: {
     white: '#FFFFFF',
     bgColor: "#121212",
     border: '#EDEDED'
   }
}

const App = () => {
    return (
      <PaperProvider theme={theme}>
         <StatusBar backgroundColor={theme.colors.bgColor} barStyle={theme.colors.white} />
        <NavigationContainer>
          <StartScreen/>
        </NavigationContainer>
      </PaperProvider>
    )
}

export default App