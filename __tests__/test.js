import genDiff from "../src/genDiff";
import { fileURLToPath } from 'url';
import path from 'path';


test('make sure that files are checked properly',()=>{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filepath1 = path.join(__dirname, '..', '__fixtures__', 'file1.json');
    const filepath2 = path.join(__dirname, '..', '__fixtures__', 'file2.json');

  const expected = `{
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    + proxy: 123.234.53.23
    - timeout: 50
    + timeout: 20
    + verbose: true
  }`;
    expect(genDiff(filepath1,filepath2)).toEqual(expected);
})
