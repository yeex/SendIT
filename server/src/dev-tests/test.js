import chai from 'chai';
import chaiHttp from 'chai-http';
import user from '../models/user';

const { expect, assert } = chai;
chai.use(chaiHttp);

describe('Our first test', () => {
  it('should return true', () => {
    const isTrue = true;
    expect(isTrue).to.be.true;
  });

  it('should be an array using expect', () => {
  	expect(user).to.be.an('array');
  });

  it('should be an array using assert', () => {
  	assert.isArray(user, 'must be an array');
  });
});
