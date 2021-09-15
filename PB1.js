let s = "()[]{}";
let lib = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
}
function isOK(arr)
{
    for(let i = 0;i < arr.length-1; i++)
    {
        if(lib[arr[i]] !== arr[i+1])
        {
            return false;
        }
        i++;
    }
}

if(isOK(s) !== false)
{
    console.log("valid!");
}
else{
    console.log("Not valid!");
}
