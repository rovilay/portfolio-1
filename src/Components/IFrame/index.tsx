import * as React from 'react';
import './IFrame.scss';

interface IFrameProps {
  title: string;
  link: string;
  iframeCloser: () => void;
}

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    setIframeToFullScreen();

    return;
  }

  if (document.exitFullscreen) {
    document.exitFullscreen();
    setIframeToOriginal();
  }
};

const setIframeToFullScreen = () => {
  const iframeContainer = document.querySelector('.iframe') as HTMLElement;
  const iframe = document.querySelector('iframe');

  if (iframeContainer && iframe) {
    iframeContainer.style.width = '100%';
    iframeContainer.style.height = '100vh';

    iframe.style.width = '100%';
    iframe.style.height = '100vh';
  }
};

const setIframeToOriginal = () => {
  const iframeContainer = document.querySelector('.iframe') as HTMLElement;
  const iframe = document.querySelector('iframe');

  if (iframeContainer && iframe) {
    iframeContainer.style.width = '1360px';
    iframeContainer.style.height = '80vh';

    iframe.style.width = '1360px';
    iframe.style.height = '80vh';
  }
};

const IFrame: React.FC<IFrameProps> = ({ title, link, iframeCloser }) => {
  return (
    <div className='iframe'>
      <div className='iframe-header'>
        <p className='iframe-header__title'>{title}</p>

        <div className='iframe-header__action_buttons'>
          <button
            type='button'
            className='close-button'
            onClick={iframeCloser}
          >
            &times;
          </button>
          <button
            type='button'
            className='maximum-button'
            onClick={toggleFullScreen}
          >+
          </button>
        </div>
      </div>

      <iframe
        src={link}
        className='iframe-data'
        title={title}
      />
    </div>
  );
};

export default IFrame;
