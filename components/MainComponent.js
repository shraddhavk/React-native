import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import {Text, View, Platform, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator , DrawerItems, SafeAreaView , ScrollView } from 'react-navigation';
import { Icon } from 'react-native-elements';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name='menu' size={24}
                color='white'
                onPress={() => navigation.toggleDrawer()}
                />
        }) 
    },
    Dishdetail: { screen: Dishdetail}

},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }

});

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff" ,
      headerLeft: <Icon name='menu' size={24}
      color='white'
      onPress={() => navigation.toggleDrawer()}
      /> 
    })
});

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff"  ,
      headerLeft: <Icon name='menu' size={24}
      color='white'
      onPress={() => navigation.toggleDrawer()}
      />
    })
});

const AboutNavigator = createStackNavigator({
    About: { screen: About }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff"  ,
      headerLeft: <Icon name='menu' size={24}
      color='white'
      onPress={() => navigation.toggleDrawer()}
      />
    })
});

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{flex:1}}>
          <Image source={require('./images/logo.png')} style={styles.drawerImage} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
          </View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
  

const MainNavigator = createDrawerNavigator({
    Home: 
      { screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='home'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
          
        }
      },
    Menu: 
      { screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu',
          drawerLabel: 'Menu',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='list'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
        }, 
      },
      Contact: 
      { screen: ContactNavigator,
        navigationOptions: {
          title: 'Contact',
          drawerLabel: 'Contact',
          title: 'Contact Us',
            drawerLabel: 'Contact Us',
            drawerIcon: ({ tintColor, focused }) => (
              <Icon
                name='address-card'
                type='font-awesome'            
                size={22}
                color={tintColor}
              />
            ),
        }, 
      },
      About: 
      { screen: AboutNavigator,
        navigationOptions: {
          title: 'About',
          drawerLabel: 'About',
          drawerLabel: 'About Us',
            drawerIcon: ({ tintColor, focused }) => (
              <Icon
                name='info-circle'
                type='font-awesome'            
                size={24}
                color={tintColor}
              />
            ),
        } 
      }
}, 
{
  drawerBackgroundColor: '#D1C4E9',
  contentComponent: CustomDrawerContentComponent
});

class Main extends Component {
 
  render() {
    return (
        <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            <MainNavigator />
        </View>

import { DISHES } from '../shared/dishes';
import {View,Text, Platfrom } from 'react-native';
import Dishdetail from './DishdetailComponent';
import { createStackNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator({
        Menu: { screen: Menu },
        Dishdetail: { screen: Dishdetail }
    },
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);

class Main extends Component {


render() {

    return (
      <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
           <MenuNavigator />
       </View>


    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
  });

export default Main;
