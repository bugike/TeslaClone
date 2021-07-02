import React from 'react';
import { View, FlatList, Dimensions, StyleSheet } from 'react-native';
import CarItem from './CarItem';
import items from '../data/items';

const CarList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={items}
                renderItem={({item}) => <CarItem car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
});

export default CarList;
