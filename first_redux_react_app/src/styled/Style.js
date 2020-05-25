import styled from "styled-components";

const StyledButton = styled.button`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.orange};
  border: 2;
  margin-bottom: 1rem;
  border-radius: 3px;
  margin: ${(margin) => margin || "2rem"};

  &: hover {
    color: white;
    background-color: palevioltred;
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  text-align: center;
  color: ${(props) => props.theme.colors.darkBlue};
`;

const TotalText = styled.div`
  font-size: ${(props) => props.theme.fontSizes.large};
  padding-right: 100px;
  font-weight: bold;
  text-align: right;
  color: ${(props) => props.theme.colors.darkBlue};
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const WrapperCenter = styled.div`
  position: absolute;

  left: 80%;
  margin-top: 20px;
  margin-right: 50px;
`;

const MainContent = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  flex: 1;
  padding: 10px;
`;

const Sidebar = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  flex: 0 auto;
  width: 200px;
`;

const StyledImage = styled.image`
  width: "200%";
  height: "200%";
  margin: 5px;
`;

const StyledGoodImage = styled.image`
  border-radius: 50%;
`;

const TextBold = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: bold;
  color: ${(props) => props.theme.colors.dartBlue};
`;

const TextLight = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};

  color: ${(props) => props.theme.colors.darkBlue};
`;

export {
  StyledButton,
  Title,
  Wrapper,
  WrapperCenter,
  MainContent,
  Sidebar,
  StyledImage,
  TotalText,
  TextBold,
  TextLight,
  StyledGoodImage,
};
