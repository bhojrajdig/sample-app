import { MutableRefObject } from 'react';
import { AlertData, OfflineMeasurements, SessionState } from '@binah/web-sdk';
import { InfoData } from '../types';
declare const useMonitor: (video: MutableRefObject<HTMLVideoElement>, cameraId: string, processingTime: number, licenseKey: string, productId: string, startMeasuring: boolean) => {
    sessionState: SessionState;
    vitalSigns: {
        heartRate: {
            value: any;
            isEnabled: boolean;
        };
        breathingRate: {
            value: any;
            isEnabled: boolean;
        };
        stress: {
            value: any;
            isEnabled: boolean;
        };
        hrvSdnn: {
            value: any;
            isEnabled: boolean;
        };
        spo2: {
            value: any;
            isEnabled: boolean;
        };
        bloodPressure: {
            value: any;
            isEnabled: boolean;
        };
    };
    offlineMeasurements: OfflineMeasurements;
    error: AlertData;
    warning: AlertData;
    info: InfoData;
};
export default useMonitor;
