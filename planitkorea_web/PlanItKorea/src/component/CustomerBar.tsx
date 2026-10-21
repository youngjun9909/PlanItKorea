import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 32px var(--gutter) 8px;
  box-sizing: border-box;
  @media (max-width: 640px) {
    padding: 24px 16px 4px;
  }
`;

const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 28px;
  font-weight: 800;
  color: var(--ink);
  @media (max-width: 640px) {
    font-size: 22px;
  }
`;

const Tabs = styled.nav`
  display: flex;
  gap: 8px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--line);
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled(Link)<{ $active: boolean }>`
  flex-shrink: 0;
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  color: var(--ink-soft);
  background: var(--surface);
  border: 1px solid var(--line);
  transition: background-color 0.15s ease, color 0.15s ease;
  &:hover {
    background: var(--brand-tint);
    color: var(--brand-deep);
  }
  ${({ $active }) =>
    $active &&
    `
    background: var(--brand);
    border-color: var(--brand);
    color: #fff;
    &:hover { background: var(--brand-deep); color: #fff; }
  `}
`;

const menuItem = [
  { name: "공지사항", path: "/notification", match: ["/notification"] },
  { name: "자주묻는 질문", path: "/frequentlyQuestion", match: ["/frequentlyQuestion"] },
  { name: "1:1 문의", path: "/inquiryCRUD", match: ["/inquiryCRUD", "/inquiryHistory"] },
];

export default function CustomerBar() {
  const { pathname } = useLocation();
  return (
    <Wrap>
      <Title>고객센터</Title>
      <Tabs aria-label="고객센터 메뉴">
        {menuItem.map((item) => (
          <Tab key={item.name} to={item.path} $active={item.match.some((m) => pathname.startsWith(m))}>
            {item.name}
          </Tab>
        ))}
      </Tabs>
    </Wrap>
  );
}
