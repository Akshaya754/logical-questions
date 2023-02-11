const passenger_name = ['ann','meena','della','sneha','lekshmi','aaron','didhin','daisy','jenani','sandra'];

console.log("before sorting");
console.log(passenger_name);

passenger_name.sort();
console.log("after sorting");
console.log(passenger_name);

passenger_name.reverse();
console.log("print name in reverse order");
console.log(passenger_name);

const searchkey= 'sneha';
for (let i = 0; i < passenger_name.length;i++)
{
    if(passenger_name[i]==searchkey)
    {
        console.log(searchkey,'is present ' ,i+1,'th position');
    }
}
    for (let i=0; i<passenger_name.length;i++)
    {
        console.log('length of the name:',passenger_name[i],'is',passenger_name[i].length);
        
    }








