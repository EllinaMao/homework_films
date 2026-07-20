import { Container } from "@/components/ui/container";
import { VideoView } from "expo-video";
import { StyleSheet, View } from "react-native";

const FilmComponent = ({ player }: { player: any }) => {
  return (
    <View>
      <Container style={{ height: 500, paddingVertical: 15, gap: 2 }}>
        <VideoView
          style={styles.video}
          player={player}
          allowsPictureInPicture
        />
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
  },
  nextButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default FilmComponent;
