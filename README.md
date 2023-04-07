# Controlled Form Snippet

- Error handling controlled form in React

- [Inspired by Web Dev Cody](https://www.youtube.com/watch?v=5zODPlieluc)

## Features and Knowledge

- Extract all the key value from an object [const keys = Object.keys(initialFormData)]
- map through a key value object to create a form, use controlled form to generate controlled value for each input [value={key}]
- use a boolean flag to toggle border color as an error indicator
- value === "" returns a boolean value
- Re-rendering time is usually significantly short that we don't need to worry about
