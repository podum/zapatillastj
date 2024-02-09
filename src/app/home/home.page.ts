import { Component } from '@angular/core';
import { Firestore, getDocs, doc, collection, writeBatch } from '@angular/fire/firestore';
// import {
//   Auth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   UserCredential
// } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // products: any = [
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/81mwzQUVmxL._AC_SY535_.jpg",
  //     price: 2100,
  //     sizes: [6],
  //     name: "Pedrerias '7"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/51rZYfM0zDL._AC_SX500_.jpg",
  //     price: 900,
  //     sizes: [7],
  //     name: "Botas bolsillas blancas"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/817LbQiQlpL._AC_SY395_.jpg",
  //     price: 2100,
  //     sizes: [11],
  //     name: "Pedrerias '7"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/81JjHqIkEpL._AC_SY625_.jpg",
  //     price: 1200,
  //     sizes: [7],
  //     name: "Goth negra"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/81OGmAtNVsL._AC_SY395_.jpg",
  //     price: 1400,
  //     sizes: [6, 9],
  //     name: "Platformas negras"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/71NOHaAtHsL._AC_SY695_.jpg",
  //     price: 1700,
  //     sizes: [6],
  //     name: "Botas Terciopelos Muslos"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/81mFi2+JPfL._AC_SY395_.jpg",
  //     price: 1000,
  //     sizes: [8],
  //     name: "Tira de pedreria"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/711ybzDQ1kL._AC_SY675_.jpg",
  //     price: 1500,
  //     sizes: [6,7],
  //     name: "Botas rosas"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/81vTSPiNoEL._AC_SY500_.jpg",
  //     price: 700,
  //     sizes: [8],
  //     name: "Bajitas con pedreria"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/819zhXBsT4L._AC_SY500_.jpg",
  //     price: 600,
  //     sizes: [6,10,11],
  //     name: "Bajitas transparentes"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/71ruFREJDnL._AC_SY695_.jpg",
  //     price: 1400,
  //     sizes: [6,7,8],
  //     name: "Piedras rosas"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/71WL1yBe7LL._AC_SX500_.jpg",
  //     price: 1200,
  //     sizes: [7,10],
  //     name: "Negro con piedras"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/81Ve3R0qU-L._AC_SY500_.jpg",
  //     price: 1600,
  //     sizes: [7],
  //     name: "Pedrerías '6"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/7191sEUdqSL._AC_SY395_.jpg",
  //     price: 1100,
  //     sizes: [7],
  //     name: "Borla pedrería"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/91-z35I6lbL._AC_SY535_.jpg",
  //     price: 1000,
  //     sizes: [8],
  //     name: "Rejilla negro"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/81TAHoBw0eL._AC_SY625_.jpg",
  //     price: 1200,
  //     sizes: [8],
  //     name: "Hojas arcoiris"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/81NBwfn0LkL._AC_SX500_.jpg",
  //     price: 800,
  //     sizes: [10],
  //     name: "Arcoíris"
  //   },
  //   {
  //     category: "shoes",
  //     photoURL: "https://m.media-amazon.com/images/I/818j8kVbPeL._AC_SY535_.jpg",
  //     price: 1800,
  //     sizes: [10],
  //     name: "Brillo dorado"
  //   }/*,
  //   {
  //     category: "shoes",
  //     photoURL: "",
  //     price: 0,
  //     sizes: [],
  //     name: ""
  //   }
  // */];

  products: any = [];
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

  constructor(private firestore: Firestore) {
    this.loadProducts();
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
    let p = this.products.filter((product: any) => product.sizes[this.size] !== false);
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
    return `https://wa.me/526648171162?text=${encodedMessage}`;
  }

  async loadProducts() {    
    const productsRef = collection(this.firestore, 'products');
    const querySnap = await getDocs(productsRef);
    querySnap.docs.forEach(async (p: any) => {
      const prd = {
        id: p.id,
        ...p.data()
      };
      this.products.push(prd)
    });
    this.filteredProducts = this.filterProductsBySize();
  }

  // login(): Promise<UserCredential> {
  //     return signInWithPopup(this._auth, new GoogleAuthProvider());
  //   }
  // }

}
