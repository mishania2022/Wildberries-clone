const search = document.getElementById('searchbar');
const results = document.getElementById('results');

const items = ["Hello", "World", "Foobar"];

let searchQuery = "";

searchbar.addEventListener("input", (event) => {
  searchQuery = event.target.value;
  console.log(searchQuery);
  render();
});

function render() {
  results.innerHTML = "";

  for (let item of items) {
    if (item.startsWith(searchQuery)) {
      const p = document.createElement("p");
      p.innerText = item;
      results.appendChild(p);
    }
  }
}
render();
