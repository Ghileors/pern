import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Phones' },
      { id: 2, name: 'Refrigerators' },
      { id: 3, name: 'TV sets' },
      { id: 4, name: 'Vacuum cleaners' },
    ];
    this._brands = [
      { id: 1, name: 'OnePlus' },
      { id: 2, name: 'Samsung' },
      { id: 3, name: 'Xiaomi' },
      { id: 4, name: 'Apple' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Nord 8/128 Blue Marble',
        price: 12799,
        rating: 0,
        img:
          'https://avic.ua/assets/cache/products/229887/smartfon-oneplus-nord-8-128gb-blue-marble-prod_md.jpg',
      },
      {
        id: 2,
        name: 'Samsung Galaxy S21',
        price: 26999,
        rating: 0,
        img:
          'https://avic.ua/assets/cache/products/240480/smartfon-samsung-galaxy-s21-8-128gb-phantom-gray-sm-g991bzadsek-2-prod_md.jpg',
      },
      {
        id: 3,
        name: 'Xiaomi Mi 10T 8/128GB',
        price: 13699,
        rating: 0,
        img:
          'https://avic.ua/assets/cache/products/234257/smartfon-xiaomi-mi-10t-pro-5g-8-128gb-lunar-silver-prod_md.jpg',
      },
      {
        id: 4,
        name: 'Apple iPhone 11 64Gb',
        price: 21999,
        rating: 0,
        img:
          'https://avic.ua/assets/cache/products/220017/apple-iphone-11-green-1-prod_sm.jpg',
      },
      {
        id: 5,
        name: 'Apple iPhone 11 64Gb',
        price: 21999,
        rating: 0,
        img:
          'https://avic.ua/assets/cache/products/220017/apple-iphone-11-green-1-prod_sm.jpg',
      },
      {
        id: 6,
        name: 'Apple iPhone 11 64Gb',
        price: 21999,
        rating: 0,
        img:
          'https://avic.ua/assets/cache/products/220017/apple-iphone-11-green-1-prod_sm.jpg',
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this.types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
