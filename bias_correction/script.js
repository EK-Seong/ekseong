document.addEventListener('DOMContentLoaded', () => {
    const markdownInput = document.getElementById('markdown-input');
    const renderedContent = document.getElementById('rendered-content');

    // Preloaded Markdown content
    const preloadedMarkdown = `
# Welcome to the Markdown Renderer!

This is a **Markdown-to-HTML** renderer implemented with **JavaScript**.  
You can write Markdown in the text area, and it will render live below.

## Features
- **Headers**: Use \`#\`, \`##\`, \`###\`, etc.
- **Bold**: Surround text with \`**\` or \`__\`.
- **Italic**: Use \`*\` or \`_\`.
- **Lists**:
    - Unordered with \`-\` or \`*\`
    - Ordered with numbers (e.g., \`1.\`)

### Example Markdown
\`\`\`
## Code Block
const message = "Hello, world!";
console.log(message);
\`\`\`

### Rendered Output:
\`\`\`
## Code Block
const message = "Hello, world!";
console.log(message);
\`\`\`

Happy writing!
`;

    // Set preloaded content
    markdownInput.value = preloadedMarkdown;
    renderedContent.innerHTML = marked.parse(preloadedMarkdown);

    // Render live updates
    markdownInput.addEventListener('input', () => {
        const markdownText = markdownInput.value;
        renderedContent.innerHTML = marked.parse(markdownText);
    });
});
