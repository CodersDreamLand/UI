$(document).ready(
		function() {
			$('#addStep').click(
					function() {
						var no = document.getElementById("gherkin");
						var option = no.options[no.selectedIndex].text;
						var description = $('#step').val();
						if (description !== undefined && description !== null && description !== "") {
							$('.scenario').append(
									'<tr><td>' + option + ' ' + description + '</td><td><input type="button" class="delete" value="Delete" /></td><tr>');
							$('#step').val('');
							$('#gherkin').val('given');
							} else {
								alert('Description cannot be blank');
								}
						});
			$('body').on('click', 'input.delete', function() {
				if (confirm('Are you sure to delete the step?')) {
					$(this).parents('tr').remove();
					}
				});
			$('#generate').click(
					function() {
						var steps = [];
						$('.scenario td:first-child').each(function(){
							steps.push($(this).text());
							});
						$('#outline').html('');
						$('#outline').append('Feature: \n');
						for(var i=0; i<steps.length;i++){
							$('#outline').append('\t' + steps[i] +'\n');
							}
						});
					});