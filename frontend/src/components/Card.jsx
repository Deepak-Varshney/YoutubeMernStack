import React from 'react'
import styled from 'styled-components'
import thumbnail from '../images/thumbnail.jpg'
import { Link } from 'react-router-dom'
const Container = styled.div`
  width: ${(props)=>props.type!=="sm" && "360px"};
  margin-bottom: ${(props)=>props.type==="sm" ? "10px":"45px"};
  cursor: pointer;
  display: ${(props)=>props.type==="sm" && "flex"};
  gap: 10px;
`
const Image = styled.img`
  width: 100%;
  height: ${(props)=>props.type==="sm" ? "120px" :"202"};;
  background-color: #999;
  cursor: pointer;
  gap: 10px;
  flex: 1;

`
const Details = styled.div`
  display: flex;
  margin-top: ${(props)=>props.type!=="sm" && "16px"};
  gap: 12px;
  flex: 1;
`
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props)=>props.type==="sm" && "none"};;
`
const Texts = styled.div`
  
`
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`
const ChannelName = styled.h2`
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
  margin: 8px 0;
`
const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
`

const Card = ({type}) => {
  return (
    <Link to="video/test" style={{textDecoration:"none"}}>
      <Container type={type}>
        <Image type={type} src={thumbnail} />
        <Details type={type}>
          <ChannelImage type={type}  src='https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s176-c-k-c0x00ffffff-no-rj-mo' />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Deepak Varshney</ChannelName>
            <Info>69,690 • views 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card
