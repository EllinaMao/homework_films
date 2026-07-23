import { Film } from "@/types/film-model";
import { useAudioPlayer } from "expo-audio";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, Text, View } from "react-native";

import { useState } from "react";
import { ProgressBar } from "./animation-film";

export const FilmComponent = ({ film }: { film: Film }) => {
  const [isReady, setIsReady] = useState(false);
  const succesSound = useAudioPlayer(
    require("@/assets/sound/meldixsuccess.mp3"),
  );

  const video = useVideoPlayer(film.film_url, (player) => {
    player.loop = false;
  });

  const handleProgressComplete = () => {
    succesSound.play();
    setIsReady(true);
    video.play();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{film.title}</Text>

      {!isReady ? (
        <View style={styles.progressWrapper}>
          <ProgressBar onComplete={handleProgressComplete} />
        </View>
      ) : (
        <VideoView
          player={video}
          style={styles.video}
          allowsPictureInPicture
          nativeControls={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  video: {
    width: "100%",
    height: 300,
  },
  titleStyle: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  progressWrapper: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
});
