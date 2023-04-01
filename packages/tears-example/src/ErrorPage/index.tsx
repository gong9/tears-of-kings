import { FC, useEffect, useRef } from "react";
import rrwebPlayer from 'rrweb-player';
import { eventWithTime } from '@rrweb/types';

type ErrorType = {
    url?: string,
    line: number,
    col: number,
} & ErrorEvent

interface ErrorPageProps {
    error: ErrorType,
    events: eventWithTime[]
}

const ErrorPage: FC<ErrorPageProps> = ({ events, error }) => {
    const playback = useRef(null);

    useEffect(() => {
        const replayer = new rrwebPlayer({
            target: playback.current!,
            props: {
                events
            }
        });
        replayer.play();
    }, []);

    return (
        <div>
            <h3>error</h3>
            <div>
                错误原因: {error.message}
                <br />
                错误url: {error.url}
                <br />
                错误位置: {error.line},{error.col}
                <br />
            </div>
            <div ref={playback} />
        </div>
    );
};

export default ErrorPage;