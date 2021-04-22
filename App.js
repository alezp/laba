//@Styles
import styles from './src/styles/app';

// @Vendors
import React, { Component } from 'react';
import {
    //Platform,
    //StyleSheet,
    Text,
    View
} from 'react-native';
import { BackButton, NativeRouter, Route, Switch, Link } from 'react-router-native';

//import { notification } from './src/utilities/notifications/notifications';

// @Views
import DefaultView from './src/routes/layouts/default/default';
import ErrorView from './src/routes/errorView/errorView';
import LoggedLayout from './src/routes/layouts/logged/logged';
import HomeView from './src/routes/homeView/homeView';
import RegisterView from './src/routes/registerView/registerView';
import LoginView from './src/routes/loginView/loginView';
import ProfileView from './src/routes/profileView/profileView';
import TravelsView from './src/routes/travelsView/travelsView';

// Functions views
const loggedView = () => {
    return (
        <LoggedLayout>
            <Switch>
                <Route exact path="/admin" component={HomeView} />
                <Route exact path="/admin/profile" component={ProfileView} />
                <Route exact path="/admin/travels" component={TravelsView} />
                <Route component={ErrorView} />
            </Switch>
        </LoggedLayout>
    );
}

const defaultView = () => {
    return (
        <BackButton>
            <DefaultView>
                <Route exact path="/" component={LoginView}/>
                <Route exact path="/register" component={RegisterView}/>
            </DefaultView>
        </BackButton>
    );
}




/*const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu :)  :P',
});*/

type Props = {};
class App extends Component<Props> {

    componentDidMount() {
        /*window.setTimeout(() => {
            notification();
        }, 10000);*/
    }

    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Route path="/" component={defaultView} />
                    <Route path="/admin" component={loggedView} />
                </View>
            </NativeRouter>
        );
    }
}

export default  App;
