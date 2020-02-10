/* @flow */
import * as React from "react";
import {Section} from "../Section/Section";
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";

export class Footer extends React.PureComponent<{}> {
    render() {
        return (
            <Section height={"30%"} width={"100%"} backgroundColor={"#CCC86F"}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Click here!</Text>
                    </TouchableOpacity>
                </View>
            </Section>
        );
    }
}
