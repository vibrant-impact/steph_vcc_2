const showCode = (shapeName) => {
  const codeContent = document.getElementById('codeContent');
  const displayArea = document.getElementById('codeDisplay');
  
  // Find the CSS rule that matches the shape class
  // We look through all stylesheets loaded in the document
  const styleSheets = Array.from(document.styleSheets);
  let foundRule = '';

  styleSheets.forEach((sheet) => {
    try {
      const rules = Array.from(sheet.cssRules);
      const rule = rules.find(r => r.selectorText === `.${shapeName}`);
      if (rule) {
        // format the CSS text to look nice
        foundRule = rule.cssText
          .replace('{ ', '{\n  ')
          .replace(/; /g, ';\n  ')
          .replace(' }', '\n}');
      }
    } catch (e) {
      // Skip cross-origin stylesheets if any
    }
  });

  if (foundRule) {
    codeContent.innerText = foundRule;
    // Scroll to the display area so the user sees the code
    displayArea.scrollIntoView({ behavior: 'smooth' });
  } else {
    codeContent.innerText = `/* CSS for .${shapeName} not found in app.css */`;
  }
};