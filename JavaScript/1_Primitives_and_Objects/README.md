# DataTypes

## 7 Primitive Datatypes
- To store differnce types of data
    - Like storting differnce items like food, pens , mobiles in differnent boxes
    - You can put other items also in differnt box like keeping pens in mobile box 
    - But this is not recommended
- ShortCut -> nn ss bb u
    - null
    - number
    - string
    - symbol
    - boolen
    - bigint
    - undefined
 
    ```js
    //  nn bb ss u - Primitive DataTypes
    let a = null;
    let b = 345;
    let c = true; // other value is trye
    let d = BigInt("567");
    let e = "Harry"
    let f = Symbol("I am a Symbol");
    let g = undefined // same as let g
    console.log(a,b,c,d,e,f,g)
    console.log(typeof d)
    ```
## Objects or Non primitive DataTypes

- Objects or dictionaries in python are Non prmitive datatypes
    ```js
    // Objects in Js - Non primitve DataTypes

    const item = {
        "Kalyan" : true,
        "Kiran" : false,
        "Rajendra" : 10,
        "Sumathi" : undefined
    }

    console.log(item["Kalyan"]) //value from dictionary
    console.log(item["Ka"]) // undefined
    // Objects Used for mapping items 
    ```