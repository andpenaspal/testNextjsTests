## Start

```
npm
```

```
npm run test
```

## Output

Screen Debug Log:

```
  console.log
    <div
      class="MuiBox-root css-y2vk2g"
      data-testid="check-element"
    >
      Test
    </div>
    
    ../testNextjsTests/src/app/Check.spec.tsx:32:10
```

getComputedStyles Log shows the styles applied without media-queries:

```
  console.log
    CSSStyleDeclaration {
      '0': 'display',
      '1': 'margin-left',
      '2': 'visibility',
      _values: { display: 'block', 'margin-left': '2px', visibility: 'visible' },
      _importants: { display: '', 'margin-left': '', visibility: undefined },
      _length: 3,
      _onChange: [Function (anonymous)]
    }

      at Object.<anonymous> (src/app/Check.spec.tsx:36:11)
```

getElementStyleFromHead Log shows the styles in Head:

```
  console.log
    .css-y2vk2g{margin-left:2px;}@media (min-width:0px){.css-y2vk2g{background-color:red;}}@media (min-width:1200px){.css-y2vk2g{background-color:blue;}}

      at Object.<anonymous> (src/app/Check.spec.tsx:39:11)
```
