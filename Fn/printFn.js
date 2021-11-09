function print(str) {
    console.log(str);
}

function triggerTests(type, format) {
    print('Output is in ' + format + ' format'); 
if (type === 'e2e-tests') {
    print('E2E-TESTS ARE RUNNING...');

} else {
    print('unit testsare running...');
 }
}
function printSmt(str) {
    console.log(str)
}
// call the same functions with different values 
triggerTests(testConfig.unitType, testConfig.json);
triggerTests(testConfig.e2eType, testConfig.xml);
