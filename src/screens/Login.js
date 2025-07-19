import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { SVG } from '../svg/SGV'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
const Login = () => {
    const navigation = useNavigation();
    const goToProfile = () => {
        navigation.navigate('Profile');
    }
    return (
        <View style={styles.container}>
            <LinearGradient
                      colors={['transparent', 'rgba(255, 215, 0, 0.4)', 'rgba(255, 217, 0, 0.7)']}
                      style={styles.gradientStyle}
                    />
            
                <Image source={require('../assets/arrow-leftt.png')} width={20} height={20} style={styles.leftArrow} />
           
            <Text style={styles.welcomeText}>Welcome Back!</Text>
            <Text style={styles.detailsText}>Enter Your Details Below</Text>
            <View style={styles.inputWrapper}>
  <SvgXml xml={SVG.email} width={20} height={20} style={styles.icon} />
  <TextInput
    placeholder="Email"
    placeholderTextColor="white"
    style={styles.inputStyle}
  />
</View>
     <View style={[{justifyContent:'space-between'},styles.inputWrapper]}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
  <SvgXml xml={SVG.password} width={20} height={20} style={styles.icon} />
  <TextInput
    placeholder="Password"
    placeholderTextColor="white"
secureTextEntry={true}
    style={styles.inputStyle}
  /></View>
    <SvgXml xml={SVG.showPassword} width={20} height={20} style={styles.eyeIcon    }  />

</View>
<Text style={styles.forgetText}>Forget Password?</Text>
<TouchableOpacity style={styles.LoginStyle}>
    <Text style={styles.loginText}>Login</Text>
</TouchableOpacity>
<View style={styles.logoStyle}>
  <ImageBackground
    source={require('../assets/Logo.png')}
    style={styles.logoImg}
  />
</View>

<View style={styles.accountContainer}>
  <Text style={styles.accountText}>
    Don't have an account?{' '}
    <Text style={styles.signUpText} onPress={goToProfile}>Sign Up</Text>
  </Text>
</View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f21',
        paddingHorizontal: 30,
    },
    leftArrow: {
        marginTop: 100
    },
    welcomeText:{
        color:'white',
        fontSize:35,
        fontWeight:'bold',
        marginTop:50

    },
    detailsText:{
        color:'gray',
        fontSize:17,
        marginVertical:10
    },
    
    inputWrapper: {
overflow:'hidden',
  flexDirection: 'row',
  alignItems: 'center',
  borderColor:'gray',
        borderWidth:1,
        backgroundColor: '#272729ff',
        borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
      borderBottomWidth: 1,
      marginVertical: 10,

},

icon:{
    marginRight:5
},
forgetText:{
    color:'white',
    fontSize:17,
    alignSelf:'flex-end'
  
},
LoginStyle:{
    backgroundColor:'#FFB800',
    alignItems:'center',
    justifyContent:'center',
    // height:50,
    borderRadius:10,
    marginTop:30
    
},
loginText:{
    color:'white',
    fontSize:17,
    paddingVertical:15
},

logoStyle: {
  marginTop: 'auto',
  alignSelf: 'flex-end', 
  marginRight: 20,
    position:'relative',    
    left:50,
    top:50
},

logoImg: {
  width: 200,
  height: 240,
  resizeMode: 'contain',
},

accountContainer: {
  alignItems: 'center',   
  marginBottom: 20,      
},

accountText: {
  color: 'white',
  fontSize: 17,
},

signUpText: {
  color: '#FFB800',
  fontWeight: 'bold',
},

 gradientStyle:{
      position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 250, 
  zIndex: 0,

  },
  inputStyle: {
    flex: 1,
    color: 'white',
    marginLeft: 10,
  },
  eyeIcon:{
    position:'absolute',
 right:0,
 paddingRight:50
  }

})
export default Login