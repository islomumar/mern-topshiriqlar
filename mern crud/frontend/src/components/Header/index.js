import React from 'react'
import { useStyles } from './styles'
import { DialogIcon } from './Dialog'
import { AppBar, Toolbar } from '@material-ui/core'
export function Header() {
    const classes = useStyles()
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <div className={classes.right}></div>
                    <DialogIcon />
                </Toolbar>
            </AppBar>
        </div>
    )
}
