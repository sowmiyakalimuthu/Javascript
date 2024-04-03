//2. Filter the names who scored (i) >=50 in all tests (ii) 50 atleast in one test
console.log('\n2. Filter the names who scored (i) >=50 in all tests (ii) atleast 50 in one test. Arr obj:[{ name: "fhuh", test1: 50, test2: 60, test3:40 }, { name: "fhuh1", test1: 50, test2: 60, test3:80 }] ')
let obj1 = [{
    name: "fhuh",
    test1: 50,
    test2: 60,
    test3:40
}, {
    name: "fhuh1",
    test1: 50,
    test2: 60,
    test3:80
}]

let markFilter = obj1.filter ((a) => {
        return a.test1 >=50 && a.test2 >=50 && a.test3 >=50
})
console.log("\nPersons who scored >=50 in all tests:", markFilter)

markFilter = obj1.filter ((a) => {
    return a.test1 >=50 || a.test2 >=50 || a.test3 >=50
})
console.log("\nPersons who scored 50 atleast in one test:", markFilter)