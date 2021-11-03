import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({route}: Props) => {
  const {name, id, picture} = route.params.simplePokemon;
  const color = route.params.color;
  return (
    <View>
      <Text>PokemonScreen</Text>
      <Text style={{backgroundColor: color}}>{name}</Text>
    </View>
  );
};

export default PokemonScreen;
