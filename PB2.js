let numLib = {};

let addNum2Lib = (arr) => {
    for(let i = 0; i< arr.length;i++)
    {
        numLib[arr[i]] = arr[i];
    }
}
let isExist = (arr) => {
    for(let i = 1 ; i <=  arr.length;i++)
    {
        if(!(i in numLib))
        {
            console.log(i);
        }
    }
}
let nums = [4,3,2,7,8,2,3,1];
addNum2Lib(nums);
isExist(nums);