import "./style.css";

const createParagraphes = (product) => {
  let price = document.createElement("p");
  price.textContent = `Price = ${product.price.currentPrice} ${product.price.currency}`;
  let rating = document.createElement("p");
  rating.textContent = `Rating = ${product.review.rating}`;
  let totalReviews = document.createElement("p");
  totalReviews.textContent = `Total Reviews = ${product.review.totalReviews}`;
  return [price, rating, totalReviews];
};

export const createModal = (product) => {
  const modal = document.createElement("div");
  modal.className = "modal";
  const modalContent = document.createElement("div");
  modalContent.className = "content-modal";

  let productName = document.createElement("h2");
  productName.textContent = product.nameProduct;

  const paragraphes = createParagraphes(product);
  modalContent.appendChild(productName);
  paragraphes.forEach((paragrap) => {
    modalContent.appendChild(paragrap);
  });

  modal.appendChild(modalContent);
  return modal;
};
