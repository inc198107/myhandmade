import React from 'react';
import { makeStyles } from '@material-ui/core';

import placeholder from '../../assets/icons/img_placeholder.svg'

const useStyle = makeStyles({
    container: {
        boxShadow: '3px 2px 2px rgba(15, 15, 15, 0.7)',
        border:'1px solid rgba(15, 15, 15, 0.5)',
        position: 'absolute',
        width: '320px',
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        willChange: 'transform',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: `radial-gradient(ellipse at top, rgba(255, 255, 255, 1) 25%, #f0daa9 100%),
                    radial-gradient(ellipse at bottom, rgba(255, 255, 255, 1) 25%, #f0daa9 100%)`,
        boxSizing: 'border-box'
    },
    imageWrapper: {
        border: '2px solid rgba(6, 5, 5, 0.96)',
        marginTop: '10px',
        width: '90%',
        height: '290px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(38, 38, 38, 0.9)',
        '& img': {
            objectFit: 'contain',
            maxWidth: '100%',
            owerflow: 'hidden'
        }
    },
    imageName: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50px',
        color: 'rgba(6, 5, 5, 0.96)',
        fontFamily: 'Aramis',
        fontSize: '20px'
    }

})




export default function GalleryCard(props) {
    const style = useStyle();
    const { top, left} = props;

    const rotate = () => {
        let rand = -8 - 0.5 + Math.random() * 13;
        return Math.round(rand)
    }

    return (
        <div
            className={style.container}
            style={{ top: `${top}`, left: `${left}`,transform:`rotate(${rotate()}deg)`}}
        >
            <div className={style.imageWrapper}>
                <img src={props.img || placeholder} alt='something beauty' />
            </div>
            <div className={style.imageName}>
                <span>{props.imgName || 'Something Beauty'}</span>
            </div>
        </div>
    )
}