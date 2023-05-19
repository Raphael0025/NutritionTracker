import React from 'react';
import { StyleSheet, SafeAreaView, Text, Image, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Dashboard = () =>{
    return (
        <SafeAreaView style={[styles.box, {backgroundColor: '#fff'}]}>
            <StatusBar style={{backgroundColor: '#fff'}}/>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello David!</Text>
                <Text style={styles.tagline}>Track, Add, and Eat Healthy Food.</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.titleHead}>Nutrition Tracker</Text>
                <Image source={require('../assets/trackergraph.png')}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titleHead:{
        color: '#202D1F',
        fontWeight: 800,
        fontSize: 18,
    },
    headerTitle:{
        fontSize: 51,
        fontWeight: 200,
        color: '#292D32',
    },
    tagline:{
        fontSize: 15,
        fontWeight: 800,
        color: '#3C5138',
    },
    body:{
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2FFF1',
        gap: 20,
    },
    header:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#F2FFF1'
    },
    box: {
        flex: 1,
        margin: 0,
    },
});
export default Dashboard;