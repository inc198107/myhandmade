import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footerMain:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        height:'100px',
        width:'100%'
    },
    copiraight:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    logo:{
        width:'150px',
        height:'75px',
        objectFit:'contain'  
    }
    
})

export default function Footer() {
    const style = useStyles();
    return (
        <div className={style.footerMain}>
            <div className={style.copiraight}>
                <div>R</div>
                <span>My hanmade</span>
            </div>
            <div className={style.logo}>MYhanmadelogo</div>
            <span>2019</span>
        </div>
    )
}