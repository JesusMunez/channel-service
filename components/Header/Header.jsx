import { Dimensions } from 'react-native';
import styled from 'styled-components/native'

const screenWidth = Dimensions.get('window').width;

export const Header = () => {
    if (screenWidth > 700) {
        return (
            <HeaderView>
                <LogoImageTitle source={require('./image/logoTitle.png')}/>           
            </HeaderView>
        )
    }
    return (
        <HeaderView>
            <LogoImage source={require('./image/logo.png')}/>            
        </HeaderView>
    )
}

const HeaderView = styled.View`
  height: 118px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #E4B062;
`

const LogoImage = styled.Image`
    width: 70px;
    height: 63px;
`

const LogoImageTitle = styled.Image`
    width: 273px;
    height: 63px;
`