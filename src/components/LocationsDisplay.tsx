import React from 'react';
import { View, SectionList, Share, Alert } from 'react-native';
import {Text, Input, ListItem, Icon} from 'react-native-elements'


const SearchLocations = () => {
    return(
        <View>
            <Input placeholder="" leftIcon={{type:'font-awesome',name: 'chevron-left'}}/>
        </View>
    )
}

export default class LocationsDisplay extends React.Component{
    state = {};

    render(){
        return(
            <View>
                <Text></Text>
            </View>
        )
    }
}