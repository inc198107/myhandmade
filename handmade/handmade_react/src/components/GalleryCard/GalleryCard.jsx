import React from 'react';
import { makeStyles} from '@material-ui/core';

import placeholder from '../../assets/icons/img_placeholder.svg'

const useStyle = makeStyles({
    container: {
        boxShadow:'3px 2px 2px rgba(15, 15, 15, 0.7)',
        width:'320px',
        height:'350px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        background:`radial-gradient(ellipse at top, rgba(255, 255, 255, 1) 25%, #f0daa9 100%),
                    radial-gradient(ellipse at bottom, rgba(255, 255, 255, 1) 25%, #f0daa9 100%)`,
        boxSizing:'border-box'
    },
    imageWrapper:{
        border:'2px solid rgba(6, 5, 5, 0.96)',
        marginTop:'10px',
        width:'90%',
        height:'290px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        '& img':{
            objectFit:'contain',
            maxWidth:'100%',
            owerflow:'hidden'
        
        }
    },
    imageName:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'50px',
        color:'rgba(6, 5, 5, 0.96)',
        fontFamily:'Aramis',
        fontSize:'20px'
    }

})
export default function GalleryCard(props) {
    const style = useStyle();
    return (
        <div className={style.container}>
            <div className={style.imageWrapper}>
                <img src={props.img ||  placeholder } alt='something beauty' />
            </div>
        <div className={style.imageName}>
                <span>{props.imgName || 'Something Beauty'}</span>
            </div>
        </div>
    )
}