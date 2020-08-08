import React from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Provider } from './components/State'

export default function App() {
    return (
        <div>
            <Provider>
                <Header />
                <Main />
            </Provider>
        </div>
    )
}

