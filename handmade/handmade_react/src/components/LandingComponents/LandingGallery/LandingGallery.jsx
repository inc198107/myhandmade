import React from 'react';
import { A } from 'hookrouter';
import { makeStyles } from '@material-ui/core/styles';

import images from '../../../assets/tempGallery/tempGallery';

import GalleryCard from '../../GalleryCard/GalleryCard'

const useStyle = makeStyles({
    galleryContainer: {
        position: 'relative',
        maxWidth: '360px',
        maxHeight: '400px',
        willChange: 'transform',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    galleryName: {
        textDecoration: 'none',
        paddingBottom: '5px',
        color: 'rgba(255, 255, 255, 0.82)',
        fontFamily: 'Bernard-Scriptic',
        fontSize: '50px',
        '&:hover': {
            color: 'rgba(255, 255, 255,1)'
        }
    }
})

export default function LandingGallery(props) {
    const style = useStyle();

    const galery = images.map((i) => (
        <GalleryCard key={i} img={i.img} imgName={i.name} top='70px'/>
    ))

    return (
        <div className={style.galleryContainer}>
            <A href='/' className={style.galleryName}><h3>{props.categoryName || 'Gallery'}</h3></A>
            {galery}
        </div>
    )
}