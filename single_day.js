(function($) {
  $(document).ready(function() {
	//$('#edit-field-today-und-0-value-datepicker-popup-0').change(function() {
		//var cu = $("#edit-field-today-und-0-value-datepicker-popup-0").val();
		
		/* Assign values */
		//$("#edit-field-start-date-und-0-value-datepicker-popup-0").val(cu);
		//$("#edit-field-end-date-und-0-value-datepicker-popup-0").val(cu);

		//alert(cu);
    //});

		
	// FieldSet Collection Code Changes
//*********************************************************************************************************************
	// Plant values inserted into Single day in Start Day and end day
	
    // Fieldset 1
	$('#edit-field-time-field-collection-und-0-field-today-und-0-value-datepicker-popup-0').live("change",function() {
		var cu = $("#edit-field-time-field-collection-und-0-field-today-und-0-value-datepicker-popup-0").val();
		
		$("#edit-field-time-field-collection-und-0-field-start-date-und-0-value-datepicker-popup-0").val(cu);
		$("#edit-field-time-field-collection-und-0-field-end-date-und-0-value-datepicker-popup-0").val(cu);

    });
	
    
	// Fieldset 2
    $('#edit-field-time-field-collection-und-1-field-today-und-0-value-datepicker-popup-0').live("change",function() {
		var cu = $("#edit-field-time-field-collection-und-1-field-today-und-0-value-datepicker-popup-0").val();
		
		$("#edit-field-time-field-collection-und-1-field-start-date-und-0-value-datepicker-popup-0").val(cu);
		$("#edit-field-time-field-collection-und-1-field-end-date-und-0-value-datepicker-popup-0").val(cu);

	 });

   
    // Fieldset 3
	$('#edit-field-time-field-collection-und-2-field-today-und-0-value-datepicker-popup-0').live("change",function() {
		var cu = $("#edit-field-time-field-collection-und-2-field-today-und-0-value-datepicker-popup-0").val();
		
		$("#edit-field-time-field-collection-und-2-field-start-date-und-0-value-datepicker-popup-0").val(cu);
		$("#edit-field-time-field-collection-und-2-field-end-date-und-0-value-datepicker-popup-0").val(cu);
    });

    // Fieldset 4
	$('#edit-field-time-field-collection-und-3-field-today-und-0-value-datepicker-popup-0').live("change",function() {
		var cu = $("#edit-field-time-field-collection-und-3-field-today-und-0-value-datepicker-popup-0").val();
		
		$("#edit-field-time-field-collection-und-3-field-start-date-und-0-value-datepicker-popup-0").val(cu);
		$("#edit-field-time-field-collection-und-3-field-end-date-und-0-value-datepicker-popup-0").val(cu);
    });

    // Fieldset 5
	$('#edit-field-time-field-collection-und-4-field-today-und-0-value-datepicker-popup-0').live("change",function() {
		var cu = $("#edit-field-time-field-collection-und-4-field-today-und-0-value-datepicker-popup-0").val();
		
		$("#edit-field-time-field-collection-und-4-field-start-date-und-0-value-datepicker-popup-0").val(cu);
		$("#edit-field-time-field-collection-und-4-field-end-date-und-0-value-datepicker-popup-0").val(cu);
    });

    // Fieldset 6
	$('#edit-field-time-field-collection-und-5-field-today-und-0-value-datepicker-popup-0').live("change",function() {
		var cu = $("#edit-field-time-field-collection-und-5-field-today-und-0-value-datepicker-popup-0").val();
		
		$("#edit-field-time-field-collection-und-5-field-start-date-und-0-value-datepicker-popup-0").val(cu);
		$("#edit-field-time-field-collection-und-5-field-end-date-und-0-value-datepicker-popup-0").val(cu);
    });

    // Fieldset 7
	$('#edit-field-time-field-collection-und-6-field-today-und-0-value-datepicker-popup-0').live("change",function() {
		var cu = $("#edit-field-time-field-collection-und-6-field-today-und-0-value-datepicker-popup-0").val();
		
		$("#edit-field-time-field-collection-und-6-field-start-date-und-0-value-datepicker-popup-0").val(cu);
		$("#edit-field-time-field-collection-und-6-field-end-date-und-0-value-datepicker-popup-0").val(cu);
    });

    // Fieldset 8
	$('#edit-field-time-field-collection-und-7-field-today-und-0-value-datepicker-popup-0').live("change",function() {
		var cu = $("#edit-field-time-field-collection-und-7-field-today-und-0-value-datepicker-popup-0").val();
		
		$("#edit-field-time-field-collection-und-7-field-start-date-und-0-value-datepicker-popup-0").val(cu);
		$("#edit-field-time-field-collection-und-7-field-end-date-und-0-value-datepicker-popup-0").val(cu);
    });

    // Fieldset 9
	$('#edit-field-time-field-collection-und-8-field-today-und-0-value-datepicker-popup-0').live("change",function() {
		var cu = $("#edit-field-time-field-collection-und-8-field-today-und-0-value-datepicker-popup-0").val();
		
		$("#edit-field-time-field-collection-und-8-field-start-date-und-0-value-datepicker-popup-0").val(cu);
		$("#edit-field-time-field-collection-und-8-field-end-date-und-0-value-datepicker-popup-0").val(cu);
    });
    
//*********************************************************************************************************************
    // If there is a change in status of closed button
    /*
    $('#edit-field-time-field-collection-und-0-field-closed-und').change(function() {
				
		if($("#edit-field-closed-und").is(':checked'))
		{
			// Multiple Field Container Effect - Checked
			var close = "CLOSED";
			$('.field-multiple-table').find("tr:gt(1)").remove();
			$('.field-multiple-table .form-text').val(close);
			$('.field-multiple-table input').attr("disabled",true);
			$('.field-add-more-submit').attr("disabled",true);
			$('.field-multiple-table').css("color","#888");
			$('.field-add-more-submit').css("color","#888");
			
		}
		else
		{
			// Multiple Field Container Effect - Uncheck
			var empty = "";
			// Field Collection
			$('.field-multiple-table .form-text').val(empty);
			$('.field-multiple-table .form-text').attr("disabled",false);
			$('.field-add-more-submit').attr("disabled",false);
			$('.field-multiple-table').css("color","");
			$('.field-add-more-submit').css("color","");
		}
		
    });
    */
    //Field Set Collection 
    // If Closed is click disable both Open time and Close Time
    // Print CLOSED in them
    // Disable the add more button
    
    // Enter Time #1
    $('#edit-field-time-field-collection-und-0-field-closed-und').live("change",function() {
				
		if($("#edit-field-time-field-collection-und-0-field-closed-und").is(':checked'))
		{
			// Multiple Field Container Effect - Checked
			var close = "CLOSED";
			$('.field-multiple-table .sticky-table').find("tr:gt(1)").remove();
			$('.field-multiple-table .sticky-table .form-text').val(close);
			$('.field-multiple-table .sticky-table input').attr("disabled",true);
			$('#edit-field-time-field-collection-und-0-field-enter-time-frame .field-add-more-submit').attr("disabled",true);
			$('.field-multiple-table .sticky-table').css("color","#888");
			$('#edit-field-time-field-collection-und-0-field-enter-time-frame .field-add-more-submit').css("color","#888");
		
		}
		else
		{
			// Multiple Field Container Effect - Uncheck
			var empty = "";
			$('.field-multiple-table .sticky-table .form-text').val(empty);
			$('.field-multiple-table .sticky-table input').attr("disabled",false);
			$('#edit-field-time-field-collection-und-0-field-enter-time-frame .field-add-more-submit').attr("disabled",false);
			$('.field-multiple-table .sticky-table').css("color","");
			$('#edit-field-time-field-collection-und-0-field-enter-time-frame .field-add-more-submit').css("color","");
		}
		
    });

	 // Enter Time #2
    $('#edit-field-time-field-collection-und-1-field-closed-und').live("change",function() {
				
		if($("#edit-field-time-field-collection-und-1-field-closed-und").is(':checked'))
		{
			// Multiple Field Container Effect - Checked
			var close = "CLOSED";
			$('.field-multiple-table .sticky-table').find("tr:gt(1)").remove();
			$('.field-multiple-table .sticky-table .form-text').val(close);
			$('.field-multiple-table .sticky-table input').attr("disabled",true);
			$('#edit-field-time-field-collection-und-1-field-enter-time-frame .field-add-more-submit').attr("disabled",true);
			$('.field-multiple-table .sticky-table').css("color","#888");
			$('#edit-field-time-field-collection-und-1-field-enter-time-frame .field-add-more-submit').css("color","#888");
		
		}
		else
		{
			// Multiple Field Container Effect - Uncheck
			var empty = "";
			$('.field-multiple-table .sticky-table .form-text').val(empty);
			$('.field-multiple-table .sticky-table input').attr("disabled",false);
			$('#edit-field-time-field-collection-und-1-field-enter-time-frame .field-add-more-submit').attr("disabled",false);
			$('.field-multiple-table .sticky-table').css("color","");
			$('#edit-field-time-field-collection-und-1-field-enter-time-frame .field-add-more-submit').css("color","");
		}
		
    });

	// Enter Time #3
    $('#edit-field-time-field-collection-und-3-field-closed-und').live("change",function() {
				
		if($("#edit-field-time-field-collection-und-3-field-closed-und").is(':checked'))
		{
			// Multiple Field Container Effect - Checked
			var close = "CLOSED";
			$('.field-multiple-table .sticky-table').find("tr:gt(1)").remove();
			$('.field-multiple-table .sticky-table .form-text').val(close);
			$('.field-multiple-table .sticky-table input').attr("disabled",true);
			$('#edit-field-time-field-collection-und-3-field-enter-time-frame .field-add-more-submit').attr("disabled",true);
			$('.field-multiple-table .sticky-table').css("color","#888");
			$('#edit-field-time-field-collection-und-3-field-enter-time-frame .field-add-more-submit').css("color","#888");
		
		}
		else
		{
			// Multiple Field Container Effect - Uncheck
			var empty = "";
			$('.field-multiple-table .sticky-table .form-text').val(empty);
			$('.field-multiple-table .sticky-table input').attr("disabled",false);
			$('#edit-field-time-field-collection-und-3-field-enter-time-frame .field-add-more-submit').attr("disabled",false);
			$('.field-multiple-table .sticky-table').css("color","");
			$('#edit-field-time-field-collection-und-3-field-enter-time-frame .field-add-more-submit').css("color","");
		}
		
    });

	// Enter Time #4
    $('#edit-field-time-field-collection-und-4-field-closed-und').live("change",function() {
				
		if($("#edit-field-time-field-collection-und-4-field-closed-und").is(':checked'))
		{
			// Multiple Field Container Effect - Checked
			var close = "CLOSED";
			$('.field-multiple-table .sticky-table').find("tr:gt(1)").remove();
			$('.field-multiple-table .sticky-table .form-text').val(close);
			$('.field-multiple-table .sticky-table input').attr("disabled",true);
			$('#edit-field-time-field-collection-und-4-field-enter-time-frame .field-add-more-submit').attr("disabled",true);
			$('.field-multiple-table .sticky-table').css("color","#888");
			$('#edit-field-time-field-collection-und-4-field-enter-time-frame .field-add-more-submit').css("color","#888");
		
		}
		else
		{
			// Multiple Field Container Effect - Uncheck
			var empty = "";
			$('.field-multiple-table .sticky-table .form-text').val(empty);
			$('.field-multiple-table .sticky-table input').attr("disabled",false);
			$('#edit-field-time-field-collection-und-4-field-enter-time-frame .field-add-more-submit').attr("disabled",false);
			$('.field-multiple-table .sticky-table').css("color","");
			$('#edit-field-time-field-collection-und-4-field-enter-time-frame .field-add-more-submit').css("color","");
		}
		
    });

	// Enter Time #5
    $('#edit-field-time-field-collection-und-5-field-closed-und').live("change",function() {
				
		if($("#edit-field-time-field-collection-und-5-field-closed-und").is(':checked'))
		{
			// Multiple Field Container Effect - Checked
			var close = "CLOSED";
			$('.field-multiple-table .sticky-table').find("tr:gt(1)").remove();
			$('.field-multiple-table .sticky-table .form-text').val(close);
			$('.field-multiple-table .sticky-table input').attr("disabled",true);
			$('#edit-field-time-field-collection-und-5-field-enter-time-frame .field-add-more-submit').attr("disabled",true);
			$('.field-multiple-table .sticky-table').css("color","#888");
			$('#edit-field-time-field-collection-und-5-field-enter-time-frame .field-add-more-submit').css("color","#888");
		
		}
		else
		{
			// Multiple Field Container Effect - Uncheck
			var empty = "";
			$('.field-multiple-table .sticky-table .form-text').val(empty);
			$('.field-multiple-table .sticky-table input').attr("disabled",false);
			$('#edit-field-time-field-collection-und-5-field-enter-time-frame .field-add-more-submit').attr("disabled",false);
			$('.field-multiple-table .sticky-table').css("color","");
			$('#edit-field-time-field-collection-und-5-field-enter-time-frame .field-add-more-submit').css("color","");
		}
		
    });

	// Enter Time #6
    $('#edit-field-time-field-collection-und-6-field-closed-und').live("change",function() {
				
		if($("#edit-field-time-field-collection-und-6-field-closed-und").is(':checked'))
		{
			// Multiple Field Container Effect - Checked
			var close = "CLOSED";
			$('.field-multiple-table .sticky-table').find("tr:gt(1)").remove();
			$('.field-multiple-table .sticky-table .form-text').val(close);
			$('.field-multiple-table .sticky-table input').attr("disabled",true);
			$('#edit-field-time-field-collection-und-6-field-enter-time-frame .field-add-more-submit').attr("disabled",true);
			$('.field-multiple-table .sticky-table').css("color","#888");
			$('#edit-field-time-field-collection-und-6-field-enter-time-frame .field-add-more-submit').css("color","#888");
		
		}
		else
		{
			// Multiple Field Container Effect - Uncheck
			var empty = "";
			$('.field-multiple-table .sticky-table .form-text').val(empty);
			$('.field-multiple-table .sticky-table input').attr("disabled",false);
			$('#edit-field-time-field-collection-und-6-field-enter-time-frame .field-add-more-submit').attr("disabled",false);
			$('.field-multiple-table .sticky-table').css("color","");
			$('#edit-field-time-field-collection-und-6-field-enter-time-frame .field-add-more-submit').css("color","");
		}
		
    });

	// Enter Time #7
    $('#edit-field-time-field-collection-und-7-field-closed-und').live("change",function() {
				
		if($("#edit-field-time-field-collection-und-7-field-closed-und").is(':checked'))
		{
			// Multiple Field Container Effect - Checked
			var close = "CLOSED";
			$('.field-multiple-table .sticky-table').find("tr:gt(1)").remove();
			$('.field-multiple-table .sticky-table .form-text').val(close);
			$('.field-multiple-table .sticky-table input').attr("disabled",true);
			$('#edit-field-time-field-collection-und-7-field-enter-time-frame .field-add-more-submit').attr("disabled",true);
			$('.field-multiple-table .sticky-table').css("color","#888");
			$('#edit-field-time-field-collection-und-7-field-enter-time-frame .field-add-more-submit').css("color","#888");
		
		}
		else
		{
			// Multiple Field Container Effect - Uncheck
			var empty = "";
			$('.field-multiple-table .sticky-table .form-text').val(empty);
			$('.field-multiple-table .sticky-table input').attr("disabled",false);
			$('#edit-field-time-field-collection-und-7-field-enter-time-frame .field-add-more-submit').attr("disabled",false);
			$('.field-multiple-table .sticky-table').css("color","");
			$('#edit-field-time-field-collection-und-7-field-enter-time-frame .field-add-more-submit').css("color","");
		}
		
    });

	// Enter Time #8
    $('#edit-field-time-field-collection-und-8-field-closed-und').live("change",function() {
				
		if($("#edit-field-time-field-collection-und-8-field-closed-und").is(':checked'))
		{
			// Multiple Field Container Effect - Checked
			var close = "CLOSED";
			$('.field-multiple-table .sticky-table').find("tr:gt(1)").remove();
			$('.field-multiple-table .sticky-table .form-text').val(close);
			$('.field-multiple-table .sticky-table input').attr("disabled",true);
			$('#edit-field-time-field-collection-und-8-field-enter-time-frame .field-add-more-submit').attr("disabled",true);
			$('.field-multiple-table .sticky-table').css("color","#888");
			$('#edit-field-time-field-collection-und-8-field-enter-time-frame .field-add-more-submit').css("color","#888");
		
		}
		else
		{
			// Multiple Field Container Effect - Uncheck
			var empty = "";
			$('.field-multiple-table .sticky-table .form-text').val(empty);
			$('.field-multiple-table .sticky-table input').attr("disabled",false);
			$('#edit-field-time-field-collection-und-8-field-enter-time-frame .field-add-more-submit').attr("disabled",false);
			$('.field-multiple-table .sticky-table').css("color","");
			$('#edit-field-time-field-collection-und-8-field-enter-time-frame .field-add-more-submit').css("color","");
		}
		
    });

	// Enter Time #9
    $('#edit-field-time-field-collection-und-9-field-closed-und').live("change",function() {
				
		if($("#edit-field-time-field-collection-und-9-field-closed-und").is(':checked'))
		{
			// Multiple Field Container Effect - Checked
			var close = "CLOSED";
			$('.field-multiple-table .sticky-table').find("tr:gt(1)").remove();
			$('.field-multiple-table .sticky-table .form-text').val(close);
			$('.field-multiple-table .sticky-table input').attr("disabled",true);
			$('#edit-field-time-field-collection-und-9-field-enter-time-frame .field-add-more-submit').attr("disabled",true);
			$('.field-multiple-table .sticky-table').css("color","#888");
			$('#edit-field-time-field-collection-und-9-field-enter-time-frame .field-add-more-submit').css("color","#888");
		
		}
		else
		{
			// Multiple Field Container Effect - Uncheck
			var empty = "";
			$('.field-multiple-table .sticky-table .form-text').val(empty);
			$('.field-multiple-table .sticky-table input').attr("disabled",false);
			$('#edit-field-time-field-collection-und-9-field-enter-time-frame .field-add-more-submit').attr("disabled",false);
			$('.field-multiple-table .sticky-table').css("color","");
			$('#edit-field-time-field-collection-und-9-field-enter-time-frame .field-add-more-submit').css("color","");
		}
		
    });


   });
}) (jQuery);
