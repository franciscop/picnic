<!DOCTYPE html>
<html>
  <head>
    <meta charset = "utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>Demo</title>
    <link rel="stylesheet" type="text/css" href="/releases/latest.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <meta name="description" content="Unpack your mean and start coding. A lighweight CSS library with nice defaults to give you a fast start.">
  <meta name="keywords" content="css, library, css library, picnic, picnicss, html, html5">
  <link rel="icon" type="image/png" href="/basket.png">
    
    <style>
      
      /* HERO */
      .hero {
          width: 100%;
          height: 80%;
          min-height: 300px;
          color: #FFF;
          text-shadow: .07em .07em rgba(0,0,0,0.6);
          background: #0074d9 no-repeat center center fixed;
          background-size: cover;
          padding: 1px 0;
          margin: -1px 0;
      }
      
      /* Vertical center for the HERO */
      .hero .content {
          position: relative;
          top: 50%;
          transform: translateY(-50%);
      }

      .features {
          padding: 30px 50px 50px;
      }

      .features > div {
          padding: 30px 20px;
      }

      .features i {
          font-size: 4em;
          color: #555;
      }

      .advantages {
          padding: 30px 30px 50px;
      }

      .advantages .row {
          min-height: 500px;
      }

      .advantages .row > div {
          padding: 1em;
      }

      .advantages h3 {
          text-align: center;
      }

      .advantages img {
          max-width: 100%;
          max-height: 400px;
          opacity: .6;
      }

      .advantages .text {
          text-align: left;
      }

      @media all and (max-width: 750px) {
          .advantages .row {
              overflow: hidden;
              min-height: 0;
          }

          .advantages .img {
              pointer-events: none;
              position: absolute;
              opacity: .2;
              max-width: calc(100% - 2em);
          }
      }
      
      
      /* Overwriting Picnicss' styles */
      .hero {
        /* available: rounded.svg , awesome.svg */
        background-image: url("rounded.svg");
        }
      
      .hero h1 {
        font-size: 3em;
        }
      
      .hero a.button {
        font-size: 1.5em;
        }
      
      
      
      /* Structure */
      html, body, main {
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 18px;
        line-height: 1.5em;
        color: #333;
        background: #FFF;
        }
      
      
      
      
      
      
      /* Classes */
      div.error {
        background: rgba(254, 101, 84, .9);
        display: block;
        margin: 20px auto 5px;
        width: 20%;
        border-radius: 0.3em;
        padding: 0.2em 2em;
        }
    </style>
    
  </head>
  <body>
    
    
    
    <nav>
      <a href = "/" class = "main">
        Picnicss
      </a>
      
      <!-- responsive -->
        <input id = "bmenu" class = "burgercheck" type = "checkbox">
        <label for = "bmenu" class = "burgermenu"></label>
      <!-- /responsive -->
      
      <div class = "menu">
        <a href = "#features">Features</a>
        <a href = "#advantages">Advantages</a>
        <a class = "button primary" href = "/">Docs</a>
        <a class = "button primary"
          href = "https://github.com/picnicss/picnic">
          Github
        </a>
        <a class = "button warning"
          href = "https://rawgit.com/picnicss/picnic/master/releases/latest.min.css"
          target = "_blank"
          download = "picnic.min.css">
          Download
        </a>
      </div>
    </nav>
    
    
    
    <main>
      
      
      
      <div class = "hero">
        <div class = "content">
          <h1>Picnicss</h1>
          <p>Unpack your meal and start coding</p>
          <a
            class = "button warning"
            href = "https://rawgit.com/picnicss/picnic/master/releases/latest.min.css"
            target = "_blank"
            download = "picnic.min.css">
            Download
          </a>
        </div>
      </div>
      
      
      
      <div id = "features" class = "row features">
        <div class = "full m-third">
          <i class = "icon-leaf"></i>
          <h3>Light</h3>
          <p>
            With just <strong>under 3kb</strong> your site will load blazing fast with Picnic
          </p>
        </div>
        
        <div class = "full m-third">
          <i class = "icon-mobile"></i>
          <h3>Responsive</h3>
          <p>
            Designed for <strong>mobile first</strong> so your page looks amazing in all platforms.
          </p>
        </div>
        
        <div class = "full m-third">
          <i class = "icon-link"></i>
          <h3>Robust</h3>
          <p>
            Built on top of <strong>Normalize.css</strong> to get a solid foundation to build upon.
          </p>
        </div>
        
        <div class = "full m-third">
          <i class = "icon-video"></i>
          <h3>Animated</h3>
          <p>
            With <strong>subtle transitions</strong> visitors will get the feeling that your site is alive.
          </p>
        </div>
        
        <div class = "full m-third">
          <i class = "icon-globe"></i>
          <h3>Open Source</h3>
          <p>
            The <strong>MIT license</strong> gives you freedom to do whatever you want with Picnic.
          </p>
        </div>
        
        <div class = "full m-third">
          <i class = "icon-file-code"></i>
          <h3>Semantic</h3>
          <p>
            Allow all kind of robots to read your webpage by writing clean <strong>html5</strong>.
          </p>
        </div>
      </div>
      
      
      
      
      
      <div id = "advantages" class = "advantages">
        <div class = "row">
          <div class = "full m-two-fifth img">
            <img src = "beauty.svg" alt="Picnic is beautiful"/>
          </div>
          <div class = "full m-three-fifth text">
            <h3>Nice & beautiful</h3>
            <p>
              Picnicss includes beautiful defaults that will give you a base from where you can start your projects. It includes buttons, inputs, selects, tables and other range of options.
            </p>
            <p>
              If you read the documentation, you'll find all the capabilities and designs that are in use within Picnicss:
            </p>
            <a class = "button primary" href = "/">Documentation</a>
          </div>
        </div>
        
        <div class = "row">
          <div class = "full m-three-fifth text">
            <h3>Fast & lightweight</h3>
            <p>
              Under 3kb for the production version is really small for a css base with so many features. The project is currently under active development so you can expect changes.
            </p>
            <p>
              You can contribute to the project or propose ideas through <a href = "https://github.com/picnicss/picnic">Github</a>. To see the current state check out the:
            </p>
            <a class = "button primary"
              href = "https://rawgit.com/picnicss/picnic/master/releases/latest.css"
              download = "picnic.css">
              Source code
            </a>
            <a class = "button warning"
              href = "https://rawgit.com/picnicss/picnic/master/releases/latest.min.css"
              download = "picnic.min.css">
              Production
            </a>
          </div>
            
          <div class = "full m-two-fifth img">
            <img src = "fast.svg" alt="Picnic is fast"/>
          </div>
        </div>
        
        <div class = "row">
          <div class = "full m-two-fifth img">
            <img src = "solid.svg" alt="Picnic is solid"/>
          </div>
          <div class = "full m-three-fifth text">
            <h3>Solid & robust</h3>
            Based on Normalize.css, we can assure that it has a rock solid foundation. However, intensive testing needs to be done for some components.
          </div>
        </div>
      </div>
      
      
      
      
      
      
    </main>
    
    
    <script src = "//umbrellajs.com/v/rainstorm.min.js"></script>
    <script>
      // The demo has some JS
      u("nav").addClass("transparent");
      
      window.onscroll = function() {
        var scrollTop =
          document.documentElement.scrollTop || 
          document.body.scrollTop;
        
        if (scrollTop > 1) {
          u("nav").removeClass("transparent");
          console.log("Notop");
          }
        else {
          u("nav").addClass("transparent");
          console.log("Top");
          }
        };
      
      
      u(".hero .button").click(function(){
        u(".hero p").html("Great! Now you can read the");
        u(this).
          html("Get Started").
          after('<a href = "/" class = "button primary">Documentation</a>').
          remove();
        });
      
      u("form").ajax(
        function() {
          u("form").removeClass("sending").addClass("sent");
          node("form input[type='email']").value = "";
          },
        function() {
          u("form input[type='email']").before('<div class = "error">This is only a demo (;</div>');
          },
        function(){
          u(".error").remove();
          u(this).removeClass("sent").addClass("sending");
          }
        );
    </script>
    <!-- Piwik -->
    <script type="text/javascript">
      var _paq = _paq || [];
      _paq.push(["setCookieDomain", "*.picnicss.com"]);
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u=(("https:" == document.location.protocol) ? "https" : "http") + "://francisco.io/francisco/analytics/";
        _paq.push(['setTrackerUrl', u+'piwik.php']);
        _paq.push(['setSiteId', 6]);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript';
        g.defer=true; g.async=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
      })();
    </script>
    <noscript><p><img src="http://francisco.io/francisco/analytics/piwik.php?idsite=6" style="border:0;" alt="" /></p></noscript>
    <!-- End Piwik Code -->
  </body>
</html>
