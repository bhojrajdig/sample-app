export declare const DEFAULT_MEASUREMENT_DURATION = 120;
export declare const MIN_MEASUREMENT_DURATION = 20;
export declare const MAX_MEASUREMENT_DURATION = 180;
export declare const useLicenseKey: () => [string, import("use-local-storage-state/src/useLocalStorageStateBase").UpdateState<string>, boolean];
export declare const useProductId: () => [any, import("use-local-storage-state/src/useLocalStorageStateBase").UpdateState<any>, boolean];
export declare const useMeasurementDuration: () => [number, import("use-local-storage-state/src/useLocalStorageStateBase").UpdateState<number>, boolean];
