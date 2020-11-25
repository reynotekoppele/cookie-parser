# Cookie Parser
A small and lightweight library for creating, reading and deleting cookies.

* < **350 bytes** gzipped!

## Direct Download
You can easily download the javascript (minified or prettier) and load it in the browser.

```html
<script src="cookie-parser.min.js" defer></script>
```

## Basic Usage
Creating a cookie
```Javascript
Cookies.set("name", "value");
```

Create a cookie that expires after 7 days
```Javascript
Cookies.set("name", "value", {
  days: 7,
});
```

Create a cookie that is valid in a subdirectory
```Javascript
Cookies.set("name", "value", {
  path: "/subdirectory",
});
```

Create a cookie that cannot be send to any cross-site browsing contexts
```Javascript
Cookies.set("name", "value", {
  sameSite: "strict",
});
```

You could also combine these options
```Javascript
Cookies.set("name", "value", {
  days: 7,
  path: "/subdirectory",
  sameSite: "strict",
});
```

Read a cookie
```Javascript
Cookies.get("name"); // => "value"
Cookies.get("nothing") // => undefined
```

Read all cookies
```Javascript
Cookies.get(); // => [["name", "value"], ["name", "value"]]
```

Deleting a cookie
```Javascript
Cookies.delete("name");
```
