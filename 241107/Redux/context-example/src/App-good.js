import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const AlarmContext = createContext();
const CartContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "이름",
    email: "test@test.com",
  });

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};
const AlarmProvider = ({ children }) => {
  const [alarmData, setAlarmData] = useState({
    alarm: {
      theme: "dark",
      fontSize: "16px",
    },
  });

  return (
    <AlarmContext.Provider value={{ alarmData }}>
      {children}
    </AlarmContext.Provider>
  );
};
const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState({
    cart: {
      items: [],
      totalPrice: 0,
    },
  });

  const updateCartTotal = (value) => {
    setCartData((prev) => {
      return {
        ...prev,
        cart: {
          totalPrice: value,
        },
      };
    });
  };

  return (
    <CartContext.Provider value={{ cartData, updateCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

const CartTotal = () => {
  const { cartData } = useContext(CartContext);

  return <strong>총 금액: {cartData.cart.totalPrice}</strong>;
};

const Alarm = () => {
  const { alarmData } = useContext(AlarmContext);

  return <strong>테마: {alarmData.alarm.theme}</strong>;
};
const Email = () => {
  const { userData } = useContext(UserContext);

  return <strong>이메일: {userData.email}</strong>;
};

const UpdateCartTotal = () => {
  const { updateCartTotal } = useContext(CartContext);
  return <button onClick={() => updateCartTotal(10)}>버튼</button>;
};

function App() {
  return (
    <div>
      <UserProvider>
        <Email />
      </UserProvider>
      <AlarmProvider>
        <Alarm />
      </AlarmProvider>
      <CartProvider>
        <CartTotal />
        <UpdateCartTotal />
      </CartProvider>
    </div>
  );
}
export default App;
