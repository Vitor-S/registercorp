import React from 'react'

import Paper from "@mui/material/Paper"

import { MyButtonStyled } from '../styles/components'

export default function MyButton({ children, icon, handleClick }) {
    return (
        <MyButtonStyled >
            <Paper id="tag" elevation={5}>
                {children}
            </Paper>
            <Paper id="icon" elevation={5} onClick={handleClick}>
                {icon}
            </Paper>
        </MyButtonStyled>
    )
}
