import styled from "styled-components";
import { ContentH2, ContentSection } from "./Common";

const ContentH2Border = styled(ContentH2)`
  border: 1px solid black;
  background-color: teal;
  color: white;
`;

export default function Detail() {
  return (
    <>
      <ContentH2Border>Detail 페이지</ContentH2Border>
      <ContentSection>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quod
          similique expedita a nemo voluptatibus soluta nostrum ipsum id
          inventore illo, hic dignissimos possimus voluptate eligendi corrupti
          nulla aperiam esse?
        </p>
      </ContentSection>
    </>
  );
}
