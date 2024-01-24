arr = [1,2,3];
console.log(arr);
// arr = [];

arr = new Array();
console.log(arr);

num = 123;
console.log(typeof (num) );

duplicate([1,2,3,4,5]);

function duplicate(arr1)
{
    let arr = [...arr1,...arr1];
    console.log(arr);
}