import React from "react";

const AdminView = () => {
  return <h1>관리자 대시보드입니다. 모든 정보가 보여집니다.</h1>;
};

const GuestView = () => {
  return <h1>게스트 대시보드입니다. 로그인이 필요합니다.</h1>;
};

const UserView = () => {
  return <h1>일반사용자 대시보드입니다. 내 정보가 표시됩니다.</h1>;
};

const ErrorMessage = ({ message }) => {
  return <h1>에러: {message}</h1>;
};

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        style={{ width: "100px", height: "100px" }}
        src="https://cdn.discordapp.com/attachments/1266268920973754403/1300259777536069724/dancing.gif?ex=672030c8&is=671edf48&hm=fdd553bd6bd5cfebb16609c67ae44308034b2273a2c07c9940b97709966300c0&"
        alt="로딩 중"
      />
    </div>
  );
};

export default function SimpleRouter({ userRole, isLoading }) {
  if (isLoading === true) {
    return <Loading />;
  }
  switch (userRole) {
    case "admin":
      return <AdminView />;
    case "guest":
      return <GuestView />;
    case "user":
      return <UserView />;
    default:
      return <ErrorMessage message="권한이 없습니다." />;
  }
}
