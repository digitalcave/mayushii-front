import React, { useState } from "react";
// @ts-ignore 
import Sound from 'react-sound';
import { Button as Btn } from 'antd';
import styled from "@emotion/styled";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOnClick = () => setIsPlaying(!isPlaying);

  const handleSoundFinished = () => setIsPlaying(false);

  return (
    <Wrapper>
      <Img src='images/mayoshi.png' alt='mayoshii' />
      <ButtonsContainer>
        <Sound
          url='sounds/tuturu.mp3'
          playStatus={Sound.status[isPlaying ? 'PLAYING' : 'STOPPED']}
          onFinishedPlaying={handleSoundFinished}
        />
        <Button onClick={handleOnClick} type="primary">TUTURU</Button>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
`;

const Img = styled.img`
  height: 50vh;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled(Btn)`
  margin: 10vh 0;
`;
