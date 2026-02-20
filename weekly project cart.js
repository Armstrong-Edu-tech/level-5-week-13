export const metadata = {
  title: "Cart | NextShop",
  description: "Your shopping cart",
};


export default function Cart() {
  return (
    <div className="bg-white p-8 shadow rounded max-w-2xl mx-auto">
      <h2 className="text-blue-600 text-2xl font-bold mb-6">
        Your Shopping Cart
      </h2>

      <p className="text-gray-600">
        Your cart is currently empty.
      </p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">
        Continue Shopping
      </button>
    </div>
  );
}
