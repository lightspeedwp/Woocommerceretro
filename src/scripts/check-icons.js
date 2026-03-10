import fs from 'fs';

const p = require('@phosphor-icons/react');
const icons = ['Package', 'Heart', 'MapPin', 'User', 'Eye', 'Check', 'Download', 'House', 'CaretRight', 'MagnifyingGlass', 'X'];

for (const icon of icons) {
  if (!p[icon]) {
    console.log(`Icon ${icon} is missing from @phosphor-icons/react`);
  } else {
    console.log(`Icon ${icon} is present`);
  }
}
