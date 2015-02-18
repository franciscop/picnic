# Build system

This system is scheduled for some point in the future. It'll let you build your own Picnic CSS implementation. It's based in another project that is currently on development, but the specifications are clear. I think the best way to show it is through some examples of urls.



## Simply Picnic CSS

Picnic CSS core:

    http://www.picnicss.com/nut/picnic_3.min.css

The development code (non-minimized):

    http://www.picnicss.com/nut/picnic_3.css



## Plugins

For a complete list of the plugins, visit http://www.picnicss.com/

Include Picnic core and navigation:

    http://www.picnicss.com/nut/picnic_3+nav.min.css

Include Picnic core, navigation and slider:

    http://www.picnicss.com/nut/picnic_3+nav+slider.min.css



## Options

Right now there are only two options to choose from. They are at the end of the url, just before `.css`.

### .min

Minify the resulting css:

    http://www.picnicss.com/nut/picnic_3.min.css

### .fresh

Update the code on each load. Not recommended for production (it takes some ms to do so), but great for developing new plugins

    http://www.picnicss.com/nut/picnic_3.fresh.css