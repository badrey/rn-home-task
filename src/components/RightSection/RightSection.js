/* @flow */
import * as React from "react";
import {Section} from "../Section/Section";

type Props = {
    isNarrowScreen: boolean,
    screenHeight: number,
};

export class RightSection extends React.PureComponent<Props> {
    render() {
        const {isNarrowScreen, screenHeight} = this.props;
        const height = isNarrowScreen ? screenHeight * 0.6 : "100%";
        const width = isNarrowScreen ? "100%" : "20%";
        return <Section height={height} width={width} backgroundColor={"#F5D26A"} />;
    }
}
