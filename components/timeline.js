import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ColorPicker from './colorPicker.js';


var styles = StyleSheet.create({
  line: {
    'position': 'relative',
    // 'left': '10%',
    'top': 10,
    'marginLeft': '47%',
    'marginTop': '30%',
    // 'marginBottom': '15%',
    'width': 0,
    "height": '92%',
    // 'height': 1200,
    // 'backgroundColor': 'black',
    'borderRadius': 3,
    'borderColor': 'black',
    'borderWidth': 3
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  container:{
    'top': 70,
    'left': '7%',
    'borderRadius': 15,
    'borderColor': 'black',
    'borderWidth': 3,
    // 'marginBottom': 100,
    'height': 400,
    'backgroundColor': 'yellow',
    'width': 100
    // 'flex': 1,
    // 'justifyContent': 'center',
    // 'backgroundColor': 'blue'
  }
});

export default class Timeline extends Component {


  constructor(props) {
    super(props);
    this.state = {click: "clicked"};
  }

  postData = () =>{
    console.log("hitting the beginning");
    fetch('https://ps.pndsn.com/publish/pub-c-e868dd6e-aea2-4b32-9f05-b21bac0e6997/sub-c-cf99383a-7714-11e7-98e2-02ee2ddab7fe/0/theled/0', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify("0,0,0,255,255,255 ")
    }).then((response)=>{
      console.log(response);
    })
    console.log("hitting the end");
  }



  render() {
    console.log(this.props.colors);
    var dynamicStyle = {
      one: {'position': 'relative',
      'marginBottom': 64,
      // 'marginTop': '-315%',
      'top': -1200,
      'left': '15%',
      'width': 64,
      'height': 64,
      'backgroundColor': this.props.colors[0] || "white",
      "borderRadius": 32,
      'borderColor': 'black',
      'borderWidth': 3,
      'zIndex': 3},
      two: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '-50%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[1] || "white",
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      three: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '-40%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[2] || "white",
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      four: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '-30%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[3] || 'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      five: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '-20%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[4] ||'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      six: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '-10%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[5] ||'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      seven: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '0%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[6]||'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      eight: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '10%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[7] ||'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      nine: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '20%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[8] || 'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      ten: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '30%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor':  this.props.colors[9] || 'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      }
    }

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.line}>
          </View>
          <TouchableHighlight style={dynamicStyle.one} onPress={() => this.props.timelineSelectfunction(0) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.two} onPress={() => this.props.timelineSelectfunction(1) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.three} onPress={() => this.props.timelineSelectfunction(2) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.four} onPress={() => this.props.timelineSelectfunction(3) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.five} onPress={() => this.props.timelineSelectfunction(4) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.six} onPress={() => this.props.timelineSelectfunction(5) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.seven} onPress={() => this.props.timelineSelectfunction(6) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.eight} onPress={() => this.props.timelineSelectfunction(7) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.nine} onPress={() => this.props.timelineSelectfunction(8) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.ten} onPress={() => this.props.timelineSelectfunction(9) }>
            <View >
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}
