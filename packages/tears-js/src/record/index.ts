import { record } from "rrweb";
import { eventWithTime } from '@rrweb/types';

const recordInit = () => {
    const eventsMatrix: eventWithTime[][] = [[]];
    const controlFn = record({
        emit(event: eventWithTime, isCheckout) {
            if (isCheckout) {
                eventsMatrix.push([]);
            }
            const lastEvents = eventsMatrix[eventsMatrix.length - 1];
            lastEvents.push(event);
        },
        checkoutEveryNth: 50
    });

    return [eventsMatrix, controlFn] as [eventWithTime[][], typeof record];
};
export default recordInit;
