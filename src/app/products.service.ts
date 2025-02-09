import { Injectable, signal } from '@angular/core';
export interface Product {
  id: number;
  name: string;
  category: string;
  location: string;
  description: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Olio Extra Vergine di Oliva Farchioni Classico 1L',
    category: 'Alimentari',
    location: 'Umbria, Italia',
    description:
      'Olio extra vergine di oliva di alta qualità, estratto a freddo, ideale per condire insalate e piatti a base di verdure.',
    image:
      'https://media.gettyimages.com/id/1372544403/nl/foto/an-arrangement-featuring-a-bottle-of-olive-oil-and-olives-in-oil-with-an-olive-sprig-on-a.jpg?s=612x612&w=0&k=20&c=atTGzSBwsD4zzXyxEURaZkXxQPO6Eg7zzRtzx7V8ONU=',
  },
  {
    id: 2,
    name: 'Formaggio Parmigiano Reggiano 13 Mesi',
    category: 'Alimentari',
    location: 'Emilia-Romagna, Italia',
    description:
      'Formaggio stagionato 13 mesi, dal sapore ricco e complesso, ideale da grattugiare o gustare a scaglie.',
    image:
      'https://media.gettyimages.com/id/1446269717/nl/foto/pizza-cheese-in-black-plate-food-background.jpg?s=612x612&w=0&k=20&c=wuwZ2KhR_WF1l_m8esnJH4GjgiE_O_0752cwtCGJg-M=',
  },
  {
    id: 3,
    name: 'Chianti Classico Le Lame 2021',
    category: 'Bevande',
    location: 'Toscana, Italia',
    description:
      'Vino rosso DOCG prodotto nella regione del Chianti, con note fruttate e speziate, ideale per accompagnare carni rosse e formaggi stagionati.',
    image:
      'https://media.gettyimages.com/id/1234466211/nl/foto/topshot-producer-of-wine-and-president-of-the-local-professional-growers-association-peter.jpg?s=612x612&w=0&k=20&c=iLeQNkiVAKUFcoRsG6gsoazIVn1mmTTvhqtR0N7LvBM=',
  },
  {
    id: 4,
    name: 'Pasta di Gragnano IGP',
    category: 'Alimentari',
    location: 'Campania, Italia',
    description:
      'Pasta artigianale trafilata al bronzo, prodotta a Gragnano secondo la tradizione, perfetta per piatti di alta qualità.',
    image: 'https://www.fabbricadellapastadigragnano-eng.com/',
  },
  {
    id: 5,
    name: 'Caffè Espresso Italiano',
    category: 'Bevande',
    location: 'Italia',
    description:
      'Miscela di caffè selezionati per un espresso dal gusto intenso e aromatico, ideale per una pausa energizzante.',
    image:
      'https://firstclassaromawhitecoffee.blogspot.com/2015/12/how-to-prepare-good-italian-espresso.html',
  },
  {
    id: 6,
    name: 'Cioccolato Fondente Artigianale',
    category: 'Dolci',
    location: 'Piemonte, Italia',
    description:
      'Cioccolato fondente al 70% prodotto artigianalmente con fave di cacao selezionate.',
    image: 'https://www.example.com/cioccolato_fondente.jpg',
  },
  {
    id: 7,
    name: 'Miele di Acacia Bio',
    category: 'Alimentari',
    location: 'Lombardia, Italia',
    description:
      'Miele biologico di acacia dal sapore delicato e dalla consistenza fluida.',
    image: 'https://www.example.com/miele_acacia.jpg',
  },
  {
    id: 8,
    name: 'Tartufo Nero Pregiato',
    category: 'Alimentari',
    location: 'Umbria, Italia',
    description:
      'Tartufo nero pregiato raccolto nei boschi umbri, ideale per piatti gourmet.',
    image: 'https://www.example.com/tartufo_nero.jpg',
  },
  {
    id: 9,
    name: 'Limoncello Artigianale',
    category: 'Bevande',
    location: 'Campania, Italia',
    description:
      'Liquore tipico prodotto con limoni della Costiera Amalfitana.',
    image: 'https://www.example.com/limoncello.jpg',
  },
  {
    id: 10,
    name: 'Riso Carnaroli Superfino',
    category: 'Alimentari',
    location: 'Piemonte, Italia',
    description:
      'Riso Carnaroli ideale per la preparazione di risotti cremosi.',
    image: 'https://www.example.com/riso_carnaroli.jpg',
  },
] as const satisfies Product[];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = signal(PRODUCTS);
}
