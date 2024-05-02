import coffees from "@/data/coffees";

export async function getAllProducts() {
  return coffees;
}

export async function getProductByID(id: number) {
  const data = coffees.filter((c) => c.id == id);
  console.log(data);

  return data[0];
}
