const tsconfig = require('./tsconfig.json');

module.exports = {
    preset: "ts-jest",
    moduleFileExtensions: [ "ts", "js" ],
    testRegex: "tests/suits/.*.ts$",
    coverageDirectory: "coverage",
    coverageReporters: [ "text" ],
    testEnvironment: "node",
    collectCoverage: true
};
