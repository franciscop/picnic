<!-- Remember to add the style for this particular plugin -->
<link rel='stylesheet' href='/nut/raw+dropimage.fresh.css'>



# Drop image

This plugin allows you to add a file input element that can receive an image drop and clicks with native elements. However, it needs some javascript. Check it out:


<div class="row">
  <div>
    <label class="dropimage">
      <input name="filea" title="Drop image or click me" type="file">
      <img src="camera.png">
    </label>
  </div>
  <div>
    <label class="dropimage">
      <input name="fileb" title="Drop image or click me" type="file">
      <img src="camera.png">
    </label>
  </div>
</div>


    <div class="row">
      <div>
        <label class="dropimage">
          <input name="file" title="Drop image or click me" type="file">
          <img src="camera.png">
        </label>
      </div>
      <div>
        <label class="dropimage">
          <input name="file" title="Drop image or click me" type="file">
          <img src="camera.png">
        </label>
      </div>
    </div>



## Javascript

This is the javascript you need for multiple elements:

    var dropimages = document.querySelectorAll('.dropimage');
    for (var i = 0; i < dropimages.length; i++) {
      dropimages[i].onchange = function(e){
        var inputfile = this;
        var reader = new FileReader();
        reader.onloadend = function(){
          inputfile.classList.add('loaded');
          inputfile.querySelector('img').setAttribute('src', reader.result);
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }

And with jQuery:

    $(".dropimage").on('change', function(e){
      var inputfile = $(this);
      var reader = new FileReader();
      reader.onloadend = function(){
        inputfile.addClass('loaded').find('img').attr('src', reader.result);
      }
      reader.readAsDataURL(e.target.files[0]);
    });

<script>
  var dropimages = document.querySelectorAll('.dropimage');
  for (var i = 0; i < dropimages.length; i++) {
    dropimages[i].onchange = function(e){
      var inputfile = this;
      var reader = new FileReader();
      reader.onloadend = function(){
        inputfile.classList.add('loaded');
        inputfile.querySelector('img').setAttribute('src', reader.result);
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  }
</script>







