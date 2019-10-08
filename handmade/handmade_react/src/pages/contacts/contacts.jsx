import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Roll from 'react-reveal/Roll';
import { Paper } from '@material-ui/core';

import { A } from 'hookrouter';

import mainBckgr from '../../assets/images/meshok.jpg'
import scissors from '../../assets/icons/scissors.svg'
import skype from '../../assets/icons/skype.svg'
import telegram from '../../assets/icons/telegram.svg'
import message from '../../assets/icons/message.svg'

const useStyles = makeStyles({
    wrapper: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contacts_window: {
        width: '400px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${mainBckgr})`,
    },
    logo: {
        with: '30px',
        height: '30px',
        paddingRight: '8px',
        paddingLeft: '8px'
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexGrow: '1',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'rgba(255, 255, 255, 0.82)',
        fontFamily: 'Bernard-Scriptic',
        fontSize: '30px',
        '&:hover': {
            color: 'rgba(255, 255, 255,1)'
        }
    },
    home: {
        fontSize: '40px'
    },
    contacts: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '3',
        width: '90%'
    },
    contacts_content: {
        display: 'flex',
        flexBasis: '30%',
        flexShrink: '0',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'rgba(255, 255, 255, 0.82)',
        fontSize: '20px'
    }

})

const Contacts = () => {

    const style = useStyles();
    return (
        <div className={style.wrapper}>
            <Roll top>
                <Paper className={style.contacts_window}>
                    <A className={style.head} href='/'>
                        <img className={style.logo} src={scissors} alt='logo' />
                        <h3>My Handmade</h3>
                    </A>
                    <div className={style.contacts}>
                        <div className={style.contacts_content}>
                            <img className={style.logo} src={message} alt='logo' />
                            <p> Email:</p>
                        </div>
                        <div className={style.contacts_content}>
                            <img className={style.logo} src={skype} alt='logo' />
                            <p>Skype:</p>
                        </div>
                        <div className={style.contacts_content}>
                            <img className={style.logo} src={telegram} alt='logo' />
                            <p>Telegram:</p>
                        </div>
                    </div>
                    <A className={`${style.head} ${style.home}`} href='/'>Home</A>
                </Paper>
            </Roll>
        </div>
    )
}

export default Contacts