import styled from 'styled-components';

import html2canvas from 'html2canvas';
import { useState } from 'react';

const IMAGES = {
  default: 'camera.png',
  success: 'check.png',
};

const ScreenshotFab = () => {
  const saveScreenshotInClipboard = () => {
    setIsLoading(true);
    html2canvas(document.body).then((canvas: HTMLCanvasElement) => {
      canvas.toBlob((blob: any) => {
        navigator.clipboard
          .write([new ClipboardItem({ 'image/png': blob })])
          .then(() => {
            setImg(IMAGES.success);
            setIsLoading(false);
            setTimeout(() => {
              setImg(IMAGES.default);
            }, 2000);
          });
      });
    });
  };

  const imgPath = '/assets/images/screenshot/';
  const [img, setImg] = useState<string>(IMAGES.default);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <StyledScreenshotFab
      onClick={saveScreenshotInClipboard}
      disabled={isLoading}
    >
      <StyledScreenshotFabImg src={`${imgPath}${img}`} alt='Screenshot' />
    </StyledScreenshotFab>
  );
};

export default ScreenshotFab;

const StyledScreenshotFab = styled.button`
  position: fixed;
  bottom: 28px;
  right: 28px;
  height: 56px;
  width: 56px;
  border-radius: 999px;

  display: grid;
  place-items: center;

  background-color: var(--color-tiers-0);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #fe6767;
  }
`;

const StyledScreenshotFabImg = styled.img`
  width: 30px;
`;
