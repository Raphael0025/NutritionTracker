import React from 'react';
import {ImageBackground, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, FlatList, Text, Image, View, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Widget} from '../component/WidgetComp';

const Dashboard = ({navigation}) =>{
    return (
        <SafeAreaView style={[styles.box, {backgroundColor: '#fff'}]}>
            <StatusBar style={{backgroundColor: '#fff'}}/>
            <ImageBackground style={styles.img} source={require('../assets/img_bg.png')} />
            <View style={styles.header}>
                <Text>Hello David!</Text>
                <Text>Track, Add, and Eat Healthy Food.</Text>
            </View>
            <View style={styles.body}>
                <Widget />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body:{
        width: '100%',
        height: '70%',
        backgroundColor: 'red',
    },
    header:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30%',
        backgroundColor: 'cyan'
    },
    box: {
        flex: 1,
        margin: 0,
    },
    img:{
        opacity: 0.1, 
        transform: [{ rotate: '-0deg' }]
    },
    dsg:{
        position: 'absolute', 
        justifyContent: 'center', 
        alignItems: 'center',
        left: 0, 
        right: 0, 
        
    },
    title:{
        top: 220, 
        bottom: 500, 
    },
    btnCon:{
        top: 600, 
        bottom: 50, 
    },
    titleStyle:{
        color: "#455F41", 
        width: 320, 
        textAlign: 'left', 
        fontSize: 50, 
        fontWeight: 700
    },
    btn: {
        borderRadius: 15, 
        backgroundColor: "#455F41", 
        width: 280, 
        height: 60, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    btnStyle:{
        width: 320, 
        textAlign: 'center',
        fontSize: 20, 
        color: '#fff', 
        fontWeight: 600
    }
});
export default Dashboard;