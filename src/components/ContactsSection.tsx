import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
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
                  <p className="text-white/80">г. Самара, Промышленный район</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-white/80">+7 (846) 123-45-67</p>
                  <p className="text-white/80">+7 (846) 123-45-68</p>
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
  );
};

export default ContactsSection;
