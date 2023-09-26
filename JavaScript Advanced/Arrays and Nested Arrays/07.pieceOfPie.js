function solve(arr,str1,str2){
    let start = arr.indexOf(str1);

    let end = arr.indexOf(str2) + 1;

    let res = arr.slice(start,end);
    console.log(res);

}
solve(['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],'Key Lime Pie','Lemon Meringue Pie');
console.log('----------------------');
solve(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie');