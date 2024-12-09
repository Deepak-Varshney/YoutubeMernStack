import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`
const NewComment = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Avatar = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;

`
const Input = styled.input`
border: none;
border-bottom: 1px solid ${({theme})=>theme.soft};
background-color: transparent;
outline: none;
padding: 5px;
color: ${({theme})=>theme.text};
width: 100%;
;
;
`


const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src='https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s176-c-k-c0x00ffffff-no-rj-mo'/>
        <Input placeholder='Add a Comment' />
      </NewComment>
    </Container>
  )
}

export default Comments
