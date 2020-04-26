import React from 'react';
import { Text, ScrollView, SectionList, View } from 'react-native';

const settings: any = [{}]

const SettingsSectionList = () => {
    return(
        <View>
            <SectionList 
            sections={settings}
            renderItem={SettingsItem}
            renderSectionHeader={ ( { section: {title} } ) => <Text>{title}</Text> }/>
        </View>
    )
}

export default class Settings extends React.Component{
    state = {}

    render(){
        return(
            <ScrollView></ScrollView>
        )
    }
}