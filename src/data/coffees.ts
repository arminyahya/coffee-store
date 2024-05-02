type Coffee = {
    id: number;
    title: string;
    prize: string;
    description: string;
    category: 'mix' | 'turk' | 'decaffee'
}

const coffees: Coffee[] = [ { id: 1, title: "Espresso", prize: "$3.50", description: "Intense and full-bodied coffee with a velvety crema", category: "mix" }, { id: 2, title: "Cappuccino", prize: "$4.00", description: "Rich espresso topped with steamed milk and a dollop of foam", category: "mix" }, { id: 3, title: "Latte", prize: "$4.50", description: "Smooth espresso with steamed milk and a thin layer of foam", category: "mix" }, { id: 4, title: "Macchiato", prize: "$3.75", description: "Espresso 'stained' with a small amount of steamed milk", category: "mix" }, { id: 5, title: "Americano", prize: "$3.00", description: "Espresso with hot water added for a long black coffee", category: "mix" }, { id: 6, title: "Turkish Coffee", prize: "$4.50", description: "Traditional method of brewing coffee in a cezve", category: "turk" }, { id: 7, title: "Greek Coffee", prize: "$5.00", description: "Strong and rich coffee brewed in a briki", category: "turk" }, { id: 8, title: "Arabic Coffee", prize: "$4.75", description: "Cardamom-infused coffee served in small cups", category: "turk" }, { id: 9, title: "Colombian Decaf", prize: "$4.25", description: "Decaffeinated Colombian coffee with a mild flavor", category: "decaffee" }, { id: 10, title: "French Roast Decaf", prize: "$4.50", description: "Bold and smoky decaffeinated coffee with a smooth finish", category: "decaffee" },
];

export default coffees;
