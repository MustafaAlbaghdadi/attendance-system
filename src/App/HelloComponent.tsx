import React, {Component} from 'react';
import {connect} from "react-redux";
import {AuthInfo} from "./Login/Data/Types";
import {Store} from "../Bootstrap/Store";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

interface State {
    res: number;
}

interface Props {
    authInfo: AuthInfo;
}

class HelloComponent extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {res: 0}

    }


    componentDidMount(): void {


    }

    render() {
        return (
<div>
    sss
                <BarcodeScannerComponent
                    width={500}
                    height={500}
                    onUpdate={(err, result) => {
                        if (result != undefined){
                            alert(result.getText())


                        }
                       // console.log(err)
                    }}
                />
</div>
        );
    }
}

export default connect((store: Store) => {
    return {
        authInfo: store.LoginReducer
    }
})(HelloComponent)