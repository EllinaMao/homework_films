import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

//  Interface для объектов, а Type для различных типо
type AnimationFilmProps = {
  onComplete: () => void;
};

export const ProgressBar = ({ onComplete }: AnimationFilmProps) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 5000, // 5 секунд
      useNativeDriver: false,
    }).start(() => {
      onComplete();
    });
  }, []);

  const width = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.progressBar, { width }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#76c7c0",
  },
});
