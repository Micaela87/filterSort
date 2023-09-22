function solution(inputArray) {
    let arr = [];
    let i = 0;
    while (i < inputArray.length) {
        arr[inputArray[i]] = inputArray[i];
        i++;
    }
    return arr.filter((el) => el !== undefined);
}

console.log(solution([7, 4, 35, 0, 82, 1, 64, 3, 8, 2, 6, 4, 3, 30]));
