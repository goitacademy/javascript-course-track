/**
 * Utwórz karty produktów na podstawie tablicy products,
 * przykładowa karta https://prnt.sc/KmgDlzqOIA3M
 *
 * Zaimplementuj delegowanie zdarzeń na kolekcji kart.
 * Po kliknięciu karty powinno pojawić się okno modalne
 * ze szczegółowymi informacjami o produkcie,
 * przykład okna modalnego https://prnt.sc/vWNoCeZcw7ii
 *
 * W celu zaimplementowania okna modalnego, użyj
 * biblioteki basicLightbox (https://github.com/electerious/basicLightbox
 */

const products = [
  {
    id: 1,
    img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
    name: "Monitor",
    price: 3000,
    description: "23-inch monitor with Full HD resolution.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
    name: "Laptop",
    price: 20000,
    description:
      "Lightweight and powerful laptop with a 15-inch display and SSD.",
  },
  {
    id: 3,
    img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
    name: "Smartphone",
    price: 8000,
    description: "Equipped with a triple camera and a multi-core processor.",
  },
  {
    id: 4,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Tablet",
    price: 12000,
    description: "10-inch tablet with high performance and a Retina display.",
  },
];

const container = document.querySelector(".products");

container.insertAdjacentHTML("beforeend", createMarkup(products));
container.addEventListener("click", handlerProductClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, price }) => `
        <li data-id="${id}" class="item product-item">
            <img src="${img}" alt="${name}" width="300"/>
            <h2>${name}</h2>
            <p>Ціна: ${price} uah</p>
        </li>`
    )
    .join("");
}

function handlerProductClick(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }

  const currentProduct = evt.target.closest(".product-item");
  const id = currentProduct.dataset.id;
  const product = products.find(
    ({ id: productId }) => productId === Number(id)
  );

  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${product.img}" alt="${product.name}"/>
      <h2>${product.name}</h2>
      <h3>${product.price} uah</h3>
      <p>${product.description}</p>
    </div>
`);
  instance.show();
}
