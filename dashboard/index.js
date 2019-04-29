var app = new Vue({
    el: '#app',
    data: {
        message: 'grow, little plant'
    }
});


$(".drop").click(function() {
	$(".stem").addClass("rain");

	setTimeout(function () {
		$('.stem').removeClass('rain');
	}, 1200);
});
