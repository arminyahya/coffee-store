import coffees from "@/data/coffees";

export async function getAllProducts() {
  return coffees;
}

export async function getProductByID(id: number) {
  const data = coffees.filter((c) => c.id == id);
  return data[0];
}

export async function getAllProductsByCategory(category: "mix" | "turk" | "decaffee") {
  const data = coffees.filter((c) => c.category == category.toLocaleLowerCase());
  return data;
}