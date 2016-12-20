/**
 * Created by nicolaigaina on 12/18/16.
 */
import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    console.log('Action received in reducer weather', action);

    switch(action.type){
        case FETCH_WEATHER:
            return[
                    action.payload.data,
                    ...state,
                ];
        // return state.concat([action.payload.data]);
    }

    return state;
}