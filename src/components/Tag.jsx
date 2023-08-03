import React from 'react'

import { TagStyled } from '../styles/components'
import { Paper } from '@mui/material'

export default function Tag({ prodKey, prodValue }) {
    return (
        <TagStyled>
            <Paper>
                <div id="key">{prodKey}</div>
                <div>{prodValue}</div>
            </Paper>
        </TagStyled>
    )
}
