import { Easing, Animated } from 'react-native';

const logo = {
  animProperties: {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear,
    useNativeDriver: true,
  },
  animInterpolation: (input: Animated.value) =>
    input.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    }),
};

export default {
  logo,
};