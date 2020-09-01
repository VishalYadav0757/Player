import React from 'react';
import 
{ 
    View, 
    Text, 
    StyleSheet, 
    StatusBar, 
    TouchableOpacity, 
    Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const dashboard = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <StatusBar barStyle="light-content" backgroundColor= '#000000' />
            <View style = {styles.header}>
                <Animatable.Image
                    animation = "zoomInDown"
                    duration = {2500}
                    source = {require ('../assets/logo.png')}
                    style = {styles.logo}
                    resizeMode = {'contain'}
                />
            </View>
            <Animatable.View 
                style = {styles.footer}
                animation = "fadeInUpBig"
                >
                <Text style = {styles.title}>
                    {`Choose media to \nplay from:`}
                </Text>
                <View style = {styles.button}>
                    <TouchableOpacity
                        onPress = {() => navigation.navigate('audio')}>
                        <LinearGradient 
                            colors={['#00C853', '#64DD17']}
                            style = {styles.audio}
                            >
                            <Text style = {styles.textBtn}>AUDIO </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => navigation.navigate('video')}>
                        <LinearGradient 
                            colors={['#4c669f', '#00B8D4']}
                            style = {styles.video}
                            >
                            <Text style = {styles.textBtn}>VIDEO </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

const {height} = Dimensions.get('screen');
const height_logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    footer: {
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#B2EBF2'
    },
    dashboard: {
        fontSize: 30,
        marginVertical: 200,
        color: '#f44336',
        textAlign: 'center'
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 35,
        marginLeft: 10, 
        marginVertical: 40
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    audio: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        marginRight: 20,
        marginBottom: 10
    },
    video: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        marginRight: 20
    },
    textBtn: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default dashboard;