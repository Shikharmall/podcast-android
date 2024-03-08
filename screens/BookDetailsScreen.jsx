// screens/BookDetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const BookDetailsScreen = ({ route }) => {
  const { bookId } = route.params;
  // Fetch book details based on bookId

  return (
    <View>
      <Text>Book Details Screen of {bookId}</Text>
      {/* Display book details here */}
    </View>
  );
};

export default BookDetailsScreen;
