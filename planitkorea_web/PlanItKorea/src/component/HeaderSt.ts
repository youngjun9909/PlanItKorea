import styled from "styled-components";
import theme from "../styles/theme";

// 상단에 고정되는 헤더 바 (전체 폭) / 내용은 Box 가 1200px 안에 가운데 정렬
export const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid var(--line);
`;

export const Box = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--gutter);
  height: 68px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 640px) {
    padding: 0 16px;
    height: 60px;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 34px;
  height: 34px;
  margin: 0;
  padding: 0;
`;

export const LogoName = styled.h1`
  font-family: "TTTogether";
  font-size: 17px;
  margin: 0;
  color: ${theme.palette.text.secondary};
`;

export const LogoLink = styled.a`
  text-decoration: none;
  color: var(--ink);
  display: flex;
  align-items: center;
`;

export const OptionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CustomerServiceButton = styled.button`
  border: none;
  border-radius: 999px;
  color: var(--ink-soft);
  background-color: transparent;
  padding: 9px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  &:hover {
    background-color: var(--canvas);
    color: var(--ink);
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const MenuCustomerServiceButton = styled.button`
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--ink-soft);
  background-color: white;
  padding: 9px 16px;
  cursor: pointer;
  &:hover {
    background-color: var(--canvas);
  }
`;

export const SingInButton = styled.button`
  border: none;
  border-radius: 999px;
  color: white;
  background-color: var(--brand);
  padding: 9px 18px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease;
  &:hover {
    background-color: var(--brand-deep);
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const MenuSingInButton = styled.button`
  border: none;
  border-radius: 999px;
  color: white;
  background-color: var(--brand);
  padding: 10px 16px;
  margin: 4px 0;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease;
  &:hover {
    background-color: var(--brand-deep);
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--line);
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  color: var(--ink);
  background-color: white;
  transition: background-color 0.15s ease;
  &:hover {
    background-color: var(--canvas);
  }
`;

export const MenuBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const MenuBar = styled.div`
  border: 1px solid var(--line);
  border-radius: var(--radius-card);
  background-color: white;
  box-shadow: var(--shadow-float);
  padding: 8px;
  display: flex;
  flex-direction: column;
  width: 220px;
  position: absolute;
  top: 52px;
  right: 0;
  z-index: 1000;
`;

export const GroupLine = styled.span`
  display: block;
  height: 1px;
  background: var(--line);
  margin: 6px 4px;
`;

export const MenuGroup = styled.ul`
  font-size: 13px;
  font-weight: 700;
  margin: 0;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  color: var(--ink-mute);
  &:hover {
    background-color: var(--canvas);
  }
`;

export const MenuList = styled.li`
  font-size: 15px;
  font-weight: 600;
  list-style: none;
  color: var(--ink);
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--brand-tint);
  }
`;
