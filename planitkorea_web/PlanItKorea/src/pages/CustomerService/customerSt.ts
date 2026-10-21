import styled from "styled-components";
import theme from "../../styles/theme";

export const GroupLine = styled.span`
  display: block;
  height: 0;
  margin-top: 8px;
`;

export const GroupLine2 = styled.span`
  border: 1px solid #ddd;
  width: 100%;
  display: flex;
`;


export const Box = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin: 20px 0;
`;

export const TitleText = styled.h1`
  font-weight: bold;
  font-size: 30px;
  color: ${theme.palette.text.secondary};
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  position: relative; 
  
`;

export const MenuBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  
  
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 32px 0;
`;
export const ContentInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
`;

