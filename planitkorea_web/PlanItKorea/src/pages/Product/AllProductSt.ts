import styled from "styled-components";
import theme from "../../styles/theme";

// 필터(왼쪽) + 결과(오른쪽) 2단 레이아웃
export const AllDiv = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 32px;
  align-items: start;
  padding-top: 24px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const FilterDiv = styled.aside`
  position: sticky;
  top: 88px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-card);
  box-sizing: border-box;
  @media (max-width: 900px) {
    position: static;
    padding: 20px;
  }
`;

export const AllProductDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 28px 20px;
  align-content: start;
  position: relative;
  min-height: 320px;
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 12px;
  }
`;

export const ProductDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-card);
  background: var(--brand-tint);
  display: block;
`;

// 찜 버튼(MUI Checkbox)을 이미지 오른쪽 위에 띄움
export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 2px;
  & .MuiCheckbox-root {
    position: absolute !important;
    top: 10px;
    right: 10px;
    padding: 6px !important;
    background: rgba(255, 255, 255, 0.92) !important;
    box-shadow: 0 2px 8px rgba(20, 35, 59, 0.15);
  }
`;

export const Category = styled.span`
  color: var(--ink-mute);
  font-size: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductName = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

export const PriceDiv = styled.div`
  padding-top: 4px;
  font-size: 16px;
  font-weight: 800;
`;

export const PageDiv = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 16px;
`;

export const FilterHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 20px;
`;

export const GroupTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  white-space: nowrap;
`;

export const ResetButton = styled.button`
  border: none;
  background-color: var(--brand-tint);
  color: var(--brand-deep);
  border-radius: 999px;
  height: 34px;
  width: 64px;
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${theme.palette.primary.main};
    color: #fff;
  }
`;
