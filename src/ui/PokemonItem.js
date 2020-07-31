import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { PokePic } from '../network/ApiConfig';


const PokemonItem = ({ itemModel, id }) => {

    return (
        <View style={Style.container}>
            <Image
                source={{ uri: PokePic(id + 1) }}
                style={Style.image}
                resizeMode="center" />
            <Text style={Style.name}>{itemModel.name}</Text>
        </View>
    )
};

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'row',
        padding: 5,
        borderBottomWidth: 2,
        borderColor: '#e0e0e0',
        backgroundColor: 'white',
    },
    image: {
        width: 80,
        height: 50,
    },
    name: {
        flex: 1,
        fontSize: 15,
        textAlignVertical: 'center',
        fontWeight: 'bold',
        color: '#222222',
        textAlign: 'left'
    },
});
export default PokemonItem;