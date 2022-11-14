import "./Tune.css";
import FadeAudio from "../../../Assets/Audio/fade-into-you.mp3";
import DesertAudio from "../../../Assets/Audio/the-desert.wav";
import { RefObject, useRef } from "react";

function Tune(): JSX.Element {
    const audioRef: RefObject<HTMLAudioElement> = useRef(null);
    return (
        <div className="Tune Box">
			<audio src={FadeAudio} ref={audioRef}></audio>
            <button onClick={() => audioRef.current?.play()}>Play</button>
            <button onClick={() => audioRef.current?.pause()}>Pause</button>
            <button onClick={() => audioRef.current?.load()}>Stop</button>

        </div>
    );
}

export default Tune;
