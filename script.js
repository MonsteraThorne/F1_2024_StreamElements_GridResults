function updatePosition(raceNumber, position) {
  const raceElement = document.getElementById(`race${raceNumber}`);
  const contentElement = raceElement.querySelector('.grid-item-content');
  
  if (position === 1) {
    contentElement.innerHTML = `Position: ${position} <span class="trophy">&#127942;</span>`;
  } else {
    contentElement.textContent = `Position: ${position}`;
  }
  raceElement.classList.add('green');
}

// Call the function to update positions for each race
updatePosition(1, 1);
updatePosition(2, 1);
updatePosition(3, 1);
updatePosition(4, 1);
updatePosition(5, 1);
updatePosition(6, 1);
updatePosition(7, 1);
updatePosition(8, 1);
updatePosition(9, 1);
updatePosition(10, 1);
updatePosition(11, 1);
updatePosition(12, 1);
updatePosition(13, 1);
updatePosition(14, 1);
updatePosition(15, 1);
updatePosition(16, 1);
updatePosition(17, 1);
updatePosition(18, 1);
updatePosition(19, 1);
updatePosition(20, 1);
updatePosition(21, 1);
updatePosition(22, 1);
updatePosition(23, 1);
updatePosition(24, 1);

// Repeat for all races
