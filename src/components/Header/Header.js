/* @flow */
import * as React from "react";
import {Section} from "../Section/Section";
import type {ThemeProps} from "../../contexts/types";
import {withTheme} from "../../contexts/ThemeContext";

type BaseProps = {
    screenHeight: number,
};

type Props = {
    ...BaseProps,
    ...ThemeProps,
};

class HeaderBase extends React.PureComponent<Props> {
    render() {
        const {screenHeight, theme} = this.props;

        return (
            <Section
                height={screenHeight * 0.1}
                width={"100%"}
                backgroundColor={theme.headerColor}
            />
        );
    }
}

export const Header = withTheme<BaseProps>(HeaderBase);
