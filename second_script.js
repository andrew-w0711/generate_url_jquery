$(document).ready(function(){
	change();
});

function change()
{
	var url = document.URL.substr(document.URL.lastIndexOf('?')+1);
	var aid = url.split("&")[0].substr(url.split("&")[0].lastIndexOf("=")+1);
	var headline = url.split("&")[1].substr(url.split("&")[1].lastIndexOf("=")+1);
	$('.headline').html(headline);
	lastfrag = $('.buylink').prop('href');
	lastfrag = lastfrag.substr(lastfrag.lastIndexOf('/'));
	$newUrl = "http://jvz6.com/c/" + aid + lastfrag ;
	$('.buylink').prop('href', $newUrl);
}