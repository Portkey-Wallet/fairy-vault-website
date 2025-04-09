import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import {
  INIT_PLAYER_INTERVAL_TIME,
  MAX_INIT_PLAYER_POLLING_TIME,
  YOUTUBE_API_SCRIPT_ID,
  YOUTUBE_PLAYER_ID,
  YoutubePlayerStatus,
} from 'constants/video';
import { iconUnableToConnect } from 'assets/images';
import styles from './styles.module.less';

export default function VideoSection({
  title,
  content,
  videoUrl,
}: {
  title?: string;
  content?: string;
  videoUrl?: string;
}) {
  const [youtubePlayerStatus, setYoutubePlayerStatus] = useState<YoutubePlayerStatus>(YoutubePlayerStatus.WAITING);
  const initPlayerTimerRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    const isYoutubeApiScriptExisting = !!document.getElementById(YOUTUBE_API_SCRIPT_ID);
    if (!isYoutubeApiScriptExisting) {
      const script = document.createElement('script');
      script.id = YOUTUBE_API_SCRIPT_ID;
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);
    }
  }, []);

  const stopInitPlayerPolling = () => {
    if (initPlayerTimerRef.current) {
      clearInterval(initPlayerTimerRef.current);
    }
  };

  useEffect(() => {
    if (!window) {
      return;
    }
    stopInitPlayerPolling();
    let pollingTime = 0;
    initPlayerTimerRef.current = setInterval(() => {
      if (pollingTime >= MAX_INIT_PLAYER_POLLING_TIME) {
        stopInitPlayerPolling();
        return;
      }
      pollingTime += INIT_PLAYER_INTERVAL_TIME;
      // @ts-ignore
      if (!window.YT?.Player) {
        return;
      }
      stopInitPlayerPolling();
      // @ts-ignore
      new window.YT.Player(YOUTUBE_PLAYER_ID, {
        videoId: videoUrl,
        /* refer to https://developers.google.com/youtube/player_parameters */
        playerVars: {
          loop: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: () => {
            setYoutubePlayerStatus(YoutubePlayerStatus.READY);
          },
          onError: () => {
            setYoutubePlayerStatus(YoutubePlayerStatus.ERROR);
          },
        },
      });
    }, INIT_PLAYER_INTERVAL_TIME);
    return () => {
      stopInitPlayerPolling();
    };
  }, [videoUrl]);

  return (
    <div>
      <div className={clsx('section-container', 'flex-row-content-center', styles.videoSection)}>
        <div className={styles.videoWrap}>
          <div
            className={clsx(styles.youtubePlayerWrap, {
              [styles.displayNone]: youtubePlayerStatus === YoutubePlayerStatus.ERROR,
            })}>
            <div id={YOUTUBE_PLAYER_ID} className={styles.youtubePlayer} />
          </div>
          <div
            className={clsx('flex-column-center', styles.unableToConnectWrap, {
              [styles.displayNone]: youtubePlayerStatus === YoutubePlayerStatus.READY,
            })}>
            <CommonImage className={styles.unableToConnectIcon} src={iconUnableToConnect} />
            <div className={'flex-column-center'}>
              <span className={styles.primaryText}>Unable to connect</span>
              <span className={styles.secondaryText}>Please check your internet connection and try again.</span>
            </div>
          </div>
        </div>
        <div className={clsx('flex-column', styles.videoTextWrap)}>
          <div className={styles.videoTitle}>{title}</div>
          <div className={styles.videoContent}>{content}</div>
        </div>
      </div>
    </div>
  );
}
