import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Components
import Navbar from '../../components/Navbar';

// Types
import { MainStackParamList } from '../../types/navigationParams';

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  return (
    <View style={styles.wrapper}>
      <Navbar />
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});