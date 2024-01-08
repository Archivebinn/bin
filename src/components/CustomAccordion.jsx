import * as React from 'react';
import { List, useTheme, Text, View, Image } from 'react-native-paper';


const CustomAccordion = ({children, title, description}) => {
  const [expanded, setExpanded] = React.useState(true);
  const theme = useTheme()

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section 
      style={{
        borderWidth:1, 
        borderRadius: 20,
        padding:16,
        borderColor: theme.colors.border}}>
      <List.Accordion
        theme={{ colors: { primary: '#FFFFFF' } }}
        title={
         <Text 
          style={{
            color: theme.colors.white,
            fontSize: 18,
            fontFamily: 'Inter-Regular',
            fontWeight:600
          }}>
             {title}
          </Text> }
          description={
            <Text >
              {description}
            </Text>
          }
          left={props => <Image source={require('../../assets/images/activityIcons/star.png')} />}
        >
        {children}
      </List.Accordion>
    </List.Section>
  );
};

export default CustomAccordion;