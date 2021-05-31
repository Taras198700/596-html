const products = `
[
  {
    "id": "1",
    "name": "Abstraction",
    "description": "Wall decoration for lovers of original interiors and unique handmade items.",
    "information": "An abstract painting made in the technique of embroidery and painting on fabric, decorated with wooden beads.Diameter: 20 cm",
    "imgUrl": "img/Abstraction.jpg",
    "price": "50"
  },

  {
    "id": "2",
    "name": "Bouquet 17",
    "description": "A bouquet embroidered by hand on linen.",
    "information": "A unique item in soft, natural colors. An original wall decoration, perfect for lovers of plants and original interiors. The back of the painting is finished with cardboard. A wooden hoop serves as a frame. Diameter: approx. 17 cm",
    "imgUrl": "img/Bouquet 17.png",
    "price": "45"
  },

  {
    "id": "3",
    "name": "Bronze bouquet 17cm",
    "description": "A bouquet embroidered by hand on linen.",
    "information": "A unique item in soft, natural colors. An original wall decoration, perfect for lovers of plants and original interiors. The back of the painting is finished with cardboard. A wooden hoop serves as a frame. Diameter: approx. 17 cm",
    "imgUrl": "img/Bronze bouquet 17cm.png",
    "price": "65"
  },

  {
    "id": "4",
    "name": "Bouquet XL",
    "description": "Original wall decoration. The golden screw serves as a pendant.",
    "information": "The bouquet with wild flowers and grasses is made of linen. The perfect decoration for lovers of plants and modern interiors. Decorated with small wooden beads. Diameter: approx. 23 cm. All works are unique and created with passion.",
    "imgUrl": "img/Bouquet XL.jpg",
    "price": "98"
  },

  {
    "id": "5",
    "name": "Jungle 14",
    "description": "Embroidery made by hand on linen.",
    "information": "A unique item in natural colors. An original wall decoration, perfect for lovers of plants and original interiors. Great gift idea! The back of the painting is finished with cardboard. The hoop serves as a frame. The frame is made of wood. Diameter: approx. 14 cm",
    "imgUrl": "img/Jungle 14.png",
    "price": "85"
  },

  {
    "id": "6",
    "name": "Flowers 17 - VINTAGE collection",
    "description": "VINTAGE collection - minimalist patterns in shades of brown, hand-embroidered with brown thread on natural linen.",
    "information": "Wall decoration, original interior accessory, perfect for plant lovers. Diameter: 17 cm",
    "imgUrl": "img/Flowers 17 - VINTAGE collection.png",
    "price": "78"
  },

  {
    "id": "7",
    "name": "Leaves 14 VINTAGE",
    "description": "VINTAGE collection - minimalist patterns in shades of brown, hand-embroidered with brown thread on natural linen.",
    "information": "Wall decoration, original interior accessory, perfect for plant lovers. Diameter: 14.5 cm",
    "imgUrl": "img/Leaves 14 VINTAGE.jpg",
    "price": "68"
  },

  {
    "id": "8",
    "name": "Tropical leaves 14cm",
    "description": "A minimalist wall decoration embroidered with a brown thread on white linen. The hoop serves as a picture frame.",
    "information": "The back of the painting is finished with a cardboard with a painted black branch. Diameter: 14.5 cm",
    "imgUrl": "img/Tropical leaves 14cm.png",
    "price": "57"
  }  
]`;

(function renderProductItems() {
  const productItems =  JSON.parse(products);
  let productsHtml = '';
  for (const product of productItems) {
    productsHtml += getProductItemHtml(product);
  }
  document.querySelector('.shop-items').innerHTML = productsHtml;
})()


function getProductItemHtml (item) {
  return `
  <article>
    <a href="product.html"><img src="${item.imgUrl}" alt="Natural soap" class="soap-image"></a>
    <h3><a href="product.html" class="soap-name">${item.name}</a></h3>
    <p class="soap-price">$ ${item.price}</p>
    <a href="#cart" class="button">Add to Cart</a>
  </article>
  `;
}



