// Search the bookmarks when entering the search keyword.
let bookmarks_data = []
let searchBookmarks = document.getElementById('search-bookmarks')
let createBtn = document.getElementById("create-btn")

searchBookmarks.onchange = ()=>{
    for (let i = 0; i < 5; i++) {
        console.log(bookmarks_data[i])
      }
}

createBtn.onclick = ()=>{
    chrome.bookmarks.create(
        {parentId: '1', title: 'test',url:"https://developer.chrome.com/docs/extensions/reference/bookmarks/"},
        function(newFolder) {
          console.log("added folder: " + newFolder.title);
        },
      );
}


const bookmarkTreeNodes = chrome.bookmarks.getTree(function (
    bookmarkTreeNodes
  ) {
    bookmarks_data.push(bookmarkTreeNodes[0].children[0].children)
  });


