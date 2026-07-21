import { Container } from "@/components/ui/container";
import { useAudioPlayer } from "expo-audio";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

type Stage = "initial" | "loading" | "video";

const FilmsScreen = () => {
  const [stage, setStage] = useState<Stage>("initial");

  const succesSound = useAudioPlayer("@/assets/sound/meldixsuccess.mp3");

  const handleAnimationComplele = () => {
    succesSound.play();
    setStage("video");
  };
  return <Container>
    {stage ==='initial' && (
      
    )}
  </Container>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FilmsScreen;
