// ==UserScript==
// @name         Twitter Oldest 500 Tweets Deleter
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Deletes oldest 500 tweets quickly by continuous scrolling and batch deletion.
// @match        https://x.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let deleting = false;
    let deletedCount = 0;
    const deleteLimit = 500;

    function scrollAndDeleteTweets() {
        // If the delete limit is reached, stop the script
        if (deletedCount >= deleteLimit) return;

        // Scroll to load more tweets
        window.scrollTo(0, document.body.scrollHeight);

        setTimeout(() => {
            let deleteButtons = document.querySelectorAll('[data-testid="caret"]');

            if (deleteButtons.length === 0) {
                // No tweets found, try scrolling again
                window.scrollTo(0, 0); // Scroll up and then down to refresh
                return;
            }

            deleteButtons.forEach((button, index) => {
                setTimeout(() => {
                    if (deletedCount >= deleteLimit) return;

                    button.click();
                    setTimeout(() => {
                        let deleteMenuItem = Array.from(document.querySelectorAll('[role="menuitem"]')).find(
                            item => item.innerText.includes("Delete")
                        );

                        if (deleteMenuItem) {
                            deleteMenuItem.click();
                            setTimeout(() => {
                                let confirmButton = document.querySelector('[data-testid="confirmationSheetConfirm"]');
                                if (confirmButton) {
                                    confirmButton.click();
                                    deletedCount++;
                                }
                            }, 300);
                        }
                    }, 300);
                }, index * 1000);
            });

        }, 2000);
    }

    // Run the scroll and delete function at intervals until 500 tweets are deleted
    let deletionInterval = setInterval(() => {
        scrollAndDeleteTweets();

        // Stop once the delete limit is reached
        if (deletedCount >= deleteLimit) {
            clearInterval(deletionInterval);
            alert(`Deleted ${deletedCount} tweets.`);
        }
    }, 5000);

})();
