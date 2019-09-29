import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import mainBckgr from '../../assets/images/meshok.jpg';

import Footer from '../../components/Footer/footer';
import Autorize from '../../components/LandingComponents/Autorise/Autorize';
import GalleryCard from '../../components/GalleryCard/GalleryCard';

const useStyles = makeStyles({
    main: {
        display: 'grid',
        gridTemplateRows: '20% 20% 20% 20% 20%',
        gridTemplateColumns: '20% 20% 20% 20% 20%',
        color: 'rgba(255, 255, 255, 0.82)',
        height: 'calc(100vh - 60px)',
        justifyContent: 'center',
        margin: '0',

    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        maxHeight: '20%',
        justifyContent: 'center',
        gridColumnStart: '1',
        gridColumnEnd: ' span 5',
        gridRowStart: '1',
        gridRowEnd: 'row2-start'
    },
    headers_one: {
        fontFamily: "Bernard-Scriptic",
        fontSize: '100px',
        letterSpacing: '2px'
    },
    login: {
        gridColumnStart: 'col3-end',
        gridColumnEnd: '5',
        gridRowStart: '1',
        gridRowEnd: '2'
    },
    galleryOne:{
        gridColumnStart: '1',
        gridColumnEnd: '3',
        gridRowStart: '2',
        gridRowEnd: '4',
        marginLeft:'20px'
    },
    main_backgr: {
        backgroundImage: `url(${mainBckgr})`,
        boxSizing: 'border-box'
    }
})

export default function Landing() {
    const style = useStyles();
    return (
        <div className={style.main_backgr} >
            <div className={style.main}>
                <div className={style.header}>
                    <h1 className={style.headers_one}>My Handmade</h1>
                </div>
                <div className={style.login} >
                    <Autorize/>
                </div>
                <div className={style.galleryOne}>
                    <GalleryCard/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
