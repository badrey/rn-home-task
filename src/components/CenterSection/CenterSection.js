/* @flow */
import * as React from "react";
import {Section} from "../Section/Section";
import {withTheme} from "../../contexts/ThemeContext";
import type {ThemeProps} from "../../contexts/types";
import type {ScreenProps} from "../types";

type Props = {
    ...ScreenProps,
    ...ThemeProps,
};

class CenterSectionBase extends React.PureComponent<Props> {
    render() {
        const {isNarrowScreen, screenHeight, theme} = this.props;
        const height = isNarrowScreen ? screenHeight * 0.6 : "100%";
        const width = isNarrowScreen ? "100%" : "60%";

        return (
            <Section
                height={height}
                width={width}
                backgroundColor={theme.centerSectionColor}
            />
        );
    }
}

export const CenterSection = withTheme(CenterSectionBase);
