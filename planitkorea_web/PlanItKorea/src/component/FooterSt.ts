import styled from "styled-components";
import theme from "../styles/theme";

export const FooterDiv = styled.footer`
  margin-top: 24px;
  background-color: var(--surface);
  border-top: 1px solid var(--line);
`;

export const FooterInner = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  padding: 36px var(--gutter) 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  @media (max-width: 640px) {
    flex-direction: column;
    padding: 28px 16px;
  }
`;

export const BrandBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 0;
`;

export const LogoName = styled.h1`
  font-family: "TTTogether";
  font-size: 16px;
  margin: 0;
  color: ${theme.palette.text.secondary};
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 13px;
  color: var(--ink-mute);
`;

export const LinkRow = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 20px;
`;

export const FooterLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-soft);
  cursor: pointer;
  &:hover {
    color: var(--brand-deep);
    text-decoration: underline;
  }
`;

export const GitHubLogo = styled.img`
  width: 28px;
  height: 28px;
  opacity: 0.75;
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 1;
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  @media (max-width: 640px) {
    align-items: flex-start;
  }
`;
