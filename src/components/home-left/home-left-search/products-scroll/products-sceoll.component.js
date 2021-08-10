import React from 'react';
import { ProductControlContainer } from './products-control.styles';
import ScrollItemComponent from './scroll-item/scroll-item.component';
import { DATA_ARRAY } from '../../../data/data';



const ProductScroll = () => {



    return (
        <ProductControlContainer>
              {DATA_ARRAY.map(item=><ScrollItemComponent item={item}/>)}
        </ProductControlContainer>
    );
}

export default ProductScroll;
