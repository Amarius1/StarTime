axios({
    method:'get',
    url:'https://launchlibrary.net/1.4/launch?mode=verbose'
  })
    .then(function (response) {
      console.log(response.data.launches);
      var launches = response.data.launches;
			var output = '';

      $.each(launches, (index, launch) => {
				var desc = "";
				launch.missions.forEach(function(mission, index, missions) {desc += mission.description});
				output += `
				<div class="launch">
				<div class="launch-image">
					<img src="${launch.rocket.imageURL}" alt="">
				</div>
				<div class="launch-info">
					<h2 class="launch-title">${launch.name}</h2>
					<span class="launch-date"><i class="fas fa-calendar-alt"></i>Launch date: ${launch.net}</span>
					<span class="launch-duration"><i class="fas fa-clock"></i>Launch widow: ${launch.windowstart} - ${launch.windowend}</span>
					<span class="launch-location"><i class="fas fa-compass"></i>Launch location: ${launch.location.name}</span>
					<span class="launch-text">Mission description:<br> ${desc}</span>
				</div>
			</div>
				`
			});
			
			$('.launches-wrapper').html(output);
		});


$(document).on('scroll', (e) => {
	$('nav').toggleClass('nav-scrolled', $(document).scrollTop() > 0);
});