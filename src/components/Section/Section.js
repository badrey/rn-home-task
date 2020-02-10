/* @flow */
import * as React from "react";
import {View} from "react-native";
import {styles} from "./styles";
import type {SectionProps} from "./types";

export class Section extends React.PureComponent<SectionProps> {
    render() {
        const {backgroundColor, height, width} = this.props;
        return (
            <View style={[styles.container, {height, width}]}>
                <View style={[styles.subContainer, {backgroundColor}]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}
