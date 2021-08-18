import React from 'react';
import { Newspagecontainer, NewsBgc,NewsDailyUpdate, NewsSubscribe } from './news.styles';
import NewsItem from '../../components/news-items/news-items.component';
import { NEWS_DATA } from '../../components/data/data';
import ChatUsComponent from '../../components/chat-us/chat-us.component';
import MessagingBar from '../../components/messaging-bar/messaging-bar.component';
import CustomButton from '../../components/custom-btn/custom-btn';
import { Form } from 'semantic-ui-react'
import Checkbox from '@material-ui/core/Checkbox';

const NewsPage = () => {




    return (
        <Newspagecontainer>
          <ChatUsComponent/>
          <MessagingBar/>
           <NewsBgc>
               {NEWS_DATA.map(item=><NewsItem item={item} key={item.id}/>)}
               <NewsSubscribe>
                <NewsDailyUpdate>Subscribe for daily news updates.</NewsDailyUpdate>
               <Form>
                    <Form.Field>
                    <label>Name</label>
                    <input placeholder='Full Name' />
                    </Form.Field>
                    <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email address' />
                    </Form.Field>
                    <Form.Field>
                  
                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                    <span>I agree to the collection of my data</span>
                    </Form.Field>
                    <CustomButton padding fill="contained" name="SUBSCRIBE" color="primary" type="submit"/>
                </Form>
               </NewsSubscribe>
            </NewsBgc>
        </Newspagecontainer>
    );
}

export default NewsPage;
