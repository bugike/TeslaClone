import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import StyledButton from './StyledButton';

const CarItem = (props) => {

    const {name, tagline, taglineCTA, image, buttonContentOne, buttonContentTwo} = props.car;
    return (
        <View style={styles.carContainer}>
            <ImageBackground 
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <StyledButton 
                    type='primary' 
                    content={buttonContentOne}
                    onPress={() => {
                        console.warn('Button was pressed');
                    }}    
                />

                <StyledButton 
                    type='secondary' 
                    content={buttonContentTwo}
                    onPress={() => {
                       console.warn('Button was pressed');
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: '600',
    },
    subTitle: {
        fontSize: 16,
        color: '#5c5e62'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        position: 'absolute',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },
    subTitleCTA: {
        textDecorationLine: 'underline',
    },
});

export default CarItem;
