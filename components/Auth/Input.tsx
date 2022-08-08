import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Colors } from '../../constants/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from "react-native-paper";
import { set } from 'immer/dist/internal';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  iconName
}) {
  const [userError, setUserError] = useState(false);
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
  }

  function errorHandler() {
    if(isInvalid) {
      setUserError(true)
    }
  }

  return (
    <View style={styles.inputContainer}>
      <View>
        <TextInput
          label={label}
          autoCapitalize="none"
          keyboardType={keyboardType}
          secureTextEntry={secure}
          onChangeText={onUpdateValue}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          left={<TextInput.Icon name={iconName} />}
          mode="flat"
          style={isFocused ? styles.focusInput : styles.input}
          activeUnderlineColor={isInvalid ? Colors.error500 : Colors.primary800}
          underlineColor={Colors.primary500}
        />
      </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  innerInputContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  label: {
    color: Colors.primary600,
    marginBottom: 4,
    position: 'absolute',
    top: 30,
    zIndex: 1,
    padding: 2,
    paddingLeft: 10
  },
  labelContainer: {
    zIndex:1
  },
  labelInvalid: {
    color: Colors.error500,
  },
  focusLabel: {
    color: Colors.primary800,
    top: 10
  },
  focusInput: {
    backgroundColor: Colors.primary450,
    margin: 10
  },
  inputIcon: {
    fontSize: 25,
    top: 20,
    zIndex: 1,
    padding: 2,
    left: 10, 
  },

  input: {
    margin: 10
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },

});
