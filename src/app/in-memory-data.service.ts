import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Persoon} from './persoon';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const personen: Persoon[] = [
            {id: 1, firstName: 'Adam', surname: 'Abrons', yearOfBirth: 1970, isCustomer: true},
            {id: 2, firstName: 'Misko', surname: 'Hevery', yearOfBirth: 1975, isCustomer: true},
            {id: 3, firstName: 'Brad', surname: 'Green', yearOfBirth: 1980, isCustomer: false}
        ];
        return {personen};
    }
}
