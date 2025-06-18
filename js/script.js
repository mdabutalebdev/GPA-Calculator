document.getElementById("calculateBtn").addEventListener("click", function () {
  //ekhane bisoyta holo user button a click korle ekta kisu gotbe

  const ScoreInput = document.getElementById("scoreInput").value;
  const score = Number(ScoreInput); // ekhane user input ta number e convert hobe

  let gread = "";

  if (isNaN(score)) {
    alert("Please enter a number.");
  } else if (score < 0 || score > 100) {
    alert("Please enter a score between 0 and 100.");
  } else if (score >= 80 && score <= 100) {
    gread = "A+ (Excellent) misty niya aiso";
  } else if (score >= 70 && score < 80) {
    gread = "A (Good) valo kore pora suna koro ";
  } else if (score >= 60 && score < 70) {
    gread = "A- (nah tomare to taina tuina pass koraise sir)";
  } else if (score >= 50 && score < 60) {
    gread = "B (darao tomar baper kase bisar dibo)";
  } else if (score >= 40 && score < 50) {
    gread = "C (nh tomader kisu bolar nai)";
  } else if (score >= 33 && score < 40) {
    gread = "D (nh tomader kisu bolar nai)";
  } else {
    gread = "opps! You failed... valo kore pora suna koro";
  }

  document.getElementById("result").textContent = `Your grade: ${gread}`;
});
