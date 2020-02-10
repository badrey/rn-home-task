/* @flow */
import * as React from "react";
import {View} from "react-native";
import {LeftSubSection} from "../LeftSubSection/LeftSubSection";
import type {ThemeProps} from "../../contexts/types";
import type {ScreenProps} from "../types";
import {withTheme} from "../../contexts/ThemeContext";

type Props = {
    ...ScreenProps,
    ...ThemeProps,
};

class LeftSectionBase extends React.PureComponent<Props> {
    render() {
        const {isNarrowScreen, screenHeight, theme} = this.props;
        const height = screenHeight * (isNarrowScreen ? 0.3 : 0.6);
        const width = isNarrowScreen ? "100%" : "20%";
        const flexDirection = isNarrowScreen ? "row" : "column";

        return (
            <View style={{flexDirection, height, width}}>
                <LeftSubSection backgroundColor={theme.leftSectionFirstSubsectionColor} />
                <LeftSubSection
                    backgroundColor={theme.leftSectionSecondSubsectionColor}
                />
            </View>
        );
    }
}

export const LeftSection = withTheme(LeftSectionBase);
