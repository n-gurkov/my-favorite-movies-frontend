import styled from "styled-components";
import {CardWrapper} from "src/Components/styles/styles";

export const HeaderWrapper = styled(CardWrapper)`
    display: flex;
    margin-left: 15rem;
    margin-right: 15rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    justify-content: space-between;
    font-size: 25pt;
    padding-right: 1rem;
    padding-left: 1rem;
    user-select: none; 
    cursor: pointer;
`;
export const CaptionWrapper = styled(HeaderWrapper)`
    font-size: 15pt;
    justify-content: center;
    margin-left: 20rem;
    margin-right: 20rem;
    width: auto;
    user-select: none;
    cursor: default;
`
export const LogoWrapper = styled.div`
    width: 55px;
    height: 55px;
`;