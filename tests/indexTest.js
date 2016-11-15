import responseTime from '../index.js';

describe('superagent-responseTime', () => {

  context('given a request', () => {

    it('should fire callback with request and response time', sinon.test(function () {

      //arrange
      const fakeStartAt = [ 1800216, 25 ];
      const fakeDiff = [ 1, 552 ];
      const hrtimeStub = this.stub(process, 'hrtime');

      hrtimeStub.withArgs().returns(fakeStartAt);
      hrtimeStub.withArgs(fakeStartAt).returns(fakeDiff);

      const fakeCallback = this.spy();
      const fakeRequest = {
        on: (key, fn) => {
          fn();
        }
      };
      const fakeTime = 1800216000.000025;

      const target = responseTime(fakeCallback);

      //act
      target(fakeRequest);

      //assert
      assert(fakeCallback.calledOnce);
      assert(fakeCallback.calledWith(fakeRequest, fakeTime));

    }));
  });
});