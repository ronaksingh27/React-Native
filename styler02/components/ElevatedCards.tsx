import {StyleSheet, ScrollView, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Blue</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  cardElevated: {
    backgroundColor: '#CADFE2',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#FF0000',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
});

/* rfns */
