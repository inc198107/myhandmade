import flower from '../images/crocus.png';
import flower1 from '../images/flower.png';
import flower2 from '../images/Orchid.png';
import flower3 from '../images/Leave.png'

 export const imgArr = [
        {
            name: 'one',
            img: flower
        },
        {
            name: 'two',
            img: flower1
        },
        {
            name: 'three',
            img: flower2
        },
        {
            name: 'four',
            img: flower3
        }
   ]


const mockImages =  () => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(imgArr), 100)
    })
};

export default mockImages
