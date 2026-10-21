import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";
import { ContentDiv, ContentInnerDiv, PageDiv } from "../pages/CustomerService/customerSt";
import { Announcement, BoardType } from "../types/type";
import { accordionDetailsSx, accordionSummarySx, accordionSx } from "./BoardAccordion";

const ITEMS_PER_PAGE = 5;

interface BoardListProps {
  boardType: BoardType;
  emptyText: string;
}

// 공지사항, 자주묻는 질문 공통 목록 (아코디언 + 페이지네이션)
export default function BoardList({ boardType, emptyText }: BoardListProps) {
  const [items, setItems] = useState<Announcement[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<number | false>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`http://localhost:4040/api/v1/boards/type/${boardType}`)
      .then((response) => {
        const list: Announcement[] = response.data.data || [];
        setItems(list.map((item) => ({ ...item, uploadDate: new Date(item.uploadDate) })));
      })
      .catch((error) => console.error("게시글을 불러오지 못했습니다:", error))
      .finally(() => setLoaded(true));
  }, [boardType]);

  const start = currentPage * ITEMS_PER_PAGE;
  const currentItems = items.slice(start, start + ITEMS_PER_PAGE);

  return (
    <ContentDiv>
      <ContentInnerDiv>
        {loaded && items.length === 0 && (
          <Typography sx={{ py: 8, textAlign: "center", color: "var(--ink-mute)" }}>
            {emptyText}
          </Typography>
        )}
        {currentItems.map((item) => (
          <Accordion
            key={item.id}
            disableGutters
            elevation={0}
            expanded={expanded === item.id}
            onChange={(_, isExpanded) => setExpanded(isExpanded ? item.id : false)}
            sx={accordionSx}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${item.id}-content`}
              id={`${item.id}-header`}
              sx={accordionSummarySx}
            >
              <Typography sx={{ fontWeight: 700 }}>{item.boardTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={accordionDetailsSx}>
              <Typography sx={{ whiteSpace: "pre-wrap" }}>{item.boardContent}</Typography>
              <Typography
                variant="caption"
                sx={{ display: "block", mt: 2, color: "var(--ink-mute)" }}
              >
                {item.author}
                {item.uploadDate instanceof Date && !isNaN(item.uploadDate.getTime())
                  ? ` · ${item.uploadDate.toLocaleDateString("ko-KR")}`
                  : ""}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </ContentInnerDiv>
      {items.length > ITEMS_PER_PAGE && (
        <PageDiv>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={Math.ceil(items.length / ITEMS_PER_PAGE)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(e: { selected: number }) => setCurrentPage(e.selected)}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </PageDiv>
      )}
    </ContentDiv>
  );
}
