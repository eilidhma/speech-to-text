import * as React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GenericButton from '../comps/GenericButton';
import { NavigationContainer } from '@react-navigation/native';

const Heading = styled.Text`
    font-size: 20px;
`

const Cont = styled.View`
    flex:1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`

export default function Writing({navigation}) {
    return (
        <Cont>
          <Heading>Add Writing...</Heading>
          <StatusBar style="auto" />
          <GenericButton onButtonPress={()=>{navigation.navigate('Home')}} buttonTitle="Home"/>
          <GenericButton onButtonPress={()=>{navigation.navigate('Categories')}} buttonTitle="Categories"/>
        </Cont>
    );
}