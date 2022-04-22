import { Box } from "@chakra-ui/layout";
import { memo } from "react";
import { Picture } from "../atoms/Picture";

export const HeroCarousel = memo(function heroCarousel() {
  const images = {
    base: [
      "https://picsum.photos/800/500?random=1",
      "https://picsum.photos/800/500?random=2",
      "https://picsum.photos/800/500?random=3",
    ],
    md: [
      "https://picsum.photos/800/400?random=1",
      "https://picsum.photos/800/400?random=2",
      "https://picsum.photos/800/400?random=3",
    ],
    lg: [
      "https://picsum.photos/800/300?random=1",
      "https://picsum.photos/800/300?random=2",
      "https://picsum.photos/800/300?random=3",
    ],
  };

  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: "block",
        margin: ".5em",
        padding: ".5em",
        height: "1.5em",
        width: "1.5em",
        background: isActive ? "#232323" : "#999",
        borderRadius: "50%",
      }}></span>
  );
  return (
    <>
      <Box mt={100}>
        <Picture base={images.base[0]} md={images.md[0]} lg={images.lg[0]} />
      </Box>
    </>
  );
});
