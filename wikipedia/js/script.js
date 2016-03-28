
window.onload = function() {
    document.getElementById("wiki-search-input").focus();
};

$(".wiki-search-input").keypress(function() {
	var key = $(".wiki-search-input").val();
	$(".result-wiki-search-form-input").val(key);
	$(".home").addClass('hidden');
	$(".result").removeClass('hidden');
	document.getElementById("wiki-search-input").blur();
	document.getElementById("result-wiki-search-form-input").focus();	
	$(".wiki-search-input").val("");
});