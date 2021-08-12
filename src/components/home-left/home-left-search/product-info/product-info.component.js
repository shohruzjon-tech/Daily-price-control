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

const ProductInfo = (item) => {

    const {price , name, updatedAt}=item

    return (
        <ProductInfoContainer>
            <ProductInfoHeaderContainer>
            <ProductInfoHeader>
                <ProductInfoHeaderTitle>Apple {name}</ProductInfoHeaderTitle>
                  <ProductInfoHeaderDesc>Beidronka- Poland, Warsaw</ProductInfoHeaderDesc>
                  </ProductInfoHeader>
                 <CustomButton fill="contained" color="secondary" name="addToCart" icon={<AddShoppingCartIcon style={{marginRight:10}}/>}/>
            </ProductInfoHeaderContainer>
            <ProductInfoDetails>
                 <ProductInfoPrice>
                    <ProductInfoHeaderTitle>Price:</ProductInfoHeaderTitle>
                    <ProductInfoHeaderDesc>20 PLN <GradeIcon style={{fontSize:15, color:"#00CEAB", marginTop:"-9px"}}/></ProductInfoHeaderDesc>
                  </ProductInfoPrice>
                 <ProductInfoPrice>
                  <ProductInfoHeaderTitle>Name:</ProductInfoHeaderTitle>
                  <ProductInfoHeaderDesc>Apple</ProductInfoHeaderDesc>
                 </ProductInfoPrice>
                 <ProductInfoPrice>
                  <ProductInfoHeaderTitle>Color:</ProductInfoHeaderTitle>
                  <ProductInfoHeaderDesc>Red</ProductInfoHeaderDesc>
                 </ProductInfoPrice>
            </ProductInfoDetails>
        </ProductInfoContainer>
    );
}




export default ProductInfo;
