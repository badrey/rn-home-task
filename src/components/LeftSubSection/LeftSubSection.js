/* @flow */
import * as React from "react";
import {Section} from "../Section/Section";

type Props = {
    backgroundColor: string,
};

class LeftSubSection extends React.PureComponent<Props> {
    render() {
        const {backgroundColor} = this.props;
        return (
            <Section height={"50%"} width={"100%"} backgroundColor={backgroundColor} />
        );
    }
}

export {LeftSubSection};
