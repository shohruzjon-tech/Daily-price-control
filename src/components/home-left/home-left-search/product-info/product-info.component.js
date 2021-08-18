import React from 'react';
import {
     ProductInfoContainer, ProductInfoHeader,
     ProductInfoHeaderTitle, ProductInfoHeaderDesc,
     ProductInfoHeaderContainer, ProductInfoDetails,
     ProductInfoPrice
     } from './product-info.styles';

import CustomButton from '../../../custom-btn/custom-btn';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import GradeIcon from '@material-ui/icons/Grade';
import {connect} from 'react-redux';
import { addToCart } from '../../../../redux/cart/cart.actions';


const ProductInfo = ({product, addToCart}) => {

    const {price , name}=product;

    return (
        <ProductInfoContainer>
            <ProductInfoHeaderContainer>
            <ProductInfoHeader>
                <ProductInfoHeaderTitle>{name}</ProductInfoHeaderTitle>
                  <ProductInfoHeaderDesc>Beidronka- Poland, Warsaw</ProductInfoHeaderDesc>
                  </ProductInfoHeader>
                 <CustomButton 
                 padding
                 fill="contained" 
                 color="secondary"
                 name="addToCart" 
                 icon={<AddShoppingCartIcon style={{marginRight:10}}/>}
                 onClick={()=>addToCart({
                 ...product,     
                 secondary: `Who wants to have a cookout this weekend? I just got some furniture
                 for my backyard and would love to fire up the grill.`,
                 person: '/static/images/avatar/1.jpg',
                })}
                 />
            </ProductInfoHeaderContainer>
            <ProductInfoDetails>
                 <ProductInfoPrice>
                    <ProductInfoHeaderTitle>Price:</ProductInfoHeaderTitle>
                    <ProductInfoHeaderDesc>{price} PLN <GradeIcon style={{fontSize:15, color:"#00CEAB", marginTop:"-9px"}}/></ProductInfoHeaderDesc>
                  </ProductInfoPrice>
                 <ProductInfoPrice>
                  <ProductInfoHeaderTitle>Name:</ProductInfoHeaderTitle>
                  <ProductInfoHeaderDesc>{name}</ProductInfoHeaderDesc>
                 </ProductInfoPrice>
                 <ProductInfoPrice>
                  <ProductInfoHeaderTitle>Color:</ProductInfoHeaderTitle>
                  <ProductInfoHeaderDesc>Red</ProductInfoHeaderDesc>
                 </ProductInfoPrice>
            </ProductInfoDetails>
        </ProductInfoContainer>
    );
}

const mapStateToProps=state=>({
     product:state.product.product
})


const mapDispatchToProps=dispatch=>({
    addToCart:cart=>dispatch(addToCart(cart))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
