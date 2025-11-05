import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">О компании Маджестик</h2>
            <p className="text-muted-foreground mb-4">
              Компания Маджестик из Самары уже 5 лет занимается производством и поставкой профессиональной автомобильной и бытовой химии. Мы специализируемся на автошампунях различных серий и качественной бытовой химии.
            </p>
            <p className="text-muted-foreground mb-6">
              Наша продукция включает автошампуни Light и Extra для разных типов загрязнений, натуральное хозяйственное мыло и универсальные средства для дома. Все продукты производятся в Самаре с контролем качества.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Factory" size={32} className="text-primary" />
                </div>
                <p className="text-2xl font-bold text-secondary">5</p>
                <p className="text-sm text-muted-foreground">лет опыта</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Package" size={32} className="text-accent" />
                </div>
                <p className="text-2xl font-bold text-secondary">4</p>
                <p className="text-sm text-muted-foreground">линейки продукции</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <p className="text-2xl font-bold text-secondary">1000+</p>
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
  );
};

export default AboutSection;
