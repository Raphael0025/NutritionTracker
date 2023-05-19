import * as React from 'react';
import {ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Text, View, FlatList, TextInput, Dimensions} from 'react-native';

const placeHolders = [
        {name: 'Food'},
        {name: 'Grams'},
        {name: 'Vitamin A'},
        {name: 'Vitamin B6'},
        {name: 'Vitamin B12'},
        {name: 'Vitamin D'},
        {name: 'Vitamin E'},
        {name: 'Iron'},
        {name: 'Zinc'},
        {name: 'Protein'},
        {name: 'Iodine'},
        {name: 'Calcium'},
        {name: 'Magnesium'},
        {name: 'Phosphorus'},
    ];

const InsertNutrition = () => {

    return (
        <SafeAreaView style={styles.box}>
            <View style={styles.btnGrp}>
                <TouchableOpacity activeOpacity={0.6} style={[styles.insrt, styles.btn]}><Text style={styles.btnTxt}>Insert and save item</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={[styles.edt, styles.btn]}><Text style={styles.btnTxt}>Edit and save item</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={[styles.sve, styles.btn]}><Text style={styles.btnTxt}>Save item</Text></TouchableOpacity>
            </View>
            <FlatList 
                removeClippedSubviews={false}
                contentContainerStyle={{
                marginTop: 15,
                marginRight: 25,
                marginLeft: 25,
                justifyContent: 'center',
                alignItems: 'stretch',
                paddingBottom: 15,
                gap: 15,}}
                data={placeHolders}
                renderItem={({item}) => 
                    <TextInput placeholder={item.name} style={styles.input}/> 
                }
            />
            <View style={{gap: 20, margin: 0, bottom: 60, padding: 30,  elevation: 4,}}>
                <TouchableOpacity activeOpacity={0.6} style={[ styles.btn]}><Text style={styles.btnTxt}>Add items to toal nutrients</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={[ styles.btn]}><Text style={styles.btnTxt}>Subtract amount</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input:{
        height: 50,
        borderWidth: 2,
        borderColor: '#98CD93',
        fontSize: 16,
        paddingLeft: 20,
        borderRadius: 10,
    },
    box: {
        flex: 1,
        gap: 80,
        backgroundColor: '#F2FFF1'
    },
    btnGrp:{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        columnGap: 110,
        gap: 10,
        padding: 20,
    },
    btnTxt:{
        color: '#F1FEF0',
        fontSize: 13,
        fontWeight: 500
    },
    btn: {
        backgroundColor: '#455F41',
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    insrt:{
        width: 150,
    }, 
    edt:{
        width: 150,
    }, 
    sve:{
        width: 90,
    },
});
export default InsertNutrition;