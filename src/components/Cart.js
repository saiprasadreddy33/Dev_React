import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, applyDiscount } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Cart = () => {
  const dispatch = useDispatch();
  const { products, discount } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
    toast.success('Quantity updated');
  };

  const handleApplyDiscount = () => {
    dispatch(applyDiscount(10));
    toast.success('Discount applied');
  };

  const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0) - discount;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4">
            <div className="flex justify-between">
              <span>{product.name}</span>
              <div>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  className="border px-2 py-1 rounded"
                />
                <span className="ml-4">${product.price}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button onClick={handleApplyDiscount} className="bg-green-500 text-white px-4 py-2 rounded">
          Apply Discount
        </button>
      </div>
      <div className="mt-4 text-xl font-bold">
        Total: ${total}
      </div>
    </div>
  );
};

export default Cart;
