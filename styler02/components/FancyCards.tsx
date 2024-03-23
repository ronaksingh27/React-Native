import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://cdn.mos.cms.futurecdn.net/k6okX2VVUg4qWoyxuNLsf7-1200-80.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={[styles.cardTitle]}> Northern Lights </Text>
          <Text style={styles.cardLabel}>
            Best times to see the Northern Lights
          </Text>
          <Text style={styles.cardDescription}>
            Northern Lights are most visible from the end of August to April in
            northern Finland. Auroras, caused by solar winds, occur year-round
            but the nights need to be dark enough for us to be able to catch a
            glimpse of this phenomenal light show.
          </Text>
          <Text style={styles.cardFooter}>25 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 7,
  },
  card: {
    width: 'auto',
    height: 360,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFF',
    color: '#000',
    elevation: 3,
  },
  cardImage: {
    height: 180,
    marginBottom: 7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  cardBody: {
    color: '#000',
    paddingHorizontal: 7,
    flex: 1,
    flexGrow: 1,
  },
  cardTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardLabel: {
    color: '#000',
    fontSize : 17,
    marginBottom : 10
  },
  cardDescription: {
    color: '#000',
    fontSize : 12,
    marginBottom : 10
  },
  cardFooter: {
    color: '#000',
    fontSize : 12,
    alignSelf : 'flex-start',

  },
});
