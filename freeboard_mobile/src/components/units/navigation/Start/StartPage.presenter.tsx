import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const StartPageUI = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator  screenOptions={() => ({headerShown: false})}>
                <Stack.Screen name="Login" component={MainLoginPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StartPageUI

