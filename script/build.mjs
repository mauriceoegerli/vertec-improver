import fs from 'fs';

const nonce = Date.now();

const indexHtml = fs.readFileSync('.output/public/index.html', 'utf8');
const inlineScript = indexHtml.match(/<script type="module">(.*?)<\/script>/si)[1];
const newHtml = indexHtml.replace(
  /<script type="module">(.*?)<\/script>/si,
  `<script type="module" src="/entrypoint.${nonce}.js>`
);
fs.writeFileSync('.output/public/index.html', newHtml);
fs.writeFileSync(`.output/public/entrypoint.${nonce}.js`, inlineScript);