import React from 'react';
import { A } from 'hookrouter';
import { makeStyles } from '@material-ui/core/styles';

import scissors from '../../assets/icons/scissors.svg'

const useStyles = makeStyles({
    footerMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
        background: 'rgba(0,0,0,0.36)',
        color: 'rgba(255, 255, 255, 0.82)',
        fontFamily: 'Bernard-Scriptic',
        fontSize: '20px',
        width: '100%'
    },
    copirait: {
        display: 'flex',
        flexGrow:'2',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '12px',
        fontSize: '35px'
    },
    logo: {
        width: '45px',
        height: '45px',
        opacity: '0.9'
    },
    year:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexGrow:'4',
        fontSize: '40px',
        color: 'rgba(255, 255, 255, 0.82)'
    },
    contacts: {
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        flexGrow:'2',
        '& A': {
            textDecoration: 'none',
            color: 'rgba(255, 255, 255, 0.82)',
            paddingRight:'12px',
            fontSize:'45px',
            '&:hover':{
                color: 'rgba(255, 255, 255,1)'
            }
        }
    }

})

export default function Footer() {
    const style = useStyles();

    return (
        <div className={style.footerMain}>
            <div className={style.copirait}>
                <img className={style.logo} src={scissors} alt='logo' />
                <span>My hanmade</span>
            </div>
            <span className={style.year}>2019</span>
            <div className={style.contacts}>
                <A href='/contacts'>Contacts</A>
            </div>
        </div>
    )
}