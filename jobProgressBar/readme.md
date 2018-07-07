# jobProgressBar
This is my solution to the following JS challenge.

## Description
When you complete your application on the Jobs Tab, you will notice a beautiful progress bar at the top that shows you how far you are from fully completing your application. Things that you'd need to do to get it fully completed include Visa information, Resume, solving some quick challenges, etc.

In this front-end challenge you need to implement the javascript logic for a simplified version of that progress bar.

More specifically, you are given a form with 4 fields related to a job application that is being submitted. The HTML/CSS code should all be ready to go. You just need to write the code in the JavaScript tab that automatically sets the state of the progress bar based on how many inputs have a valid value.

A value for dropdown fields is considered valid if it is not empty. For the university name a value is considered valid if its length is between 2 and 32 characters. For the email a value is considered valid if it contains a string that is at most 128 characters long and has the format `<username>@<domain>` where both `username` and `domain` can contain only lowercase latin letters, digits and `.` characters. Additionally, `domain` should contain at least one `.` character, and both `username` and `domain` can't have consecutive `.` characters.

More specifically - the progress bar should be at `0%` if all fields have empty values like they are at the initial state, `25%` if only one field has a value, `50%` for two filled fields, `75%` for three and `100%` if all of the fields have valid values selected.

**[execution time limit] 60 seconds**
