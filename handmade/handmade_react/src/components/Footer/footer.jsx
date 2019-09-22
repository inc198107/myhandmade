import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footerMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60px',
        background: 'rgba(0,0,0,0.36)',
        color: 'rgba(255, 255, 255, 0.82)',
        fontFamily:'Bernard-Scriptic',
        fontSize:'20px',
        width: '100%'
    },
    copiraight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: '150px',
        height: '75px',
        objectFit: 'contain'
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
            <span style={{fontSize:'30px'}}>2019</span>
        </div>
    )
}