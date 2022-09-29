import { TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components/native'

const screenWidth = Dimensions.get('window').width;

export const HeaderWithExit = ({ navigation }) => {
    if (screenWidth > 700) {
        return (
            <HeaderView>
                <LogoImageTitle source={require('./image/logoTitle.png')}/>
                <TouchableOpacity onPress={() => navigation.navigate('Autorization')}>
                    <ExitImage source={require('./image/exit.png')}/>
                </TouchableOpacity>       
            </HeaderView>
        )
    }

    return (
        <HeaderView>
            <LogoImage source={require('./image/logo.png')} />
            <TouchableOpacity onPress={() => navigation.navigate('Autorization')}>
                <ExitImage source={require('./image/exit.png')} />
            </TouchableOpacity>       
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

const ExitImage = styled.Image`
    width: 62px;
    height: 56px;
`

const LogoImageTitle = styled.Image`
    width: 273px;
    height: 63px;
`