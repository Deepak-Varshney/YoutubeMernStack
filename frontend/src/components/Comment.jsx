import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0;
`
const Avatar = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;

`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};

`

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;

`
const Text = styled.span`
  font-size: 14px;
`

const Comment = () => {
  return (
    <Container>
      <Avatar src='https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s176-c-k-c0x00ffffff-no-rj-mo' />
      <Details>
        <Name>Shiva <Date> 3 days ago </Date></Name>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ipsam nulla veniam sapiente, nostrum, asperiores recusandae reprehenderit eveniet iste, a autem consequuntur est dolores ratione quae molestiae ea rerum magni?</Text>
      </Details>
    </Container>
  )
}

export default Comment
