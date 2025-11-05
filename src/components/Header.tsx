import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
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
  );
};

export default Header;
