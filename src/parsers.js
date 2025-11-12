import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml'; 
import { fileURLToPath } from 'url';



export default function parse(filepath) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fullPath = path.resolve(__dirname,'..', filepath);
  const content = fs.readFileSync(fullPath,'utf-8')     
  let ext = path.extname(filepath);
  if (ext === '.json' ){
     return JSON.parse(content);             
  } else if(ext === '.yaml' || ext ==='.yml'){
 return yaml.load(content); 
}            
throw new Error(`Unsupported file format: ${ext}`);                                    
}
  