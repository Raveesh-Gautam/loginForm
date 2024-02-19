import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Background from './Background'
import Butt from './Butt'
import { darkGreen, green } from './Constant'
import Register from './Register'
import Login from './Login'
const Home = (props) => {
    return (
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
                <Text style={{ color: "white", fontSize: 64 }}>Visit my Blog</Text>
                <Text style={{ color: "white", fontSize: 64 }}>
                    Started
                </Text>
                <Butt bgColor={green} textColor='white' btnLabel="Login" Press={() =>
                    props.navigation.navigate("Login")
                } />
                <Butt bgColor='white' textColor={darkGreen} btnLabel="Register" Press={() =>
                    props.navigation.navigate("Register")} />
            </View>
        </Background >
    )
}

export default Home