function calculateBMI() {
    // ดึงค่าจาก input element
    var weight = parseFloat(document.getElementById("weightInput").value);
    var height = parseFloat(document.getElementById("heightInput").value);
  
    // คำนวณ BMI
    var bmi = weight / (height * height);
  
    // แสดงผลลัพธ์
    document.getElementById("result").innerText = "BMI = " + bmi.toFixed(4);
  }