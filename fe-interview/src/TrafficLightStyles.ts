import styled from "styled-components";

// const breakpoints = {
//   xs: '0px',
//   sm: '576px',
//   md: '768px',
//   lg: '992px',
//   xl: '1200px',
//   xxl: '1540px'
// };

export const Container = styled.div`
  background-color: #190530;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 
`;

export const TrafficLightContainer = styled.div`
  width: 100px;
  background: linear-gradient(to right, #555 50%, #333 50%);
  padding: 15px;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const Light = styled.div<{ isActive: boolean, color: string }>`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin: 20px auto;
  background-color: ${props => props.color};
  filter: ${props => props.isActive ? 'none' : 'brightness(50%)'};
  transition: opacity 0.3s ease;
  border: ${props => props.isActive ? `6px solid transparent` : '6px solid #6D6E71'};
  box-shadow: ${props => props.isActive ? `0 0 20px 2px ${props.color}` : 'none'};
`;

export const StartButton = styled.div`
  color: #FFF;
  font-family: "Red Hat Display", sans-serif;
  font-optical-sizing: auto;
  font-size: 32px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 2px;
  cursor: pointer;
`;