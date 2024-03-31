import { IAppState } from 'src/types/IAppstate';
import { initialProducts } from '../initialProducts';
import { TOGGLE_FAVORITES_ACTION, GOTO_CONTACT_ACTION, AppActions } from './actions'

export function productsReducer(state : IAppState = initialContacts, action: AppActions) {
    switch (action.type) {
        case TOGGLE_FAVORITES_ACTION:
            return state.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }

                return product;
            })

        case DECREASE_QUANTITY_ACTION:
            return state.map((product) => {
                if (product.id === action.payload.id && product.quantity > 0) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }

                return product;
            })

        default:
            break;
    }

    return state;
}
