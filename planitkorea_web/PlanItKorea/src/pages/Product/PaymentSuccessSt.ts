import styled from "styled-components";
import theme from "../../styles/theme";

export const AllDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 48px 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleDiv = styled.div`
  width: 100%;
  max-width: 760px;
  padding: 0 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  color: var(--ink);
`;

export const SubTitle = styled.p`
  margin: 0;
  font-size: 15px;
  color: var(--ink-soft);
`;

export const InnerDiv = styled.div`
  width: 100%;
  max-width: 760px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow-card);
  @media (max-width: 640px) {
    flex-direction: column;
    padding: 16px;
  }
`;

export const ImgDiv = styled.div`
  width: 240px;
  flex-shrink: 0;
  aspect-ratio: 4 / 3;
  border-radius: 14px;
  overflow: hidden;
  background: var(--canvas);
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const InfoDiv = styled.div`
  box-sizing: border-box;
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const InfoInner = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

export const ProductTitle = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  color: var(--ink);
`;

export const ReservationNumber = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  & h1 {
    font-size: 14px;
    font-weight: 700;
    color: var(--ink-soft);
  }
`;

export const ReservationNumberInner = styled.div`
  box-sizing: border-box;
  min-height: 20px;
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
  word-break: break-all;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ReservationsTitle = styled.h2`
  margin: 0 0 2px;
  font-size: 12px;
  font-weight: 700;
  color: var(--ink-mute);
`;

export const InfoBottom = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px 20px;
`;

export const BottomR = styled.div`
  display: contents;
`;

export const BottomL = styled.div`
  display: contents;
`;

export const MyPageBtn = styled.button`
  margin-top: 28px;
  height: 52px;
  padding: 0 40px;
  border: none;
  background-color: ${theme.palette.primary.main};
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: ${theme.palette.primary.dark};
  }
`;
