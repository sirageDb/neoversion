# Neoversion.js


https://github.com/remarkjs/react-markdown
--- 

## What is and why ?

Neoversion.js is a react component, created to simplify the process of announcing new changes to your app/site users when they use your application.

---

## When ? usecases ?

neoversion can be usefull in theses cases :

- You want a component a ready to use component to announce new changes to your application/site/user condition etc...
- You can tell the component to remember if a user don't want to show the component again, or to show it everytime.
- Your can ALMOST have full control over components styles or use pre configured styles.

---

# And now, how it works ?

- ## start by installing

  `npm install neroversion`

- ## minimal configs :

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


- ## Props are : 


- ```isOpen``` : ```boolean```\
  A react state is typically associtated to the component, it will control the openning and closing of it.

- `button` : `object`\
  - `text` : `string`\
    button visible text

  - `scrollToBottom` : `boolean`\
    A clickable sticky element on the bottom-right will be visible, when user clicks on it they will be automatically scrolled to the bottom where the buttom is located.\
    **cannot set to true if `sticky` property is also set to true**

  - ``callback`` : `function`\
    function will be called everytime a user clicks on the button. you should pass the `setIsOpen(false)` the overlay can be closed but you can also pass what you want in this callback.

  - ``sticky`` : `boolean`\
    When set to `true` the button container will stick to the bottom as the user scrolls down or up, if set to `false` then the button container will has its normal position.

  - ``remember``(optional) : `object`
    - `reference` : `string`\
    When user closes neoversion this can be stored in localstorage so neroversion component won't be visible to the same user again. in order to do so, you should provide a unique random string or reference that will be stored in users localstorage. this reference should not be the same as the reference used in another neroversion component because other wise if the reference is already stored in users localsotage then the other neoversion component won't be opened since it will be considered remebered.

      ```javascript
      <Neoversion
        //other props...
        button={{
          //other props...
          remember : {
            reference : "my rendom reference"
          }
        }}
        //other props...
      />
      ```
  
  - ``mandatoryCheck``(optional) : `object`\
    A check box with a text. if the checkbox is provided neoversion cannot be closed till the checkbox is checked, if user click on *close* without the check then the `errorText` will be visible.
    - `text` : `string`
    - `errorText` : `string`
  - ``ultraCustomStyles``(optional) : `CSSProperties`\
    provide an object containing CSSProperties, styles provided here will overwrite custom properties.

- `content` : `markdown syntax / can also read string format`\
  Content of type string/markdown.

- `customStyles`(optional) : `object`
  - `width`(optional) : `number`
  - `top`(optional) : `number`
  - `height`(optional) : `number`
  - `boxUltraCustomStyles`(optional) : `CSSProperties`\
    provide CSSProperties to customize the box styles, it will overwrite all styles.
  - `overlayUltraCustomStyles`(optional) : `CSSProperties`\
    provide CSSProperties to customize the overlay styles, it will overwrite all styles.
- `customIcon`(optional) : `object`
  - `icon` : `imported icon`\
  imported icon will be visible at the top of neoversion component.
  - `iconAlt` : `string`\
  icon alternative text.

---
