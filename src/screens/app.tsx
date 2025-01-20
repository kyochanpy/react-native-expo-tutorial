import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, type ImageSourcePropType } from "react-native";
import { type FC, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { ImageViewer } from "../components/image-viewer";
import { Button } from "../components/button";
import { IconButton } from "../components/icon-button";
import { CircleButton } from "../components/circle-button";
import { EmojiPicker } from "../components/emoji-picker";
import { EmojiList } from "../components/emoji-list";
import { EmojiSticker } from "../components/emoji-sticker";
const PlaceholderImage =
	require("../assets/images/background-image.png") as ImageSourcePropType;

export const App: FC = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | null>(
		null,
	);

	const onModalClose = () => {
		setIsModalVisible(false);
	};

	const onReset = () => {
		setShowAppOptions(false);
	};

	const onAddSticker = () => {
		setIsModalVisible(true);
	};

	const onSaveImageAsync = async () => {
		//
	};

	const pickImageAsync = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			console.log(result);
			setSelectedImage(result.assets[0].uri);
			setShowAppOptions(true);
		} else {
			alert("画像が選択されていません");
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer
					placeholderImageSource={PlaceholderImage}
					selectedImage={selectedImage}
				/>
				{pickedEmoji && (
					<EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
				)}
			</View>
			<EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
				<EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
			</EmojiPicker>
			{showAppOptions ? (
				<View style={styles.optionsContainer}>
					<View style={styles.optionsRow}>
						<IconButton icon="refresh" label="リセット" onPress={onReset} />
						<CircleButton onPress={onAddSticker} />
						<IconButton
							icon="save-alt"
							label="保存"
							onPress={onSaveImageAsync}
						/>
					</View>
				</View>
			) : (
				<View style={styles.footerContainer}>
					<Button
						label="この写真を選択"
						theme="primary"
						onPress={pickImageAsync}
					/>
					<Button
						label="この写真を使用"
						onPress={() => setShowAppOptions(true)}
					/>
				</View>
			)}
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
	optionsContainer: {
		position: "absolute",
		bottom: 80,
	},
	optionsRow: {
		flexDirection: "row",
		alignItems: "center",
	},
});

registerRootComponent(App);
