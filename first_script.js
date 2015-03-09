var aid;
var headline;

function get_substr(first_string)
{
	var start_index = first_string.indexOf("/c/");
	if(start_index == -1)
	{
		return "Error";
	}
	else
	{
		var end = -1;
		var start = start_index + 3;

		var first_input = "";
		for(var i = start ; i < first_string.length ; i++)
		{
			if(first_string[i] == "/")
			{
				end = i;
				break;
			}
		}

		if(end == -1)
		{
			return "Error";
		}
		else
		{
			var first_input = first_string.substring(start,end);

			if(first_input == "")
			{
				alert("Input the url Correctly");
			}
			return first_input;
		}
	}
}
function generate(){

	
	$("#newlink").children().remove();
	if($("#first").val() && $("#second").val())
	{
		var first_string = $("#first").val();
		var second_input = $("#second").val();

		var first_input = get_substr(first_string);
		if(first_input!= "Error")
		{
			var full_path = $(location).attr("href") + 'second.html?aid='+first_input+'&headline='+second_input;
			$("#newlink").append("<a href ='"+full_path+"'>"+full_path+"</a> ");
			aid = first_input;
			headline = second_input;
		}
		else
		{
			alert("Input Correctly");
		}
	}
	else
	{
		alert("You must input all boxes");
	}
}