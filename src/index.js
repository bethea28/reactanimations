import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import { Route } from 'react-router'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import {
 AppRegistry,
 View
} from 'react-native'

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


const Routes = (props) => (
  <View>
    <Route path = '/' component = {App} /> 
  </View>
)


const MainContainer = () => (
  <View>
    <Provider store = {store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </View>
    
 
)



AppRegistry.registerComponent('MyApp', () => MainContainer)
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('root') })