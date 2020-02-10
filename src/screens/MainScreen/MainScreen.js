/* @flow */
import * as React from "react";
import {Dimensions, ScrollView} from "react-native";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {styles} from "./styles";
import {MainSection} from "../../components/MainSection/MainSection";

type State = {
    isNarrowScreen: boolean,
    screenHeight: number,
};

function getScreenHeight({height, width}: {height: number, width: number}): number {
    return height;
}

function isNarrowScreen({height, width}: {height: number, width: number}): boolean {
    return height > width;
}

class MainScreen extends React.Component<{}, State> {
    state = {
        isNarrowScreen: isNarrowScreen(Dimensions.get("screen")),
        screenHeight: getScreenHeight(Dimensions.get("screen")),
    };

    componentDidMount(): * {
        Dimensions.addEventListener("change", this.handleDimensionsChange);
    }

    componentWillUnmount(): * {
        Dimensions.removeEventListener("change", this.handleDimensionsChange);
    }

    handleDimensionsChange = ({screen}: {screen: {height: number, width: number}}) => {
        this.setState({
            isNarrowScreen: isNarrowScreen(screen),
            screenHeight: getScreenHeight(screen),
        });
    };

    render() {
        const {isNarrowScreen, screenHeight} = this.state;
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <Header screenHeight={screenHeight} />
                <MainSection
                    isNarrowScreen={isNarrowScreen}
                    screenHeight={screenHeight}
                />
                <Footer screenHeight={screenHeight} />
            </ScrollView>
        );
    }
}

export {MainScreen};
