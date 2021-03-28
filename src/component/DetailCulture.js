import React, { useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import apiCulture from './../action/endpoint';
import {dataUrl} from './../action/config';
import {
  Container,
} from 'native-base';

function DetailCulture(props) {
  const title = props.route.params.title;
  const [coverDestination, setCoverDestination] = useState('');
  const [content, setContent] = useState('');

  const loadData = async () => {
    const Detail = await apiCulture.detailCulture(title);
    setCoverDestination(Detail.data.data[0].cover);
    setContent(Detail.data.data[0].content);

    console.log(Detail.data.data[0]);
  };

  const handleBack = () => {
    props.navigation.navigate('index');
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Image
        style={styles.coverDestination}
        source={{uri: dataUrl + coverDestination}}
      />
      <ScrollView>
        <View style={styles.detail}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </ScrollView>
    </Container>
  );
}

export default DetailCulture;

const styles = StyleSheet.create({
  detail: {
    padding: 15,
    margin: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 5,
  },
  coverDestination: {
    aspectRatio: 1.5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    color: '#212529',
    marginTop: 5,
    lineHeight: 30,
  },
});
