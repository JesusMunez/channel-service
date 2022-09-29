// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import axios from 'axios';

import { Post } from '../components/Post/Post';
import { HeaderWithExit } from '../components/Header/HeaderWithExit';

export const MainScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [photos, setPhotos] = useState([])

  const fetchData = (url, fn) => {
    setIsLoading(true)
    axios
      .get(url)
      .then(({ data }) => {
        fn(data)
      })
      .catch((error) => {
        console.log(error);
        alert('Не удалось загрузить данные с сервера')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchData('https://jsonplaceholder.typicode.com/users', setUsers)
    fetchData('https://jsonplaceholder.typicode.com/posts', setPosts)
    fetchData('https://jsonplaceholder.typicode.com/photos', setPhotos)
  }, [])  

  newData(users, posts, photos);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent:'center'}}>
        <ActivityIndicator size='large' color='#27569C'/>
      </View>
    )
  }

  return (
    <View style={styles.container}>      
      <HeaderWithExit navigation={navigation}/>
      <ScrollView>
        <ContainerPost>
          {users.map((user, index) => (
            <Post key={user.id} name={user.name} company={user.company['name']} title={user.title} body={user.body} img={user.img}/>
          ))}
        </ContainerPost>
      </ScrollView>      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'    
  },
});

const ContainerPost = styled.View`  
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const newData = (arr1, arr2, arr3) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] && arr3[i] && arr1[i].id === arr2[i].id ) {
      arr1[i].title = arr2[i].title
      arr1[i].body = arr2[i].body
      arr1[i].img = arr3[i].thumbnailUrl
    }
  }
}