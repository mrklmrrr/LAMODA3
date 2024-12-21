export function generateGoods(length = 10) {
  const goods = [];

  for (let i = 0; i < length; i++) {
    goods.push(generateGood());
  }

  return goods;
}

const names = [
  "Sneakers",
  "Shoes",
  "Jeans",
  "T-shirt",
  "Shirt",
  "Sweatshirt",
  "Hoodie",
  "Heels",
  "Trainers",
  'Bag',
  "Glasses"
];

const imgUrls = [
  "https://i.pinimg.com/enabled_lo/564x/3a/63/b3/3a63b3a0afa9f8af13671ef5ad360595.jpg",
  "https://i.pinimg.com/enabled_lo/564x/55/62/27/556227b02481c59162ac29bdb2c79ac0.jpg",
  "https://i.pinimg.com/564x/d3/e8/7a/d3e87a8e854091fccba2619128d0df20.jpg",
  "https://i.pinimg.com/enabled_lo/564x/66/f6/46/66f6463dd77385adf188157c5f9cf46b.jpg",
  "https://i.pinimg.com/enabled_lo/564x/c6/d2/2a/c6d22a2206a39a3cdfed4d9aad088ed0.jpg",
  "https://i.pinimg.com/enabled_lo/564x/6f/ec/14/6fec14a595680e3d988e01db00098385.jpg",
  "https://i.pinimg.com/enabled_lo/564x/74/e4/2b/74e42b470ebbc89c04004f19e4a290e9.jpg",
  "https://i.pinimg.com/736x/6f/dc/bc/6fdcbcf5708df2f55ed4c3c332920125.jpg",
  "https://i.pinimg.com/enabled_lo/564x/1f/ef/d4/1fefd457faedd80e1c1323822a54b44b.jpg",
  "https://i.pinimg.com/enabled_lo/564x/71/58/19/7158192aa2f6c90fc82b5c8143942f08.jpg",
  "https://i.pinimg.com/564x/1d/a1/de/1da1de6b0f1f2e2c424ed173c3d23564.jpg",
  "https://i.pinimg.com/enabled_lo/564x/f3/1d/25/f31d255bfed466d409b18f68156bb5b1.jpg",
  "https://i.pinimg.com/enabled_lo/564x/8c/62/cb/8c62cbd0908cc89b1866c02a2db5a600.jpg",
  "https://i.pinimg.com/enabled_lo/564x/10/71/28/107128d2a27166d41ca165ed28f34677.jpg",
  "https://i.pinimg.com/564x/b5/c9/5c/b5c95cfc56296ceba43233db6d89fbef.jpg"
];

const colors = [
  "teal",
  "olive",
  "black",
  "white",
  "pink",
  "grey",
  "beige",
  "maroon",
  "yellow"
];

const categories = ["Clothes", "Shoes", "Accessories"];

const descriptions = [
  "Timeless and elegant",
  "Relaxed and easygoing",
  "Bold and eye-catching",
  "Sleek and functional",
  "Cool and effortless",
  "Polished and professional",
  "Warm and timeless",
  "Sophisticated and luxurious",
  "Casual and versatile",
  "Fashionable and edgy"
];

const random = {
  of: (array) => array[Math.floor(Math.random() * array.length)],
  from: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
  id: () => Math.random().toString(36).substring(2)
};

function generateGood() {
  const id = random.id();
  const name = random.of(names);
  const description = random.of(descriptions);
  const color = random.of(colors);
  const price = random.from(10, 10000);
  const rating = random.from(1, 100);
  const imgUrl = random.of(imgUrls);
  const category = random.of(categories);

  return { id, name, description, color, price, rating, imgUrl, category };
}
