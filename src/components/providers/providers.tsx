"use client";

import React from 'react';
import { dark } from "@clerk/themes";

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    return (
            {children}
    )
};

export default Providers
