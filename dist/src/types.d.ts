export declare enum AppErrorCode {
    MEASUREMENT_CODE_FACE_UNDETECTED_ERROR = 80001
}
export declare enum InfoType {
    NONE = 0,
    INSTRUCTION = 1,
    SUCCESS = 2
}
export interface InfoData {
    type: InfoType;
    message?: string;
}
export declare enum VideoReadyState {
    HAVE_ENOUGH_DATA = 4
}
