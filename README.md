# Cookie Parser
A small and lightweight library for for creating, reading and deleting cookies.

* < **260 bytes** gzipped!

## Direct Download
You can easily download the javascript (minified or prettier) and load it in the browser.

```html
<script src="cookie-parser.min.js" defer></script>
```

## Basic Usage
Creating a cookie
```Javascript
setCookie("name", "value");
```

Create a cookie that expires after 7 days
```Javascript
setCookie("name", "value", { days: 7 });
```

Create a cookie that is valid in a subdirectory
```Javascript
setCookie("name", "value", { path: "/subdirectory" });
```

Create a cookie that cannot be send to any cross-site browsing contexts
```Javascript
setCookie("name", "value", { sameSite: "scrict" });
```

You could als combine these options
```Javascript
setCookie("name", "value", {
  days: 7,
  path: "/subdirectory",
  sameSite: "scrict",
});
```

Read a cookie
```Javascript
getCookie("name"); // => "value"
getCookie("nothing") // => undefined
```

Deleting a cookie
```Javascript
deleteCookie("name");
```
