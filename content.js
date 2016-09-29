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
		if (newurl.search("youtube.")!=-1) {
			link = window.document.getElementsByTagName('meta');
			for (i = 0; i < link.length;   i++ )
			{
				if (link[i].getAttribute('name') == 'twitter:url' )
				{
					newurl=link[i].getAttribute('content')
				}
			}
		}
		chrome.extension.sendRequest({redirect: newurl}); // send message to redirect
		exit;
	}
  }
}