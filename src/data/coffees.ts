type Coffee = {
  id: number;
  title: string;
  prize: string;
  description: string;
  category: "mix" | "turk" | "decaffee";
  imageAddress: string;
};

const coffees: Coffee[] = [
  {
    id: 1,
    title: "Espresso",
    prize: "$2.50",
    description: "Rich and intense coffee flavor with a thick crema on top.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 2,
    title: "Cappuccino",
    prize: "$3.50",
    description:
      "Espresso with steamed milk and a generous amount of frothy foam.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 3,
    title: "Latte",
    prize: "$4.00",
    description: "Espresso with steamed milk and a touch of foam.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 4,
    title: "Macchiato",
    prize: "$2.75",
    description: "Espresso with a dollop of foamed milk.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 5,
    title: "Turkish Coffee",
    prize: "$3.00",
    description: "Traditional Turkish coffee brewed with cardamom.",
    category: "turk",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 6,
    title: "Mocha",
    prize: "$4.50",
    description:
      "Espresso with chocolate and steamed milk, topped with whipped cream.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 7,
    title: "Americano",
    prize: "$3.00",
    description: "Espresso diluted with hot water.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 8,
    title: "Iced Coffee",
    prize: "$3.50",
    description: "Chilled coffee served over ice.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 9,
    title: "Decaf Espresso",
    prize: "$3.00",
    description: "Espresso made from decaffeinated coffee beans.",
    category: "decaffee",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 10,
    title: "Flat White",
    prize: "$4.00",
    description:
      "Espresso with velvety steamed milk and a thin layer of microfoam.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 11,
    title: "Affogato",
    prize: "$4.50",
    description: "Espresso poured over a scoop of vanilla ice cream.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 12,
    title: "Cortado",
    prize: "$3.50",
    description: "Equal parts espresso and steamed milk.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 13,
    title: "Nitro Cold Brew",
    prize: "$5.00",
    description: "Cold brew coffee infused with nitrogen for a creamy texture.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 14,
    title: "Viennese Coffee",
    prize: "$4.50",
    description: "Espresso with whipped cream and a sprinkle of cinnamon.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 15,
    title: "Irish Coffee",
    prize: "$5.00",
    description: "Coffee with a shot of whiskey, sugar, and topped with cream.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 16,
    title: "Turmeric Latte",
    prize: "$4.50",
    description: "Golden milk latte made with turmeric, ginger, and cinnamon.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 17,
    title: "Ristretto",
    prize: "$3.00",
    description: "Very concentrated espresso with a more intense flavor.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 18,
    title: "Cold Brew",
    prize: "$4.00",
    description:
      "Cold steeped coffee brewed over a long period and served cold.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 19,
    title: "Breve",
    prize: "$4.50",
    description: "Espresso with steamed half-and-half instead of milk.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 20,
    title: "Red Eye",
    prize: "$3.50",
    description: "Drip coffee with a shot of espresso.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 21,
    title: "Flat Black",
    prize: "$3.00",
    description: "French press coffee served black without milk or sugar.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 22,
    title: "French Vanilla Latte",
    prize: "$4.50",
    description: "Latte with vanilla syrup and whipped cream.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 23,
    title: "Ice Blended",
    prize: "$5.00",
    description: "Blended iced coffee beverage with a variety of flavors.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 24,
    title: "Mint Mocha",
    prize: "$4.50",
    description: "Mocha with a hint of mint flavor.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 25,
    title: "Marocchino",
    prize: "$3.50",
    description: "Espresso, steamed milk, and cocoa powder.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 26,
    title: "Golden Milk Latte",
    prize: "$4.00",
    description: "Turmeric latte with a blend of spices and honey.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 27,
    title: "Amaretto Coffee",
    prize: "$5.00",
    description: "Coffee with a splash of amaretto liqueur.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 28,
    title: "Pumpkin Spice Latte",
    prize: "$4.50",
    description: "Espresso and steamed milk with pumpkin spice syrup.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 29,
    title: "Dirty Chai Latte",
    prize: "$4.00",
    description: "Chai latte with a shot of espresso.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 30,
    title: "Coconut Latte",
    prize: "$4.50",
    description: "Latte with coconut milk and a hint of sweetness.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 31,
    title: "Caramel Macchiato",
    prize: "$4.00",
    description: "Espresso with steamed milk, vanilla, and caramel drizzle.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 32,
    title: "Banana Latte",
    prize: "$5.00",
    description: "Latte with banana syrup and whipped cream.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 33,
    title: "Cinnamon Dolce Latte",
    prize: "$4.50",
    description:
      "Latte with cinnamon dolce syrup and cinnamon sprinkled on top.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 34,
    title: "Lavender Latte",
    prize: "$4.00",
    description:
      "Latte with lavender syrup and a sprinkle of dried lavender petals.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 35,
    title: "Matcha Latte",
    prize: "$4.50",
    description: "Latte made with matcha green tea powder and steamed milk.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 36,
    title: "Peppermint Mocha",
    prize: "$4.00",
    description: "Mocha with peppermint syrup and topped with whipped cream.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 37,
    title: "Toffee Nut Latte",
    prize: "$5.00",
    description: "Latte with toffee nut syrup and whipped cream.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 38,
    title: "Coconut Mocha",
    prize: "$4.50",
    description: "Mocha with coconut syrup and toasted coconut flakes on top.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 39,
    title: "Hazelnut Latte",
    prize: "$4.00",
    description:
      "Latte with hazelnut syrup and a sprinkle of chopped hazelnuts.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
  {
    id: 40,
    title: "Butter Coffee",
    prize: "$5.00",
    description:
      "Coffee blended with grass-fed butter and coconut oil for a creamy texture.",
    category: "mix",
    imageAddress:
      "https://emkan-coffee.com/wp-content/uploads/2020/12/Emkan-100-s-250.jpg",
  },
];

export default coffees;
