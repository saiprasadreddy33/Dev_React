import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, applyDiscount, removeProduct, loadSavedCart, addProduct } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import { formatCurrency } from '../utils/formatCurrency.js';

const Cart = () => {
  const dispatch = useDispatch();
  const { products, discount } = useSelector((state) => state.cart);

  const [localDiscount, setLocalDiscount] = useState(discount);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      dispatch(loadSavedCart(savedCart));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify({ products, discount }));
  }, [products, discount]);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 0) {
      toast.error('Quantity cannot be negative');
      return;
    }
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
    toast.success('Quantity updated');
  };

  const handleApplyDiscount = () => {
    if (localDiscount < 0 || localDiscount > 100) {
      toast.error('Discount should be between 0% and 100%');
      return;
    }
    dispatch(applyDiscount(localDiscount));
    toast.success(`Discount of ${localDiscount}% applied`);
  };

  const handleDiscountChange = (e) => {
    setLocalDiscount(e.target.value);
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
    toast.success('Product removed');
  };

  const handleAddProduct = () => {
    const { name, price, quantity } = newProduct;
    if (!name || price <= 0 || quantity <= 0) {
      toast.error('Please provide valid name, price, and quantity');
      return;
    }
    dispatch(addProduct({ name, price: parseFloat(price), quantity: parseInt(quantity) }));
    toast.success('Product added');
    setNewProduct({ name: '', price: '', quantity: '' }); // Reset form
    setShowForm(false); // Hide form after adding
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const totalBeforeDiscount = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const totalAfterDiscount = totalBeforeDiscount - (totalBeforeDiscount * (discount / 100));
  const total = formatCurrency(totalAfterDiscount);

  return (
    <div className="container mx-auto mt-8 px-4 relative max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      {/* Toggle Form Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
        aria-label={showForm ? 'Hide form' : 'Show form'}
      >
        {showForm ? '-' : '+'}
      </button>

      {/* Add Product Form */}
      {showForm && (
        <div className="mb-6 bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Product</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              placeholder="Price"
              className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="quantity"
              value={newProduct.quantity}
              onChange={handleChange}
              min="0"
              placeholder="Quantity"
              className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddProduct}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Add Product
            </button>
          </div>
        </div>
      )}

      {/* Cart Items List */}
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleRemoveProduct(product.id)}
                className="text-red-500 hover:text-red-700"
                title="Remove product"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
              <span className="font-semibold text-gray-800">{product.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                min="0"
                className="border border-gray-300 px-3 py-2 rounded-lg w-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-gray-600">{formatCurrency(product.price)}</span>
            </div>
          </li>
        ))}
      </ul>

      {/* Discount Section */}
      <div className="mt-8 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
        <div className="flex items-center mb-4">
          <input
            type="number"
            value={localDiscount}
            onChange={handleDiscountChange}
            min="0"
            max="100"
            placeholder="Discount (%)"
            className="border border-gray-300 px-3 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleApplyDiscount}
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow ml-4 hover:bg-green-700 transition duration-300"
          >
            Apply Discount
          </button>
        </div>
      </div>

      {/* Total Section */}
      <div className="mt-8 bg-white border border-gray-300 rounded-lg shadow-lg p-6 text-xl font-semibold text-gray-800">
        <div>Total Before Discount: {formatCurrency(totalBeforeDiscount)}</div>
        <div>Total After Discount: {total}</div>
      </div>
    </div>
  );
};

export default Cart;
