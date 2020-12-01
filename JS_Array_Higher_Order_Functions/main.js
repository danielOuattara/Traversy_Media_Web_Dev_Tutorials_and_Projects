const companies = [
    { name : "Company One",    category : "Finance",     start :"1981",  end : "2003"},
    { name : "Company Two",    category : "Retails",     start :"1992",  end : "2008"},
    { name : "Company Three",  category : "Auto",        start :"1999",  end : "2007"},
    { name : "Company Four",   category : "Retails",     start :"1989",  end : "2010"},
    { name : "Company Five",   category : "Technology",  start :"2009",  end : "2014"},
    { name : "Company Six",    category : "Finance",     start :"1987",  end : "2010"},
    { name : "Company Seven",  category : "Auto",        start :"1986",  end : "1996"},
    { name : "Company Height", category : "Technology",  start :"2011",  end : "2016"},
    { name : "Company Nine",   category : "Retails",     start :"1981",  end : "1989"}

];

const ages = [ 33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

console.log('------------------');
console.log('for');
// for
//==========
for ( let i = 0; i < companies.length; i++) {
    console.log( "companies =", companies[i]);
}
console.log("-----------------"); 



// forEach 
//===========

companies.forEach(function(company, index, arrray){
    console.log(company);

});

//-----------------------------------------------------------------

companies.forEach((company, index, arrray) =>console.log(company));
console.log("-----------------");
//-----------------------------------------------------------------


//filter
//==========

let canDrink_1 = [];
for ( let i = 0; i < ages.length ; i++ ) {
    if ( ages[i] >= 21 ) 
    {
        canDrink_1.push(ages[i]);
    }
}
console.log(canDrink_1);


//--------------------------------------------------------------------------------


const canDrink_2 = ages.filter(function(age, index, array) {
    if ( age >= 21)  
    {
    return true;
    }
});

console.log(canDrink_2);

console.log("-----------------");

//--------------------------------------------------------------------------------


const canDrink_3 = ages.filter((age, index, array) =>  age >= 21);

console.log(canDrink_3);

console.log("-----------------");
//--------------------------------------------------------------------------------

const retailCompanies = companies.filter(function(company, index, array) {
    if (company.category === 'Retails') {
        return true;
    }
})

console.log(retailCompanies);
//--------------------------------------------------------------------------------


const retailCompanies_2 = companies.filter((company, index, array) => company.category === 'Retails');
console.log(retailCompanies_2);
// --------------------------------------------------------------------------------

// 80s Companies

const eightiesCompany =  companies.filter((company, index, array) => (1980 <= company.start &&  company.start <1990)  );

console.log(eightiesCompany);


// Companies that survived more than 10years

const longTermCompanies = companies.filter((company, index, array) => (company.end - company.start) >= 10 );

console.log(longTermCompanies);
console.log("-----------------");



// map
//=======

// create arry of company name

const companiesName = companies.map(company => company.name);

console.log(companiesName);
//-------------------------------------------------------------


const testMap = companies.map(company => `${company.name} [ ${company.start} - ${company.end}]`);
 
console.log(testMap);
//-------------------------------------------------------------

const agesSquarred = ages.map(age => Math.sqrt(age));
console.log(agesSquarred);
console.log("-----------------");
//---------------------------------------------------

const agesDoubled = ages.map(age => age * 2);
console.log(agesDoubled);
//-------------------------------------------------------------

const agesAugmented = ages
    .map(age => age * 2)
    .map(age => Math.sqrt(age));

console.log(agesAugmented);
//-------------------------------------------------------------

console.log('-----------------');



// sort
//========

const sortedAges = ages.sort(function(a, b) {
    return a - b ;
});

console.log( "sortedAges = " , sortedAges)
//-------------------------------------------------------------

const sortedAges_2 = ages.sort((a, b) => a - b);

console.log( "sortedAges_2 = " , sortedAges_2)
//-------------------------------------------------------------
const sortedAges_3 = ages.sort((a, b) => b - a);

console.log( "sortedAges_3 = " , sortedAges_3)
//-------------------------------------------------------------


const sortedCompanies =  companies.sort(function(a, b) {a - b});
console.log("sortedCompanies  = ",  sortedCompanies);
console.log('-----------------');
//-------------------------------------------------------------


const sortedCompanies_2 =  companies.sort(function(a, b) {
    if (a.start > b.start) return 1;
    return -1;
});
console.log("sortedCompanies_2  = ",  sortedCompanies_2);
console.log('-----------------');
//-------------------------------------------------------------


const sortedCompanies_3 =  companies.sort(function(a, b) {a.start > b.start ? 1 : -1}); 
console.log(sortedCompanies_3);
console.log('-----------------');
//-------------------------------------------------------------

const sortedCompanies_4 =  companies.sort(function(a, b) {return a.start - b.start}); 
console.log(sortedCompanies_4);
console.log('-----------------');
//-------------------------------------------------------------

// sort obejcts properties;
const sortedCompanies_5 = companies.sort(function(a, b){
    var x = a.category.toLowerCase();
    var y = b.category.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  }); 

  console.log(sortedCompanies_5);
  console.log('-----------------');
//------------------------------------------------------------------


// reduce
//========


let ageSummed = 0 ;
for ( let i = 0; i < ages.length; i ++) {
    ageSummed += ages[i];
}
console.log("ageSummed = " , ageSummed);
//------------------------------------------------------------------


// the same as above but using reduce()

let ageSummed_2 = ages.reduce(function(total, age){
    return total + age;
}, 0 )

console.log("ageSummed_2 = " , ageSummed_2);
//------------------------------------------------------------------

let ageSummed_3 = ages.reduce((total, age) => (total + age), 0);

console.log("ageSummed_3 = " , ageSummed_3);


// Get total year for companies.
let companiesTotalYear = companies.reduce( function(total, company){
    return total + (company.end-company.start);
}, 0);

console.log("companiesTotalYear = " , companiesTotalYear);
//----------------------------------------------------------------

//Same as above, but shorter:
let companiesTotalYear_2 = companies.reduce((total, company) => total + (company.end-company.start), 0);

console.log("companiesTotalYear_2 = " , companiesTotalYear_2);

console.log('---------------------------')

//=======================================================================

// Combined Methods

const combinedMethods = ages
    .map( age => age * 2)
    .filter( age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b)  => a + b , 0)
console.log( "combinedMethod = " , combinedMethods);