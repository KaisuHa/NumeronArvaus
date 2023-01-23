import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';



var correct = Math.floor(Math.random() * 100) + 1;
var lkm=1;

export default function App() {

  const [guess, setGuess] = useState('');
  const [text, setText] = useState('');
  //const [guessRounds, setGuessRounds] = useState(0);
  //const [randomNumber, setRandomNumber] = useState(getRandom());



  const checkNumber = () =>{
    if ( guess < correct){
        setText('Your guess ' + guess + 'is too low')
        lkm=lkm+1;
    }
    else if (guess > correct){
      setText('Your guess ' + guess + 'is too high')
      lkm=lkm+1;
    }
    else {
    Alert.alert('You guessed the number in '  + lkm + ' guesses')
    //correct =  Math.floor(Math.random() * 100) + 1;
    setGuess('');
    setText('');
    lkm=1;
  }

};

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100 </Text>
      <Text> {text} </Text>

      <TextInput style={{ width: 100, borderWidth: 1}}
      type="number"
      value={guess}
      keyboardType="numeric"
      onChange = {number => setGuess(number)}
      />
       <View style={{ flexDirection:'row', justifyContent: 'space-around'}}>
      <Button title="MAKE GUESS"  onPress={checkNumber}/> 
          
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
