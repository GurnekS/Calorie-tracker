//Calculate calories assigment
//     Author Gurnek Singh
//     10/11/21
//     SDEV 117 Josh Archer
//this registers the button click events when the
//page loads
window.onload = function () {
    //register button events when the page loads
    document.getElementById("lbs-to-kgs").onclick = lbsToKgs;
    document.getElementById("workout-to-met").onclick = workoutToMet;
    document.getElementById("calc-calories").onclick = calculateCalories;
}

//convert lbs to kgs from the input fields in the
//page and send output to the console
//1 pound = 0.453592 kilograms
function lbsToKgs() {
    const lbsInput = document.getElementById("lbs");
    if(lbsInput.value){
        const inputWeight = parseFloat(lbsInput.value);
        const kiloGrams = inputWeight *  0.453592;
        output(inputWeight +" pounds is " + kiloGrams.toFixed(2) + " kilograms" );
        //*extra credit* the calculated kilograms is sent to the calories burned text box
        document.getElementById("kgs").value = kiloGrams.toFixed(2);
    }
    else{
        output("Invalid weight input!")
    }
}

//determine MET value for exercises in the dropdown
//list and send output to the console
//I found a way to display the workout the user chooses and display the MET without if statements
function workoutToMet() {
    const selectedWorkout = getSelectedWorkoutOption();
    const text = selectedWorkout.text;
    const metNumber = selectedWorkout.value;
    output(text + " has a MET value of "+metNumber);
    //*extra credit* the MET number is sent to the calculate calories text box
    document.getElementById("met").value = parseFloat(metNumber);

}
//This function returns the workout option that the user selected at the dropdown option
function getSelectedWorkoutOption(){
    const workoutOptions = document.getElementById("workouts").options;
    return workoutOptions[workoutOptions.selectedIndex];
}

//Calculates the calories burned per minute, given
//the inputs from the page and sends the output
//to the console
function calculateCalories() {
    const metInput = document.getElementById("met");
    const kgsInput = document.getElementById("kgs");
    if(metInput.value && kgsInput.value){
        const met = parseFloat(metInput.value);
        const kgs = parseFloat(kgsInput.value);
        const caloriesBurned = ((met * 3.5 * kgs) / 200).toFixed(2);
        output("MET "+ met+ ", weight "+ kgs +" - burns "+ caloriesBurned + " calories per minute");
    }
    else{
        output("MET value or Kilograms may be invalid!");
    }
}

//this function takes the provided message and prints
//it to the console on the page
function output(message) {
    let console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}