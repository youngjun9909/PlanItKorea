import { NavLink } from "react-router-dom";
import GitHubImg from "../assets/images/github.png";
import {
  BrandBox,
  Copyright,
  FooterDiv,
  FooterInner,
  FooterLink,
  GitHubLogo,
  LinkRow,
  Logo,
  LogoLink,
  LogoName,
  RightBox,
} from "./FooterSt";

export default function Footer() {
  return (
    <FooterDiv>
      <FooterInner>
        <BrandBox>
          <LogoLink as={NavLink} to="/">
            <Logo src={"/images/logo.png"} alt="" />
            <LogoName>Plan It Korea</LogoName>
          </LogoLink>
          <Copyright>© Plan It Korea. All rights reserved.</Copyright>
        </BrandBox>

        <RightBox>
          <LinkRow aria-label="약관 및 고객지원">
            <FooterLink as={NavLink} to="/notification">이용약관</FooterLink>
            <FooterLink as={NavLink} to="/notification">개인정보 처리 방침</FooterLink>
            <FooterLink as={NavLink} to="/notification">취소 및 환불</FooterLink>
            <FooterLink as={NavLink} to="/notification">고객센터</FooterLink>
          </LinkRow>
          <a href="https://github.com/PlanItKorea" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubLogo src={GitHubImg} alt="" />
          </a>
        </RightBox>
      </FooterInner>
    </FooterDiv>
  );
}
