import React from "react";

const currencyConfig = {
  USD: { locale: "en-US", currency: "USD", symbol: "$" },
  EUR: { locale: "de-DE", currency: "EUR", symbol: "€" },
  GBP: { locale: "en-GB", currency: "GBP", symbol: "£" },
  JPY: { locale: "ja-JP", currency: "JPY", symbol: "¥" },
  KRW: { locale: "ko-KR", currency: "KRW", symbol: "₩" },
  CNY: { locale: "zh-CN", currency: "CNY", symbol: "¥" },
};

const formatPrice = (price, currencyCode) => {
  // price는 가격, currencyCode는 국가별 코드(통화코드)
  const config = currencyConfig[currencyCode] || currencyConfig.USD;
  // 코드를 전달했는지 아닌지 확인, 전달한 코드가 없으면 USD로

  return new Intl.NumberFormat(config.locale, {
    // 어느 국가인지?
    style: "currency",
    currency: config.currency,
    maximumFractionDigits: 2, // 정확한 환율로 넣고 싶어! 소수점 2자리까진 표현할 거야!
  }).format(price); // format이라는 함수로 실행할 거고 그 값은 price
};

export default function PriceFormatter({ price, currencyCode }) {
  const formattedPrice = formatPrice(price, currencyCode);
  return <data value={price}>{formattedPrice}</data>;
}
