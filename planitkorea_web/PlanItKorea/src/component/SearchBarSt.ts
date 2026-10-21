import styled from "styled-components";

// PC 검색바: 1200px 컨테이너 안에 떠 있는 흰색 카드
export const SearchBarDiv = styled("div")(() => ({
  display: "flex",
  alignItems: "stretch",
  gap: 0,
  flexWrap: "nowrap",
  width: "calc(100% - 48px)",
  maxWidth: "1152px",
  boxSizing: "border-box",
  margin: "20px auto 8px",
  padding: "10px 10px 10px 8px",
  backgroundColor: "#fff",
  border: "1px solid var(--line)",
  borderRadius: "20px",
  boxShadow: "var(--shadow-card)",
  "& > .MuiDivider-root": {
    width: "1px",
    height: "auto",
    margin: "10px 0",
    border: "none",
    alignSelf: "stretch",
    backgroundColor: "var(--line)",
  },
}));

export const SearchCity = styled("div")(() => ({
  flex: "1 1 22%",
  minWidth: "150px",
  position: "relative",
  padding: "0 8px",
}));

export const SearchDay = styled("div")(() => ({
  flex: "1 1 38%",
  minWidth: "300px",
  position: "relative",
  padding: "0 8px",
}));

export const SearchPerson = styled("div")(() => ({
  flex: "1 1 18%",
  minWidth: "130px",
  position: "relative",
  padding: "0 8px",
}));

export const SubmitDiv = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  paddingLeft: "8px",
}));

export const PersonModal = styled("div")(() => ({
  position: "absolute",
  top: "100%",
  left: 0,
  width: "90%",
  maxHeight: "330px",
  padding: "16px 24px",
  border: "1px solid var(--line)",
  borderRadius: "16px",
  boxShadow: "var(--shadow-float)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 10,
  flexWrap: "wrap",
  backgroundColor: "white",
}));

export const SubmitButton = styled("button")(() => ({
  height: "48px",
  padding: "0 28px",
  border: "none",
  borderRadius: "14px",
  backgroundColor: "#3F78E0",
  fontWeight: 700,
  cursor: "pointer",
  transition: "background-color 0.15s ease",
  minWidth: "84px",
  "&:hover": {
    backgroundColor: "#2F62C4",
  },
}));

export const SubmitHiddenButton = styled("button")(() => ({
  padding: "12px 50px",
  border: "none",
  borderRadius: "14px",
  backgroundColor: "#3F78E0",
  color: "#fff",
  fontWeight: 700,
  margin: "10px 50px",
  cursor: "pointer",
  minWidth: "42px",
  "&:hover": {
    backgroundColor: "#2F62C4",
  },
}));

export const HiddenBox = styled("form")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
}));

export const HiddenForm = styled("form")(() => ({}));
