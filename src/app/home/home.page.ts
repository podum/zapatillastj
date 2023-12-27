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
      sizes: [6]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/51rZYfM0zDL._AC_SX500_.jpg",
      price: 1200,
      sizes: [7]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/817LbQiQlpL._AC_SY395_.jpg",
      price: 1800,
      sizes: [11]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81JjHqIkEpL._AC_SY625_.jpg",
      price: 1500,
      sizes: [7]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81OGmAtNVsL._AC_SY395_.jpg",
      price: 1400,
      sizes: [6, 9]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/71NOHaAtHsL._AC_SY695_.jpg",
      price: 1700,
      sizes: [6]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/61sFAQClBnL._AC_SY695_.jpg",
      price: 1600,
      sizes: [6]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81yiWc3isfL._AC_SY535_.jpg",
      price: 1500,
      sizes: [5,6,11]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81mFi2+JPfL._AC_SY395_.jpg",
      price: 1000,
      sizes: [8]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/711ybzDQ1kL._AC_SY675_.jpg",
      price: 1500,
      sizes: [6,7]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81vTSPiNoEL._AC_SY500_.jpg",
      price: 700,
      sizes: [6,8]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/819zhXBsT4L._AC_SY500_.jpg",
      price: 600,
      sizes: [6,10,11]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/71ruFREJDnL._AC_SY695_.jpg",
      price: 1600,
      sizes: [7,8]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/71WL1yBe7LL._AC_SX500_.jpg",
      price: 1200,
      sizes: [7,10]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81Ve3R0qU-L._AC_SY500_.jpg",
      price: 1600,
      sizes: [7]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/71oHHsHvAIL._AC_SY575_.jpg",
      price: 1500,
      sizes: [9,10]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/61VvAxzPpPS._AC_SY500_.jpg",
      price: 700,
      sizes: [8]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/7191sEUdqSL._AC_SY395_.jpg",
      price: 1100,
      sizes: [7]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/91-z35I6lbL._AC_SY535_.jpg",
      price: 1000,
      sizes: [8]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81TAHoBw0eL._AC_SY625_.jpg",
      price: 1200,
      sizes: [8]
    },
    {
      photoURL: "https://m.media-amazon.com/images/I/81NBwfn0LkL._AC_SX500_.jpg",
      price: 800,
      sizes: [10]
    }/*,
    {
      photoURL: "",
      price: 0,
      sizes: []
    }*/
  ]

  constructor() {}

  filterProductsBySize(size: number) {
    return this.products.filter((product: any) => product.sizes.includes(size));
  }

}
