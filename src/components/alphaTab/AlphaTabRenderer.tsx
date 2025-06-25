import { useEffect, useRef, useState } from 'react'
import './AlphaTab.css'
import { AlphaTabApi, type json } from '@coderline/alphatab'

interface Props {
  tex: string | unknown;
}

function AlphaTabRenderer({ tex }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<AlphaTabApi>();

  useEffect(() => {
    const api = new AlphaTabApi(elementRef.current!, {
      core: {
        file: 'https://www.alphatab.net/files/canon.gp',
        fontDirectory: '/font/',
        tex
      },
      player: {
        enablePlayer: true,
        enableCursor: true,
        enableUserInteraction: true,
        soundFont: '/soundfont/sonivox.sf2'
      },
    } as json.SettingsJson);
    
    setApi(api);

    return () => {
      console.log('destroy', elementRef, api);
      api.destroy();
    }
  }, [tex]);

  function playPause() {
    api?.playPause();
  }

  return (
    <>
      <button type="button" onClick={() => playPause()}>Play/Pause</button>
      <div id="alphaTab" ref={elementRef} />
    </>
  )
}

export default AlphaTabRenderer