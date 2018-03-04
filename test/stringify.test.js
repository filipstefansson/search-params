import { stringify } from '../src';

describe('stringify', () => {
  it('should not be null', () => {
    expect(stringify).toBeDefined();
  });

  it('should return a string with matching values', () => {
    expect(stringify({ foo: 'bar' })).toEqual('foo=bar');
  });

  it('it should return a string with multiple values', () => {
    expect(stringify({ foo: 'bar', baz: 'qux' })).toEqual('foo=bar&baz=qux');
  });

  it('should return empty string when input is invalid', () => {
    expect(stringify()).toEqual('');
    expect(stringify('')).toEqual('');
    expect(stringify(0)).toEqual('');
    expect(stringify(' ')).toEqual('');
  });

  it('should handle empty values', () => {
    expect(stringify({ foo: null, baz: 'qux' })).toEqual('baz=qux');
  });

  it('should handle empty array', () => {
    expect(stringify({ foo: [], baz: 'qux' })).toEqual('baz=qux');
  });
});
