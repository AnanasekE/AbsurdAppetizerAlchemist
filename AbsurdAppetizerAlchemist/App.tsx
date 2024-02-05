import {NavigationContainer} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';
import {IngredientPicker} from './Components/IngredientPicker'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";
import {registerRootComponent} from "expo";

export function App() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Ingredients"}>
                <Stack.Screen name={"Ingredients"} component={IngredientPicker}/>
                {/*<Stack.Screen name={"Home"} component={Home} options={{title: "Home"}}/>*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// function Home({navigation}) {
//     return (
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Ingredients"
//                 onPress={() => navigation.navigate('Ingredients')}
//             />
//         </View>
//     );
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

registerRootComponent(App)