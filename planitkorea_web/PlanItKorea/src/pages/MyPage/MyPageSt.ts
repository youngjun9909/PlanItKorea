import styled from "styled-components";
import theme from "../../styles/theme";

export const AllDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 24px 0 0;
  width: 100%;
  gap: 24px;
  box-sizing: border-box;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    margin: 12px 0 0;
  }
`;

export const NaviBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  flex-shrink: 0;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const NavInnerBox = styled.div`
  box-sizing: border-box;
  position: sticky;
  top: 88px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: var(--surface);
  padding: 10px;
  width: 100%;
  & a {
    display: block;
    width: 100%;
  }
  & a.active ul {
    background-color: var(--brand-tint);
  }
  & a.active li {
    color: var(--brand-deep);
  }
  @media (max-width: 850px) {
    position: static;
    flex-direction: row;
    padding: 6px;
    & a {
      flex: 1 1 0;
    }
  }
`;


export const NavInnerDiv = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  list-style: none;
  transition: background-color 0.15s ease;
  &:hover {
    background-color: var(--canvas);
  }
  @media (max-width: 850px) {
    justify-content: center;
    padding: 10px 6px;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  gap: 20px;
`;

export const AllProductDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px 20px;
  flex: 1;
  min-width: 0;
  padding: 0 0 80px;
  position: relative;
  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 12px;
  }
`;

export const NavTitle = styled.li`
  list-style: none;
  font-size: 16px;
  font-weight: 700;
  color: var(--ink-soft);
  white-space: nowrap;
  @media (max-width: 850px) {
    font-size: 14px;
  }
`;

export const MainInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 28px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 640px) {
    padding: 20px 16px;
  }
`;

export const WishInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
  box-sizing: border-box;
  gap: 24px;
`;


export const PageTitle = styled.h1`
  margin: 0 0 24px;
  font-weight: 800;
  font-size: 20px;
  color: var(--ink);
`;

export const IdInput = styled.input`
  box-sizing: border-box;
  background-color: var(--canvas);
  color: var(--ink);
  width: 100%;
  min-width: 0;
  height: 48px;
  border-radius: 12px;
  padding: 0 16px;
  margin-bottom: 18px;
  outline: none;
  border: 1px solid var(--line);
  font-size: 15px;
  cursor: ${({ readOnly }) => (readOnly ? 'default' : 'text')};
  &:read-only {
    color: var(--ink-soft);
  }
  &:not(:read-only):focus {
    background-color: var(--surface);
    border-color: var(--brand);
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 700;
  color: var(--ink-soft);
  margin-bottom: 6px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  box-sizing: border-box;
`;

export const Card = styled.div`
  background-color: var(--surface);
  border-radius: 20px;
  border: 1px solid var(--line);
  overflow: hidden;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 260px;
  box-sizing: border-box;
`;

export const Error = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--ink-mute);
`;

export const Loading = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--ink-mute);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WithdrawalDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  box-sizing: border-box;
`;

export const WithdrawalInput = styled.input`
  box-sizing: border-box;
  background-color: var(--canvas);
  width: 100%;
  min-width: 0;
  height: 48px;
  border-radius: 12px;
  padding: 0 16px;
  margin-bottom: 14px;
  outline: none;
  border: 1px solid var(--line);
  font-size: 15px;
  &:focus {
    background-color: var(--surface);
    border-color: ${theme.palette.error.main};
  }
`;

export const WithDrawalButton = styled.button`
  height: 48px;
  width: 100%;
  max-width: 560px;
  border-radius: 12px;
  border: 1px solid ${theme.palette.error.main};
  background-color: var(--surface);
  color: ${theme.palette.error.main};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${theme.palette.error.main};
    color: #fff;
  }
`;

export const GroupLine = styled.span`
  display: block;
  height: 0;
`;

export const ReserVationProductDiv = styled.div`
  width: 240px;
  flex-shrink: 0;
  cursor: pointer;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const ReserVationProductImgDiv = styled.div`
  background: var(--canvas);
  border-radius: 14px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4 / 3;
`;


export const ReservationMainInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 24px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 850px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ReserVationDetail = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const ReservationNumber = styled.h3`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: var(--ink-mute);
`;
export const ProductName = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: var(--ink);
`;

export const DateDivWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
`;

export const DateColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DetailLabel = styled.h3`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  color: var(--ink-mute);
`;

export const DateDiv = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
`;
export const Person = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
  & p {
    margin: 0;
  }
`;

export const PersonDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
  flex-shrink: 0;
  min-width: 120px;
  @media (max-width: 850px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PriceBack = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: var(--ink);
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;




export const CancelBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink-soft);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    border-color: ${theme.palette.error.main};
    color: ${theme.palette.error.main};
  }
`;

export const MapUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 0;
`;

export const MainLi = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  width: 100%;
  margin-bottom: 16px;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DetailLabelRe = styled.h3`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  color: var(--ink-mute);
`;

