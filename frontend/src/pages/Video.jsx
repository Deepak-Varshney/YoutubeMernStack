import React from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Comment from '../components/Comment';
import Comments from '../components/Comments';
import Card from '../components/Card'






const Container = styled.div`
  display:flex;
  gap: 24px;


`
const Content = styled.div`
  flex: 5;

`
const VideoWrapper = styled.div`
  

`
const Title = styled.h1`
  
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({ theme }) => theme.text};
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Info = styled.span`
color: ${({ theme }) => theme.textSoft};
  
`
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};

`
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const Recommendation = styled.div`
  flex: 2;
`
const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0;

`
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  
`
const ChannelInfo = styled.div`
display: flex;
gap: 20px;

`
const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({ theme }) => theme.text};
`
const ChannelName = styled.span`
font-weight: 500;
`
const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px;
color: ${({ theme }) => theme.textSoft};
font-size: 12px;

`
const Description = styled.p`
font-size: 14px;
`
const Subscribe = styled.button`
  color: white;
  background-color: red;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  height: max-content;
  cursor: pointer;
  padding: 10px 20px;
`


const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe width="720px" height="360px" src="https://www.youtube.com/embed/_GuOjXYl5ew?si=mk_fW8rFcmrpUpeR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>Test Video Title</Title>
        <Details>
          <Info>
            79,120 views • Feb 26, 2006
          </Info>
          <Buttons>
            <Button>
              <ThumbUpIcon /> Like
            </Button>
            <Button>
              <ThumbDownIcon /> Dislike
            </Button>
            <Button>
              <ReplyIcon /> Share
            </Button>
            <Button>
              <AddTaskIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src='https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s88-c-k-c0x00ffffff-no-rj' />
            <ChannelDetail>
              <ChannelName>Deepak Varshney</ChannelName>
              <ChannelCounter>500M subscribers</ChannelCounter>
              <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur numquam cum vel vitae error eius, voluptate nesciunt incidunt molestias asperiores, doloremque nulla ipsa similique illo qui dicta iste est quisquam.</Description>
            </ChannelDetail>
            <Subscribe>SUBSCRIBE</Subscribe>
          </ChannelInfo>
        </Channel>
        <Hr />
        <Comments />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}

export default Video
