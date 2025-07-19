
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View , Text} from 'react-native';
import OnboardingScreen from './src/screens/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/Stack';
function App() {

  return (
    // <View style={styles.container}>
    //   <OnboardingScreen />
    // </View>
    <NavigationContainer>
<MyStack />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: '#FFFFFF', 

  },
});

export default App;
