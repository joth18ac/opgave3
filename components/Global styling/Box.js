import * as React from 'react';
import {Text} from 'react-native';

export default class Box extends React.Component{
    state = {title:"..."};
    setTitle = (title) => this.setState({title});
    render(){
        return <Text> {this.state.title} </Text>;
    }
}