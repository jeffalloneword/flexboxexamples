import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

class FlexboxExamples extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<View style={[styles.box, {flex: 1}]}/>*/}
        {/*<View style={[styles.box, {flex: 2}, {alignSelf: 'flex-end'}]}/>*/}
        {/*<View style={[styles.box, {flex: 1}]}/>*/}
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    justifyContent: 'center',
    // justifyContent: 'flex-end',
    // justifyContent: 'space-between',
    // justifyContent: 'space-around',
    // alignItems: 'flex-start',
    alignItems: 'center',
    // alignItems: 'flex-end',
    // alignItems: 'stretch',

  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})

export default FlexboxExamples;