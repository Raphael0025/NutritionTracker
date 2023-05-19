import React from 'react';
import { StyleSheet, SafeAreaView, Text, Image, View} from 'react-native';

const Profile = () => { 
    return (
        <SafeAreaView style={styles.box}>
            <Image style={styles.img} source={require('../assets/graph.png')} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        padding: 50,
        backgroundColor: '#F2FFF1',
        alignItems: 'center',        
    },
});
export default Profile;