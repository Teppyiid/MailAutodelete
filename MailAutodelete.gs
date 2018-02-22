function myFunction() {
   //1年以上前のスターが付いていないメールを削除する
  var delayYears = 1;
  var deleteThreads = GmailApp.search('older_than:'+delayYears+'y -is:starred');

  for (var i = 0; i < deleteThreads.length; i++) {
    deleteThreads[i].moveToTrash();
  }
}