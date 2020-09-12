import { createApp } from 'frint';
import {createStore} from 'frint-store';

import RootComponent from '../components/Root';
import rootReducer from '../reducers';
import { DEFAULT_TEXT } from '../constants';

export default createApp({
    name: 'ProductDetails',
    providers: [
        {
            name: 'component',
            useValue: RootComponent
        },
        {
            name: 'store',
            useFactory: ({app}) => {
                const Store = createStore({
                    initialState: {
                        counter: {
                            value: 1
                        },
                        text: {
                            value : DEFAULT_TEXT
                        }
                    },

                    reducer: rootReducer
                });

                return new Store();
            },
            deps: ['app']
        }
    ]
});