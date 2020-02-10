/* @flow */
import * as React from "react";
import {Section} from "../Section/Section";
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";

type Props = {
    screenHeight: number,
};

export class Footer extends React.PureComponent<Props> {
    onPress = () => {
        console.log("Button clicked");
    };

    render() {
        const {screenHeight} = this.props;
        return (
            <Section
                height={screenHeight * 0.3}
                width={"100%"}
                backgroundColor={"#CCC86F"}
            >
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={this.onPress}
                    >
                        <Text style={styles.buttonText}>Click here!</Text>
                    </TouchableOpacity>
                </View>
            </Section>
        );
    }
}
