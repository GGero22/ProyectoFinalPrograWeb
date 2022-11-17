import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display:flex;  
    align-items: center;
    justify-content: center;
    font-size: 14px; 
    font-weight: 500;
`

export const Announcement = () => {
  return (
    <Container>
        <a href="http://google.com">Super Deal! Free Shinpping on Orders over 40Q</a> 
        {/* Aqui va lo de las ofertas hacia el correo */}
        
    </Container>
  )
}

export default Announcement