# react-light-tooltip
A lightweight tooltip for React Js

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
Use disabled flag to dynamically disable tooltip in runtime.

```
<Tooltip
  parent={<button>Hover here!</button>}
  tooltip="Tooltip appears!"
  position="up"
  disabled={true}
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

### Inputs for create-react-Tooltip

**parent** - React elements, text.
**tooltip** - text, glyph, emoji, icon.
**position** - up, down, right, left, up-right, up-left, down-right, down-left.
**disabled** - boolean (true, false).

## Credits

Made by **Sree Krishna Raja**
[Github@sreekrishnaraja](https://github.com/sreekrishnaraja)
[Twitter@sreekrishnaraja](https://twitter.com/sreekrishnaraja)

CSS is taken from source code of [Balloon CSS](https://github.com/kazzkiq/balloon.css) by [kazzkiq](https://github.com/kazzkiq) which is published under MIT license.

*This library (react-light-tooltip) is Published under MIT license.*
