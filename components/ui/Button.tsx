import { Pressable, StyleSheet, Text, View } from 'react-native';
import {useState} from 'react'

import { Colors } from '../../constants/styles';

type Props = {
  children?: string | JSX.Element | JSX.Element[];
  onPress: () => void
};


const Button: React.FC<Props> =({ children, onPress }) => {

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      {
        ({pressed}) => (
          <View>
           <Text style={[{ color: pressed ? Colors.primary100 : Colors.primary800  }, styles.buttonText]}>{children}</Text>
        </View>
        )
      }

    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary300,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.7,
    backgroundColor: Colors.primary800
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.primary600,
    fontSize: 16,
    fontWeight: 'bold', 
    textTransform: 'uppercase'
  },
});
