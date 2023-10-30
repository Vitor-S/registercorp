import React from "react";

import { TagStyled } from "../styles/components";
import { Paper } from "@mui/material";

export default function Tag({ prodKey, prodValue, invisible }) {
    return (
        <TagStyled>
            {invisible ? (
                <Paper style={{ opacity: 0 }}>
                    <div id="key">{prodKey}</div>
                    <div id="value">{prodValue}</div>
                </Paper>
            ) : (
                <Paper>
                    <div id="key">{prodKey}</div>
                    <div id="value">{prodValue}</div>
                </Paper>
            )}
        </TagStyled>
    );
}
