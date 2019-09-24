// Lbraries to import from node_modules
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';


import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

// Routes config
import RoutesConfig from '../routes';

// Modules to add
const App = 'Whatsapp';

// Main app
Angular.module(App, [
    'angular-meteor',
    'ionic'
]);

// App loader
new Loader(App)
  .load(RoutesConfig);

// App startup
if (Meteor.isCordova) {
    Angular.element(document).on('deviceready', onReady);
}
else {
    Angular.element(document).ready(onReady);
}

function onReady() {
    Angular.bootstrap(document, [
        App
    ]);
};