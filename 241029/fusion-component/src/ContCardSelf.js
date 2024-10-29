import styled from "styled-components";

const ContCard = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;

const ProductImage = () => {
  return <img />;
};
const ProductTitle = (props) => {
  return <h2>{props.value}</h2>;
};
const ProductSubTitle = (props) => {
  return <h3>{props.value}</h3>;
};
const ProductDescription = (props) => {
  return <p>{props.value}</p>;
};
const ProductPrice = () => {
  return <p>ProductPrice</p>;
};

function App() {
  return (
    <>
      <ContCard>
        <ProductImage
          src={"https://picsum.photos/id/237/200/300"}
          alt={"검은강아지"}
        />
        <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
        <ProductSubTitle>엄청 얌전하답니다. 우리개는 안물어요!</ProductSubTitle>
        <ProductDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          distinctio sed molestias saepe reiciendis fugit illum enim et
          inventore, aliquam esse non nam consectetur minima atque consequuntur
          voluptates, eum quia.
        </ProductDescription>
        <ProductPrice />
      </ContCard>
    </>
  );
}

export default App;
