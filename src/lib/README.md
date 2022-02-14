# Neoversion.js


https://github.com/remarkjs/react-markdown
--- 

## What is and why ?

Neoversion.js is a react component that i created to simplify the process of announcing new changes to your app/site users when they use your application.

---

## When ? usecases ?

neoversion can be usefull in theses cases : 

- You want a component a ready to use component to announce new changes to your application/site/user condition etc...
- You can tell the component to remember if a user don't want to show the component again, or to show it everytime.
- Your can ALMOST have full control over components styles or use pre configured styles.

---

# And now, how it works ?

minimal configs :

````javascript
import React, { useState } from "react";
import Neoversion from "neoversion";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const visibilityHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <Neoversion
        isOpen={isOpen}
        button={{
          text: "Close",
          scrollToBottom: true,
          callback: () => visibilityHandler(),
          sticky: true,
        }}
        content = {`markdown/stringcontent`}
      />
    </div>
  );
}
````


## Props


- ```isOpen``` : ```boolean```\
  A react state is typically associtated to the component, it will control the openning and closing of it.

- `button` : `object`
  - `text` : `string`\
    button visible text
  
  - `scrollToBottom` : `boolean`
  - ``callback`` : `function`
  - ``sticky`` : `boolean`
  - ``remember``(optional) : `object`
    - `reference` : `string`
  - ``mandatoryCheck``(optional) : `object`
    - `text` : `string`
    - `errorText` : `string`
  - ``sticky`` : `boolean`
  - ``ultraCustomStyles``(optional) : `CSSProperties`
- `content` : `markdown syntax && AND && can also read string`
- `customStyles`(optional) : `object`
  - `width`(optional) : `number`
  - `top`(optional) : `number`
  - `height`(optional) : `number`
  - `boxUltraCustomStyles`(optional) : `CSSProperties`
  - `overlayUltraCustomStyles`(optional) : `CSSProperties`
- `customIcon`(optional) : `object`
  - `icon` : `imported icon`
  - `iconAlt` : `string`

---
