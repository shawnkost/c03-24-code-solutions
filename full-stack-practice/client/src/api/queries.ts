export async function getProducts() {
  const response = await fetch('/api/products');
  if (!response.ok) throw new Error('Failed to fetch products');
  const products = await response.json();
  return products;
}

export async function getProduct(id: number) {
  const response = await fetch(`/api/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  const product = await response.json();
  return product;
}
