import React, { useState, useContext } from 'react'
import { GlobalState } from '../../State'
import { AccountCircle, PersonAdd } from '@material-ui/icons'
import { Dialog, IconButton, TextField, Fab, List, ListItem, ListItemSecondaryAction, Typography } from '@material-ui/core'
import { useStyles } from './styles'

export function DialogIcon() {
    const classes = useStyles()
    const [users, setUsers] = useState({})
    const { createUser, DialogOpen2, open2 } = useContext(GlobalState)

    const handleChange = name => ({ target: { value } }) => {
        setUsers({
            ...users,
            [name]: value
        })
    }

    const handleCreate = () => {
        DialogOpen2(true)
    }

    const handleAdd = () => {
        const { name, email, password } = users
        DialogOpen2(false)
        createUser(name, email, password)
        setUsers({})
    }

    const { name, email, password } = users
    return (
        <>
            <Dialog open={open2}>
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
                                    <PersonAdd />
                                </Fab>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </form>
            </Dialog>
            <IconButton color="inherit" onClick={handleCreate} >
                <AccountCircle />
            </IconButton>
        </>
    )
}
