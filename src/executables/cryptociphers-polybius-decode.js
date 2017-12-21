import 'babel-polyfill';
import program from 'commander';
import decode from '../polybius/decode';
import { readFile, writeFile } from './lib';

program
  .version('0.0.1')
  .usage('[options]')
  .option('-f, --file <file>', 'input file with the plaintext message')
  .option('-o, --output <file>', 'output file with the encrypted message')
  .parse(process.argv);

(async function main() {
  const { file, output } = program;

  const encryptedText = await readFile(file);
  const plaintext = decode(encryptedText);

  await writeFile(output, plaintext);

  console.log('***DONE***');
}());
