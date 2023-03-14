import { Box } from "@chakra-ui/react";
import { ChapterIcon } from "./ChapterIcon";

type MenuTopProps = {
  isControlActive?: boolean;
  currentChapter: string;
  setCurrentChapter: (ch: string) => void;
  chapters: {
    id: string;
    title: string;
  }[];
};
export function ChaptersMenu(props: MenuTopProps) {
  const {
    chapters = [],
    isControlActive,
    currentChapter,
    setCurrentChapter,
  } = props;

  return (
    <Box
      sx={{
        pos: "absolute",
        left: 0,
        right: 0,
        zIndex: 5,
        opacity: isControlActive ? 1 : 0,
        transition: "opacity",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        w: "100%",
      }}
    >
      <Box
        as="ul"
        sx={{
          display: "flex",
          padding: 0,
          margin: 0,
        }}
      >
        {chapters.map((chapter) => {
          const isActive = currentChapter === chapter.id;

          return (
            <Box
              as="li"
              role="button"
              key={chapter.id}
              title={chapter.title}
              onClick={() => setCurrentChapter(chapter.id)}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 3,
                flex: 1,
                px: 4,
                py: 2,
                backdropBlur: "sm",
                bg: isActive ? "cyan.300" : "rgba(255,255,255, 0.6)",
                color: "#fff",
                fontSize: "sm",
                border: "1px solid gray",
                cursor: "pointer",
              }}
            >
              <ChapterIcon />
              {chapter.title}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}