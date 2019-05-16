import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const col1Buttons = [
      ['7', '8', '9'],
      ['4', '5', '6'],
      ['1', '2', '3'],
      [',', '0', '=']
    ]

    const col2Buttons = ['C', '÷', 'x', '-', '+']

    return (
      <View style={styles.container}>
        <Text style={styles.display}>Display</Text>
        <Text style={styles.result}>Result</Text>
        <View style={styles.buttons}>
          <View style={styles.col1}>
          {
            col1Buttons.map((line, index) => 
              <View key={index} style={styles.line}>
              { 
                line.map(op => 
                  <View key={op} style={styles.button}>
                    <Text style={styles.buttonText}>
                      {op}
                    </Text>
                  </View>
                )
              }                
              </View>
            )
          }
          </View>
          <View  style={styles.col2}>
          {
            col2Buttons.map(op => 
              <View key={op} style={styles.button}>
                <Text style={styles.buttonText}>
                  {op}
                </Text>              
              </View>
            )
          }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  display: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    fontSize: 60, 
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10
  },
  result: {
    flex: 0.4,
    backgroundColor: '#EFEFEF',
    fontSize: 30,
    textAlign: 'right',
    paddingBottom: 10,
    paddingRight: 10
  },
  buttons: {
    flex: 5,
    flexDirection: 'row'
  },
  col1: {
    flex: 3,
    backgroundColor: 'grey',    
  },
  col2: {
    flex: 1,
    backgroundColor: 'red',    
  },
  line: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 40,

  }
});
