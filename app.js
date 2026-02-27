
const showCode = (shapeName) => {
  const codeContent = document.getElementById('codeContent');
  // Logic to fetch and display the CSS
  console.log(`Displaying code for: ${shapeName}`);
};

const copyToClipboard = () => {
  const codeText = document.getElementById('codeContent').innerText;
  
  // Check if there is actually code to copy
  if (codeText) {
    navigator.clipboard.writeText(codeText)
      .then(() => {
        // Visual feedback - optional but professional
        const btn = document.getElementById('copyBtn');
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        setTimeout(() => btn.innerText = originalText, 2000);
      })
      .catch(err => {
        console.error('Unable to copy code', err);
      });
  } else {
    alert('Please select a shape first!');
  }
};