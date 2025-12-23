new Chart(document.getElementById("segmentChart"), {
  type: "doughnut",
  data: {
    labels: ["High", "Medium", "Low"],
    datasets: [{
      data: [10, 12, 8],
      backgroundColor: ["#000", "#ff5fa2", "#ffd1e6"]
    }]
  }
});

new Chart(document.getElementById("membershipChart"), {
  type: "bar",
  data: {
    labels: ["Platinum", "Gold", "Regular"],
    datasets: [{
      data: [1200, 700, 300],
      backgroundColor: "#ff5fa2"
    }]
  },
  options: {
    plugins: { legend: { display: false } }
  }
});
