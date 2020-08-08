
import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const GlobalState = createContext()

export const Provider = (props) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [updateId, setUpdateId] = useState('')
    const state = {
        user,
        open,
        open2,
        users,
        updateId,
        deleteUser: (id) => {
            axios.delete(`http://localhost:8000/api/${id}`)
        },

        createUser: (name, email, password) => {
            axios.post(`http://localhost:8000/api`, { name, email, password })
        },

        UpDataId: (id) => {
            setUpdateId(id)
            setUser(users.filter(item => item.id == updateId))
            console.log(user)
        },
        UpDateEdit: (name, email, password) => {
            axios.put(`http://localhost:8000/api/${updateId}`, { name, email, password })
                .then(res => console.log(res.data))
            setUpdateId('')
        },
        get: () => {
            axios.get('http://localhost:8000/api')
                .then(res => {
                    setUsers(res.data)
                })
        },

        DialogOpen: (openID) => {

            setOpen(openID)
        },

        DialogOpen2: (openID) => {
            setOpen2(openID)
        },
    }

    useEffect(() => {
        state.get()
    })

    return (
        <GlobalState.Provider value={state}>
            {props.children}
        </GlobalState.Provider>
    )
}
