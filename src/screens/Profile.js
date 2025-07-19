import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { SVG } from '../svg/SGV'
import { Value } from 'react-native/types_generated/Libraries/Animated/AnimatedExports'
const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SvgXml xml={SVG.leftArrowWhite} style={styles.leftArrow} />
                <Image source={require('../assets/Vector.png')} width={20} height={20} style={styles.Vector} />
                <Text style={styles.welcoemText}>Welcome To Fitness Coach</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.nameText}>Hi Harsh!</Text>
                <Text style={styles.profileSetup }>
                    Let's set up your profile yo help your coach create the perfect fitness plan for you
                </Text>
                <Text style={styles.profileSetup}>This will only take a few minutes and help us understand your fitness goals and needs</Text>
                <Image source={require('../assets/profile.jpeg')} width={20} height={20} style={styles.profile} />
                <Text style={styles.swipeText}>Swipe through the following screens to complete your profile </Text>
                <TouchableOpacity style={styles.LoginStyle}>
                    <Text style={styles.loginText}>Next</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f21',


    },
    leftArrow: {
        marginTop: 100
    },
    Vector:{
        marginVertical:20

    },
    welcoemText: {
        color: 'white',
        fontSize: 25,
        // fontWeight: 'bold',
        marginVertical: 10
    },
    header: {
        backgroundColor: '#181819',

        paddingHorizontal: 30,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30

    },
    detailsContainer: {
        paddingHorizontal: 30,
        marginTop: 30
    },
    nameText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
        marginVertical: 10
    },
    profileSetup: {
        color: 'gray',
        fontSize: 15,
        fontWeight: '400',
        marginVertical: 10
    },
    profile: {
        width: 150,
        height: 150,
        borderRadius: 80,
        marginTop: 30,
        alignSelf: 'center'
    },
    swipeText:{
        color: 'gray',
        fontSize: 15,
        fontWeight: '400',
        marginVertical: 10,
        fontStyle:'italic',
        marginVertical:20
    },
    LoginStyle:{
    backgroundColor:'#FFB800',
    alignItems:'center',
    justifyContent:'center',
    // height:50,
    borderRadius:10,
    marginTop:100
    
},
loginText:{
    color:'white',
    fontSize:17,
    paddingVertical:15
},
})
export default Profile