import React from 'react';
import { 
    ScrollItemContainer , ProductImage,
    ProductImageOnly, ProductInfo, ProductTitle,
    ProductAdded, ProductPriceBox
} from './scroll-item.stylest';




const ScrollItemComponent= ({item}) => {

    const {name, price}=item;

    const date=new Date();
    const fullYear=date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate()+"  "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()

    return (
        <ScrollItemContainer>
            <ProductImage>
               <ProductImageOnly src="https://tse3.mm.bing.net/th?id=OIP.Pb8XD2U9zuOlM8lHuQpBXQHaHa&pid=Api&P=0&w=300&h=300"/>
            </ProductImage>
               <ProductInfo>
                     <ProductTitle>{name}</ProductTitle>
                     <ProductAdded>Updated at {fullYear}</ProductAdded>
               </ProductInfo>
               <ProductPriceBox>
                      <ProductTitle>{price}PLN</ProductTitle>
               </ProductPriceBox>
        </ScrollItemContainer>
    );
}

export default ScrollItemComponent;
