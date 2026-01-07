module.exports = {
    default: {
        require: [
            'tests/test_BDD/steps/***.ts',
            'tests/test_BDD/support/***.ts'
        ],
        paths: [
            'tests/test_BDD/features/***.feature'
        ],
        requireModule: ['ts-node/register'],
        publishQuiet: true
        }
    };
