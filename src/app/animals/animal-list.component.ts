import { Component } from '@angular/core';
import { Animal } from '../animals.component';

@Component({
    selector: 'app-animals',
    templateUrl: './animal-list.component.html'
})
export class AnimalsComponent{
    
        private animals: any[];
    
        constructor(){
            this.animals = [
                    new Animal('Dog','John','01.01.2000'),
                    new Animal('Cat','Meow',''),
                    new Animal('Hamster','Mickey','01.01.2000'),
                    new Animal('Spider', 'Spidey', '01.01.2000'),
                    new Animal('Tiger','Leo', '')
                ];
    
        }    
        
        remove(animal){
            const index = this.animals.indexOf(animal);
            this.animals.splice(index, 1);
        }
        moveToTop(animal){
            const index = this.animals.indexOf(animal);
            this.animals.splice(index, 1);
            this.animals.unshift(animal); 
        }
    }