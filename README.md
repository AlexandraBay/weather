1. npm i
2. create file .babelrc in /root and add the following code:
"
{
  "presets": [
    "es2015",
    "react"
  ],
  "env": {
    "development": {
      "presets": []
    }
  }
}
"
3. npm run start
4. open in browser http://localhost:3000/