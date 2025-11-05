import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  instructions: string[];
}

interface CatalogSectionProps {
  products: Product[];
}

const CatalogSection = ({ products }: CatalogSectionProps) => {
  return (
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
  );
};

export default CatalogSection;
