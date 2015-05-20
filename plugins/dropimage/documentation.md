<!-- Remember to add the style for this particular plugin -->

# Drop image

This plugin allows you to add a file input element that can receive an image drop and clicks with native elements. However, it needs some javascript. Check it out:


<div class="row">
  <div>
    <label class="dropimage" style="background-image: url('camera.png');">
      <input name="filea" title="Drop image or click me" type="file">
    </label>
  </div>
  <div>
    <label class="dropimage" style="background-image: url('camera.png');">
      <input name="fileb" title="Drop image or click me" type="file">
    </label>
  </div>
</div>


    <div class="row">
      <div>
        <label class="dropimage" style="background-image: url('camera.png');">
          <input name="filea" title="Drop image or click me" type="file">
        </label>
      </div>
      <div>
        <label class="dropimage" style="background-image: url('camera.png');">
          <input name="fileb" title="Drop image or click me" type="file">
        </label>
      </div>
    </div>



## Javascript

This is the javascript you need for multiple elements:

  [].forEach.call(document.querySelectorAll('.dropimage'), function(img) {
    img.onchange = function(e){
      var inputfile = this, reader = new FileReader();
      reader.onloadend = function(){
        inputfile.style['background-image'] = 'url(' + reader.result + ')';
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  });

<script>
  [].forEach.call(document.querySelectorAll('.dropimage'), function(img) {
    img.onchange = function(e){
      var inputfile = this, reader = new FileReader();
      reader.onloadend = function(){
        inputfile.style['background-image'] = 'url(' + reader.result + ')';
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  });
</script>







