export class Product {
  nameProduct;
  urlProduct;
  urlImage;
  score;
  price;
  review;
  constructor(nameProduct, urlProduct, urlImage, score, price, review) {
    this.nameProduct = nameProduct;
    this.urlProduct = urlProduct;
    this.urlImage = urlImage;
    this.score = score;
    this.price = price;
    this.review = review;
  }
}
