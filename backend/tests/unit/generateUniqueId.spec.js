const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('Should generate an unique ID with length 8', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
