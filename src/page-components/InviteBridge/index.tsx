import { Button, message } from 'antd';
import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import { NavigationType, ROUTER } from 'constants/enum';
import NetworkSVG from 'page-components/SVGComponents/NetworkSVG';
import PaperAirplaneSVG from 'page-components/SVGComponents/PaperAirplaneSVG';
import { Suspense, useCallback, useState } from 'react';
import { switchPage } from 'utils/router';
import portkeyLogoWhite from '/public/portkeyLogoWhite.svg';
import styles from './styles.module.less';
import { ImageLoaderProps } from 'next/image';
import { group } from 'assets/images';
import { isPortkey } from 'utils/parseUserAgent';
import { EvokePortkeyByAddGroup, detectBrowserName, evokePortkey } from '@portkey/onboarding';
import { devices } from '@portkey/utils';

interface IInviteBridgeProps {
  title: string;
  id: string;
  btnText: string;
  action: EvokePortkeyAppActionType;
}

export enum EvokePortkeyAppActionType {
  ADD_CONTACT = 'addContact',
  ADD_GROUP = 'addGroup',
}

export default function InviteBridge({ title, id, action, btnText }: IInviteBridgeProps) {
  const [isShowMask, setIsShowMask] = useState(false);

  const isMobile = devices.isMobile().phone;
  const wakeUpOnFail = useCallback(() => {
    switchPage(NavigationType.ROUTE, '/download');
  }, []);

  const openPortkey = () => {
    if (!id || !isMobile) return;

    if (isPortkey()) {
      return message.info('Failed to invoke Portkey app for chat');
    }

    if (detectBrowserName() === 'WeChat') {
      setIsShowMask(true);
      return;
    }

    const params = {
      action,
      custom: id,
      customFailureCallback: wakeUpOnFail,
    };

    evokePortkey.app(params as EvokePortkeyByAddGroup);
  };

  const imageLoader = (image: ImageLoaderProps) => {
    return `${image.src}?w=${image.width}&q=${image.quality}`;
  };

  return (
    <Suspense>
      <div className={styles.inviteBridgeContainer}>
        <div className={clsx(['flex-row-center-between', styles.inviteBridgeHeader])}>
          <CommonImage
            src={portkeyLogoWhite}
            loader={imageLoader}
            style={{ width: 142, height: 32, cursor: 'pointer' }}
            priority
            alt="portkeyLogo"
          />
          <Button
            type="text"
            className={styles.downloadBtn}
            onClick={() => switchPage(NavigationType.ROUTE, ROUTER.DOWNLOAD)}>
            Download
          </Button>
        </div>

        <div className={'section-container'}>
          <div className={clsx(['flex-1', styles.infoCard])}>
            <CommonImage
              src={group}
              loader={imageLoader}
              style={{ width: 64, height: 64, margin: 'auto' }}
              priority
              alt="portkeyLogo"
            />
            <div className={styles.infoLabel}>{title}</div>
            <div className={styles.businessId}>{id}</div>
            <Button type="text" className={styles.openBtn} onClick={openPortkey}>
              {btnText}
            </Button>
          </div>
        </div>

        {/* ====== mask ====== */}
        {isShowMask && (
          <div className={styles.maskContainer}>
            <div className={styles.paperAirplane}>
              <NetworkSVG />
            </div>

            <div className={clsx(['flex-row-center', 'justify-end', styles.tipWrap])}>
              <PaperAirplaneSVG />
              <div className={styles.text}>
                {`Click "..." on the upper right corner and select `}
                <span className={styles.hightLight}>{`"Open in Browser"`}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Suspense>
  );
}
