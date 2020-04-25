import React from 'react';
import { View, Image, ScrollView } from 'react-native';


function WeatherIcon(props: any){
    return(
        <View nativeID="weather_icon_view">
            <Image source={props.src}/>
        </View>
    )
}

export default function WeatherDisplay(){
    return (
        <ScrollView horizontal={true}>
            {/* Need to create iterable component card with weather
            icon and information. */}
        </ScrollView>
    )
}