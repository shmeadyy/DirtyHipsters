$(document).ready(function() {

	function grabCurrentTrackTags(currentTrack) {
		var tags = currentTrack.tag_list;
		return tags;
	}

	function checkAttribute(attribute){
		if (attribute == null){
			return "Unavailable"
		} else if (attribute == undefined) {
			return "Unavailable"
		} else {
			return attribute;
		}
	}

	function grabCurrentTrackGenre(currentTrack) {
		var genre = currentTrack.genre;
		return checkAttribute(genre)
	}

	function grabCurrentTrackBpm(currentTrack) {
		var bpm = currentTrack.bpm;
		return checkAttribute(bpm)
	}
	function grabCurrentTrackFavCount(currentTrack) {
		var fav_count = currentTrack.favoritings_count;
		return fav_count;
	}
	function grabCurrentTrackDesc(currentTrack) {
		var description = currentTrack.description;
		return checkAttribute(description)
	}

	function grabCurrentTrackReleaseYr(currentTrack) {
		var releaseYr = currentTrack.release_year;
		return checkAttribute(releaseYr)
	}

	var widgetIframe = document.getElementById('sc-widget')
	, widget = SC.Widget(widgetIframe)
	, scEvent = SC.Widget.Events;


	widget.bind(scEvent.PLAY, function(){
		widget.getCurrentSound(function(currentSound){
			$(".column_1 #info").html(
				"<span>Tags:</span><br/><p>"+grabCurrentTrackTags(currentSound)+"</p>"
				+"<span>Genre:</span><p>"+grabCurrentTrackGenre(currentSound)+"</p>"
				+"<span>Release Year:</span><p>"+grabCurrentTrackReleaseYr(currentSound)+"</p>"
				+"<span>BPM:</span><p>"+grabCurrentTrackBpm(currentSound)+"</p>"
				+"<span>Favorited Count:</span><p>"+grabCurrentTrackFavCount(currentSound)+"</p>"
				+"<span>Description:</span><p>"+grabCurrentTrackDesc(currentSound)+"</p>"
				);
		})
	})
});