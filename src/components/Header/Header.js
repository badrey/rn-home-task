/* @flow */
import * as React from "react";
import {Section} from "../Section/Section";

type Props = {
    screenHeight: number,
};

export class Header extends React.PureComponent<Props> {
    render() {
        const {screenHeight} = this.props;
        return (
            <Section
                height={screenHeight * 0.1}
                width={"100%"}
                backgroundColor={"#505A26"}
            />
        );
    }
}
