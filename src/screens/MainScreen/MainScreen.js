/* @flow */
import * as React from "react";
import {View} from "react-native";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {styles} from "./styles";
import {MainSection} from "../../components/MainSection/MainSection";

class MainScreen extends React.Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <MainSection />
                <Footer />
            </View>
        );
    }
}

export {MainScreen};
