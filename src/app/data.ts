import { Service } from '@angular/core';

@Service()
export class Data {
    getNames(): string[]
    {
        return ['Asha','Ravi','Meena']
    }
}


