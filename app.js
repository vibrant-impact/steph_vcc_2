// Function to show the code (and ensure the display is visible)
const showCode = (shapeName) => {
  const codeContent = document.getElementById('codeContent');
  const displayArea = document.getElementById('codeDisplay');
  
  const styleSheets = Array.from(document.styleSheets);
  let foundRule = '';

  styleSheets.forEach((sheet) => {
    try {
      const rules = Array.from(sheet.cssRules);
      const rule = rules.find(r => r.selectorText === `.${shapeName}`);
      if (rule) {
        foundRule = rule.cssText
          .replace('{ ', '{\n  ')
          .replace(/; /g, ';\n  ')
          .replace(' }', '\n}');
      }
    } catch (e) {}
  });

  if (foundRule) {
    codeContent.innerText = foundRule;
    displayArea.style.display = 'block'; // Show the display area
    displayArea.scrollIntoView({ behavior: 'smooth' });
  }
};

// New function to close the code display
const closeCode = () => {
  document.getElementById('codeDisplay').style.display = 'none';
};

// Improved Copy Function
const copyToClipboard = () => {
  const codeText = document.getElementById('codeContent').innerText;
  const btn = document.getElementById('copyBtn');
  
  if (!codeText) return;

  navigator.clipboard.writeText(codeText).then(() => {
    const originalText = btn.innerText;
    btn.innerText = 'Copied!';
    btn.style.backgroundColor = '#2cb67d'; // Feedback color
    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.backgroundColor = ''; // Reset to CSS variable
    }, 2000);
  }).catch(err => {
    console.error('Copy failed', err);
  });
};