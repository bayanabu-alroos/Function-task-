function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var f = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(f);
}
tellFortune( 'full-stack' ,'Amman -Jordan' , 'Bayan' ,7);



function calculateDogAge(age){
    var dogYear = 7 * age ;
    console.log("Your doggie is  " + dogYear + ' years old in dog years!')
}

calculateDogAge(0.5)



function calculateSupply(age ,perDay){
    var maxAge=60 ;
    var totalNeed=(perDay *365) *(maxAge - age)
    var output='You will need '+ ' '+ totalNeed + '  ' +'to last you until the ripe old age of '+' '+maxAge;
    console.log(output)
}
calculateSupply(27, 117)

function cube(x ,y)
{
    var multiply  = x * y ;
    console.log(multiply)
}
cube(5 , 4)

function fullName(firstName , lastName){
    console.log(firstName +' ' + lastName)
}
fullName('Bayan ' , 'Abu-Alroos');


function average(a,b,c,d,e){
    sum = (a + b + c + d + e ) /5
    console.log(sum)
}
average(5,9,4,7,3)



function randomNumber( ){
    console.log(Math.random())
}
randomNumber()


function Isodd(x){
    if (x % 2 !== 0){
        return true;
    }
    else{
        return false
    }
}
console.log(Isodd(5))




let hour =6;
if(hour >= 6 &&  hour< 12)
    console.log('Good morning')
else if (hour >=12 && hour <18)
    console.log('Good afternoon')
else
console.log('Good evening !')



function calculateDogAge(age){
    var dogYear = 7 * age ;
    if(age < 0){
        alert('is age negative') 
    }
    else{
        
        alert("Your doggie is  " + dogYear + ' years old in dog years!')
    }
    
}
calculateDogAge(-20)



