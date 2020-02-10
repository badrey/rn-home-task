/* @flow */
import * as React from "react";
import {styles} from "./styles";
import {View} from "react-native";

type Props = {
    backgroundColor: string,
};

export class LeftSubSection extends React.PureComponent<Props> {
    render() {
        const {backgroundColor} = this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.subContainer, {backgroundColor}]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}
