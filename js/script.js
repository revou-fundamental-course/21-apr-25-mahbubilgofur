const inputSuhu = document.getElementById("inputSuhu");
const outputSuhu = document.getElementById("outputSuhu");
const penjelasan = document.getElementById("penjelasan");
const konversiBtn = document.getElementById("Konversi");
const resetBtn = document.getElementById("Reset");
const reverseBtn = document.getElementById("Reverse");

let CkeF = true;

function TambahInput(nilai) {
  inputSuhu.value += nilai;
}
function HapusSatu() {
  inputSuhu.value = inputSuhu.value.slice(0, -1);
}

function Cek() {
  let input = inputSuhu.value.trim();
  let value = parseFloat(input);

  if (input === "" || isNaN(value)) {
    Toastify({
      text: "Silahkan masukkan nilai suhu yang valid!",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "red",
      style: {
        position: "absolute",
        right: "1%",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        color: "#ffffff",
      },
    }).showToast();

    return;
  }

  if (CkeF) {
    // Konversi dari Celsius ke Fahrenheit
    let result = (value * 9) / 5 + 32;
    outputSuhu.value = result.toFixed(2); // Tampilkan hasil di output
    penjelasan.value = `${value}°C × (9/5) + 32 = ${result.toFixed(2)}°F`; // Penjelasan rumus
  } else {
    // Konversi dari Fahrenheit ke Celsius
    let result = ((value - 32) * 5) / 9;
    outputSuhu.value = result.toFixed(2); // Tampilkan hasil di output
    penjelasan.value = `(${value}°F - 32) × (5/9) = ${result.toFixed(2)}°C`; // Penjelasan rumus
  }
}

function resetForm() {
  inputSuhu.value = "";
  outputSuhu.value = "";
  penjelasan.value = "";
}
function reverseMode() {
  CkeF = !CkeF; // Balikkan mode
  resetForm(); // Reset form ketika mode dibalik

  const topPesan = document.querySelector(".c-top-pesan-K p");
  topPesan.innerHTML = CkeF
    ? "Konversi <span>Celsius (°C)</span> ke <span>Fahrenheit (°F)</span>:"
    : "Konversi <span>Fahrenheit (°F)</span> ke <span>Celsius (°C)</span>:";
}

konversiBtn.addEventListener("click", Cek); // Ketika tombol konversi ditekan
resetBtn.addEventListener("click", resetForm); // Ketika tombol reset ditekan
reverseBtn.addEventListener("click", reverseMode); // Ketika tombol reverse ditekan
