import genDiff from "../src/genDiff.js";
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';



test('make sure that files are checked properly',()=>{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filepath1 = path.join(__dirname, '..', '__fixtures__', 'file1.json');
    const filepath2 = path.join(__dirname, '..', '__fixtures__', 'file2.json');

    const expected = 
    `{
     - follow : false
      host : hexlet.io
     - proxy : 123.234.53.22
     - timeout : 50
     + timeout : 20
     + verbose : true
}`;
 
    expect(genDiff(filepath1,filepath2)).toEqual(expected);
})

test ('make sure "stylish" formatter applied to a tree correctly', async() => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filepath1 = path.join(__dirname, '..', '__fixtures__', 'nested1.yaml');
  const filepath2 = path.join(__dirname, '..', '__fixtures__', 'nested2.yaml');
  const testFilePath = path.join(__dirname, 'expected.stylishYaml.txt')

  let data;
  try {
     data = await fs.promises.readFile(testFilePath, 'utf8');
  } catch (err) {
    console.error('Error reading file:', err);
  }
  expect(genDiff(filepath1,filepath2)).toEqual(data);

})
