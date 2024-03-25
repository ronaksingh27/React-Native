import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import React from 'react';
import Snackbar from 'react-native-snackbar';
import {StatusBar, TextInput} from 'react-native';
import {currencyByRupee} from './constants';
import CurrencyButton from './components/CurrencyButton';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'NOt a valid number to convert',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      });
    }
  };

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 14,
            marginBottom: 25,
            marginTop: 25,
          }}>
          <View
            style={{
              height: 50,
              width: 200,
              borderRadius: 10,
              borderWidth: 5,
              borderColor: '#fff',
            }}>
            {resultValue !== '' ? (
              <Text
                style={{color: '#7FFFD4', fontSize: 24, textAlign: 'center'}}>
                {resultValue}
              </Text>
            ) : (
              <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
                Output Here
              </Text>
            )}
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.inputContainer}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 24}}>
              ₹
            </Text>
            <TextInput
              style={styles.inputText}
              value={inputValue}
              keyboardType="number-pad"
              placeholder="Enter amount here"
              placeholderTextColor={'#fff'}
              onChangeText={setInputValue}
              textAlign="center"
            />
          </View>
        </View>
        <View style={styles.footer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => {
                  buttonPressed(item);
                }}>
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
    justifyContent: 'center',
  },
  inputText: {
    height: 50,
    width: 200,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 10, // Add margin to separate the Rupee sign and input
  },
  inputContainer: {
    flexDirection: 'row', // Change to row to align items horizontally
    alignItems: 'center', // Align items vertically in the center
    paddingHorizontal: 10, // Add padding for spacing
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
  footer: {
    flex: 3,
  },
});
