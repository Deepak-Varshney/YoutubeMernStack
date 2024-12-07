import React from "react";
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import MyTube from "../images/logo.png";
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpIcon from '@mui/icons-material/Help';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

const Container = styled.div`
  flex: 1;
  background-color: ${({theme})=> theme.bg};
  height: auto;
  height: 100vh;
  color: ${({theme})=> theme.text};
  font-size: 14px;
  position: sticky;
  overflow-y: auto;
  top: 0;
  &::-webkit-scrollbar {
    width: 12px; // to hide the scrollbar
  }
`;
const Wrapper = styled.div`
  padding: 18px 26px;
  
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const Img = styled.img`
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 7.5px 0;

`;

const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid ${({theme})=> theme.soft};
`
const Login = styled.div`
  
`
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid skyblue;
  color: skyblue;
  border-radius:3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap:5px;
`
const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={MyTube} />
          MyTube
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <LibraryAddIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment,  and subscribe.
          <Button>SIGN IN</Button>
        </Login>
        <Hr />

        <Item>
          <LibraryMusicIcon />
          Music
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <SportsBasketballIcon />
          Sports
        </Item>
        <Item>
          <MovieCreationIcon />
          Movies
        </Item>
        <Item>
          <ArticleIcon />
          News
        </Item>
        <Item>
          <LiveTvIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item><Item>
          <OutlinedFlagIcon />
          Report
        </Item><Item>
          <HelpIcon />
          Help
        </Item>
        <Item onClick={()=>setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
