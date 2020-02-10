/* @flow */
import {StyleSheet} from "react-native";

const buttonHeight = 40;
export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    buttonContainer: {
        alignItems: "center",
        borderRadius: buttonHeight,
        backgroundColor: "#F2C113",
        justifyContent: "center",
        height: buttonHeight,
        width: buttonHeight * 4,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: "700",
        justifyContent: "center",
    },
});
