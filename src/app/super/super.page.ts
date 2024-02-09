import { Component, OnInit } from '@angular/core';
import { Firestore, addDoc, collection, doc, getDocs, updateDoc, deleteDoc, writeBatch } from '@angular/fire/firestore';

@Component({
  selector: 'app-super',
  templateUrl: './super.page.html',
  styleUrls: ['./super.page.scss'],
})
export class SuperPage implements OnInit {

  products: any = [];
  prdTmpl: any = {
    visible: true,
    category: 'shoe',
    name: '',
    price: '',
    photoURl: '',
    sizes: {
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
    }
  };
  newPrd: any = {};

  sizes: any = [];
  loadedSizes: any = [];

  constructor(private firestore: Firestore) {
    this.loadProducts();
    this.newPrd = this.prdTmpl;
    this.sizes = this.convertSizesToArray(this.prdTmpl.sizes);
  }

  ngOnInit() {
  }

  convertSizesToArray(sizes: object): any[] {
    return Object.entries(sizes).map(([size, checked]) => ({
      size,
      checked
    }));
  }

  // Optional: Update the original sizes object if needed
  updateSizes() {
    for (let sizeObj of this.sizes) {
      this.prdTmpl.sizes[sizeObj.size] = sizeObj.checked;
    }
  }

  // Optional: Update the original sizes object if needed
  updateLoadedSizes(i: any) {
    for (let sizeObj of this.loadedSizes[i].sizes) {
      console.log(sizeObj);
      this.products[i].sizes[sizeObj.size] = sizeObj.checked;
    }
  }
  
  async loadProducts() {    
    const productsRef = collection(this.firestore, 'products');
    const querySnap = await getDocs(productsRef);
    querySnap.docs.forEach(async (p: any) => {
      const prd = {
        id: p.id,
        ...p.data()
      }
      this.products.push(prd);
      let szs = this.convertSizesToArray(prd?.sizes||this.sizes)
      this.loadedSizes.push({sizes:szs});
    });
  }

  async update(product: any) {
    const productRef = doc(this.firestore, 'products', product.id);
    await updateDoc(productRef, product);
    // window.location.reload();
  }

  async remove(product: any) {
    const productRef = doc(this.firestore, 'products', product.id);
    await deleteDoc(productRef);
    window.location.reload();
  }

  async add() {
    // return console.log(this.newPrd);
    const productRef = collection(this.firestore, 'products');
    await addDoc(productRef, this.newPrd);
    this.newPrd = this.prdTmpl;
    window.location.reload();
  }

  // updateProductSizes(selectedSizes: string[]) {
  //   let szs: any = {
  //     5: false,
  //     6: false,
  //     7: false,
  //     8: false,
  //     9: false,
  //     10: false,
  //     11: false,
  //   };
  //   selectedSizes.forEach(size => {
  //     szs[size] = true
  //   });
  //   return szs
  // }

  // async reWrite() {
  //   console.log("Hi");
  //   try {
  //     const batch = writeBatch(this.firestore);
  //     this.products.forEach((p: any) => {
  //       const productsRef = doc(collection(this.firestore, 'products'), p.id);
  //       if(!p.sizes){
  //         p.sizes = {
  //           5: false,
  //           6: false,
  //           7: false,
  //           8: false,
  //           9: false,
  //           10: false,
  //           11: false,
  //         };
  //         console.log(p.name);
  //       }
  //       // Already used
  //       // p.sizes = this.updateProductSizes(p.sizes);
  //       batch.set(productsRef, p, {
  //         merge: true,
  //       })
  //     });
  //     await batch.commit();
  //     console.log("done");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

}
