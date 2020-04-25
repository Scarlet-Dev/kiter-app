import React, { useCallback } from 'react';
import { View, ScrollView, Image, Button, Linking, SafeAreaView, StyleSheet, Alert } from "react-native";
import { Text, Header } from 'react-native-elements';

export default class AppView{

    state = {};

    OpenSettingsButton(props: any){
        const handlePress = useCallback(async () =>{
            await Linking.openSettings();
        }, []);

        return(
            <Button title={props.title} onPress={handlePress}/>
        )
    }

    WeatherIcon (props:any){
        return(
            <View nativeID="current_temp_icon">
                <Image source={props.src} />
            </View>
        )
    }

    AppHeader (){
        return(
            <Header
                leftComponent={{icon: 'settings'}}
                centerComponent={{}}
                rightComponent={{}}
            >
            </Header>
        )
    }

    AppHome (props: any){
        return(
            <SafeAreaView>
                <this.AppHeader />
                <ScrollView nativeID="temp_display" horizontal={true}></ScrollView>
            </SafeAreaView>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
})