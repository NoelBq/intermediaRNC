import { Image} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { Colors } from '../constants/styles';
import IconButton from '../components/ui/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/redux/userAuthSlice';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharactersScreen from '../screens/CharactersScreen';
import EventsScreen from '../screens/EventsScreen';
import CharacterScreen from '../screens/CharacterScreen';
import HeaderIcon from '../components/ui/HeaderIcon';
import { persistor } from '../store/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { purgeEvents } from '../store/redux/events';
import { purgeCharacters } from '../store/redux/characters';



const Navigation = () => {

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    const dispatch = useDispatch()

    function logOutHandler() {
        dispatch(logout())
        dispatch(purgeEvents());
        dispatch(purgeCharacters());
        persistor.purge();
    }

    const authToken = useSelector((state: any) => {
        return !!state.userAuth.token
    })

   
    function BottomNavigator() {
        return <Tab.Navigator screenOptions={({ navigation }) => ({
            headerShown: false,
            tabBarStyle: { backgroundColor: 'white', borderBottomWidth: 0, borderTopWidth: 0, height:120, },
            headerStyle: { backgroundColor: Colors.primary500 },
            tabBarLabelStyle: { fontSize: 15, textAlign: 'center', marginTop: 10, marginLeft: 5},
            headerTintColor: 'white',
            tabBarActiveTintColor: Colors.primary800,
        })}>
            <Tab.Screen name="TabCharacters" component={CharactersScreen} options={{
                title: 'Characters',
                tabBarLabel: 'Characters',
                tabBarIcon: ({focused}) => (
                    <Image
                    source={ focused ? require('../assets/images/charAct.png') : require('../assets/images/characterIn.png') }
                      style={{
                        height: 50, 
                        width: 100, 
                        marginTop: 5,
                        alignSelf: 'center'
                      }}/>
                 )
            }} />
            <Tab.Screen name="Events" component={EventsScreen} options={{
                title: 'Events',
                tabBarLabel: 'Events',
                tabBarIcon: ({focused}) => (
                    <Image
                    source={ focused ? require('../assets/images/eventsAct.png') : require('../assets/images/eventsInact.png') }
                      style={{
                        height: 50, 
                        width: 100, 
                        marginTop: 5,
                        alignSelf: 'center'
                      }}/>
                 )
            }} />   
        </Tab.Navigator>
    }

    function RegistrationStack() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerTitle: ()=> <HeaderIcon/>,
                    headerStyle: { backgroundColor: Colors.primary500 },
                    headerTintColor: 'white',
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} options={{
                    headerStyle: { height: 200, backgroundColor: Colors.primary800 }
                }} />
                <Stack.Screen name="Signup" component={SignupScreen} options={{
                    headerStyle: { height: 200, backgroundColor: Colors.primary800 }
                }} />
            </Stack.Navigator>
        );
    }

    function AuthenticatedStack() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: Colors.primary500 },
                    headerTintColor: 'white',
                }}
            >
                <Stack.Screen name="Characters" component={BottomNavigator} options={{
                    headerTitle: 'Marvel Challenge',
                    headerStyle: { height: 140, backgroundColor: Colors.primary800,  },
                    headerRight: () => <IconButton  onPress={logOutHandler} icon="exit-outline" color='white' size={24} />
                }} />
                <Stack.Screen name="Events" component={EventsScreen} options={{
                    headerStyle: { height: 140, backgroundColor: Colors.primary800 },
                    headerRight: () => <IconButton icon="exit-outline" color='white' size={24} />
                }} />
                <Stack.Screen name="Character" component={CharacterScreen} options={{
                    headerStyle: { height: 140, backgroundColor: Colors.primary800, borderBottomColor: Colors.primary800 },
                    headerTitleStyle: { textTransform: 'uppercase'},
                    headerRight: () => <IconButton icon="exit-outline" color='white' size={24} />
                }} />    
            </Stack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            {!authToken && <RegistrationStack />}
            {authToken && <AuthenticatedStack />}
        </NavigationContainer>
    )
}

export default Navigation

