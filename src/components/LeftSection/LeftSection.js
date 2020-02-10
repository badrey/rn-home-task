/* @flow */
import * as React from "react";
import {View} from "react-native";
import {LeftSubSection} from "../LeftSubSection/LeftSubSection";

type Props = {
    isNarrowScreen: boolean,
    screenHeight: number,
};

export class LeftSection extends React.PureComponent<Props> {
    render() {
        const {isNarrowScreen, screenHeight} = this.props;
        const height = screenHeight * (isNarrowScreen ? 0.3 : 0.6);
        const width = isNarrowScreen ? "100%" : "20%";
        const flexDirection = isNarrowScreen ? "row" : "column";
        return (
            <View style={{flexDirection, height, width}}>
                <LeftSubSection backgroundColor={"#6A923A"} />
                <LeftSubSection backgroundColor={"#938B76"} />
            </View>
        );
    }
}
