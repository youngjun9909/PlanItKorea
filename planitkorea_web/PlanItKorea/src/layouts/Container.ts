import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--canvas);
`;

// 모든 페이지의 본문을 최대 1200px 안에 가운데 정렬
export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--gutter) 64px;
  box-sizing: border-box;
  @media (max-width: 640px) {
    padding: 0 16px 40px;
  }
`;
