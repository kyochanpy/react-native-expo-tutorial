import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, type ImageSourcePropType } from "react-native";

import { ImageViewer } from "../components/image-viewer";
import { Button } from "../components/button";
const PlaceholderImage =
	require("../assets/images/background-image.png") as ImageSourcePropType;

export const App = () => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer placeholderImageSource={PlaceholderImage} />
			</View>
			<View style={styles.footerContainer}>
				<Button label="この写真を選択" theme="primary" />
				<Button label="この写真を使用" />
			</View>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
		alignItems: "center",
	},
	imageContainer: {
		flex: 1,
		paddingTop: 58,
	},
	footerContainer: {
		flex: 1 / 3,
		alignItems: "center",
	},
});

registerRootComponent(App);
