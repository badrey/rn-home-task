/* @flow */
import * as React from "react";
import {Section} from "../Section/Section";
import type {ThemeProps} from "../../contexts/types";
import type {ScreenProps} from "../types";
import {withTheme} from "../../contexts/ThemeContext";

type BaseProps = {
    ...ScreenProps,
};
type Props = {
    ...BaseProps,
    ...ThemeProps,
};

export class RightSectionBase extends React.PureComponent<Props> {
    render() {
        const {isNarrowScreen, screenHeight, theme} = this.props;
        const height = isNarrowScreen ? screenHeight * 0.6 : "100%";
        const width = isNarrowScreen ? "100%" : "20%";

        return (
            <Section
                height={height}
                width={width}
                backgroundColor={theme.rightSectionColor}
            />
        );
    }
}

export const RightSection = withTheme<BaseProps>(RightSectionBase);
