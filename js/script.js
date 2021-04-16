window.onload = initialLoad;
function initialLoad() {
  console.log('Loaded');
  document.getElementById('text').innerText = 'Quote';
  document.getElementById('author').innerText = 'Some famous person';
}
