import React from 'react';
import { NewsItemContainer, NewsItemImage, NewsParagraph,
    NewsCenter
 } from './news-items.styles';
import { Container, Header } from 'semantic-ui-react'
import CustomButton from '../custom-btn/custom-btn';


const NewsItem = ({item}) => {
  const {text, title , image}=item;

    return (

        <NewsItemContainer>
            <Container text>
                <NewsCenter>
                    <Header as="h2">{title}</Header>
                </NewsCenter>
               <NewsItemImage src={image}/>
               <NewsParagraph>{text}</NewsParagraph>
               <NewsCenter>
                   <CustomButton name="Read More" fill="outlined" color="primary" padding/>
               </NewsCenter>
            </Container>
        </NewsItemContainer>
    );
}





export default NewsItem;
