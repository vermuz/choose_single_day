(function($) {
  $(document).ready(function() {
	$('#edit-field-today-und-0-value-datepicker-popup-0').change(function() {
		var cu = $("#edit-field-today-und-0-value-datepicker-popup-0").val();
		
		/* Assign values */
		$("#edit-field-start-date-und-0-value-datepicker-popup-0").val(cu);
		$("#edit-field-end-date-und-0-value-datepicker-popup-0").val(cu);

		//alert(cu);
    });
    //$('#fgm_node_library_hours_form_group_time-add-more-wrapper').click(function() {
		//$('#fgm_node_library_hours_form_group_time-add-more-wrapper').accordion();
    //});
    // If there is a change in status of closed button
    $('#edit-field-closed-und').change(function() {
		// Count Children
		//alert($('.field-group-multiple-container').children().length);
		
		// POPULATE first textboxes with closed and disable them
		//if(edit-field-closed-und)
		//var close = "CLOSED";
		//$("#edit-fgm-node-library-hours-form-group-time-fields-items-0-field-open-time-und-value").val(close);
		//$("#edit-fgm-node-library-hours-form-group-time-fields-items-0-field-close-time-und-value").val(close);
		//$("#edit-fgm-node-library-hours-form-group-time-fields-items-0-field-open-time-und-value").attr("disabled",true);
		//$("#edit-fgm-node-library-hours-form-group-time-fields-items-0-field-close-time-und-value").attr("disabled",true);
		//$("#edit-fgm-node-library-hours-form-group-time-add-more").attr("disabled",true);
		
		//var test = $('.field-group-multiple-container').children(':not(:first)').remove();
		//$('.field-group-multiple-container .form-text').val(close);
		//$('.field-group-multiple-container .form-text').attr("disabled",true);
		//$('.field-group-multiple-add-more-submit').attr("disabled",true);
		//$('.field-group-multiple-container').css("color","#888");
		//$('.field-group-multiple-add-more-submit').css("color","#888");
		
		
		if($("#edit-field-closed-und").is(':checked'))
		{
			// Multiple Field Container Effect - Checked
			var close = "CLOSED";
			//$('.field-group-multiple-container').children(':not(:first)').remove();
			//$('.field-group-multiple-container .form-text').val(close);
			//$('.field-group-multiple-container .form-text').attr("disabled",true);
			//$('.field-group-multiple-add-more-submit').attr("disabled",true);
			//$('.field-group-multiple-container').css("color","#888");
			//$('.field-group-multiple-add-more-submit').css("color","#888");
			// Field Collection
			//ç
			//$('.field-multiple-table').children(':not(:first)').remove();
			//$("field-enter-time-frame-values--2").find("tr:gt(0)").remove();
			//$('#field-enter-time-frame-values--2').children('tr:not(:first)').remove();

			//field-name-field-enter-time-frame

			//$('.field-multiple-table').find("tr:gt(0)").remove();
			//$('.field-multiple-table').children('tr:not(:first)').remove();
		    //$("#field-enter-time-frame-values--2").find("tr:gt(1)").remove();
			$('.field-multiple-table').find("tr:gt(1)").remove();
			$('.field-multiple-table .form-text').val(close);
			$('.field-multiple-table input').attr("disabled",true);
			//$('.field-multiple-table input').off('mouseenter mouseleave');
			$('.field-add-more-submit').attr("disabled",true);
			//$('.field-add-more-submit').off('mouseenter mouseleave');
			$('.field-multiple-table').css("color","#888");
			$('.field-add-more-submit').css("color","#888");
			
		}
		else
		{
			// Multiple Field Container Effect - Uncheck
			var empty = "";
			//$('.field-group-multiple-container .form-text').val(empty);
			//$('.field-group-multiple-container .form-text').attr("disabled",false);
			//$('.field-group-multiple-add-more-submit').attr("disabled",false);
			//$('.field-group-multiple-container').css("color","");
			//$('.field-group-multiple-add-more-submit').css("color","");
			//$('.field-group-multiple-add-more-submit').css("color","#888");
			// Field Collection
			$('.field-multiple-table .form-text').val(empty);
			$('.field-multiple-table .form-text').attr("disabled",false);
			$('.field-add-more-submit').attr("disabled",false);
			$('.field-multiple-table').css("color","");
			$('.field-add-more-submit').css("color","");

		}
		
    });
   });
}) (jQuery);

// Program the response of closed button here


/*
================================================
Single Day

Month
$('#edit-field-today-und-0-value-month').value

Day
$('edit-field-today-und-0-value-day').value

Year
$('edit-field-today-und-0-value-year').value
=================================================
*/

/*
==================================================
Start Date
edit-field-start-date-und-0-value-datepicker-popup-0

Month 
$('#edit-field-start-date-und-0-value-month).value

Day
$('edit-field-start-date-und-0-value-day').value

Year
$('edit-field-start-date-und-0-value-year').value
==================================================
*/


/*
===================================================
End Date
edit-field-end-date-und-0-value-datepicker-popup-0

Month
$('#edit-field-end-date-und-0-value-month').value

Day 
$('edit-field-end-date-und-0-value-day').value

Year
$('edit-field-end-date-und-0-value-year').value
==================================================
*/
