import styled from "styled-components";
import theme from "../../styles/theme";

export const AllDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 0 0;
  box-sizing: border-box;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
`;

export const ProductNameDiv = styled.div``;

export const ProductName = styled.h2`
  margin: 0 0 16px;
  font-weight: 800;
  font-size: 28px;
  @media (max-width: 640px) {
    font-size: 22px;
  }
  display: flex;
  align-items: center;
`;

export const ProductImgDiv = styled.div`
  height: 440px;
  gap: 8px;
  @media (max-width: 640px) {
    height: 240px;
  }
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LeftImgDiv = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  overflow: hidden;
  &:only-child {
    width: 100%;
    border-radius: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const RightImgDiv = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
  border-radius: 0 20px 20px 0;
  overflow: hidden;
`;

export const RightInnerImgDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  @media (max-width: 1160px) {
    flex-direction: column;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 70%;
  margin-right: 30px;
  min-width: 0;
  box-sizing: border-box;
  @media (max-width: 1160px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const SubProductContainer = styled.div<{ $isSelectable: boolean; $selected?: boolean }>`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
  width: 100%;
  box-sizing: border-box;
  gap: 20px;
  padding: 16px;
  margin-bottom: 12px;
  border: 1px solid ${({ $selected }) => ($selected ? "var(--brand)" : "var(--line)")};
  box-shadow: ${({ $selected }) => ($selected ? "0 0 0 3px var(--brand-tint)" : "none")};
  border-radius: 16px;
  background-color: ${({ $isSelectable }) => ($isSelectable ? "var(--surface)" : "var(--canvas)")};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  &:hover {
    border-color: var(--brand);
  }
  cursor: ${({ $isSelectable }) => ($isSelectable ? "pointer" : "not-allowed")};
  opacity: ${({ $isSelectable }) => ($isSelectable ? 1 : 0.5)};
  pointer-events: ${({ $isSelectable }) => ($isSelectable ? "auto" : "none")};
`;

export const SubProductImage = styled.img`
  width: 200px;
  flex-shrink: 0;
  aspect-ratio: 4 / 3;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const SubProductInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const SubProductName = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
`;


export const SubProductDetail = styled.p`
  margin: 0;
  font-size: 15px;
  color: var(--ink-soft);
`;


export const FacilityDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--line);
`;

export const FacilityItem = styled.div`
  background-color: var(--brand-tint);
  color: var(--brand-deep);
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const DescriptionItem = styled.div``;

export const GroupName = styled.h3`
  margin: 32px 0 14px;
  font-weight: 800;
  font-size: 20px;
  color: var(--ink);
`;

export const ReviewGroupName = styled.h3`
  margin: 32px 0 14px;
  font-weight: 800;
  font-size: 20px;
  color: var(--ink);
`;

export const ReservationBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 30%;
  height: auto;
  @media (max-width: 1160px) {
    width: 100%;
    height: 100%;
    align-items: center;
  }
`;

export const ReservationBar = styled.div`
  position: sticky;
  top: 88px;
  width: 320px;
  max-width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--line);
  background-color: var(--surface);
  border-radius: 20px;
  box-shadow: var(--shadow-card);
  padding: 22px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media (max-width: 1160px) {
    width: 100%;
    position: static;
    margin-top: 24px;
  }
`;

export const PersonDiv = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

export const BarTitle = styled.h3`
  width: 100%;
  margin: 0 0 18px;
  font-size: 18px;
  font-weight: 800;
  color: var(--ink);
`;

export const FieldLabel = styled.div`
  width: 100%;
  margin: 0 0 6px;
  font-size: 12px;
  font-weight: 700;
  color: var(--ink-mute);
`;

export const DateRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 16px;
  & .react-datepicker-wrapper {
    width: 100%;
  }
  & input {
    width: 100%;
    box-sizing: border-box;
    height: 44px;
    padding: 0 12px;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--canvas);
    font-size: 14px;
    color: var(--ink);
    outline: none;
  }
  & input:focus {
    border-color: var(--brand);
    background: var(--surface);
  }
`;

export const PersonInput = styled.input`
  box-sizing: border-box;
  height: 44px;
  padding: 0 12px;
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--canvas);
  font-size: 14px;
  color: var(--ink);
  &:focus {
    border-color: var(--brand);
    background: var(--surface);
    outline: none;
  }
`;

export const PriceBar = styled.div`
  width: 100%;
  padding: 14px 0 0;
  border-top: 1px solid var(--line);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 800;
`;

export const PersonBar = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const SelectInfo = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--ink-soft);
  & b {
    color: var(--ink);
    font-weight: 700;
    text-align: right;
  }
`;

export const ImgButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const ModalDiv = styled.div`
  width: 75%;
  height: 90%;
  background-color: white;
  border: none;
  border-radius: 24px;
  box-shadow: var(--shadow-float);
  overflow: hidden;
  @media (max-width: 640px) {
    width: 100%;
    height: 80%;
  }
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseBtn = styled.button`
  background-color: var(--canvas);
  color: var(--ink);
  padding: 8px 18px;
  margin: 14px 16px 6px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: var(--brand-tint);
    color: var(--brand-deep);
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const ModalMain = styled.div`
  width: 80%;
  height: 100%;
`;

export const ImgPickDiv = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 35, 59, 0.55);
  backdrop-filter: blur(3px);
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const MapDiv = styled.div`
  width: 100%;
  margin-top: 16px;
`;

export const Address = styled.p`
  margin: 0 0 12px;
  color: var(--ink-soft);
  font-weight: 600;
`;

export const ReviewDiv = styled.div`
  width: 100%;
  padding: 8px 0 60px;
  position: relative;
`;

export const MapReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const MapReviewInnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
  color: var(--ink-soft);
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const ReviewInfo = styled.div`
  width: 150px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (max-width: 640px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const ReviewDate = styled.p`
  margin: 0;
  font-size: 12px;
  color: var(--ink-mute);
`;

export const UserIdInfo = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: var(--ink);
`;

export const ReviewContentDiv = styled.div`
  flex: 1;
  min-width: 0;
  position: relative;
`;

export const ReviewContent = styled.div`
  color: var(--ink);
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const ReviewButton = styled.button`
  margin-top: 10px;
  height: 40px;
  padding: 0 22px;
  border: none;
  border-radius: 999px;
  background-color: ${theme.palette.primary.main};
  font-weight: 700;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${theme.palette.primary.dark};
  }
`;

export const ReviewContentInput = styled.textarea<{ $isReadonly: boolean }>`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 110px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background-color: var(--canvas);
  color: var(--ink);
  font-size: 15px;
  line-height: 1.6;
  resize: vertical;
  cursor: ${(props) => (props.$isReadonly ? "not-allowed" : "text")};
  &:focus {
    outline: none;
    background-color: var(--surface);
    border-color: ${(props) => (props.$isReadonly ? "var(--line)" : "var(--brand)")};
  }
`;

export const PageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ReviewNotice = styled.p`
  margin: 8px 0 0;
  font-size: 13px;
  color: ${theme.palette.error.main};
`;
