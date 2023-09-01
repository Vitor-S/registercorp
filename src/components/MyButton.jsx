import React from 'react'

import Paper from "@mui/material/Paper"

import { MyButtonStyled } from '../styles/components'

export default function MyButton({ children, icon, handleClick, active_pairs, input_pairs }) {
    return (
        <MyButtonStyled >
            <Paper id="tag" elevation={5}>
                <div>{children}</div>
                {active_pairs ? 
                    input_pairs : null
                }
            </Paper>
            <Paper id="icon" elevation={5} onClick={handleClick}>
                {icon}
            </Paper>
        </MyButtonStyled>
    )
}
