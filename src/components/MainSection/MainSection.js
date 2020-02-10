/* @flow */
import * as React from "react";
import {View} from "react-native";
import {LeftSection} from "../LeftSection/LeftSection";
import {CenterSection} from "../CenterSection/CenterSection";
import {RightSection} from "../RightSection/RightSection";
import {styles} from "./styles";
import type {ScreenProps} from "../types";

type Props = {
    ...ScreenProps,
};

export class MainSection extends React.PureComponent<Props> {
    render() {
        const {isNarrowScreen, screenHeight} = this.props;

        if (isNarrowScreen) {
            return (
                <View style={styles.narrowContainer}>
                    <CenterSection
                        isNarrowScreen={isNarrowScreen}
                        screenHeight={screenHeight}
                    />
                    <LeftSection
                        isNarrowScreen={isNarrowScreen}
                        screenHeight={screenHeight}
                    />
                    <RightSection
                        isNarrowScreen={isNarrowScreen}
                        screenHeight={screenHeight}
                    />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <LeftSection
                    isNarrowScreen={isNarrowScreen}
                    screenHeight={screenHeight}
                />
                <CenterSection
                    isNarrowScreen={isNarrowScreen}
                    screenHeight={screenHeight}
                />
                <RightSection
                    isNarrowScreen={isNarrowScreen}
                    screenHeight={screenHeight}
                />
            </View>
        );
    }
}
