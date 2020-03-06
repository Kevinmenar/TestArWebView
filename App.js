/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';

import { WebView } from 'react-native-webview';

import { captureScreen }  from "react-native-view-shot";

import CameraRoll from "@react-native-community/cameraroll";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount () {
    captureScreen({
      format: "jpg",
      quality: 0.8
    }).then(
      uri => CameraRoll.saveToCameraRoll(uri),
      error => console.error("Oops, snapshot failed", error)
    );
  }

  render() {
    console.log("Debug on");
    return (
        <WebView 
          source={{ uri: 'https://arjspd.netlify.com/' }} 
          mediaPlaybackRequiresUserAction={false} />
    );
  }
  
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
