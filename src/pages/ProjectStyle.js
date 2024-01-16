import styled, {ThemeProvider} from 'styled-components';
import _default from '../themes/default';
const theme = {
    bg: "#1C1C27",
    bgLight: "#1C1E27",
    primary: "#854CE6",
    text_primary: "#F2F3F4",
    text_secondary: "#b1b2b3",
    card: "#171721",
    card_light: '#191924',
    button: "#854CE6",
    white: "#FFFFFF",
    black: "#000000",
}
export const Container = styled.div`
    background: linear-gradient(to top, #D7E1EC, #FFFFFF);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    
    
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: transparent;
  background: linear-gradient(to right, #000428 , #004e92);
  -webkit-background-clip: text; /* Add this line for WebKit browsers like Chrome and Safari */
  color: transparent;
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
  
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 1000px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    grid-auto-rows: minmax(100px, auto);
    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
