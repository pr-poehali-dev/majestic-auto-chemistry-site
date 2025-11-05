import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import AboutSection from '@/components/AboutSection';
import DeliverySection from '@/components/DeliverySection';
import PartnersSection from '@/components/PartnersSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Автошампунь Light',
      category: 'Автохимия',
      description: 'Базовый шампунь для регулярной мойки легковых автомобилей',
      image: 'https://cdn.poehali.dev/projects/8d42f4f6-29e1-4318-90ac-f608e10f1b44/files/8a3f3c19-fdfe-49d4-afe1-9d85cd15797d.jpg',
      instructions: [
        'Разбавить концентрат водой в пропорции 1:80 для пенообразователя',
        'Нанести пену на поверхность автомобиля',
        'Выдержать 2-3 минуты, не допуская высыхания',
        'Смыть водой под давлением'
      ]
    },
    {
      id: 2,
      name: 'Автошампунь Extra',
      category: 'Автохимия',
      description: 'Усиленная формула для сильных загрязнений и грузовых автомобилей',
      image: 'https://cdn.poehali.dev/projects/8d42f4f6-29e1-4318-90ac-f608e10f1b44/files/8a3f3c19-fdfe-49d4-afe1-9d85cd15797d.jpg',
      instructions: [
        'Разбавить концентрат водой в пропорции 1:60 для усиленного эффекта',
        'Нанести на сильно загрязненные участки',
        'Дать средству подействовать 3-5 минут',
        'Смыть под высоким давлением'
      ]
    },
    {
      id: 3,
      name: 'Мыло хозяйственное',
      category: 'Бытовая химия',
      description: 'Натуральное хозяйственное мыло для стирки и уборки',
      image: 'https://cdn.poehali.dev/projects/8d42f4f6-29e1-4318-90ac-f608e10f1b44/files/3c16f3a0-8a63-4a0b-a5fa-40dbd949c00b.jpg',
      instructions: [
        'Смочить мыло и вспенить на загрязненной поверхности',
        'Для стирки: натереть на терке и растворить в теплой воде',
        'Оставить на 10-15 минут для сильных загрязнений',
        'Тщательно прополоскать чистой водой'
      ]
    },
    {
      id: 4,
      name: 'Универсальное средство',
      category: 'Бытовая химия',
      description: 'Многофункциональное моющее средство для дома и офиса',
      image: 'https://cdn.poehali.dev/projects/8d42f4f6-29e1-4318-90ac-f608e10f1b44/files/3c16f3a0-8a63-4a0b-a5fa-40dbd949c00b.jpg',
      instructions: [
        'Развести 50-100 мл средства на 5 литров воды',
        'Нанести на поверхность губкой или тряпкой',
        'Дать средству подействовать 1-2 минуты',
        'Протереть чистой влажной тряпкой'
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <CatalogSection products={products} />
        <AboutSection />
        <DeliverySection />
        <PartnersSection />
        <ContactsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
