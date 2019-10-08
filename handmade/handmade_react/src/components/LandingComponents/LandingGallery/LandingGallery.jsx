import React from 'react';
import PropTypes from 'prop-types';
import { A } from 'hookrouter';
import { makeStyles } from '@material-ui/core/styles';

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

 const LandingGallery = (props) => {
    const style = useStyle();
    const { imagesArr, categoryName } = props;
    const galery = imagesArr.map((i) => (
        <GalleryCard key={i} img={i.img} imgName={i.name} rt={true} top='70px'/>
    ))

    return (
        <div className={style.galleryContainer}>
            <A href='/' className={style.galleryName}><h3>{categoryName}</h3></A>
            {galery}
        </div>
    )

}

LandingGallery.propTypes = {
    imagesArr:PropTypes.arrayOf(PropTypes.shape({name:PropTypes.string, img:PropTypes.string})),
    categoryName:PropTypes.string
}

LandingGallery.defaultProps = {
    categoryName:'Gallery'
}

export default LandingGallery


