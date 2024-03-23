import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Contacts() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contacts</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              style={styles.userImage}
              source={{
                uri: imageUrl,
              }}
            />

            <View>
              <Text>{name}</Text>
              <Text>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
  },
});
