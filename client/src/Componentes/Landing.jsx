import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import Nav from '../Componentes/Nave/Nave'
import Premium from './Premium/Premium'
import Us from './About us/Us'
import Footer from './Footer/Footer'
import Pagos from './Pagos/Pagos';
<<<<<<< HEAD
import { useAuth0 } from '@auth0/auth0-react';
import Ads from '../Componentes/publicidad/Ads'



function Landing() {




    // Ads(() => document.createElement("<video src={video}> </video>"), 1000)


    const { login } = useSelector(state => state)
    const { getAccessTokenSilently } = useAuth0();

    useEffect(async () => {
        const token = await getAccessTokenSilently({})
        window.localStorage.setItem('token', token)

    }, [login])

=======

function Landing() {

>>>>>>> 41cbd0bd34a1de6faeb5e23eef38c244a9d5065f
    return (
        <div style={{ background: "black" }} >
            <Nav />
            <Premium />
            <Pagos></Pagos>
            <Us />
            <Footer />
        </div>
    )
}

export default Landing