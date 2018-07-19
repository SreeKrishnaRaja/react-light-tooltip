# react-light-tooltip
A simple and lightweight tooltip for React Js.

### Install react-light-tooltip

```
npm install --save react-light-tooltip
```

### Using react-light-Tooltip

```
import React from 'react';
import Tooltip from 'react-light-tooltip';

export default class Homepage extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Welcome to the Homepage</h1>
        <Tooltip
          parent={<button>Hover here!</button>}
          tooltip="Tooltip appears!"
          position="up"
        />
      </div>
    );
  }
}
```
### Dynamically disable Tooltip
Use disabled flag to dynamically disable tooltip in runtime. By default the value is set "false".

```
<Tooltip
  parent={<button>Hover here!</button>}
  tooltip="Tooltip appears!"
  position="down"
  disabled={true}
/>
```

### Adjust length of tooltip
Use length flag to adjust tooltip length. By default the length is set "small".

```
<Tooltip
  parent={<button>Hover here!</button>}
  tooltip="Tooltip appears!"
  position="up"
  length="small"
/>
```

### Control position of tooltip
Use position flag to adjust tooltip position. By default the position is set "up".

```
<Tooltip
  parent={<button>Hover here!</button>}
  tooltip="Tooltip appears!"
  position="down"
  length="small"
/>
```

### Using Glyphs and Icon fonts in Tooltip

You can use Html special characters, emojis or third party fonts like "Font awesome".
```
<Tooltip
  parent={<button>Hover here!</button>}
  tooltip="Tooltip has HTML special characters: &#9787; &#9986; &#9820;"
  position="up"
/>
```
```
<Tooltip
  parent={<button>Hover here!</button>}
  tooltip="Tooltip has Emojis: 😀 😬 😁 😂 😃 😄 😅 😆"
  position="up"
/>
```

```
<Tooltip
  parent={<button>Hover here!</button>}
  tooltip="Tooltip Font Awesome Icons: &#xf030; &#xf133; &#xf1fc; &#xf03e; &#xf1f8;"
  position="up"
/>
```

### Inputs for react-light-tooltip

- **parent** - React elements, text.
- **tooltip** - text, glyph, emoji, icon.
- **position** - up, down, right, left, up-right, up-left, down-right, down-left.
- **disabled** - boolean (true, false).
- **length** - small, medium, large, xlarge, fit.

### Contribution guidelines

1. Clone the project.
2. Make a pull request.

## Credits

Made by **Sree Krishna Raja**
[Github@sreekrishnaraja](https://github.com/sreekrishnaraja)
[Twitter@sreekrishnaraja](https://twitter.com/sreekrishnaraja)

CSS is taken from source code of [Balloon CSS](https://github.com/kazzkiq/balloon.css) by [kazzkiq](https://github.com/kazzkiq) which is published under MIT license.

*This library (react-light-tooltip) is Published under MIT license.*
