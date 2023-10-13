//mocked node module example

const lodash = jest.createMockFromModule('lodash');

lodash.cloneDeep = () => jest.fn()

export default lodash;