module.exports = {

    transform : {
        "^.+\\.(js|jsx)$": "babel-jest"
    },
    testPathIgnorePatterns:[
        "<rootDir>/__tests__/setup/"
    ],
    setupTestFrameworkScriptFile:"<rootDir>/__tests__/setup/browse.js",
    moduleFileExtensions:['js','jsx'],
    moduleNameMapper:{
        '^@/(.*)$':'<rootDir>/src/$1'
    },
    collectCoverage: true,
   //collectCoverageFrom: ["src/**/*.{js,jsx}"]
   // setupFiles: ["./src/helpers/browse.js","./src/helpers/dom.js"],
}