import React, { useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const swiperRef = useRef(null);
  const navigation = useNavigation();

  const goToNext = () => {
    swiperRef.current.scrollBy(1);
  };

  const skip = () => {
    navigation.replace('Login');
  };

  return (
    <Swiper
      ref={swiperRef}
      loop={false}
      showsPagination={true}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      paginationStyle={styles.pagination}
    >

      <ImageBackground
        source={require('../assets/onboarding1.png')}
        style={styles.imageBackground}
      >
        <LinearGradient
          colors={['transparent', 'rgba(255, 215, 0, 0.4)', 'rgba(255, 215, 0, 0.8)']}
          style={styles.gradientStyle}
        />
        <TouchableOpacity onPress={skip} style={styles.skip}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Meet Our Expert{"\n"}Trained Instructors</Text>
          <Text style={styles.subtitle}>
            Train in the container gym built for strength, freedom, and results.
          </Text>
        </View>
        <TouchableOpacity onPress={goToNext} style={styles.next}>
          <Image
            source={require('../assets/arrow-left.png')} width={25} height={20} />
        </TouchableOpacity>
      </ImageBackground>

      <ImageBackground
        source={require('../assets/onboarding2.png')}
        style={styles.imageBackground}
      >
        <TouchableOpacity onPress={skip} style={styles.skip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Secure Your Health Journey</Text>
          <Text style={styles.subtitle}>
            Improve your Fitness Routine with Cutting edge features
          </Text>
        </View>
        <TouchableOpacity onPress={goToNext} style={styles.next}>
          <Image
            source={require('../assets/arrow-left.png')} width={25} height={20} />
        </TouchableOpacity>
      </ImageBackground>


      <ImageBackground
        source={require('../assets/onboarding3.png')}
        style={styles.imageBackground}
      >
        <LinearGradient
          colors={['transparent', 'rgba(255, 215, 0, 0.4)', 'rgba(255, 215, 0, 0.8)']}
          style={styles.gradientStyle}
        />
        <TouchableOpacity onPress={skip} style={styles.skip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Start Your Journey With Kettleflow</Text>
          <Text style={styles.subtitle}>
            Improve your Fitness Routine with Cutting edge features
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.replace('Login')}
          style={styles.next}
        >
          <Image
            source={require('../assets/arrow-left.png')} width={25} height={20} />
        </TouchableOpacity>
      </ImageBackground>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width,
    height,
    justifyContent: 'flex-end',
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
  // gradientOverlay: {
  //   ...StyleSheet.absoluteFillObject,
  //   justifyContent: 'flex-end',
  // },
  gradientStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 250,
    zIndex: 0,

  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    fontFamily: 'Anton Regular',
    transform: [
      { scaleY: 1.5 },
      { scaleX: 1.0 },
    ],
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  skip: {
    position: 'absolute',
    top: 33,
    right: 41,
  },
  skipText: {
    color: '#fff',
    fontSize: 17,
  },
  next: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 50,
  },
  nextText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  dot: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    marginHorizontal: 3,
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#FFD700',
    width: 8,
    height: 8,
    marginHorizontal: 3,
    borderRadius: 4,
    width: 20,
  },
  pagination: {
    bottom: 70,
    right: 290
  }
});

export default OnboardingScreen;
