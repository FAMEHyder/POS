'use client';

import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReplayIcon from '@mui/icons-material/Replay';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import UndoIcon from '@mui/icons-material/Undo';

export default function FirstBox() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '80vw',         // ✅ Full viewport width
                padding: 2,
                gap: 2,
                border: '2px solid green',
            }}
        >
            {/* Left Column */}
            <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Paper
                    elevation={3}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 2,
                        gap: 2,
                        borderRadius: 3,
                    }}
                >
                    <ShoppingCartIcon fontSize="large" color="primary" />
                    <Box>
                        <Typography variant="h6">5000</Typography>
                        <Typography variant="subtitle1">Sales</Typography>
                    </Box>
                </Paper>

                <Paper
                    elevation={3}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 2,
                        gap: 2,
                        borderRadius: 3,
                    }}
                >
                    <ReplayIcon fontSize="large" color="secondary" />
                    <Typography variant="h6">Sales Return</Typography>
                </Paper>
            </Box>

            {/* Right Column */}
            <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Paper
                    elevation={3}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 2,
                        gap: 2,
                        borderRadius: 3,
                    }}
                >
                    <LocalMallIcon fontSize="large" color="success" />
                    <Typography variant="h6">Purchase</Typography>
                </Paper>

                <Paper
                    elevation={3}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 2,
                        gap: 2,
                        borderRadius: 3,
                    }}
                >
                    <UndoIcon fontSize="large" color="error" />
                    <Typography variant="h6">Purchase Return</Typography>
                </Paper>
            </Box>

        </Box>
    );
}
