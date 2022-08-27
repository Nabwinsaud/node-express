## Express js Basic app

```ts
import express from "express";

// initlization of app
const app = express();

// setting the port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`port listening at http://localhost:${port}`);
});
```
