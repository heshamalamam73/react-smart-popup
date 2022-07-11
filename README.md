# react-smart-popup

this is a smart popup created by react and typeScrypt

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install react-smart-popup --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add react-smart-popup
```

## Example

```js
import React, { useState, useCallback } from 'react';
import { popup } from 'react-smart-popup';

const App = () => {
  const [isOpenDialog, setIsOpenDialog] = useState < boolean > false;

  const openPopupFunc = useCallback(() => {
    setIsOpenDialog(true);
  }, [setIsOpenDialog]);
  const handleSubmitFunc = useCallback(() => {
    console.log('submit');
  }, []);
  const handleCloseFunc = useCallback(() => {
    console.log('close');
  }, []);

  return (
    <div>
      <button onClick={openPopupFunc}>Open popup </button>
      <Popup
        isOpen={isOpenDialog}
        setIsOpen={setIsOpenDialog}
        handleSubmit={handleSubmitFunc}
        handleClose={handleCloseFunc}
      >
        hello world
      </Popup>
    </div>
  );
};
```

### Props

| Property           | type      | Default Value | Description                           |
| ------------------ | --------- | ------------- | ------------------------------------- |
| isOpen             | Boolean   | false         | state of popup                        |
| setIsOpen          | Func      |               | change state of popup                 |
| children           | ReactNode |               | some children to show in popup body   |
| handleSubmit       | Func      |               | on press submit button handler        |
| handleClose        | Func      |               | on press close button handler         |
| closeOnPressEscape | Boolean   | true          | close active popup when press esc key |
| closeOnClickAway   | Boolean   | true          | close popup when click outside        |
| width              | String    | '50%'         | popup width                           |
| height             | String    | '50%'         | popup height                          |
| header             | String    |               | popup header                          |
