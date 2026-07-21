import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, View } from "react-native";

type FilmComponentProps = {
  videoUri: string;
};

export const FilmComponent = ({ videoUri }: FilmComponentProps) => {
  const video = useVideoPlayer(videoUri, (player) => {
    player.loop = false;
    player.play();
  });
  return (
    <View style={styles.container}>
      <VideoView
        player={video}
        style={styles.video}
        allowsPictureInPicture
        nativeControls={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 300,
  },
});
