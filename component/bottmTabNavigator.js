import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from "../screens/searchScreen";
import TransactionScreen from "../screens/transactionScreen";


const Tab = createBottomTabNavigator()

export default class BottomTabNaviagtor extends Component {
 render(){
    return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Transaction') {
              iconName = "book"
            } else if (route.name === 'Search') {
              iconName = "search" 
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor:"#ffffff",
          inactiveTintCOlor:"#000000",
          style:{
            height:130,
            borderTopWidth:0,
            backgroundColor:"#5653d4",
          },
          labelStyle:{
            fontSize:20,
            fontFamily:'Rajdhani_600SemiBold'
          },
          labelPosition:"beside-icon",
          tabBarStyle:{
            marginTop:25,
            marginLeft:10,
            marginRight:10,
            borderRadius:30,
            borderWidth:2,
            alignItems:"center",
            justifyContent:'center',
            backgroundColor:"#5653d4",
          }
        }}
        >
        <Tab.Screen name="Transaction" component={TransactionScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
}


