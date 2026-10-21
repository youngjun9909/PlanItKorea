import styled from "styled-components";
import theme from "../../styles/theme";

// 결제 페이지: 왼쪽 입력 카드 + 오른쪽 예약 요약
export const AllDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 24px;
  align-items: start;
  padding-top: 24px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 32px 32px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow-card);
  min-width: 0;
  @media (max-width: 640px) {
    padding: 4px 20px 24px;
  }
`;

export const LeftDiv = styled.div`
  position: sticky;
  top: 88px;
  display: flex;
  flex-direction: column;
  & > div {
    width: 100%;
    margin: 0;
  }
  @media (max-width: 900px) {
    position: static;
    order: -1;
  }
`;

export const GroupDiv = styled.div`
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--line);
  &:last-child {
    border-bottom: none;
  }
`;

export const PageTitleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 20px 0 8px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 26px;
  font-weight: 800;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`;

export const SubTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  padding: 28px 0 16px;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-soft);
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
`;

export const InputField = styled.input`
  width: 100%;
  max-width: 420px;
  height: 46px;
  background-color: var(--canvas);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0 16px;
  font-size: 15px;
  color: var(--ink);
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: var(--brand);
  }
`;

export const KaKaoImg = styled.img`
  border-radius: 25px;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  border: none;
  background-color: ${theme.palette.primary.main};
  border-radius: 12px;
  height: 52px;
  width: 100%;
  max-width: 420px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin: 24px 0 0;
  cursor: pointer;
  &:hover {
    background-color: ${theme.palette.primary.dark};
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  margin: 16px 0;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 12px;
  background: var(--brand-tint);
`;
