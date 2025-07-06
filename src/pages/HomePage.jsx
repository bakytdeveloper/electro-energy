import { useEffect } from 'react'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import EnergyWave from '../components/ui/EnergyWave'
import Loader from '../components/ui/Loader'
import { useState } from 'react'

export default function HomePage() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500)
        return () => clearTimeout(timer)
    }, [])

    if (loading) return <Loader />

    return (
        <>
            <HeroSection />
            <EnergyWave />
            <ServicesSection />
            <EnergyWave inverted />
        </>
    )
}