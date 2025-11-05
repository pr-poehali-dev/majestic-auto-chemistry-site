import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Автошампунь Premium',
      category: 'Автохимия',
      description: 'Профессиональный шампунь для бесконтактной мойки автомобилей',
      image: 'https://cdn.poehali.dev/projects/8d42f4f6-29e1-4318-90ac-f608e10f1b44/files/8a3f3c19-fdfe-49d4-afe1-9d85cd15797d.jpg',
      instructions: [
        'Разбавить концентрат водой в пропорции 1:100 для пенообразователя',
        'Нанести пену на поверхность автомобиля',
        'Выдержать 2-3 минуты, не допуская высыхания',
        'Смыть водой под давлением'
      ]
    },
    {
      id: 2,
      name: 'Средство для мытья посуды',
      category: 'Бытовая химия',
      description: 'Концентрированное моющее средство с ароматом лимона',
      image: 'https://cdn.poehali.dev/projects/8d42f4f6-29e1-4318-90ac-f608e10f1b44/files/3c16f3a0-8a63-4a0b-a5fa-40dbd949c00b.jpg',
      instructions: [
        'Нанести 1-2 капли на губку',
        'Вспенить под струей воды',
        'Помыть посуду',
        'Тщательно прополоскать чистой водой'
      ]
    },
    {
      id: 3,
      name: 'Полироль для пластика',
      category: 'Автохимия',
      description: 'Восстанавливает цвет и блеск пластиковых деталей салона',
      image: 'https://cdn.poehali.dev/projects/8d42f4f6-29e1-4318-90ac-f608e10f1b44/files/8a3f3c19-fdfe-49d4-afe1-9d85cd15797d.jpg',
      instructions: [
        'Очистить поверхность от пыли и грязи',
        'Нанести небольшое количество средства на мягкую ткань',
        'Равномерно распределить по поверхности',
        'Отполировать сухой салфеткой до блеска'
      ]
    },
    {
      id: 4,
      name: 'Универсальный очиститель',
      category: 'Бытовая химия',
      description: 'Эффективно удаляет жир и загрязнения с любых поверхностей',
      image: 'https://cdn.poehali.dev/projects/8d42f4f6-29e1-4318-90ac-f608e10f1b44/files/3c16f3a0-8a63-4a0b-a5fa-40dbd949c00b.jpg',
      instructions: [
        'Распылить на загрязненную поверхность с расстояния 15-20 см',
        'Дать средству подействовать 30-60 секунд',
        'Протереть влажной тряпкой',
        'При сильных загрязнениях повторить процедуру'
      ]
    },
    {
      id: 5,
      name: 'Воск для кузова',
      category: 'Автохимия',
      description: 'Защитный воск с водоотталкивающим эффектом',
      image: 'https://cdn.poehali.dev/projects/8d42f4f6-29e1-4318-90ac-f608e10f1b44/files/8a3f3c19-fdfe-49d4-afe1-9d85cd15797d.jpg',
      instructions: [
        'Наносить только на чистую и сухую поверхность',
        'Распределить тонким слоем круговыми движениями',
        'Дать высохнуть до матового оттенка (5-10 минут)',
        'Отполировать мягкой микрофиброй'
      ]
    },
    {
      id: 6,
      name: 'Средство для стекол',
      category: 'Бытовая химия',
      description: 'Не оставляет разводов, подходит для зеркал и стеклянных поверхностей',
      image: 'https://cdn.poehali.dev/projects/8d42f4f6-29e1-4318-90ac-f608e10f1b44/files/3c16f3a0-8a63-4a0b-a5fa-40dbd949c00b.jpg',
      instructions: [
        'Распылить на стекло или зеркало',
        'Протереть чистой сухой тряпкой или бумажным полотенцем',
        'Для лучшего результата использовать микрофибру',
        'Не применять под прямыми солнечными лучами'
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
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">М</span>
              </div>
              <span className="text-2xl font-bold text-secondary">МАДЖЕСТИК</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className={`transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className={`transition-colors ${activeSection === 'catalog' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                Каталог
              </button>
              <button onClick={() => scrollToSection('about')} className={`transition-colors ${activeSection === 'about' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                О компании
              </button>
              <button onClick={() => scrollToSection('delivery')} className={`transition-colors ${activeSection === 'delivery' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                Доставка
              </button>
              <button onClick={() => scrollToSection('partners')} className={`transition-colors ${activeSection === 'partners' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                Партнерам
              </button>
              <button onClick={() => scrollToSection('contacts')} className={`transition-colors ${activeSection === 'contacts' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                Контакты
              </button>
            </div>
            <Button variant="default" className="hidden md:inline-flex">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Заказать
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                  Профессиональная химия для вашего бизнеса
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Автомобильная и бытовая химия премиум-класса от производителя. Качество, проверенное временем.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => scrollToSection('catalog')} className="group">
                    Смотреть каталог
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('partners')}>
                    Стать партнером
                  </Button>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/8d42f4f6-29e1-4318-90ac-f608e10f1b44/files/d0ba21e1-0244-4a6c-a471-42bbaea1e9c4.jpg" 
                  alt="Производство химии" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-secondary">15+ лет</p>
                      <p className="text-sm text-muted-foreground">на рынке</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Каталог продукции</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Широкий ассортимент автомобильной и бытовой химии с подробными инструкциями
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="instructions" className="border-none">
                        <AccordionTrigger className="text-primary hover:text-primary/80">
                          <div className="flex items-center">
                            <Icon name="FileText" size={16} className="mr-2" />
                            Инструкция по применению
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ol className="space-y-2 mt-2">
                            {product.instructions.map((step, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold mr-3 flex-shrink-0">
                                  {idx + 1}
                                </span>
                                <span className="text-sm text-muted-foreground">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">О компании Маджестик</h2>
                <p className="text-muted-foreground mb-4">
                  Компания Маджестик уже более 15 лет занимается производством и поставкой профессиональной автомобильной и бытовой химии. Мы гордимся качеством нашей продукции и доверием наших клиентов.
                </p>
                <p className="text-muted-foreground mb-6">
                  Наша миссия — предоставлять эффективные и безопасные решения для ухода за автомобилями и домом. Все продукты проходят строгий контроль качества и соответствуют международным стандартам.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Factory" size={32} className="text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-secondary">15+</p>
                    <p className="text-sm text-muted-foreground">лет опыта</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Package" size={32} className="text-accent" />
                    </div>
                    <p className="text-2xl font-bold text-secondary">500+</p>
                    <p className="text-sm text-muted-foreground">продуктов</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Users" size={32} className="text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-secondary">5000+</p>
                    <p className="text-sm text-muted-foreground">клиентов</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/8d42f4f6-29e1-4318-90ac-f608e10f1b44/files/d0ba21e1-0244-4a6c-a471-42bbaea1e9c4.jpg" 
                  alt="О компании" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="delivery" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">Условия доставки</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Truck" size={24} className="text-primary" />
                    </div>
                    <CardTitle>Быстрая доставка</CardTitle>
                    <CardDescription>
                      Доставляем по всей России в течение 3-7 рабочих дней
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="PackageCheck" size={24} className="text-accent" />
                    </div>
                    <CardTitle>Гарантия качества</CardTitle>
                    <CardDescription>
                      Все товары проходят контроль качества перед отправкой
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Wallet" size={24} className="text-primary" />
                    </div>
                    <CardTitle>Выгодные условия</CardTitle>
                    <CardDescription>
                      Бесплатная доставка при заказе от 10 000 рублей
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Тарифы доставки</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <p className="font-semibold">По Москве</p>
                        <p className="text-sm text-muted-foreground">1-2 рабочих дня</p>
                      </div>
                      <p className="text-lg font-bold text-primary">500 ₽</p>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <p className="font-semibold">Московская область</p>
                        <p className="text-sm text-muted-foreground">2-3 рабочих дня</p>
                      </div>
                      <p className="text-lg font-bold text-primary">800 ₽</p>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <p className="font-semibold">Регионы России</p>
                        <p className="text-sm text-muted-foreground">3-7 рабочих дней</p>
                      </div>
                      <p className="text-lg font-bold text-primary">от 1200 ₽</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">Самовывоз</p>
                        <p className="text-sm text-muted-foreground">г. Москва, ул. Производственная, 12</p>
                      </div>
                      <p className="text-lg font-bold text-accent">Бесплатно</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="partners" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Информация для партнеров</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Приглашаем к сотрудничеству автомойки, магазины автохимии и клининговые компании
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="text-left">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="TrendingDown" size={24} className="text-primary" />
                    </div>
                    <CardTitle>Оптовые цены</CardTitle>
                    <CardDescription>
                      Специальные цены для партнеров со скидками до 40% от розничной стоимости
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-left">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Handshake" size={24} className="text-accent" />
                    </div>
                    <CardTitle>Индивидуальный подход</CardTitle>
                    <CardDescription>
                      Персональный менеджер и гибкие условия сотрудничества для каждого партнера
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-left">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="GraduationCap" size={24} className="text-primary" />
                    </div>
                    <CardTitle>Обучение персонала</CardTitle>
                    <CardDescription>
                      Бесплатные тренинги и семинары по использованию продукции
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-left">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Megaphone" size={24} className="text-accent" />
                    </div>
                    <CardTitle>Маркетинговая поддержка</CardTitle>
                    <CardDescription>
                      Предоставляем рекламные материалы и поддержку в продвижении
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Button size="lg" className="group">
                Стать партнером
                <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Контакты и связь</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-white/80">г. Москва, ул. Производственная, д. 12, корп. 3</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-white/80">+7 (495) 123-45-67</p>
                      <p className="text-white/80">+7 (495) 123-45-68</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-white/80">info@majestic-chem.ru</p>
                      <p className="text-white/80">sales@majestic-chem.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-white/80">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-white/80">Сб-Вс: выходной</p>
                    </div>
                  </div>
                </div>

                <Card className="bg-white/10 border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Отправить сообщение</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                    <textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                    />
                    <Button className="w-full bg-white text-secondary hover:bg-white/90">
                      Отправить
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary/5 border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">М</span>
              </div>
              <span className="text-lg font-bold text-secondary">МАДЖЕСТИК</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Маджестик. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
