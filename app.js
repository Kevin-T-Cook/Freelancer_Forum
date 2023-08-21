const namesArr = [
    {
        name: 'Alice',
        occupation: 'Wrtier',
        price: 30,
    },
    {
        name: 'Bob',
        occupation: 'Teacher',
        price: 50,
    },
    {
        name: 'Carol',
        occupation: 'Programmer',
        price: 70,
    }
]

const nameGenerator = [
    "Olivia",
    "Liam",
    "Sophia",
    "Noah",
    "Ava",
    "Jackson",
    "Mia",
    "Aiden",
    "Isabella",
    "Lucas",
]

const jobGenerator = [
    "Software Developer",
    "Nurse Practitioner",
    "Electrician",
    "Graphic Designer",
    "Financial Analyst",
    "Chef",
    "Marketing Manager",
    "Physical Therapist",
    "Aerospace Engineer",
    "Social Media Coordinator",
]



// let sum = namesArr.price 
// let priceAvg = namesArr.price 


const element = document.createElement('div');
const nameEle = document.createElement("h2");
const headerEle = document.createElement("h3");
const price = document.createElement('div');
const avgPrice = document.createElement("h3");
avgPrice.innerHTML="The Average Starting Price Is: "

nameEle.innerHTML="Available Freelancers";
headerEle.innerHTML="Name" + " " + "Ocupation" + " " + "Starting Price";
element.appendChild(nameEle);
element.appendChild(headerEle);
element.classList.add("Title")
document.getElementById("freelancers").appendChild(element);

price.appendChild(avgPrice);
price.classList.add("Pricing")
document.getElementById("avgPrice").appendChild(price);


const free = document.createElement('div');
const alice = document.createElement("h5");
alice.innerHTML="Alice" + " " + "Writer" + " " + "$"
free.appendChild(alice);
element.classList.add("Alice");
document.getElementById("names").apphendChild(free);


const freelancerName = prompt("Enter Your Name");
const freelancerOccupation = prompt("Enter Your Occupation");
const freelancerPrice = Number(prompt("Enter a Starting Price"));

console.log(freelancerName);
console.log(freelancerOccupation);
console.log(freelancerPrice);

let inputArr = [
    {
        name: freelancerName,
        occupation: freelancerOccupation,
        price: freelancerPrice,
    }
]





// Need to be able to show the average price as it changes with each new freelancer
// Need to put average price in the proper place
//Need to get names to appear

