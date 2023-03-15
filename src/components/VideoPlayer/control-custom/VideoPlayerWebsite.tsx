"use client";

import { Box } from "@chakra-ui/react";
import VideoJS from "@ui/VideoPlayer/lib/VideoJS";
import React, {
  CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useMeasure } from "react-use";
import Player from "video.js/dist/types/player";
import ChaptersPlaylist from "../ChaptersPlaylist";
import { useChapters } from "../hooks/useChapters";
import useGetCurrentChapter from "../hooks/useGetCurrentChapter";
import { usePlayerPositionStyle } from "../hooks/usePlayerPositionStyle";
import { useToggleFullscreen } from "../hooks/useToggleFullscreen";
import VideoMeta from "../meta/VideoMeta";
import { Chapter } from "../utils";
import ChapterTitle from "./ChapterTitle";
import BigPlayButton from "./control-bar/BigPlayButton";
import CustomControl from "./control-bar/CustomControl";
import usePreventDefaultHotkeys from "./hooks/usePreventDefaultHotkeys";
import { useSeek } from "./hooks/useSeek";
import { useVolume } from "./hooks/useVolume";

const videoJsOptions = {
  autoplay: false,
  controls: false,
  responsive: true,
  preload: "auto",
  fluid: true,
  userActions: {
    hotkeys: {
      playPauseKey: function () {},
      muteKey: function () {},
      toggleKey: function () {},
    },
  },
  poster:
    "https://image.mux.com/UZMwOY6MgmhFNXLbSFXAuPKlRPss5XNA/thumbnail.jpg?time=11",
  sources: [
    {
      src: process.env.NEXT_PUBLIC_CUSTOMER_URL,
      type: "application/x-mpegURL",
    },
    // {
    //   src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    //   type: "video/mp4",
    // },
  ],
};

type VideoPlayerProps = {
  chapters: Chapter[];
  initialActiveChapter: string;
  onChapterChange?: (currentChapter: string) => void;
  embeddable?: boolean;
};
export function VideoPlayer({
  chapters,
  initialActiveChapter,
  onChapterChange,
}: VideoPlayerProps) {
  const playerRef = React.useRef<Player | null>(null);
  const [bufferPercent, setBufferPercent] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const positionStyle = usePlayerPositionStyle();
  const [videoContainerRef, { height }] = useMeasure<HTMLDivElement>();
  const [isBigPlayBtnVisible, setIsBigPlayBtnVisible] = useState(true);

  const { ref, toggleFullscreen, isFullscreen } = useToggleFullscreen();

  const paused = useRef(false);
  const [isControlActive, setIsControlActive] = useState(false);

  const { volume, isMuted, toggleMute, onVolumeScrubChange, setVolume } =
    useVolume({
      playerRef,
    });

  const {
    playingStatus,
    currentTime,
    onPlayToggle,
    onSeekScrubStart,
    onSeekScrubChange,
    onSeekScrubEnd,
    setCurrentTime,
    setPlayingStatus,
  } = useSeek({ totalDuration, playerRef });

  const { currentChapter, setCurrentChapter, goToChapter, getSeekChapter } =
    useChapters({
      playerRef,
      initialActiveChapter,
      chapters,
    });

  const { chapter, chapterIndex } = useGetCurrentChapter({
    chapters,
    currentChapter,
  });

  usePreventDefaultHotkeys();

  useEffect(() => {
    onChapterChange?.(currentChapter);
  }, [currentChapter, onChapterChange]);

  useEffect(() => {
    setIsBigPlayBtnVisible(playingStatus === "unstarted");
  }, [playingStatus]);

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      // videojs.log('player is waiting')
    });

    player.on("dispose", () => {
      // videojs.log('player will dispose')
    });

    player.on("timeupdate", function () {
      const currentTime = playerRef.current?.currentTime();
      if (currentTime === undefined) {
        return;
      }
      setCurrentTime(currentTime);

      const newChapter = getSeekChapter(currentTime);

      if (newChapter && newChapter?.id !== currentChapter) {
        setCurrentChapter(newChapter.id);
      }
    });

    player.on("progress", function () {
      const buffer = playerRef.current?.bufferedPercent();
      setBufferPercent(buffer || 0);
    });

    player.on("dblclick", function () {
      toggleFullscreen();
    });

    player.one("loadedmetadata", function () {
      if (playerRef.current) {
        const duration = playerRef.current.duration();
        setTotalDuration(duration);
      }
    });

    player.one("ended", function () {
      setPlayingStatus("ended");
    });

    player.on("useractive", () => {
      setIsControlActive(true);
    });

    player.on("userinactive", () => {
      if (!paused.current) {
        setIsControlActive(false);
      }
    });

    player.on("pause", () => {
      paused.current = true;
    });

    player.on("play", () => {
      paused.current = false;
      setIsControlActive(true);
    });

    const volume = player.volume();
    setVolume(volume * 100);
    goToChapter(currentChapter);
    player.aspectRatio("16:9");
  };

  const onChapterSelect = (ch: string) => {
    goToChapter(ch);
    if (playingStatus === "unstarted") {
      setPlayingStatus("paused");
      playerRef.current?.play();
      playerRef.current?.pause();
    }
  };

  const onBigPlayBtnClick = () => {
    playerRef.current?.play();
    setPlayingStatus("playing");
  };

  const videoWrapperStyle: CSSProperties = isFullscreen
    ? { position: "absolute", inset: 0, height: "100%", width: "100%" }
    : { position: "relative", flex: 1, paddingBottom: "56.25%" };

  const videoPositionStyle: CSSProperties = isFullscreen
    ? {
        position: "absolute",
        width: positionStyle.width,
        height: positionStyle.height,
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
      }
    : {
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        width: "100%",
      };

  return (
    <>
      <VideoMeta path="/custom-control" />

      <Box
        sx={{
          display: "grid",
          gap: "20px",
          position: "relative",
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "1fr auto",
        }}
      >
        <div style={videoWrapperStyle} ref={ref}>
          <div style={videoPositionStyle} onClick={onPlayToggle}>
            <VideoJS
              options={videoJsOptions}
              onReady={handlePlayerReady}
              videoContainerRef={videoContainerRef}
            />
          </div>
          <BigPlayButton
            onClick={onBigPlayBtnClick}
            positionStyle={videoPositionStyle}
            isVisible={isBigPlayBtnVisible}
          />
          {chapter && (
            <ChapterTitle
              title={chapter?.title}
              episode={chapterIndex + 1}
              isVisible={isControlActive}
            />
          )}
          <CustomControl
            playingStatus={playingStatus}
            isControlActive={isControlActive}
            totalDuration={totalDuration}
            currentTime={currentTime}
            onSeekScrubStart={onSeekScrubStart}
            onSeekScrubEnd={onSeekScrubEnd}
            onSeekScrubChange={onSeekScrubChange}
            bufferPosition={totalDuration * bufferPercent}
            onPlayToggle={onPlayToggle}
            isMuted={isMuted}
            toggleMute={toggleMute}
            onVolumeScrubChange={onVolumeScrubChange}
            volume={volume}
            toggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
          />
        </div>
        <ChaptersPlaylist
          height={height}
          chapters={chapters}
          currentChapter={currentChapter}
          onChapterSelect={onChapterSelect}
        />
      </Box>
    </>
  );
}
