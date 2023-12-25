document.addEventListener('DOMContentLoaded', function () {
  // Example usage
  const str1 = 'see and stop';
  const result1 = firstWord(str1);
  document.getElementById('result').innerText = `First word of '${str1}': '${result1}'`;

  const str2 = ' Hello World!';
  const result2 = firstWord(str2);
  document.getElementById('result').innerText += `\nFirst word of '${str2}': '${result2}'`;

  const str3 = '12345';
  const result3 = firstWord(str3);
  document.getElementById('result').innerText += `\nFirst word of '${str3}': '${result3}'`;

  const str4 = '';
  const result4 = firstWord(str4);
  document.getElementById('result').innerText += `\nFirst word of '${str4}': '${result4}'`;
});

function firstWord(str) {
  const trimmedStr = str.trim();
  const spaceIndex = trimmedStr.indexOf(' ');

  if (spaceIndex === -1) {
    return trimmedStr;
  } else {
    return trimmedStr.substring(0, spaceIndex);
  }
}
