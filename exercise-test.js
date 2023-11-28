describe('hasDuplicate()', function () {
  const testArr1 = [1, 2, 4, 5, 2];
  const testArr2 = [1, 2, 4, 5, 3];

  it('takes an array and returns true or false if there is a duplicate', function () {
    expect(hasDuplicate(testArr1)).toEqual(true);
  });
  it('case where no dupes in the array should equal false', function () {
    expect(hasDuplicate(testArr2)).toEqual(false);
  });
});

describe('vowelCount()', function () {
  const testStr = 'awesome';
  const testStr2 = 'Colt';

  let ans = new Map();
  ans.set('a', 1);
  ans.set('e', 2);
  ans.set('o', 1);
  
  let ans2 = new Map();
  ans2.set('o', 1);

  it('accepts a string and returns a map where the keys are the vowels and values are the count', function () {
    expect(vowelCount(testStr)).toEqual(ans);
  });
  it('accepts a string and returns a map where the keys are the vowels and values are the count', function () {
    expect(vowelCount(testStr2)).toEqual(ans2);
  });
});