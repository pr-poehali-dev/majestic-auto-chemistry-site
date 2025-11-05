import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
              Профессиональная химия из Самары
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Автомобильная и бытовая химия от производителя. 5 лет качества и надежности.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection('catalog')} className="group bg-accent hover:bg-accent/90">
                Смотреть каталог
                <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('partners')} className="border-accent text-accent hover:bg-accent hover:text-white">
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
                  <p className="text-2xl font-bold text-secondary">5 лет</p>
                  <p className="text-sm text-muted-foreground">на рынке</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
