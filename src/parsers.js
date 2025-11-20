import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml'; 

export default function parse(filepath) {
  const content = fs.readFileSync(filepath,'utf-8')     
  let ext = path.extname(filepath);
  if (ext === '.json' ){
     return JSON.parse(content);             
  } else if(ext === '.yaml' || ext ==='.yml'){
 return yaml.load(content); 
}            
throw new Error(`Unsupported file format: ${ext}`);                                    
}
  