// let j=10;
// do //code
// {
//     console.log("hello! kya kr rhe ho");
//     j++;

// }
// while(j<10) //condiotion


let array = [1,2,3,1,3]
for(i=0; i<=array.length-1;i++)
{
    for(j=i+1;j<=array.length-1;j++)
    {
        if(array[i]==array[j])
        {
            console.log(i,j);
        }
    }
}
