<!-- Remember to add the style for this particular plugin -->

# Drop image

Allows you to add a file input element that can receive an image drop and clicks with native elements. However, it needs some javascript to show the dropped image:

<div class="demo">
  <label class="dropimage">
    <input title="Drop image or click me" type="file">
  </label>
</div>

<style>
  .demo {
    width: 30%;
    }
</style>

    <label class="dropimage">
      <input title="Drop image or click me" type="file">
    </label>



## Javascript

This is the javascript you need for multiple elements:

    window.onload = function(){
      [].forEach.call(document.querySelectorAll('.dropimage'), function(img){
        img.onchange = function(e){
          var inputfile = this, reader = new FileReader();
          reader.onloadend = function(){
            inputfile.style['background-image'] = 'url('+reader.result+')';
          }
          reader.readAsDataURL(e.target.files[0]);
        }
      });
    };

<script>
  window.onload = function(){
    console.log("Loaded");
    [].forEach.call(document.querySelectorAll('.dropimage'), function(img){
      img.onchange = function(e){
        var inputfile = this, reader = new FileReader();
        reader.onloadend = function(){
          inputfile.style['background-image'] = 'url('+reader.result+')';
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    });
  }
</script>


## Hack it

Do you want round pictures? No problem, just do this:

    .profile {
      border-radius: 50%;     /* Make it a circle */
      padding-bottom: 100%;   /* 100% height (ratio 1) */
    }

To get this:

<style>
  .profile {
    border-radius: 50%;
    padding-bottom: 100%;
  }
</style>

<div class="row">
  <div>
    <label class="dropimage profile">
      <input name="filea" title="Drop image or click me" type="file">
    </label>
  </div>
  <div>
    <label class="dropimage profile">
      <input name="fileb" title="Drop image or click me" type="file">
    </label>
  </div>
  <div>
    <label class="dropimage profile">
      <input name="fileb" title="Drop image or click me" type="file">
    </label>
  </div>
</div>




Make it smaller

    .miniprofile {
      border-radius: 50%;    /* Make it a circle */
      margin: 0 auto;        /* Center horizontally */
      width: 60%;            /* 60% width */
      padding-bottom: 60%;   /* 60% height */
      }

<style>
  .miniprofile {
    margin: 0 auto;
    width: 60%;
    padding-bottom: 60%;
    border-radius: 50%;
  }
</style>

<div class="row">
  <div>
    <label class="dropimage miniprofile">
      <input name="filea" title="Drop image or click me" type="file">
    </label>
  </div>
  <div>
    <label class="dropimage miniprofile">
      <input name="fileb" title="Drop image or click me" type="file">
    </label>
  </div>
  <div>
    <label class="dropimage miniprofile">
      <input name="fileb" title="Drop image or click me" type="file">
    </label>
  </div>
</div>


