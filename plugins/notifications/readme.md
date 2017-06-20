## Notifications

notifications can be used to show short messages on user's viewport.

```html
<div class="notification-container show-top-right">
  <div class="notification success">
    <p>My short message</p>
  </div>
</div>
```
In above example ```notification-container``` class makes container where you
can place Notifications and ```show-top-right``` class place the container on the top of right side of window. There are four possible places where you can place the notification container.

1. For top left use ```show-top-left```
2. For top right ```show-top-right```
3. For bottom left ```show-bottom-left```
4. For bottom right ```show-bottom-right```

Notification message can have four different background color
```html
<div class="notification-container show-top-right">
  <div class="notification success">
    <p>My short message</p>
  </div>
  <div class="notification info">
    <p>My short message</p>
  </div>
  <div class="notification warning">
    <p>My short message</p>
  </div>
  <div class="notification danger">
    <p>My short message</p>
  </div>
</div>
```

### close button inside notification

close button can be place inside notification to close the notification although it will not work without javascript.

```html
<div class="notification-container">
  <div class="notification success">
    <span class="close">&#10006;</span>
  </div>
</div>
```
A possible jquery solution for close button

```javascript
$(document).ready(function(){
  $('.close').on('click',function(){
    $('.close').parent().remove();
  });
});
```
###Change notification's look

There are many sass variable can be configured inside src/plugin/notification/_class.scss file.
