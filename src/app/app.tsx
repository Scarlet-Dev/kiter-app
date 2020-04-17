import React from 'react';
import { Text, View, ScrollView, Image } from "react-native";

export default class AppView{

    state = {};

    WeatherIcon (props:any){
        return(
            <View>
                <Image source={props.src} />
            </View>
        )
    }

    AppHeader (props: any){
        return(
            <View>
                
            </View>
        )
    }

    AppHome (props: any){
        return(
            <ScrollView>
                <View></View>
            </ScrollView>
        )
    }
}