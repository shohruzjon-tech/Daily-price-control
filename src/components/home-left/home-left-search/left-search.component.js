import React from 'react';
import { LeftSearchContainer } from './left-search.styles';
import ProductScroll from './products-scroll/products-sceoll.component';
import ProductInfo from './product-info/product-info.component';

const LeftSearch = () => {



    return (
        <LeftSearchContainer>
            <ProductScroll/>
            <ProductInfo/>
        </LeftSearchContainer>
    );
}

export default LeftSearch;
