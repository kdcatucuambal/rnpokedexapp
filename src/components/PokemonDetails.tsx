import React from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View style={{...styles.conatainer, marginTop: 400}}>
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>

        <Text style={styles.title}>Weight</Text>
        <Text style={styles.regularText}>{pokemon.weight} kg</Text>
      </View>

      <View style={{...styles.conatainer}}>
        <Text style={styles.title}>Sprits</Text>
      </View>
      <ScrollView horizontal={true}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>
      <View style={{...styles.conatainer}}>
        <Text style={styles.title}>Main Skills</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={{...styles.conatainer}}>
        <Text style={styles.title}>Moves</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={{...styles.conatainer}}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {pokemon.stats.map(({stat, base_stat}, index) => (
            <View style={{flexDirection: 'row'}} key={stat.name + index}>
              <Text
                style={{...styles.regularText, marginRight: 10, width: '70%'}}>
                {stat.name.toLocaleUpperCase()}
              </Text>
              <Text style={{...styles.regularText, fontWeight: 'bold'}}>
                {base_stat}
              </Text>
            </View>
          ))}
        </View>
        <View style={{marginBottom: 25, alignItems: 'center'}}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
    color: 'black',
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});

export default PokemonDetails;
