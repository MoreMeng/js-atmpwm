'use strict';

    // if (window.addToHomescreen) {
    //   ath = addToHomescreen({
    //     onCanInstall: function (platform, _instance) {
    //       //run any on screen prompting logic from here
    //     },
    //     onBeforeInstallPrompt: function (platform) {
    //       //this triggers in response to the browser triggering the beforeInstallPrompt event
    //       console.log("native prompt: ", platform);
    //     }
    //   });
    // }
    // let deferredPrompt;
    // const addBtn = document.querySelector('.add-button');
    // addBtn.style.display = 'none';

    // addBtn.addEventListener('click', (e) => {
    //   // hide our user interface that shows our A2HS button
    //   console.log('click');
    // });
    if ('serviceWorker' in navigator) {
      // Register a service worker hosted at the root of the
      // site using the default scope.
      navigator.serviceWorker.register('./service-worker.js').then(function (registration) {
        console.log('Service worker registration succeeded:', registration);


      }, /*catch*/ function (error) {
        console.log('Service worker registration failed:', error);
      });
    } else {
      console.log('Service workers are not supported.');
    }

    window.addEventListener("beforeinstallprompt", function (e) {
      // log the platforms provided as options in an install prompt
      console.log(e.platforms); // e.g., ["web", "android", "windows"]
      e.userChoice.then(function (choiceResult) {
        console.log(choiceResult.outcome); // either "accepted" or "dismissed"
      }, handleError);
    });
