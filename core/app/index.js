import { createApp } from 'frint';
import RootComponent from '../components/Root';

export default createApp({
    name: 'MultipleAppsApp',
    providers: [
        {
            name: 'component',
            useValue: RootComponent
        }
    ]
});