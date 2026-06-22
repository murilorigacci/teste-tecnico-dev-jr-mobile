import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import PerfilScreen from './Screens/PerfilScreen';
import HabilidadesScreen from './Screens/HabilidadesScreen';
import ProjetosScreen from './Screens/ProjetosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({

                    headerStyle: {
                        backgroundColor: '#030712',
                        borderBottomWidth: 1,
                        borderBottomColor: '#1E293B',
                        shadowColor: 'transparent',
                        elevation: 0,
                    },
                    headerTintColor: '#F1F5F9',
                    headerTitleStyle: {
                        fontSize: 18,
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                        fontWeight: '700',
                    },

                    tabBarActiveTintColor: '#00F5FF',
                    tabBarInactiveTintColor: '#475569',

                    tabBarStyle: {
                        backgroundColor: '#030712',
                        borderTopWidth: 1,
                        borderTopColor: '#1E293B',
                        paddingBottom: 8,
                        paddingTop: 8,
                        height: 64,
                    },
                    tabBarLabelStyle: {
                        fontSize: 11,
                        fontWeight: '600',
                        marginTop: 2,
                    },

                    tabBarIcon: ({ color, size, focused }) => {
                        let iconName;

                        if (route.name === 'Perfil') {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (route.name === 'Habilidades') {
                            iconName = focused ? 'flash' : 'flash-outline';
                        } else if (route.name === 'Projetos') {
                            iconName = focused ? 'folder-open' : 'folder-outline';
                        }

                        return <Ionicons name={iconName} size={focused ? size + 2 : size} color={color} />;
                    },
                })}>
                <Tab.Screen name="Perfil" component={PerfilScreen} />
                <Tab.Screen name="Habilidades" component={HabilidadesScreen} />
                <Tab.Screen name="Projetos" component={ProjetosScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
