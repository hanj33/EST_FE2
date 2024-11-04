import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 카트에 아이템 추가
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      // 이미 선택한 상품이 장바구니에 있음
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }

      // 선택한 상품이 장바구니에 없음
      return [...prevCart, { ...product, count: 1 }];
    });
  };

  // 카트에서 아이템 제거
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  return (
    <CartContext.Provider value={{ addToCart, cart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

const Header = () => {
  const { getTotal } = useContext(CartContext);
  return (
    <header>
      <h1>쇼핑몰</h1>
      <p>카트에 들어 있는 상품 개수: {getTotal() ? getTotal() : 0}</p>
    </header>
  );
};

const ProductList = () => {
  const products = [
    { id: 1, name: "노트북", price: 1000 },
    { id: 2, name: "스마트폰", price: 500 },
    { id: 3, name: "태블릿", price: 300 },
  ];

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <h2>상품 목록</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} - ￦{product.price}
              <button onClick={() => addToCart(product)}>카트에 추가</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Cart = () => {
  const { removeFromCart, cart } = useContext(CartContext);
  return (
    <>
      <h2>장바구니</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul>
          {cart.map((item) => {
            return (
              <li key={item.id}>
                {item.name} - 수량: {item.count}
                <button onClick={() => removeFromCart(item.id)}>
                  삭제하기
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default function ContextCart() {
  return (
    <>
      <CartProvider>
        <Header />
        <ProductList />
        <Cart />
      </CartProvider>
    </>
  );
}
