import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products: any = [
    {
      photoURL: "https://m.media-amazon.com/images/I/81mwzQUVmxL._AC_SY535_.jpg",
      price: 1800,
      sizes: [6],
      name: "Pedrerias '7"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/51rZYfM0zDL._AC_SX500_.jpg",
      price: 1200,
      sizes: [7],
      name: "Botas bolsillas blancas"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/817LbQiQlpL._AC_SY395_.jpg",
      price: 1800,
      sizes: [11],
      name: "Pedrerias '7"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81JjHqIkEpL._AC_SY625_.jpg",
      price: 1500,
      sizes: [7],
      name: "Goth negra"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81OGmAtNVsL._AC_SY395_.jpg",
      price: 1400,
      sizes: [6, 9],
      name: "Platformas negras"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/71NOHaAtHsL._AC_SY695_.jpg",
      price: 1700,
      sizes: [6],
      name: "Terciopelos Muslos"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/61sFAQClBnL._AC_SY695_.jpg",
      price: 1600,
      sizes: [6],
      name: "Botas rodillas negras"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81yiWc3isfL._AC_SY535_.jpg",
      price: 1500,
      sizes: [5,6,11],
      name: "Brillos negros"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81mFi2+JPfL._AC_SY395_.jpg",
      price: 1000,
      sizes: [8],
      name: "Transparentes con pedreria"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/711ybzDQ1kL._AC_SY675_.jpg",
      price: 1500,
      sizes: [6,7],
      name: "Botas rosas"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81vTSPiNoEL._AC_SY500_.jpg",
      price: 700,
      sizes: [6,8],
      name: "Bajias con pedreria"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/819zhXBsT4L._AC_SY500_.jpg",
      price: 600,
      sizes: [6,10,11],
      name: "Bajitas transparentes"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/71ruFREJDnL._AC_SY695_.jpg",
      price: 1600,
      sizes: [7,8],
      name: "Piedras rosas"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/71WL1yBe7LL._AC_SX500_.jpg",
      price: 1200,
      sizes: [7,10],
      name: "Negro con piedras"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81Ve3R0qU-L._AC_SY500_.jpg",
      price: 1600,
      sizes: [7],
      name: "Pedrerías '6"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/71oHHsHvAIL._AC_SY575_.jpg",
      price: 1500,
      sizes: [9,10],
      name: "Incendios"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/61VvAxzPpPS._AC_SY500_.jpg",
      price: 700,
      sizes: [8],
      name: "Oro y brazalete"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/7191sEUdqSL._AC_SY395_.jpg",
      price: 1100,
      sizes: [7],
      name: "Borla pedrería"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/91-z35I6lbL._AC_SY535_.jpg",
      price: 1000,
      sizes: [8],
      name: "Rejilla negro"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81TAHoBw0eL._AC_SY625_.jpg",
      price: 1200,
      sizes: [8],
      name: "Hojas arcoiris"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81NBwfn0LkL._AC_SX500_.jpg",
      price: 800,
      sizes: [10],
      name: "Arcoíris"
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/818j8kVbPeL._AC_SY535_.jpg",
      price: 1500,
      sizes: [10],
      name: "Brillo dorado"
    }/*,
    {
      photoURL: "",
      price: 0,
      sizes: [],
      name: ""
    }
  */];

  filteredProducts: any = [];

  sizes: any = [
    { value: 0, text: "Todas tallas" },
    { value: 5, text: "2mx, 5us, #22" },
    { value: 6, text: "3mx, 6us, #23" },
    { value: 7, text: "4mx, 7us, #24" },
    { value: 8, text: "5mx, 8us, #25" },
    { value: 9, text: "6mx, 9us, #26" },
    { value: 10, text: "7mx, 10us, #27" },
    { value: 11, text: "8mx, 11us, #28" }
  ];

  size: number = 0;

  constructor() {
    this.filteredProducts = this.filterProductsBySize();
  }
  
  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index lower than the current element
      const j = Math.floor(Math.random() * (i + 1));
  
      // Swap elements at indices i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  filterProductsBySize() {
    let p = this.products.filter((product: any) => product.sizes.includes(this.size));
    return (p.length != 0)?p:this.shuffleArray(this.products)
  }

  // Call this method when you want to filter the products, for example, from the UI
  onSizeSelect(event: any) {
    this.size = +(event?.detail?.value||0);
    this.filteredProducts = this.filterProductsBySize();
  }

  sendWhatsApp(product: any): string {
    const message = `${product?.name} talla ${this.size||product?.sizes[0]} aun disponible?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/526643282547?text=${encodedMessage}`;
  }

}
