<h1>AD Bulma React</h1>

> 🚨 this still a work in progress;
## Install
```bash
npm i ad-bulma-react
or
yarn add ad-bulma-react
```
## Adding bulma styles 
``src/index.scss``

```scss
@use "~/node_modules/bulma/bulma.sass";
```

## Usage
```jsx
import { Button } from 'ad-bulma-react';

const App = () => {
  return (
    <div className="App">
      <Button variant='is-success'>my button</Button>
    </div>
  );
};

export default App;
```