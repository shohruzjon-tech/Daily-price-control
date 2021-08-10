import React from 'react';
import { useHistory } from 'react-router-dom';
import {
     HeaderBottomContainer, HeaderBottomLogo,
     HeaderBottomLogoCon, HeaderBottomLogoTextBox,
     HeaderBottomLogoTextHead, HeaderBottomLogoTexDes,
     HeaderBottomRight, HeaderBottomRightMenu,HeaderBottomListItem,
     HeadertextHover, SubList, SubListItem
     } from './header-bottom.styles';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));



const HeaderBottom = () => {
const classes = useStyles();

const history=useHistory();


    return (
        <HeaderBottomContainer>
            <HeaderBottomLogoCon onClick={()=>history.push('/')}>
                <HeaderBottomLogo>
                     <ShowChartIcon/>
                </HeaderBottomLogo>
                <HeaderBottomLogoTextBox>
                     <HeaderBottomLogoTextHead>DPR</HeaderBottomLogoTextHead>
                     <HeaderBottomLogoTexDes>EVOLUTION</HeaderBottomLogoTexDes>
                </HeaderBottomLogoTextBox>
            </HeaderBottomLogoCon>
            <HeaderBottomRight>
                   <HeaderBottomRightMenu>
                        <HeaderBottomListItem>
                          <HeadertextHover>Features <ArrowDropDownIcon/></HeadertextHover>
                                    <SubList>
                                        <SubListItem>Help center <ArrowDropDownIcon/></SubListItem>
                                        <SubListItem>Help center <ArrowDropDownIcon/></SubListItem>
                                        <SubListItem>Help center <ArrowDropDownIcon/></SubListItem>
                                    </SubList>
                        </HeaderBottomListItem>   
                        <HeaderBottomListItem>
                        <HeadertextHover>Help center <ArrowDropDownIcon/></HeadertextHover>
                                    <SubList>
                                        <SubListItem>Help center <ArrowDropDownIcon/></SubListItem>
                                        <SubListItem>Help center <ArrowDropDownIcon/></SubListItem>
                                        <SubListItem>Help center <ArrowDropDownIcon/></SubListItem>
                                    </SubList>
                        </HeaderBottomListItem>   
                        <HeaderBottomListItem>
                              <HeadertextHover>News</HeadertextHover>
                       </HeaderBottomListItem>   
                        <HeaderBottomListItem> 
                           <HeadertextHover>Account</HeadertextHover>
                          </HeaderBottomListItem>   
                   </HeaderBottomRightMenu>
                   <div className={classes.root}>
                      <Button variant="outlined" color="primary">
                               Sign in
                      </Button>
                    </div>
            </HeaderBottomRight>
        </HeaderBottomContainer>
    );
}

export default HeaderBottom;
