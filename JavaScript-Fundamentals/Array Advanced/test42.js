/*function solve(arr1,arr2){
    

              let unique1 = arr1.filter((o) =>
                arr2.indexOf(o) === -1);

                let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);

                let unique = unique1.concat(unique2);
                console.log(unique);

}*/

function unique(arr1, arr2, uniqueArr) {

    let uniqueArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let flag = 0;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr2.splice(j, 1);
                j--;
                flag = 1;
            }
        }
 
        if (flag == 0) {
            uniqueArr.push(arr1[i]);
        }
    }
    uniqueArr.push(arr2);
    return uniqueArr;
}
 

 console.log(solve([1, 2, 3], [100, 2, 1, 10]));


solve([1, 2, 3], [100, 2, 1, 10]);