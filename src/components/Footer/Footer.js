/* @flow */
import * as React from "react";
import {Section} from "../Section/Section";
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import type {ThemeProps} from "../../contexts/types";
import type {ScreenProps} from "../types";
import {withTheme} from "../../contexts/ThemeContext";

type Props = {
    ...ScreenProps,
    ...ThemeProps,
};

class FooterBase extends React.PureComponent<Props> {
    onPress = () => {
        console.log("Button clicked");
    };

    render() {
        const {screenHeight, theme} = this.props;

        return (
            <Section
                height={screenHeight * 0.3}
                width={"100%"}
                backgroundColor={theme.footerColor}
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

export const Footer = withTheme(FooterBase);
