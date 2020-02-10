/* @flow */
import * as React from "react";
import {TouchableOpacity, Text} from "react-native";
import {styles} from "./styles";
import type {SectionProps} from "./types";

export class Button extends React.PureComponent<SectionProps> {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Text>Click here!</Text>
            </TouchableOpacity>
        );
    }
}
