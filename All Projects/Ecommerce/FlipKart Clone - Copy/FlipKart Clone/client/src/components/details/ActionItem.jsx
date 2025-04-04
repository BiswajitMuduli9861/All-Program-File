import { Box, Button, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action/cartActions';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const LeftContainer = styled(Box)(({theme})=>({

  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')] : {
    padding: '20px 40px'
  }
}));
const Image = styled('img')({
    width: '95%',
    padding: '15px'
});
const StyledButton = styled(Button)(({theme})=>({

  width: '48%',
  height: '50px',
  borderRadius: '2px',
  [theme.breakpoints.down('lg')]:{
    width : '46%'
  },
  [theme.breakpoints.down('sm')]:{
    width: '48%'
  }
}));

const ActionItem = ({product}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const {id} = product;
  const addItemToCart = () =>{
    dispatch(addToCart(id, quantity));
        navigate('/cart');
  }

  const buyNow = async() =>{
   let response = await  ({amount: 500, email: 'bmududli126@gmail.com'});
    let information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params : response
    }
    post(information);
  }

  return (
    <LeftContainer>
        <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0',}}>

             <Image src={product.url} alt="" />
        </Box>
      <StyledButton variant='contained' onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}}><ShoppingCartIcon/>Add To Cart</StyledButton>
      <StyledButton variant='contained' onClick={()=>buyNow()} style={{background: '#fb541b'}}><FlashOnIcon/>Bye Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem
