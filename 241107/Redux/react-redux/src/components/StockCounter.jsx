import React, { useEffect } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { sale, soldout } from "../modules/stockReducer";

export default function StockCounter() {
  const { message } = useSelector(
    (state) => ({
      message: state.stockReducer.message,
    }),
    shallowEqual
  );

  const { stock } = useSelector(
    (state) => ({
      stock: state.goodsReducer.stock,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  //    const onSale = () => dispatch(sale());
  //    const onSoldout = () => dispatch(soldout());

  useEffect(() => {
    if (stock <= 0) {
      dispatch(soldout());
    } else {
      dispatch(sale());
    }
  }, [stock]);

  return (
    <div>
      <strong>{message}</strong>
    </div>
  );
}
