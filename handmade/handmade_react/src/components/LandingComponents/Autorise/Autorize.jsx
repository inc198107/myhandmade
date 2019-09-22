import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import background from '../../../assets/images/plate_row.png'

const useStyles = makeStyles({
    main:{
        display:'flex',
        position:'relative',
        height:'200px',
        width:'200px',
        background: `center / contain no-repeat url(${background})`,
        '&:hover':{
            transition:'transform 1s',
            transform:'rotate(-50deg)'
        },
        '&:not(:hover)':{
            transition:'transform 1s',
            transform:'rotate(0)'
        }
    },
    welcome:{
        position:'absolute',
        fontFamily:"Bernard-Scriptic",
        fontSize:'50px',
        fontWeight:'600',
        letterSpacing:'.2rem',
        transform:'translate(20px,18px) rotate(49deg)',
        top:'40px'
    }

})


export default function Autorize(){
    const style = useStyles();
    return(
        <div className={style.main}>
            <p className={style.welcome}>Welcome</p>
        </div>
    )
}