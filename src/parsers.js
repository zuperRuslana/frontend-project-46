import fs from 'fs';
import path from 'path';

export default function parse(filepath) {
  const fullPath = path.resolve(process.cwd(), filepath);       
  const data = fs.readFileSync(fullPath, 'utf-8');             
  return JSON.parse(data);                                      
}
  