import { expect, test } from 'vitest';
import { isMultipleOfFive } from '../src/isMultipleOfFive';

test('if multiple of five,return true',()=>{
   expect(isMultipleOfFive(10)).toBe(false);
})

test('if not multiple of five,return false',()=>{
   expect(isMultipleOfFive(7)).toBe(false);
})