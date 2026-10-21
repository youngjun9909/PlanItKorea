// 공지사항 / 자주묻는 질문 / 1:1 문의 내역이 함께 쓰는 아코디언 스타일 (MUI sx)
export const accordionSx = {
  margin: "0 0 12px !important",
  border: "1px solid var(--line)",
  borderRadius: "16px !important",
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor: "var(--surface)",
  "&:before": { display: "none" },
  "&.Mui-expanded": {
    margin: "0 0 12px !important",
    borderColor: "var(--brand)",
  },
};

export const accordionSummarySx = {
  padding: "4px 20px",
  minHeight: "60px",
  "&.Mui-expanded": { minHeight: "60px" },
  "& .MuiAccordionSummary-content": {
    margin: "12px 0",
    fontWeight: 700,
  },
  "& .MuiAccordionSummary-content.Mui-expanded": { margin: "12px 0" },
  "& .MuiAccordionSummary-expandIconWrapper": { color: "var(--ink-mute)" },
};

export const accordionDetailsSx = {
  padding: "0 20px 20px",
  color: "var(--ink-soft)",
  lineHeight: 1.7,
  wordWrap: "break-word",
  overflowWrap: "break-word",
  whiteSpace: "pre-wrap",
};
