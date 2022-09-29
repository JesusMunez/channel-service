import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import styled from 'styled-components/native';
import axios from 'axios';

import { Header } from '../components/Header/Header';

const screenWidth = Dimensions.get('window').width;
var autorizationWidth = 290,
    autorizationContainer = 'flex-start',
    titleMt = 8,    
    inputWidth = 212,
    inputPadding = 35,
    submitMt = 18

if (screenWidth > 700) {
    autorizationWidth = 480
    autorizationContainer = 'center'
    titleMt = 30
    inputPadding = 20
    inputWidth = 295
    submitMt = 30
}

export const AutorizationScreen = ({ navigation }) => {    
    const [users, setUsers] = useState()    

    const {control, handleSubmit, formState: { errors }, reset} = useForm();    

    useEffect(() => {
        axios
            .get('https://63109dc536e6a2a04ef2ffee.mockapi.io/login')
            .then(({ data }) => {                
                setUsers(data)                
            })
            .catch((err) => {
                console.log(err)
                alert('Error')
            }) 
    }, [])

    const onSubmitPressed = (data) => {                          
        for (let i = 0; i < users.length; i++) {
            if (users[i].login == data.login) {
                if (users[i].password == data.password) {
                    navigation.navigate('Main')
                    reset()
                } else {                                    
                    alert('Wrong password')
                }
            } else {                                
                alert('Wrong login')
            }
        } 
    }    

    return (
        <View style={styles.container}>
            <Header/>
            <ContainerAutorization style={{ justifyContent: autorizationContainer }} >
                <AutorizationView style={{ width: autorizationWidth }}>
                    <Title style={{ marginTop: titleMt }} >Autorization</Title>
                    <ContainerInput style={{ paddingHorizontal: inputPadding }} >
                        <LoginText style={{ marginTop: titleMt }} >login</LoginText>
                        <Controller
                            control={control}
                            name='login'
                            rules={{required: 'Login is required'}}
                            render={({ field: {value, onChange, onBlur}, fieldState: {error} }) => (
                                <View style={{ flexDirection: 'column' }}>
                                <LoginInput 
                                    style={{ marginTop: titleMt, width: inputWidth, borderColor: error ? 'red' : '#27569C'}}
                                    value={ value }
                                    onChangeText={ onChange }
                                    onBlur={ onBlur }/>
                                {error &&<TextError>{error.message || 'This error'}</TextError>}
                                </View>
                            )} />
                        <LoginText style={{ marginTop: titleMt }}>password</LoginText>
                        <Controller
                            control={control}
                            name='password'
                            rules={{
                                required: 'Password is required', 
                                minLength: {value: 4, message: 'Password be minimum 4 symbols'}}}
                            render={({ field: {value, onChange, onBlur}, fieldState: {error} }) => (
                                <View style={{ flexDirection: 'column' }}>
                                <LoginInput 
                                    style={{ marginTop: titleMt, width: inputWidth, borderColor: error ? 'red' : '#27569C'}}
                                    value={ value }
                                    onChangeText={ onChange }
                                    onBlur={ onBlur }
                                    secureTextEntry={ true }/>
                                {error &&<TextError>{error.message || 'This error'}</TextError>}
                                </View>
                            )} />                        
                    </ContainerInput>                    
                    <TouchableOpacity onPress={handleSubmit(onSubmitPressed)}>
                        <SubmitBtn style={{ marginTop: submitMt }}>Submit</SubmitBtn>
                    </TouchableOpacity>                
                </AutorizationView>
            </ContainerAutorization>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      backgroundColor: '#fff',                     
    },
});

const ContainerAutorization = styled.View`    
    flex: 0.85;
`

const AutorizationView = styled.View`
    width: 290px;
    height: 333px;
    margin-top: 14px;
    align-items: center;
    border: 5px;
    border-radius: 6px;
    border-color: #27569C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
`

const Title = styled.Text`
    margin-top: 8px;
    font-weight: 800;
    font-size: 24px;
    text-align: center;
    color: #27569C;
`

const ContainerInput = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

const LoginText = styled.Text`
    margin-top: 13px;    
    font-weight: 800;
    font-size: 24px;
`

const LoginInput = styled.TextInput`
    margin-top: 13px;
    padding-left: 10px;
    width: 212px;
    height: 39px;
    border: 4px;
    border-radius: 10px;
    border-color: #27569C;
    background-color: #D9D9D9;
`

const TextError = styled.Text`
    color: red    
`

const SubmitBtn = styled.Text`
    margin-top: 23px;    
    width: 213px;
    height: 43px;
    font-weight: 800;
    font-size: 24px;
    text-align: center;
    padding-top: 5px;
    border-radius: 10px;
    background: #E4B062;
`