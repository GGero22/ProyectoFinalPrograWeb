import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {mobile} from "../responsive.js"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Logo = styled.h1`
    flex: 1;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-right: 20px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>STORE ONLINE S.A.</Logo>
            <Desc> Somos una empresa de tecnologia, en donde encontraras los mejores productos
                tecnologicos al mejor precio. Descubrenos y disfruta de nuestras ofertas 
                hechas para ti.
            </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
                <FacebookIcon/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <InstagramIcon/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <TwitterIcon/>
            </SocialIcon>
         
        </SocialContainer>
        </Left>
        <Center>
            <Title>Mas</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Carrito</ListItem>
                <ListItem>Mi cuenta</ListItem>
                <ListItem>Terminos y condiciones</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contacto</Title>
            <ContactItem><EmailOutlinedIcon/>geronimorodriguez@umes.edu.gt</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer