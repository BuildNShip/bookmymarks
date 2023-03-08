// Search the bookmarks when entering the search keyword.
let searchBookmarks = document.getElementById('search-bookmarks')
let createBtn = document.getElementById("create-btn")

searchBookmarks.onchange = () => {
  console.log('event changed')
}

function showBookMarks(bookMarks){
  console.log(bookMarks[0].children[0].children)
  for (let i = 0; i < bookMarks[0].children[0].children.length; i++) {
    let option = document.createElement('a')
    option.href = bookMarks[0].children[0].children[i].url
    option.title =bookMarks[0].children[0].children[i].title
    option.text = bookMarks[0].children[0].children[i].title
    let listElement = document.createElement('li')
    listElement.append(option)
    document.getElementById('bookmarked-items').appendChild(listElement)
  }

}

createBtn.onclick = () => {
  chrome.bookmarks.create(
    { parentId: '1', title: 'test', url: "https://developer.chrome.com/docs/extensions/reference/bookmarks/" },
    function (newFolder) {
      console.log("added folder: " + newFolder.title);
    },
  );
}


document.addEventListener('DOMContentLoaded', function () {
  const bookmarkTreeNodes = chrome.bookmarks.getTree(function (bookmarkTreeNodes) {
    showBookMarks(bookmarkTreeNodes);
  });
  
});