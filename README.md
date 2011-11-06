# dNotify

A simple user notification plugin for jQuery

![Screenshot](https://github.com/dmarcato/dNotify/raw/master/dNotify_screen.png)

Repository at <https://github.com/dmarcato/dNotify>.

## Installation

Include the Javascript and CSS in your page:

``` html
<link rel="stylesheet" type="text/css" href="./dNotify.css" media="screen" />
<script type="text/javascript" src="./jquery.min.js"></script>
<script type="text/javascript" src="./jquery.dNotify.min.js"></script>
```

## Usage

Call dNotify from wherever you want:

``` javascript
$(document).ready(function() {
	$.dNotify('good', "Welcome to dNotify test page! :)", {duration: 3000});
});
```

## Credits
Icons by [Double-J Design](http://www.doublejdesign.co.uk)

## License
Copyright (c) 2011 [Dario Marcato](http://about.me/dariomarcato)
