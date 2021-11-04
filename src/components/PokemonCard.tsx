import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';
import {getImageColors} from '../helpers/getImageColors';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import {RootStackParams} from '../navigator/Tab1';

interface Props {
  pokemon: SimplePokemon;
}

const windowWith = Dimensions.get('window').width;

const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const {navigate} = useNavigation<NavigationProp<RootStackParams>>();
  const getColor = async () => {
    const [color] = await getImageColors(pokemon.picture);
    if (!isMounted.current) return;
    setBgColor(color);
  };

  useEffect(() => {
    getColor();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={!isMounted}
      onPress={() => {
        navigate('PokemonScreen', {simplePokemon: pokemon, color: bgColor});
      }}>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWith * 0.4,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text style={styles.name}>
            {pokemon.name} {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={{...styles.pokebolaContainer}}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>

        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    width: 160,
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // elevation: 0,
    // overflow: "hidden"
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -25,
    bottom: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -5,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5,
  },
});

export default PokemonCard;
