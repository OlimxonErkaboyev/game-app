import { ImageProps, Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: "👍" },
    4: { src: "🎯" },
    5: { src: "😒" },
  };
  return (
    <>
      <Text boxSize={25} marginTop={1}>
        {emojiMap[rating].src}
      </Text>
    </>
  );
};

export default Emoji;
