function computeBMI()
	{
          //Obtain user inputs
         var height = Number(document.getElementById("BMIheight").value);
         var weight = Number(document.getElementById("BMIweight").value);

         //Perform calculation
         var BMI = weight*703 / Math.pow(height, 2);

	 //Store BMI output
	 Qualtrics.SurveyEngine.setEmbeddedData("BMI",BMI);

         //Display result of calculation
	 document.getElementById("BMIoutput").innerHTML = Math.round(BMI * 100)/100;
         if (BMI < 18.5) document.getElementById("BMIStatus").innerHTML = "Underweight";
         if (BMI >= 18.5 && BMI <= 25) document.getElementById("BMIStatus").innerHTML = "Normal";
         if (BMI >= 25 && BMI <= 30) document.getElementById("BMIStatus").innerHTML = "Overweight";
         if (BMI > 30) document.getElementById("BMIStatus").innerHTML = "Obese";
	};
