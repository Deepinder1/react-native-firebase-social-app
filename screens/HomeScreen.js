import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';

import {
  Container,
} from '../styles/FeedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostCard from '../components/PostCard';
import React from 'react';

const Posts = [
  {
    id: '1',  
    post: 'Hey there, Welcome to the Fitzo App.',   
  },
  {
    id: '2',
    post: 'This App Takes care about your Fitness',
  },  
];


const HomeScreen = () => {
  return (
    <Container>
    <ImageBackground
    style={styles.background}
    source={require('../assets/Rectangleh.png')}
    imageStyle={{resizeMode: 'cover'}}
  />
      <FlatList 
        data={Posts}
        renderItem={({item}) => <PostCard item={item} />}
        keyExtractor={item=>item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})
