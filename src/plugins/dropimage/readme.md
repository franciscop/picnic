## Drop image

Allows you to add a file input element that can receive an image drop and clicks with native elements. However, it needs some javascript to show the dropped image:

```html
<div style="width: 200px"> <!-- this div just for demo display -->
  <label class="dropimage">
    <input title="Drop image or click me" type="file">
  </label>
</div>
```


### JavaScript

This is the javascript you need for multiple elements:

```js
document.addEventListener("DOMContentLoaded", function() {
  [].forEach.call(document.querySelectorAll('.dropimage'), function(img){
    img.onchange = function(e){
      var inputfile = this, reader = new FileReader();
      reader.onloadend = function(){
        inputfile.style['background-image'] = 'url('+reader.result+')';
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  });
});
```


### Hack it

Do you want round pictures? No problem, just do this:

```css
.profile {
  border-radius: 50%;     /* Make it a circle */
  padding-bottom: 100%;   /* 100% height (ratio 1) */
}
```

To get this:

```html
<div style="width: 200px"> <!-- this div just for demo display -->
  <label class="dropimage profile">
    <input name="filea" title="Drop image or click me" type="file">
  </label>
</div>
```



Make it smaller

```css
.miniprofile {
  border-radius: 50%;    /* Make it a circle */
  margin: 0 auto;        /* Center horizontally */
  width: 60%;            /* 60% width */
  padding-bottom: 60%;   /* 60% height */
}
```

```html
<div style="width: 200px"> <!-- this div just for demo display -->
  <label class="dropimage miniprofile">
    <input name="filea" title="Drop image or click me" type="file">
  </label>
</div>
```
