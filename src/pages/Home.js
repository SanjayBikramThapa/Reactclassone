import React from 'react'
import Caraousel from '../components/Caraousel'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Treanding from '../components/Treanding'

const Home = () => {
    return (
        <>
            <Navbar/>
            <Caraousel/>
            <Cards/>
            <Treanding/>
            <Footer/>
        </>
    )
}

export default Home
