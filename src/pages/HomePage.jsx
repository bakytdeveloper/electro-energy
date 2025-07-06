import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import EquipmentGallery from '../components/sections/EquipmentGallery';
import AboutSection from '../components/sections/AboutSection'; // Добавляем импорт
import EnergyWave from '../components/ui/EnergyWave';
import { useEffect, useState } from 'react';
import Loader from '../components/ui/Loader';

// Добавляем массив equipmentItems перед компонентом
const equipmentItems = [
    {
        image: '/assets/images/project-img4.jpg',
        title: 'Трансформатор 110 кВ'
    },
    {
        image: '/assets/images/project-img3.jpg',
        title: 'Трансформатор 110 кВ'
    },
    {
        image: '/assets/images/project-img5.jpg',
        title: 'Генератор 50 МВт'
    },
    {
        image: '/assets/images/project-img2.jpg',
        title: 'Отладка сетей'
    }
];

export default function HomePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;

    return (
        <>
            <HeroSection />
            <EnergyWave />
            <ServicesSection />
            <EnergyWave inverted />
            <AboutSection />
            <EnergyWave />
            <EquipmentGallery items={equipmentItems} />
        </>
    );
}