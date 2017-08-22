import { Component } from '@angular/core';

@Component({
    selector: 'app-animals',
    templateUrl: './animals.component.html'
})
export class AnimalsComponent{

    private animals: any[];

    constructor(){
        this.animals = [
            {
                species: 'Dog',
                name: 'John',
                birthDate: '01.01.2000'
            },
            {
                species: 'Cat',
                name: 'Meow',
                birthDate: ''
            },
            {
                species: 'Hamster',
                name: 'Mickey',
                birthDate: '01.01.2000'
            },
            {
                species: 'Spider',
                name: 'Webby',
                birthDate: '01.01.2000'
            },
            {
                species: 'Tiger',
                name: 'Lew',
                birthDate: ''
            }
        ]
    }

    remove(animal){
        const index = this.animals.indexOf(animal);
        this.animals.splice(index, 1);
    }
}