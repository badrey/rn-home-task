/* @flow */
import * as React from "react";
import {View} from "react-native";
import {styles} from "./styles";
import {LeftSubSection} from "../LeftSubSection/LeftSubSection";

class LeftSection extends React.PureComponent<{}> {
    render() {
        return (
            <View style={styles.container}>
                <LeftSubSection backgroundColor={"#6A923A"} />
                <LeftSubSection backgroundColor={"#938B76"} />
            </View>
        );
    }
}

export {LeftSection};
