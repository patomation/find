# Find

A recursive deep nested search module to find stuff inside object without having to do long dot chains.
Helps to consume that graphql data and more.

## Installation

```
npm install @patomation/find --save

yarn add @patomation/find
```

## Usage

```javascript
import find from '@patomation/find'


const data = {
  MyData: {
    error: {
      type: null
      message: 'no error'
    },
    results: {
      nestedObject: {
        name: 'Some String',
        image: 'some/url',
      },    
      someOtherObject: {},
      moreData: 'asdf'
    }
  }

}

//So rather than wiring data.MyData.results.nestedObject
//You would write
const nestedObject = find('nestedObject', data)
```

Result
```javascript
//nestedObject
{
  name: 'Some String',
  image: 'some/url',
}

```
No more undefined key errors.
```
example if server returns undefined for data we would avaoid the MyData is undefined eror
```
Null is returned if it cant find the key.


## Issues
- Big O
  This is a very simple module. If your key is at the end of the object it will waist time and search the entire thing. But if your object is small your N impact should be less.
- If your key shares the same name the first key will be returned

## Going forward

Improving the search algorithm to split search and take less time.
