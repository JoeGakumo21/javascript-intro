// alert("Hey there");
// prompt("Whats your favaorite planet");

let mySchool=prompt("Where do u go to school").toUpperCase();
console.log(mySchool);
confirm("Would you like to continue");

// exercise for function
alert("Warning you are enterning danger zone");
confirm("are u sure to quit?");
let question =parseInt(prompt("How old have u dated her"));

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
     let ingredientAmount = amount * factor;
     if (ingredientAmount > 1) {
       unit += "s";
     }
    console.log(`${ingredientAmount} ${unit} ${name}`);
   };
   ingredient(1, "can", "chickpeas");
   ingredient(0.25, "cup", "tahini");
   ingredient(0.25, "cup", "lemon juice");
   ingredient(1, "clove", "garlic");
   ingredient(2, "tablespoon", "olive oil");
   ingredient(0.5, "teaspoon", "cumin");
  }

  factor=>{
    (amount, unit,name)=>amount*factor;{
        if(ingredientAmount>1);
    }

  }