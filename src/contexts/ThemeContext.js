/* @flow */
import * as React from "react";
import type {Theme, ThemeProps} from "./types";

const defaultTheme: Theme = {
    headerColor: "#505A26",
    centerSectionColor: "#FDE0A8",
    rightSectionColor: "#F5D26A",
    leftSectionFirstSubsectionColor: "#6A923A",
    leftSectionSecondSubsectionColor: "#938B76",
    footerColor: "#CCC86F",
};

const ThemeContext = React.createContext<Theme>(defaultTheme);

type Props = {
    children: React$Node,
};

export class ThemeContextProvider extends React.PureComponent<Props, Theme> {
    state = {
        ...defaultTheme,
    };

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
export function withTheme<Config>(
    Component: React.AbstractComponent<{...Config, ...ThemeProps}>
): Class<React.PureComponent<Config>> {
    class ThemeConsumer extends React.PureComponent<Config> {
        render() {
            return (
                <ThemeContext.Consumer>
                    {theme => <Component {...this.props} theme={theme} />}
                </ThemeContext.Consumer>
            );
        }
    }
    return ThemeConsumer;
}
