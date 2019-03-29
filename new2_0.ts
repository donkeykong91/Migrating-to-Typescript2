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