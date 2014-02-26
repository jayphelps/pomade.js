Pomade.js
===========
Decorate a JavaScript object by giving read-only access to a `Delegate`.

## Usage
##### Handlebars

```javascript
var PersonDelegate = Pomade.Delegate.extend({
    fullName: function () {
        return this.get('firstName') + ' ' + this.get('lastName');
    }
});

var template = Handlebars.compile(source);
var person = { firstName: 'Bilbo', lastName: 'Baggins' };
var delegate = PersonDelegate.create(person);
var html = template(delegate);
```

## Why?
People have their reasons. Maybe your design team wants to edit your templates and make custom properties but you don't want them to be able to screw with your actual JavaScript objects? Maybe you just really like abstraction.

## Compatibility
Works with pretty much any JavaScript object or library but I originally wrote it for templating with [Handlebars](https://github.com/wycats/handlebars.js/).