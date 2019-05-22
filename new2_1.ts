interface Warrior {

    name: string;

    weapon: string;

    strength: number;

    agility: number;

}

{let hunora: Warrior = {     
    
                            name: 'Hunora',

                            weapon: 'swords',

                            strength: 4,

                            agility: 5

                       }   


    console.log(hunora);

    type Category<T> = {

                           [P in keyof T]?: T[P];

                       };

    type Samurai = Category<Warrior>;

    {let gojin: Samurai = {

                            name: 'Gojin',

                            weapon: 'staff'

                          }

        console.log(gojin);

    }

    {let vreegKing = {

                        size: 250,

                        ocean: 'Pacific',

                        snout: 'Big'

                     };

        console.log(vreegKing);


    }

}