import { Dimensions } from 'react-native';
import styled from 'styled-components/native'

const screenWidth = Dimensions.get('window').width;
var postWidth = 292,
    postHeight = 200    

if (screenWidth > 700) {
    postWidth = 325
    postHeight = 470
}

export const Post = ({name, company, title, img, body}) => {
    if (screenWidth > 700) {
        return (
            <PostView style={{ width: 325, height: 470, paddingLeft: 25 }}>
                <ImagePost source={{uri: img + '.png'}} />
                <Autor style={{ marginTop: 22 }}>Autor: {name}</Autor>
                <Company style={{ marginTop: 10 }}>Company: {company}</Company>
                <Title style={{ marginTop: 10 }}>Title: {title}</Title>
                <Descr>{ body + '....' }</Descr>
            </PostView> 
        )
    }    
    return (        
        <PostView style={{ width: postWidth, height: postHeight }} >
            <Autor>Autor: {name}</Autor>
            <Company>Company: {company}</Company>
            <Title>Title: {title}</Title>
        </PostView>        
    )
}

const PostView = styled.View`
    margin-top: 10px;    
    width: 292px;
    height: 200px;
    padding-left: 12px;
    padding-right: 12px;
    border: 5px;
    border-color: #27569C;
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);  
`

const ImagePost = styled.Image`
    width: 150px;
    height: 150px;
    margin-top: 25px;
`

const Autor = styled.Text`
    margin-top: 12px;
    font-size: 16px;
    font-weight: 800;
`

const Company = styled.Text`
    margin-top: 23px;
    font-size: 16px;
    font-weight: 800;
`

const Title = styled.Text`
    margin-top: 23px;
    font-size: 16px;
    font-weight: 800;
`

const Descr = styled.Text`
    height: 98px;
    margin-top: 8px;    
    font-size: 16px;
    font-weight: 800;
`