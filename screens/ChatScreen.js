import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const ChatScreen = () => {
    return (
      <View style={styles.container}>
      <ImageBackground
      style={styles.background}
      source={require('../assets/Rectangleh.png')}
      imageStyle={{ resizeMode: 'cover' }}
      />
        <Text style= {styles.text}>Chat Screen</Text>
        <Button 
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  background: {
    position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
  },
  text: {
    fontSize: 20,
    color: '#85C61A'
  },
});
