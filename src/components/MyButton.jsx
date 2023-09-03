import React from 'react'

import { MyButtonStyled } from '../styles/components'

export default function MyButton({ title, icon, input, handleClick, active_pairs, input_pairs }) {
    return (
        <MyButtonStyled >
            <div id="tag" elevation={5}>
                <div id="title">{title}</div>
                <div id="paper">
                    {input}
                </div>
            </div>
            <div id="icon" elevation={5} onClick={handleClick}>
                {icon}
            </div>
        </MyButtonStyled>
    )
}
