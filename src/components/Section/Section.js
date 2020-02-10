/* @flow */
import * as React from "react";
import {View} from "react-native";
import {styles} from "./styles";
import type {SectionProps} from "./types";

export class Section extends React.PureComponent<SectionProps> {
    render() {
        const {backgroundColor, height, width} = this.props;
        const containerCustomStyle = {height, width};
        const subContainerCustomStyles = {backgroundColor};
        return (
            <View style={[styles.container, containerCustomStyle]}>
                <View style={[styles.subContainer, subContainerCustomStyles]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}
