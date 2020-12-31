import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, {useContext} from 'react';

import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';

const ProfileScreen = () => {
    const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
    <ImageBackground
    style={styles.background}
    source={require('../assets/Rectangleh.png')}
    imageStyle={{ resizeMode: 'cover' }}
    /> 
      <Text style={styles.text}>Welcome {user.uid}</Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  }
});
