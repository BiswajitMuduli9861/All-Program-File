import { Box, Button, Grid, Typography, styled, } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import TotalBalance from './TotalBalance';
import EmptyCart from './EmptyCart'
import { post } from '../../utils/paytm';



const Container = styled(Grid)(({theme})=>({
    padding: '30px 135px',
    [theme.breakpoints.down('md')] :{
        padding:'15px 0',
    }

    }))
const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;
const ButtonWrapper = styled(Button)`
    padding: 16px 22px;
    background:#fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
    width:100%;
`;
const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    width: 250px;
    height: 51px;
    border-radius: 2px;
`;
const LeftComponenet = styled(Grid)(({theme})=>({

    paddingRight:15,
    [theme.breakpoints.down('md')] : {
        marginBottom: 15,
    }
    }))

const Cart = () => {
    
  const buyNow = async() =>{
    let response = await  ({amount: 500, email: 'bmududli126@gmail.com'});
     let information = {
       action: 'https://securegw-stage.paytm.in/order/process',
       params : response
     }
     post(information);
   }
   const {cartItems} = useSelector(state => state.cart);
  return (
    <>
        {
            cartItems && cartItems.length > 0 ?
                <Container container>
                    <LeftComponenet item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>my Cart({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item=>(
                                    <CartItem item={item}/>
                                ))
                            }
                            <ButtonWrapper onClick={()=>buyNow()}> 
                                <StyledButton>Place Order</StyledButton>
                            </ButtonWrapper>
                    </LeftComponenet>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBalance cartItems = {cartItems}/>
                    </Grid>
                </Container>
            :<EmptyCart/>
        }
    </>
  )
}

export default Cart
