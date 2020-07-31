import React, { useEffect } from 'react';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import PokemonItem from './PokemonItem';
import { getPokes } from '@actions'
import { connect } from 'react-redux';

const HomeScreen = ({ getPokes, listAllPokes, error }) => {
    useEffect(() => {
        getPokes()
        console.log("data pokes result:", listAllPokes)
        console.log("data pokes error:", error)
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listAllPokes}
                keyExtractor={(item) => item.name}
                renderItem={({ item, index }) => {
                    return <PokemonItem itemModel={item}
                        id={index} />
                }}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export const mapStateToProps = state => {
    return {
        error: state.pokeApi.errorPokes,
        listAllPokes: state.pokeApi.listAllPokes
    };
};


export default connect(mapStateToProps, { getPokes })(HomeScreen);