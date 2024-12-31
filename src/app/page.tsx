"use client";

import React from 'react';
import { MantineProvider } from '@mantine/core';
import AppRouter from './Router';

export default function App() {
    return (
        <MantineProvider
            theme={{
                colorScheme: 'light',
                primaryColor: 'blue',
            }}
        >
            <AppRouter />
        </MantineProvider>
    );
}
