const date = document.getElementById("date");
const area = document.getElementById("areaName");
const latest = document.getElementById("latestBy");
const deaths = document.getElementById("deathNew");

// fetching data from the API
async function fetchData() {
  const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
  const record = await res.json();
  date.innerHTML = record.data[0].date;
  area.innerHTML = record.data[0].areaName;
  latest.innerHTML = record.data[0].latestBy;
  deaths.innerHTML = record.data[0].deathNew;
}
fetchData();

const learning = ["react", "node", "mongo"];
learning.unshift("html", "css");
console.log(learning);
