import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [randomBackgroundColor, setrandomBackgroundColor] = useState('#fff');
  const [randomOppBackgroundColor, setrandomOppBackgroundColor] =
    useState('#fff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';

    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    setrandomBackgroundColor(color);
  };

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={randomBackgroundColor}
      />
      <View
        style={[styles.appContainer, {backgroundColor: randomBackgroundColor}]}>
        <TouchableOpacity
          onPress={() => {
            generateColor();
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A79DF',
    height: 45,
    width: 100,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
