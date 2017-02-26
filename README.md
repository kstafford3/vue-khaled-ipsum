# Khaled Ipsum Vue.js Component

Finally, an easy way to insert the words of DJ Khaled into your Vue.js application.

A wrapper for the npm package [khaled-ipsum](https://www.npmjs.com/package/khaled-ipsum).

## Install
```
npm install vue-khaled-ipsum
```

## Usage

With defaults:
```javascript
import KhaledIpsum from 'vue-khaled-ipsum';

Vue.component({
  template: "<div> <khaled-ipsum></khaled-ipsum> </div>",
  components: {
    KhaledIpsum,
  },
});
```

Or, override some defaults:
```html
<khaled-ipsum :options="{ count: 20, units: 'paragraphs', format: 'html' }"/>
```

## Parameter Reference
| Parameter           | Default                      | Explanation |
| ------------------- | ---------------------------- | ----------- |
| count               | 1                            | Number of units to generate. |
| units               | `'sentences'`                | Generate `'words'`, `'sentences'`, or `'paragraphs'`. |
| sentenceLowerBound  | 5                            | Minimum words per sentence. |
| sentenceUpperBound  | 15                           | Maximum words per sentence. |
| paragraphLowerBound | 3                            | Minimum sentences per paragraph. |
| paragraphUpperBound | 7                            | Maximum sentences per paragraph. |
| format              | `'plain'`                    | `'plain'` or `'html'`. |
| words               | khaled-ipsum's dictionary.js | Dictionary of words to draw from. |
| random              | `Math.random`                | A PRNG function. |
| suffix              | EOL                          | The character to insert between paragraphs. Defaults to default EOL for your OS. |
