import React, { useEffect, useState } from "react";
import { Container, TrafficLightContainer, Light, StartButton } from "./TrafficLightStyles";

type LightType = 'red' | 'yellow' | 'green' | 'inactive';

type ButtonText = 'Start' | 'Stop';

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState<LightType>('inactive');
  const [buttonText, setButtonText] = useState<ButtonText>('Start');

  useEffect(() => {
    let timer: any;

    switch (currentLight) {
      case 'green':
        timer = setTimeout(() => setCurrentLight('yellow'), 3000);
        break;
      case 'yellow':
        timer = setTimeout(() => setCurrentLight('red'), 500);
        break;
      case 'red':
        timer = setTimeout(() => setCurrentLight('green'), 4000);
        break;
    }

    return () => clearTimeout(timer);
  }, [currentLight]);

  const handleClick = () => {
    if (currentLight === 'inactive') {
      setCurrentLight('green');
      setButtonText('Stop');
    } else {
      setCurrentLight('inactive');
      setButtonText('Start');
    }
  };

  return <div>
    <Container>
      <TrafficLightContainer>
        <Light color="#FF176B" isActive={currentLight === 'red'} />
        <Light color="#FFC700" isActive={currentLight === 'yellow'} />
        <Light color="#9BF824" isActive={currentLight === 'green'} />
      </TrafficLightContainer>

      <StartButton>
        <h3 onClick={handleClick}>Click to {buttonText}</h3>
      </StartButton>
    </Container>
  </div>;
};

export default TrafficLight;
