import React from 'react';
import { 
    ScrollItemContainer , ProductImage,
    ProductImageOnly, ProductInfo, ProductTitle,
    ProductAdded, ProductPriceBox
} from './scroll-item.stylest';
import {connect}  from 'react-redux';
import { pushToMain } from '../../../../../redux/product/product.action';


const ScrollItemComponent= ({item, index, pushToMain, product}) => {

    const {name, price}=item;

    const date=new Date();
    const fullYear=date.getFullYear()+"/"+date.getMonth()+"/"
    +date.getDate()+"  "+ date.getHours()+":"+date.getMinutes()
    +":"+date.getSeconds()


    
    
    React.useEffect(()=>{
        index===0? pushToMain({...item, index}) : 
        console.log();
    }, [pushToMain])

    return (
        <ScrollItemContainer
         index={index===product.index ? true :  false} 
         onClick={()=>pushToMain({...item, index})}
         >
            <ProductImage>
               <ProductImageOnly src="https://tse3.mm.bing.net/th?id=OIP.Pb8XD2U9zuOlM8lHuQpBXQHaHa&pid=Api&P=0&w=300&h=300"/>
            </ProductImage>
               <ProductInfo>
                     <ProductTitle>{name}</ProductTitle>
                     <ProductAdded>Updated at {fullYear}</ProductAdded>
               </ProductInfo>
               <ProductPriceBox>
                      <ProductTitle>{price} PLN</ProductTitle>
               </ProductPriceBox>
        </ScrollItemContainer>
    );
}


const mapDispatchToProps=dispatch=>({
    pushToMain:product=>dispatch(pushToMain(product))
})

const mapStateToProps=state=>({
    product:state.product.product
})

export default connect(mapStateToProps, mapDispatchToProps)(ScrollItemComponent);
