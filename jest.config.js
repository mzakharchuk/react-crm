module.exports = {
    verbose:true,
    transform : {
        "^.+\\.(js|jsx)$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
    },
    testPathIgnorePatterns:[
        "<rootDir>/src/__tests__/setup/"
    ],
    setupTestFrameworkScriptFile:"<rootDir>/src/__tests__/setup/browse.js",
    moduleFileExtensions:['js','jsx'],
    moduleNameMapper:{
        '^@/(.*)$':'<rootDir>/src/$1'
    },
    collectCoverageFrom: ["src/**/*.{js,jsx}"]
}