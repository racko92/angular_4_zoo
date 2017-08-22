import { Component } from '@angular/core';
import { Animal } from '../animals';
import { Sector } from '../sector';

@Component({
    selector: 'app-animals',
    templateUrl: './animal-list.component.html'
})
export class AnimalsComponent{
    
        animals: any[];
        sector: Sector[];
        newAnimal: Animal = new Animal('','','');
    
        constructor(){
            this.sector = [
                new Sector('land', 'land'),
                new Sector('desert', 'desert'),
                new Sector('woods', 'woods'),
                new Sector('wather', 'wather')
            ]
            this.animals = [
                new Animal('Dog','John','01.01.2000', this.sector[0]),
                new Animal('Cat','Meow','', this.sector[1]),
                new Animal('Hamster','Mickey','01.01.2000', this.sector[2]),
                new Animal('Spider', 'Spidey', '01.01.2000', this.sector[3]),
                new Animal('Tiger','Leo', '', this.sector[0])
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
        addAnimal(animal){
            this.animals.push(animal);
            this.newAnimal = new Animal('','','');
        }
        alert(sector){

            let list = [];
            
            this.animals.forEach(function(animal){
                if(animal.sector && animal.sector.name == sector.name){
                    list.push(animal.name);
                }
            });
            alert(list.toString());
        }
    }