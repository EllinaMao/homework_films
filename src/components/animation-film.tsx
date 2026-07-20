import { useState } from "react";
import { Dimensions, View } from "react-native";
import Animated, { Easing, Keyframe } from "react-native-reanimated";

// При натисканні запускається анімація завантаження( зробіть прогресс бар)
// Після того як він заповниться включається аудиосигнал "Успіх"
const INITIAL_SCALE_FACTOR = Dimensions.get("screen").height / 90;
const DURATION = 600;
export function LoaingVideo() {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  const keyframe = new Keyframe({
    0: {
      transform: [{ scale: INITIAL_SCALE_FACTOR }],
    },
    100: {
      transform: [{ scale: 1 }],
      easing: Easing.elastic(0.7),
    },
  });
  const openingAnimation = animate ? keyframe : undefined;

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "white",
          borderRadius: 50,
          transform: [{ scale: INITIAL_SCALE_FACTOR }],
        }}
        entering={openingAnimation}
      />
    </View>
  );
}
