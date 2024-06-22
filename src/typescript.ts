type MultiplyFunction = (a: number, b: number) => number

let multiplyFunc: MultiplyFunction = function (a, b) {
    return a * b
}

console.log(multiplyFunc(20, 56));

interface AddFunction {
    (c: number, d: number): number
}

let addFunc: AddFunction = function (c, d) {
    return c + d
}

console.log(addFunc(2, 5));

const doc = document.getElementById("root") as HTMLDivElement



