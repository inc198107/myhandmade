import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import mainBckgr from '../../assets/images/meshok.jpg'

import Footer from '../../components/Footer/footer';

const useStyles = makeStyles({
    main: {
        display: 'flex',
        color: 'rgba(255, 255, 255, 0.82)',
        height: 'calc(100vh - 60px)',
        justifyContent: 'center',
        margin: '0',

    },
    headers_one: {
        fontFamily:"Bernard-Scriptic",
        fontSize: '80px',
        letterSpacing: '2px'

    },
    main_backgr: {
        backgroundImage: `url(${mainBckgr})`,
        boxSizing: 'border-box'
    }
})

export default function Landing() {
    const style = useStyles();
    return (
        <Paper className={style.main_backgr} >
            <div className={style.main}>
                <h1 className={style.headers_one}>Handmade</h1>
            </div>
            <Footer />
        </Paper>
    )
}
