const p = require('@phosphor-icons/react');
const fs = require('fs');

fs.writeFileSync('/scripts/phosphor-exports.json', JSON.stringify(Object.keys(p), null, 2));
