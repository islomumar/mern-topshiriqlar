import { useStyles } from './styles'
import { GlobalState } from '../State'
import { UpData } from './Dialog'
import React, { useContext } from 'react'
import { Delete, Edit } from '@material-ui/icons'
import {
    Box,
    Table,
    TableRow,
    Container,
    TableBody,
    TableHead,
    TableCell,
    IconButton,
    TableContainer,
} from '@material-ui/core'

export function Main() {

    const { users, deleteUser, UpDataId, DialogOpen } = useContext(GlobalState)

    const classes = useStyles()
    const handleUpdate = (id) => {
        UpDataId(id)
        DialogOpen(true)
    }

    const handleDelete = (id) => {
        deleteUser(id)
    }
    return (
        <>
            <Container>
                <TableContainer>
                    <Box display="flex" justifyContent="center">
                        <Table className={classes.table}>
                            <TableHead className={classes.Head}>
                                <TableRow>
                                    <TableCell className={classes.text} align="center">Name</TableCell>
                                    <TableCell className={classes.text} align="center">Email</TableCell>
                                    <TableCell className={classes.text} align="center">Password</TableCell>
                                    <TableCell className={classes.text} align="center">Edit</TableCell>
                                    <TableCell className={classes.text} align="center">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            {users !== []
                                ? users.map(item =>
                                    <TableBody key={item._id}>
                                        <TableRow>
                                            <TableCell align="center">{item.name}</TableCell>
                                            <TableCell align="center">{item.email}</TableCell>
                                            <TableCell align="center">{item.password}</TableCell>

                                            <TableCell align="center">
                                                <IconButton color="primary" onClick={() => handleUpdate(item._id)}>
                                                    <Edit />
                                                </IconButton>
                                            </TableCell>
                                            <TableCell align="center">
                                                <IconButton
                                                    onClick={() => handleDelete(item._id)} color="secondary">
                                                    <Delete />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                )
                                : <></>
                            }
                        </Table>
                    </Box>
                </TableContainer>
            </Container>
            <UpData />
        </>
    )
}
