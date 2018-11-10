import test from 'ava';
import * as sms from './';

test('encoding to binary', t => {
  t.is(sms.encode('TEST'), '54455354');
});

test('decoding from binary', t => {
  t.is(sms.decode('54455354'), 'TEST');
});


