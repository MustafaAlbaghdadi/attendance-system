import React, {Component} from 'react';
import {Layout} from "./components/Layout";
import Route from "react-router-dom/Route";
import HelloComponent from "./App/HelloComponent";


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>

                <input accept="image/*" id="icon-button-file" type="file" capture="environment"/>
                {/*<Route path='/Office/' component={OfficeMainComponent}/>*/}
                {/*<Route path='/News' component={NewsSection}/>*/}
                <Route path="/" component={HelloComponent} />
            </Layout>

        );
    }
}
