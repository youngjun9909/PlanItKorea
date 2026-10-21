import styled from "styled-components";
import theme from "../../styles/theme";

// ----- 문의하기 / 문의내역 탭 -----
export const BtnCategory = styled.div`
  display: inline-flex;
  align-self: flex-start;
  gap: 4px;
  padding: 4px;
  margin-bottom: 24px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 999px;
`;

export const InquiryBtn = styled.button<{ $active?: boolean }>`
  padding: 8px 20px;
  border: none;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#fff" : "var(--ink-soft)")};
  background-color: ${({ $active }) => ($active ? "var(--brand)" : "transparent")};
  transition: background-color 0.15s ease;
  &:hover {
    background-color: ${({ $active }) => ($active ? "var(--brand-deep)" : "var(--brand-tint)")};
  }
`;

// ----- 작성 폼: 흰 카드 안에서 항목을 위아래로 쌓는 형태 -----
export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 32px 32px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow-card);
  & form {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  @media (max-width: 640px) {
    padding: 20px 16px 24px;
  }
`;

const Row = `
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleDiv = styled.div`
  ${Row}
`;
export const SelectCategoryDiv = styled.div`
  ${Row}
`;
export const BodyDiv = styled.div`
  ${Row}
`;
export const ImageFile = styled.div`
  ${Row}
`;

export const InquiryTitle = styled.div`
  display: flex;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InquiryTitleName = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
`;

export const Select = styled.select`
  height: 46px;
  min-width: 160px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background-color: var(--surface);
  color: var(--ink);
  font-size: 15px;
  &:focus {
    outline: none;
    border-color: var(--brand);
  }
`;

const fieldBase = `
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  font-size: 15px;
  color: var(--ink);
  background-color: var(--canvas);
  border-radius: 12px;
  outline: none;
  transition: border-color 0.15s ease, background-color 0.15s ease;
  &::placeholder {
    color: var(--ink-mute);
  }
`;

export const InputTitle = styled.input<{ $hasError: boolean }>`
  ${fieldBase}
  height: 48px;
  border: 1px solid ${(props) => (props.$hasError ? theme.palette.error.main : "var(--line)")};
  &:focus {
    background-color: var(--surface);
    border-color: ${(props) => (props.$hasError ? theme.palette.error.main : "var(--brand)")};
  }
`;

export const InputBody = styled.textarea<{ $hasError: boolean }>`
  ${fieldBase}
  height: 280px;
  resize: vertical;
  line-height: 1.6;
  border: 1px solid ${(props) => (props.$hasError ? theme.palette.error.main : "var(--line)")};
  &:focus {
    background-color: var(--surface);
    border-color: ${(props) => (props.$hasError ? theme.palette.error.main : "var(--brand)")};
  }
`;

export const InputFile = styled.input`
  max-width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  color: var(--ink-soft);
  &::file-selector-button {
    margin-right: 12px;
    padding: 8px 16px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--surface);
    color: var(--ink);
    font-weight: 600;
    cursor: pointer;
  }
  &::file-selector-button:hover {
    background: var(--brand-tint);
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 4px;
`;

export const Button = styled.button<{ $secondary?: boolean }>`
  height: 48px;
  min-width: 120px;
  padding: 0 24px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  border: ${({ $secondary }) => ($secondary ? "1px solid var(--line)" : "none")};
  color: ${({ $secondary }) => ($secondary ? "var(--ink-soft)" : "#fff")};
  background-color: ${({ $secondary }) =>
    $secondary ? "var(--surface)" : theme.palette.primary.main};
  &:hover {
    background-color: ${({ $secondary }) =>
      $secondary ? "var(--canvas)" : theme.palette.primary.dark};
  }
`;

// ----- 로그인 필요 안내 -----
export const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40vh;
`;

export const ErrorBox = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow-card);
`;

// ----- 문의 내역 아코디언 내용 -----
export const AccordionDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImgDiv = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 0 0 10px;
  width: 100%;
  box-sizing: border-box;
  &:empty {
    display: none;
  }
`;

export const Img = styled.img`
  height: 140px;
  max-width: 220px;
  object-fit: cover;
  border-radius: 12px;
`;

export const AcContentDiv = styled.div`
  word-wrap: break-word;
  white-space: pre-wrap;
  background-color: var(--canvas);
  border-radius: 12px;
  padding: 16px;
  color: var(--ink);
  line-height: 1.7;
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const UserIdDiv = styled.div`
  margin-top: 10px;
  padding: 10px;
  font-weight: bold;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 12px;
`;

export const UDButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-soft);
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  cursor: pointer;
  &:hover {
    background-color: var(--brand-tint);
    color: var(--brand-deep);
  }
`;
