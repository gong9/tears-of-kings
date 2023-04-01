import recordInit from './record';

type CallbackType = (...args: any[]) => void;

const tearsJsInit = (callback: CallbackType) => {
    const [lastEvents, controlFn] = recordInit();

    window.onerror = (...errArgs) => {
        controlFn();

        const scene = lastEvents[lastEvents.length - 1];
        const errorInfo ={
            message: errArgs[0],
            url: errArgs[1],
            line: errArgs[2],
            col: errArgs[3],
            error: errArgs[4],
        };

        callback(errorInfo, scene);
    };

};

export default tearsJsInit;