var newurl;
var link;
var i;
{
  link = window.document.getElementsByTagName('link');
  for (i = 0; i < link.length;   i++ )
  {
	if (link[i].getAttribute('rel') == 'canonical' )
	{
		newurl = link[i].getAttribute('href').replace('/linkis.com','');
		chrome.extension.sendRequest({redirect: newurl}); // send message to redirect
		exit;
	}
  }
}