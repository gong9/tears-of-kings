import recordInit from './record';

type CallbackType = (...args: any[]) => void;

const tearsJsInit = (callback: CallbackType) => {
    const [eventsMatrix, controlFn] = recordInit();

    window.onerror = (...errArgs) => {
        controlFn();

        const scene = [...eventsMatrix.flat()];
        console.log(scene);
        
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