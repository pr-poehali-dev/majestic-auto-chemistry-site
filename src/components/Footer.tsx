const Footer = () => {
  return (
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
  );
};

export default Footer;
