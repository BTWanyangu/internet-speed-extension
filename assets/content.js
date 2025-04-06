
(function() {
    const checkSpeed = () => {
      const speedText = document.querySelector('.speed-results-container')?.innerText;
      const speedValue = parseFloat(speedText);
  
      let status = 'Unknown';
  
      if (speedText && speedText.includes('Kbps')) {
        status = 'Poor';
      } else if (speedValue <= 3) {
        status = 'Average';
      } else if (speedValue <= 8) {
        status = 'Good';
      } else if (speedValue >= 10) {
        status = 'Great';
      }
  
      // Send a browser notification
      if (speedText) {
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'assets/icon.png',
          title: 'Speed Test Result',
          message: `Speed: ${speedText} - Status: ${status}`,
        });
      }
    };
  
    // Check the speed once the page has loaded
    window.addEventListener('load', checkSpeed);
  })();
  