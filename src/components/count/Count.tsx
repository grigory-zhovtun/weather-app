import React from 'react';

type CountProps = {
    weatherCount: number
}

export const Count = ({weatherCount}: CountProps) => {
    return (
        <div>
            <span>{weatherCount}</span>
        </div>
    );
};