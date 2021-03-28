import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  View,
  Header,
  Body,
  Text,
} from 'native-base';
import apiCulture from './../action/endpoint';
import ItemCulture from './ItemCulture';

function Index({navigation}) {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await apiCulture.index();
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View>
      <Header>
        <Body>
          <Text style={{color: 'white', fontSize: 20}}>Culture Box</Text>
        </Body>
      </Header>
      <ScrollView>
        {data.map((item, index) => {
          return (
            <ItemCulture
              key={item._id}
              img={item.cover}
              title={item.title}
              address={item.address}
              ticket={item.ticketPrice}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  buttonPrimary: {
    height: 30,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    borderWidth: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0080ff',
  },
  cardImage: {
    height: 180,
    width: 130,
  },
});
