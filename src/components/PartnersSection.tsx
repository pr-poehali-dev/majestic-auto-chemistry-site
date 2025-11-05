import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PartnersSection = () => {
  return (
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

          <Button size="lg" className="group bg-accent hover:bg-accent/90">
            Стать партнером
            <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
