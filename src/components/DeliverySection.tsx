import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const DeliverySection = () => {
  return (
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
                    <p className="font-semibold">По Самаре</p>
                    <p className="text-sm text-muted-foreground">1-2 рабочих дня</p>
                  </div>
                  <p className="text-lg font-bold text-primary">400 ₽</p>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <p className="font-semibold">Самарская область</p>
                    <p className="text-sm text-muted-foreground">2-3 рабочих дня</p>
                  </div>
                  <p className="text-lg font-bold text-primary">700 ₽</p>
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
                    <p className="text-sm text-muted-foreground">г. Самара, Промышленный район</p>
                  </div>
                  <p className="text-lg font-bold text-accent">Бесплатно</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
