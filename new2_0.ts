var myNullVar: null;

var myNullVar2: undefined;


console.log(typeof myNullVar);

console.log(typeof myNullVar2);


if (myNullVar2 === undefined) {

    console.log("oh yeah nice typescript2.0 feature");


}



var myControlFlow: string | number;


myControlFlow = 'hello im a string';

console.log(typeof myControlFlow);


myControlFlow = 4;

console.log(typeof myControlFlow);



var myGroceryBasket: string | string[];

myGroceryBasket = 'orange';

console.log(typeof myGroceryBasket);


myGroceryBasket = ['orange', 'apple', 'banana'];

console.log(typeof myGroceryBasket);



interface Archer {

    kind: 'archer';

    lastName: string;

}

interface Samurai {

    kind: 'samurai';

    lastName: string;

}

interface Magician {

    kind: 'magician';

    lastName: string;

}


type WarriorChoice = Archer | Samurai | Magician;

function selectWarrior(warrior: WarriorChoice) {

    switch (warrior.kind) {

        case 'archer':

            return `Our warrior (${warrior.kind})'s last name is (${warrior.lastName})`;

        case 'samurai':

            return `Our warrior (${warrior.kind})'s last name is (${warrior.lastName})`;

        case 'magician':

            return `Our warrior (${warrior.kind})'s last name is (${warrior.lastName})`;
    }

}

interface Creature {

    readonly height: number;

    readonly width: number;

    readonly ocean: string;

}

{let vreeg: Creature = { 
    
                            height: 100, 
        
                            width: 50, 
                            
                            ocean: 'Pacific' 
                        
                       }

    
    console.log(vreeg);


    // vreeg.ocean = "Atlantic";

    // console.log(vreeg);

    
    class Boat {

        readonly capacity = 30;

        readonly name: string;


        constructor() {

            this.name = 'The Adventurer';

        }

    }

}

import jquery from 'jquery';