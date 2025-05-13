import Header from '../components/Header'
import Main from '../components/Main'
import React from "react"
import Practice   from './Practice'
export default function App(){
    return (
        <>
       
        <Header/>
        <Main/>
        <Practice />

        </>
    )
}
// props are immutable 
// state are manage by somponenet itself
// value which changes need state to make sure render is working for you