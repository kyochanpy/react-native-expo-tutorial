import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const App = () => {
	return (
		<View style={styles.container}>
			<Text style={{ color: "#fff" }}>Hello, World!</Text>
			<Text style={styles.text}>
				Open up App.tsx to start working on your app!!
			</Text>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#fff",
	},
});

registerRootComponent(App);
