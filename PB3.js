let arr = new Array();
let addArr = (num,arr) => {
    for(let i = 1; i<= num;i++)
    {
        arr.push(i);
    }
}
let sortArr = (arr) =>{
    let sArr = arr.sort();
    console.log(sArr);
}
addArr(13,arr);
sortArr(arr);