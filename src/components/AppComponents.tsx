import React, { useCallback } from "react";
import {Linking} from 'react-native';
 import {Header, Button} from 'react-native-elements';

 function OpenSettingsButton(props: any){
    const handlePress = useCallback(async () =>{
        await Linking.openSettings();
    }, []);

    return(
        <Button title={props.title} onPress={handlePress}/>
    )
}
 
 export default function AppHeader() {
    return(
        <Header
            leftComponent={{icon: 'settings'}}
            centerComponent={{}}
            rightComponent={{}}
        >
        </Header>
    )
 }