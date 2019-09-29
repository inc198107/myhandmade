import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';

import winter from '../../assets/images/snow.png';
import spring from '../../assets/images/crocus.png'
import fall from '../../assets/images/Leave.png';
import summer from '../../assets/images/flower.png';
import orchid from '../../assets/images/Orchid.png';

const useStyles = makeStyles({
    theme: {
        position: 'absolute',
        top:'-10vh',
        display: 'grid',
        gridTemplateColumns: '25% 25% 25% 25%',
        gridTemplateRows: '15% 1fr 1fr 1fr',
        gridRowGap: '5vh',
        boxSizing: 'border-box',
        width: '100vw',
        height: '110vh',
        zIndex: '-5',
        overflow: 'hidden'
    },
    container: {
        width: '25vw',
        height: '25vw',
        display: 'flex',
        justifyContent: 'center',
        justifySelf: 'start',
        alignItems: 'center',
        '& img': {
            objectFit: 'contain',
            width: '100%',
            height: '100%',
        }
    },
    first: {
        gridColumnStart: 'column1-start',
        gridColumnEnd: '1',
        gridRowStart: 'row1-start',
        gridRowEnd: '1'
    },
    second: {
        transform: 'rotate(30deg)',
        gridColumnStart: '1',
        gridColumnEnd: '1',
        gridRowStart: 'row2-start',
        gridRowEnd: '2'
    },
    third: {
        transform: 'rotate(-20deg)',
        gridColumnStart: '1',
        gridColumnEnd: '1',
        gridRowStart: 'row3-start',
        gridRowEnd: '3'
    },
    fourth: {
        transform: 'rotate(-55deg)',
        gridColumnStart: '1',
        gridColumnEnd: '1',
        gridRowStart: 'row4-start',
        gridRowEnd: '4'
    },
    first_last: {
        transform: 'rotate(185deg)',
        gridColumnStart: 'col3-end',
        gridColumnEnd: '4',
        gridRowStart: 'row1-start',
        gridRowEnd: '1'
    },
    second_last: {
        transform: 'rotate(38deg)',
        gridColumnStart: 'col3-end',
        gridColumnEnd: '4',
        gridRowStart: 'row2-start',
        gridRowEnd: '2'
    },
    third_last: {
        transform: 'rotate(-27deg)',
        gridColumnStart: 'col3-end',
        gridColumnEnd: '4',
        gridRowStart: 'row3-start',
        gridRowEnd: '3'
    },
    fourth_last: {
        transform: 'rotate(-51deg)',
        gridColumnStart: 'col3-end',
        gridColumnEnd: '4',
        gridRowStart: 'row4-start',
        gridRowEnd: '4'
    },
    hide: {
        display: 'none'
    }
})

export default function Theme(props) {
    const style = useStyles();
    const yearTime = () => {
        let mounth = Number(moment().format('M'));
        if ((mounth === 12) || (mounth <= 2)) return <img src={winter} alt='winter' />;
        else if ((mounth >= 3) && (mounth <= 5)) return <img src={spring} alt='spring' />;
        else if ((mounth >= 6) && (mounth <= 8)) return <img src={summer} alt='summer' />;
        else if ((mounth >= 9) && (mounth <= 11)) return <img src={fall} alt='fall' />;
        else return <img src={orchid} alt='flower' />;
    }

    return (
        <Fragment>
            {props.children}
            <div className={style.theme}>
                <div className={`${style.container} ${style.first}`}>
                    {yearTime()}
                </div>
                <div className={`${style.container} ${style.second}`}>
                    {yearTime()}
                </div>
                <div className={`${style.container} ${style.third}`}>
                    {yearTime()}
                </div>
                <div className={`${style.container} ${style.fourth}`}>
                    {yearTime()}
                </div>
                <div className={`${style.container} ${style.first_last}`}>
                    {yearTime()}
                </div>
                <div className={`${style.container} ${style.second_last}`}>
                    {yearTime()}
                </div>
                <div className={`${style.container} ${style.third_last}`}>
                    {yearTime()}
                </div>
                <div className={`${style.container} ${style.fourth_last}`}>
                    {yearTime()}
                </div>
            </div>
        </Fragment>
    )
}