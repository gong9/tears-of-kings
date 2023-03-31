import { record } from "rrweb";

type CallbackType = (args: any[]) => void;

const start = (callback: CallbackType) => {
    const eventsMatrix = [[]];
    
    window.onerror = () => {
        record({
            emit(event, isCheckout) {
                if (isCheckout) {
                    eventsMatrix.push([]);
                }
                const lastEvents = eventsMatrix[eventsMatrix.length - 1] as (typeof event)[];
                lastEvents.push(event);

                callback(eventsMatrix);
            },
            checkoutEveryNth: 200
        });
    };
};

export default start;