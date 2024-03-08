// screens/BooksListScreen.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const BooksListScreen = ({navigation}) => {
  const books = [
    {id: 1, title: 'Book 1', author: 'Author 1', description: 'Description 1'},
    {id: 2, title: 'Book 2', author: 'Author 2', description: 'Description 2'},
    {id: 3, title: 'Book 3', author: 'Author 3', description: 'Description 3'},
    // Add more books as needed
  ];

  const handleBookPress = bookId => {
    console.log(bookId);
    navigation.navigate('BookDetails', {bookId});
  };

  return (
    <View>
         <TouchableOpacity
          style={{padding: 20, backgroundColor: 'blue', margin: 1}}
          //key={book.id}
          onPress={() => handleBookPress(45)}>
          <Text>{'Hello Top'}</Text>
        </TouchableOpacity>

      {books.map(book => (
        <TouchableOpacity
          style={{padding: 20, backgroundColor: 'blue', margin: 1}}
          key={book.id}
          onPress={() => handleBookPress(book.id)}>
          <Text>{book.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BooksListScreen;
