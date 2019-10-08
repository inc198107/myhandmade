import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import placeholder from '../../assets/icons/img_placeholder.svg';

const useStyle = makeStyles({
    container: {
        boxShadow: '3px 2px 2px rgba(15, 15, 15, 0.7)',
        border: '1px solid rgba(15, 15, 15, 0.5)',
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




const GalleryCard = (props) => {
    const style = useStyle();
    const { top, left, rt, img, imgName } = props;

    const rotate = (rot) => {
        if (rot) {
            let rand = -8 - 0.5 + Math.random() * 13;
            return Math.round(rand)
        }
        else return 0
    }

    return (
        <div
            className={style.container}
            style={{ top: `${top}`, left: `${left}`, transform: `rotate(${rotate(rt)}deg)` }}
        >
            <div className={style.imageWrapper}>
                <img src={img} alt='something beauty' />
            </div>
            <div className={style.imageName}>
                <span>{imgName}</span>
            </div>
        </div>
    )
}

GalleryCard.propTypes = {
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    rt: PropTypes.bool,
    img: PropTypes.string.isRequired,
    imgName: PropTypes.string.isRequired
}

GalleryCard.defaultProps = {
    img: placeholder,
    imgName: 'Something Beauty',
    rt: false,
    top:'0px',
    left:'0px'
}

export default GalleryCard