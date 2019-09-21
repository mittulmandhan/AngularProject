import { Injectable } from '@angular/core';

import { Cart } from '../models/cart';
import { environment } from 'src/environments/environment';
import { CartItem } from '../models/cartItem';
import { UserModel } from '../models/user';

declare const $: any;
declare const CryptoJS: any;
declare const localStorage: any;

@Injectable()
export class CartService {
  private cart: Cart;
  constructor() {
    this.cart = new Cart();
  }

  saveCart() {
    if (localStorage != null) {
      const data = JSON.stringify(this.cart.Items);
      const encData = CryptoJS.AES.encrypt(data, environment.encKey);
      localStorage[this.cart.CartName] = encData;
    }
  }

  getCart() {
    if (localStorage != null && localStorage[this.cart.CartName] !== undefined && localStorage[this.cart.CartName] !== '') {
      const encData = localStorage[this.cart.CartName];
      const bytes = CryptoJS.AES.decrypt(encData.toString(), environment.encKey);
      const data = bytes.toString(CryptoJS.enc.Utf8);

      this.cart.Items = JSON.parse(data);
      this.calculateCart();
    }
    return this.cart;
  }
  clearCart() {
    this.cart.Items = [];
    this.cart.Total = 0;
    if (localStorage != null) {
      localStorage[this.cart.CartName] = '';
    }
    this.cart.TotalItems = 0;
    this.cart.Total = 0;
  }

  calculateCart() {
    let count = 0;
    let price = 0;
    for (let i = 0; i < this.cart.Items.length; i++) {
      const item = this.cart.Items[i];
      count += item.Quantity;
      price += this.cart.Items[i].Total = item.Quantity * item.UnitPrice;
    }
    this.cart.TotalItems = count;
    this.cart.Total = price;
  }

  addToCart(ProductId: number, Name: string, UnitPrice: number, Quantity: number) {

    if (Quantity !== undefined) {
      // update Quantity for existing item
      let found = false;
      for (let i = 0; i < this.cart.Items.length && !found; i++) {
        const item: CartItem = this.cart.Items[i];
        if (item.ProductId === ProductId) {
          found = true;
          item.Quantity = item.Quantity + Quantity;
        }
      }
      // new item, add now
      if (!found) {
        const item = new CartItem(ProductId, Name, UnitPrice, Quantity);
        this.cart.Items.push(item);
      }
      this.calculateCart();
      // save changes
      this.saveCart();
    }
  }

  deleteFromCart(ProductId: number) {
    for (let i = 0; i < this.cart.Items.length; i++) {
      const item = this.cart.Items[i];
      if (item.ProductId === ProductId) {
        this.cart.Items.splice(i, 1);
      }
    }
    this.calculateCart();
    // save changes
    this.saveCart();
  }

  checkoutPayUmoney(user: UserModel) {
    const params = {
      url: environment.paymentGatewayUrl,
      options: {
        key: environment.paymentGatewaykey,
        salt: environment.paymentGatewaysalt,
        txnid: (Math.random() * 10000000000).toFixed(0), // with 10 numbers
        amount: this.cart.Total,
        productinfo: this.cart.CartName + '_' + this.cart.Total,
        firstname: user.Name,
        email: user.Username,
        phone: user.ContactNo,
        surl: environment.baseAddress + '/home/paymentstatus',
        furl: environment.baseAddress + '/home/paymentstatus',
        service_provider: '',
        hash: '',
        udf1: this.cart.CartId,
        udf2: user.UserId
      }
    };

    const str = params.options.key + '|' + params.options.txnid + '|'
     + params.options.amount + '|' + params.options.productinfo + '|' + params.options.firstname + '|' +
    params.options.email + '|' + params.options.udf1 + '|' + params.options.udf2 + '|||||||||' + params.options.salt;

    // console.log(str);
    params.options.hash = CryptoJS.SHA512(str).toString();

    //  console.log(params.options.hash);
    // build form
    const form = $('<form/></form>');
    form.attr('action', params.url);
    form.attr('method', 'POST');
    form.attr('style', 'display:none;');
    this.addFormFields(form, params.options);
    $('body').append(form);

    // submit form
    this.clearCart();

    form.submit();
    form.remove();
  }

  // adding hidden fields to form
  addFormFields(form: any, data: any) {
    if (data != null) {
      $.each(data, function(Name: string, value: string) {
        if (value != null) {
          const input = $('<input></input>').attr('type', 'hidden').attr('Name', Name).val(value);
          form.append(input);
        }
      });
    }
  }
}
