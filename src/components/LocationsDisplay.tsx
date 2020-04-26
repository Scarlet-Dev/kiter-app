import React from 'react';
import { View, SectionList, Share, Alert } from 'react-native';
import {Text, Input, ListItem, Icon} from 'react-native-elements'

const ShareLocationButton = () => {
    return(
        <Icon name='share' onPressIn={async () => {
            try{
                const result = await Share.share({
                    message: 'Location shared'
                });

                if(result.action === Share.sharedAction){
                    if(result.activityType){

                    }
                    else{

                    }
                }
                else if(result.action === Share.dismissedAction){
                    
                }
            }
            catch(error){
                Alert.alert(error.message)
            }
        }
    }/>
    )
}


const SearchLocations = () => {
    return(
        <View>
            <Input placeholder="" leftIcon={{type:'font-awesome',name: 'chevron-left'}}/>
        </View>
    )
}

const DATA: any = []
const LocationsDetailsItem = (title: any) => {
    return(
        <View>
            <Text>{title}</Text>
        </View>
    )
}

const LocationDetails = () => {
    return(
        <View>
            <SectionList 
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={ ({item}) => <LocationsDetailsItem title={""}/>}
            renderSectionHeader={ ({ section: {title} }) => <Text>{title}</Text> }
            />
        </View>
    )
}
const list: any = []
const LocationsList = () => {
    return(
        <View>
            {list.map((l: any, i: number) =>{
                <ListItem key={i}
                title={l.name}
                />
            })}
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