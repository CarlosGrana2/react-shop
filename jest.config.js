module.exports = {
    verbose: true,
    setupFilesAfterEnv: [
        "<rootDir>/src/__test__/setupTest.js"
    ],
    moduleFileExtensions: [
        "js",
        "jsx"
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/src/__mocks__/styleMock.js",
        "^@components(.*)$": "<rootDir>/src/components$1",
        "^@containers(.*)$": "<rootDir>/src/containers$1",
        "^@pages(.*)$": "<rootDir>/src/pages$1",
        "^@context(.*)$": "<rootDir>/src/context$1",
        "^@icons(.*)$": "<rootDir>/src/assets/icons$1",
        "^@logos(.*)$": "<rootDir>/src/assets/logos$1"
    },
    testMatch: ['**/src/**/*.test.js'],

}