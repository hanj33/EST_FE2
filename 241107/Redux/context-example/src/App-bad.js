import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "이름",
    email: "test@test.com",
    alarm: {
      theme: "dark",
      fontSize: "16px",
    },
    cart: {
      items: [],
      totalPrice: 0,
    },
  });

  const updateCartTotal = (value) => {
    setUserData((prev) => {
      // 기존 데이터 기반으로 업뎃해줄 거니까 기존 데이터 가져오기

      return {
        ...prev,
        cart: {
          items: [],
          totalPrice: value,
        },
      };
    });
  };

  return (
    <UserContext.Provider value={{ userData, updateCartTotal }}>
      {children}
    </UserContext.Provider>
  );
};

const CartTotal = () => {
  const { userData } = useContext(UserContext);

  return <strong>총 금액: {userData.cart.totalPrice}</strong>;
};

const Alarm = () => {
  const { userData } = useContext(UserContext);

  return <strong>테마: {userData.alarm.theme}</strong>;
};
const Email = () => {
  const { userData } = useContext(UserContext);

  return <strong>이메일: {userData.email}</strong>;
};

const UpdateCartTotal = () => {
  const { updateCartTotal } = useContext(UserContext);
  return <button onClick={() => updateCartTotal(10)}>버튼</button>;
};

function App() {
  return (
    <div>
      <UserProvider>
        <CartTotal />
        <Alarm />
        <Email />
        <UpdateCartTotal />
      </UserProvider>
    </div>
  );
}
export default App;
