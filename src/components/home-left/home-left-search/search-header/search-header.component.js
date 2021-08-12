import React from 'react';
import {
     HomeLeftSearchContainer, HomeLeftSearchForm,
     HomeLeftSerachInput, HomeLeftSerachButton,
     HomeLeftsearchInputIcon
     } from './search-header.styles';
import SearchIcon from '@material-ui/icons/Search';

const HomeLeftSearch = () => {



    return (
        <HomeLeftSearchContainer>
            <HomeLeftSearchForm>
                     <HomeLeftSerachButton type="submit">SEARCH</HomeLeftSerachButton>
                     <HomeLeftsearchInputIcon>
                         < HomeLeftSerachInput type="search" placeholder="serach..." autoComplete="true"/>
                         <SearchIcon/>    
                     </HomeLeftsearchInputIcon>
            </HomeLeftSearchForm>
        </HomeLeftSearchContainer>
    );
}

export default HomeLeftSearch;
