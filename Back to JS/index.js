//L3T15.

/*  Back to JS.
Make interactive tutorial website and seperate pages for JS concepts:
*   BASIC JAVASCRIPT SYNTAX
*   EVENTS
*   JQUERY

This is my main page for running all scripts, and will be linked in each html page.
*/


//Syntax.html:
//_________________________________________
//Check if correct radio button is checked for syntax_choice_vars.
$("input[id='syntax_var_1']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='syntax_var_3']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='syntax_var_2']").click(function() {
    if($(this).is(":checked")){
        alert("Correct.");
    }
});
$("input[id='syntax_var_4']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});

//Check if correct radio button is checked for syntax_choice_ifs.
$("input[id='syntax_con_1']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='syntax_con_2']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='syntax_con_4']").click(function() {
    if($(this).is(":checked")){
        alert("Correct.");
    }
});
$("input[id='syntax_con_3']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});

//Check if correct radio button is checked for syntax_choice_loop.
$("input[id='syntax_loop_1']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='syntax_loop_2']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='syntax_loop_4']").click(function() {
    if($(this).is(":checked")){
        alert("Correct.");
    }
});
$("input[id='syntax_loop_3']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});

//Check if correct radio button is checked for syntax_choice_maps.
$("input[id='syntax_map_1']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='syntax_map_2']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='syntax_map_3']").click(function() {
    if($(this).is(":checked")){
        alert("Correct.");
    }
});
$("input[id='syntax_map_4']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});

//Check if correct radio button is checked for syntax_choice_function.
$("input[id='syntax_fun_1']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='syntax_fun_3']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='syntax_fun_2']").click(function() {
    if($(this).is(":checked")){
        alert("Correct.");
    }
});
$("input[id='syntax_fun_4']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});


//Events.html:
//_________________________________________
//Check if correct radio button is checked.
$("input[id='event_1']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='event_2']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='event_3']").click(function() {
    if($(this).is(":checked")){
        alert("Correct.");
    }
});
$("input[id='event_4']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});


//JQueary.html:
//_________________________________________
//Check if correct radio button is checked.
$("input[id='jq_1']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='jq_2']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});
$("input[id='jq_3']").click(function() {
    if($(this).is(":checked")){
        alert("Correct.");
    }
});
$("input[id='jq_4']").click(function() {
    if($(this).is(":checked")){
        alert("Incorrect.");
    }
});


//End.