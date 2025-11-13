 function formatValues (value) {
    if( value === null || value === undefined){
        return null;
    }
    if ( typeof value === 'object'){
        return '[complex value]';
    }
    if(typeof value === 'string'){
        return `'${value}'`;
    }
    return value;
}

export function plain (tree, parentPath ='') {
const plainText = [];
tree.forEach( node => {
    const propertyPath = parentPath ? `${parentPath}.${node.key}` : node.key

if(node.type === 'added'){
    plainText.push(`Property '${propertyPath}' was added with value: ${formatValues(node.value)}`)
}

if(node.type === 'removed'){
    plainText.push(`Property '${propertyPath}' was removed`)
}
if(node.type === 'changed'){
    plainText.push(`Property '${propertyPath}' was updated. From ${formatValues(node.value1)} to ${formatValues(node.value2)}`)
}

if(node.type === 'nested'){
    plainText.push(plain(node.children, propertyPath))
}
})
return plainText.join('\n');
};