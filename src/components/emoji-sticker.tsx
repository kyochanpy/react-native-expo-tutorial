import { type FC } from "react";
import { View, Image, type ImageSourcePropType } from "react-native";

type EmojiStickerProps = {
	imageSize: number;
	stickerSource: ImageSourcePropType | undefined;
};

export const EmojiSticker: FC<EmojiStickerProps> = (props) => {
	return (
		<View style={{ top: -350 }}>
			<Image
				source={props.stickerSource}
				resizeMode="contain"
				style={{ width: props.imageSize, height: props.imageSize }}
			/>
		</View>
	);
};
