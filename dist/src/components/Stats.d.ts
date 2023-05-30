import React from 'react';
interface VitalSign<T> {
    value: T;
    isEnabled: boolean;
}
interface IStats {
    vitalSigns: {
        heartRate: VitalSign<number>;
        breathingRate: VitalSign<number>;
        stress: VitalSign<number>;
        hrvSdnn: VitalSign<number>;
        spo2: VitalSign<number>;
        bloodPressure: VitalSign<BloodPressureValue>;
    };
}
export type BloodPressureValue = {
    systolic: number;
    diastolic: number;
};
declare const Stats: ({ vitalSigns }: IStats) => React.JSX.Element;
export default Stats;
