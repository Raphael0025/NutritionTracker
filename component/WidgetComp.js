import React from 'react';
import { StyleSheet, Text, Image, View, TextInput} from 'react-native';
import { CircularProgress } from 'react-native-circular-progress-indicator';

const WidgetComp = () =>{
    return (
        <View style={styles.body}>
            <CircularProgress value={58} 
                title={"Viramin A"}
            />
            <View>
                <Text>Max: </Text>
                <Text>100 µg</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        width: 135,
        height: 150,
        backgroundColor: '#D4E4D3',
        borderRadius: 10,
    },
});
export default WidgetComp;