/* @flow */
import * as React from "react";
import {Section} from "../Section/Section";

type Props = {
    isNarrowScreen: boolean,
    screenHeight: number,
};

export class CenterSection extends React.PureComponent<Props> {
    render() {
        const {isNarrowScreen, screenHeight} = this.props;
        const height = isNarrowScreen ? screenHeight * 0.6 : "100%";
        const width = isNarrowScreen ? "100%" : "60%";
        return <Section height={height} width={width} backgroundColor={"#FDE0A8"} />;
    }
}
