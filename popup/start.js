var flag = false

function toggleBookmark() {
  console.log("hi mom!");
  browser.browserAction.setIcon({
    path: flag ? {
      19: "icons/audioEmpty.svg",
      38: "icons/audioEmpty.svg"
    } : {
      19: "icons/audioBlack.svg",
      38: "icons/audioBlack.svg"
    }
  })
  flag = !flag;
  if (flag)
    browser.tabs.executeScript({file: "/content_scripts/markit.js"})
}

toggleBookmark();