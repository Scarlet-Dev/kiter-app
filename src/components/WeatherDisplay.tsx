import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Image } from 'react-native-elements'


const WeatherIcon = (props: any) => {
    return(
        <View nativeID="weather_icon_view">
            <Image source={props.src}/>
        </View>
    )
}

const WeatherText = (props: any) => {
    return(
        <View>
            <Text h2></Text>
            <Text h2></Text>
            <Text h2></Text>
        </View>
    )
}

const WeatherContent = (props: any) => {
    return(
        <View>
            <WeatherIcon />
            <WeatherText />
        </View>
    )
}

const WeatherForecast = () => {
    return(
        <View>

        </View>
    )
}

export default class WeatherDisplay extends React.Component{
    state = {}
    render(){
        return (
            <ScrollView horizontal={true}>
                <WeatherContent />
            </ScrollView>
            )
    }
}