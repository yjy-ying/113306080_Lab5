function validateNumber(input) {
    
    input.value = input.value.replace(/[^0-9.]/g, '');

    
    if ((input.value.match(/\./g) || []).length > 1) {
        input.value = input.value.slice(0, -1);
    }
}

document.getElementById("submitButton").addEventListener("click", function () {
    var math = parseFloat(document.getElementById("mathInput").value) || 0;
    var english = parseFloat(document.getElementById("englishInput").value) || 0;

    if (!math && !english) {
        alert("輸入數字");
        return;
    }

    var average = ((math + english) / 2).toFixed(2);

    var tbody = document.querySelector("#gradesTable tbody");
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${tbody.rows.length + 1}</td>
        <td>${math.toFixed(2)}</td>
        <td>${english.toFixed(2)}</td>
        <td>${average}</td>
    `;
    tbody.appendChild(newRow);

    updateAverages();
});

function updateAverages() {
    var tbody = document.querySelector("#gradesTable tbody");
    var mathSum = 0, englishSum = 0, count = tbody.rows.length;

    for (var i = 0; i < count; i++) {
        var row = tbody.rows[i];
        mathSum += parseFloat(row.cells[1].textContent);
        englishSum += parseFloat(row.cells[2].textContent);
    }

    document.getElementById("mathAvg").textContent = (mathSum / count).toFixed(2);
    document.getElementById("englishAvg").textContent = (englishSum / count).toFixed(2);
    document.getElementById("overallAvg").textContent = ((mathSum + englishSum) / (count * 2)).toFixed(2);
}
