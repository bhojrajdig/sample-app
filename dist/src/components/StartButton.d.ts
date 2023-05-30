import React from 'react';
export interface IStartButton {
    isLoading: any;
    onClick: () => void;
    isMeasuring: boolean;
}
declare const StartButton: ({ isLoading, onClick, isMeasuring }: IStartButton) => React.JSX.Element;
export default StartButton;
