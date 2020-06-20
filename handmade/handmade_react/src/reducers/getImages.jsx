import * as Types from '../Actions/actionTypes'

 const fetchGalleryImages = (state = [], {type, payload}) => {
       if (type === Types.GET_GALERY_IMAGES) {
        return [...state, ...payload]
    } 

    else if(type === Types.NEXT_IMAGE) {
            let replaced = state[0];
            state.push(replaced);
            return state.slice(1);
    }

    else{
        return state
    }

 }
export default fetchGalleryImages