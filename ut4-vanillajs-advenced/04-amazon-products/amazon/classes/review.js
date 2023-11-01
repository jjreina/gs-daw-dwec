export class Review {
  rating;
  totalReviews;
  constructor(rating, totalReviews) {
    this.rating = rating;
    this.totalReviews = totalReviews;
  }

  get rating() {
    return this.rating;
  }

  get totalReviews() {
    return this.totalReviews;
  }
}
