let lib2 = {};
let addString = (arr) => {
    for(let i = 0;i< arr.length;i++)
    {
        if(!(arr[i] in lib2))
        {
            lib2[arr[i]] = 1;
        }
        else{
            lib2[arr[i]]++;
        }
    }
}
let s = "leetcode";
addString(s);
for(let i = 0; i< s.length;i++)
{
    if(lib2[s[i]] === 1)
    {
        console.log(s[i]);
        break;
    }
}