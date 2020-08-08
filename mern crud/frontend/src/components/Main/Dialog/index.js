import { GlobalState } from '../../State'
import React, { useState, useContext } from 'react'
import {
    Fab,
    List,
    Dialog,
    ListItem,
    TextField,
    Typography,
    ListItemSecondaryAction
} from '@material-ui/core'

import { useStyles } from './styles'
import { Loop } from '@material-ui/icons'


export function UpData() {
    const { open, DialogOpen, UpDateEdit, user } = useContext(GlobalState)
    const [users, setUsers] = useState({})
    const handleChange = name => ({ target: { value } }) => {
        setUsers({
            ...users,
            [name]: value
        })
    }

    const handleAdd = () => {
        const { name, email, password } = users
        UpDateEdit(name, email, password)
        DialogOpen(false)
    }

    const classes = useStyles()
    const { name, email, password } = users
    return (
        <>
            <Dialog open={open}>
                <Typography className={classes.userText}>Users</Typography>
                <form className={classes.root}>
                    <TextField
                        type="text"
                        name="name"
                        label="Name"
                        value={name}
                        className={classes.inputMarginTop}
                        onChange={handleChange('name')}
                        InputProps={{ className: classes.input }}
                    />
                    <TextField
                        name="email"
                        type="email"
                        label="Email"
                        value={email}
                        className={classes.inputMarginTop}
                        onChange={handleChange('email')}
                        InputProps={{ className: classes.input }}
                    />
                    <TextField
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        className={classes.inputMarginTop}
                        onChange={handleChange('password')}
                        InputProps={{ className: classes.input }}
                    />
                    <br />
                    <List>
                        <ListItem>
                            <ListItemSecondaryAction>
                                <Fab
                                    color="primary"
                                    onClick={handleAdd}
                                    className={classes.button}
                                >
                                    <Loop />
                                </Fab>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </form>
            </Dialog>
        </>
    )
}
