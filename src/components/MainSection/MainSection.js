/* @flow */
import * as React from "react";
import {View} from "react-native";
import {LeftSection} from "../LeftSection/LeftSection";
import {CenterSection} from "../CenterSection/CenterSection";
import {RightSection} from "../RightSection/RightSection";
import {styles} from "./styles";

export class MainSection extends React.PureComponent<{}> {
    render() {
        return (
            <View style={styles.container}>
                <LeftSection />
                <CenterSection />
                <RightSection />
            </View>
        );
    }
}
