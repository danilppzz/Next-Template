'use client';
import React from 'react';

interface ProviderContainerProps {
    children: React.ReactNode;
    // Add more props if needed
}

const ProviderContainer: React.FC<ProviderContainerProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default ProviderContainer;