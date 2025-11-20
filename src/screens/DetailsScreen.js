import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
const DetailsScreen = ({route, navigation}) => {
 const {itemId, itemName} = route.params;
 return (
 <View style={styles.container}>
 <Text style={styles.title}>Details Screen</Text>
 <Text style={styles.text}>Item ID: {itemId}</Text>
 <Text style={styles.text}>Item Name: {itemName}</Text>
 <Button title="Go Back" onPress={() => navigation.goBack()} />
 <Button
 title="Choose Random Number"
 onPress={() =>
 navigation.setParams({
 itemName: 'Random Number = '+Math.floor(Math.random() * 1000),
 })
 }
 />
 </View>

 );
};
const styles = StyleSheet.create({
 container: {
 flex: 1,
 alignItems: 'center',
 justifyContent: 'center',
 padding: 20,
 gap: 20,
 },
 title: {
 fontSize: 24,
 fontWeight: 'bold',
 marginBottom: 20,
 },
 text: {
 fontSize: 16,
 marginBottom: 10,
 },
});
export default DetailsScreen;