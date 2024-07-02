function hitungBMI(berat, tinggi) {
  tinggi /= 100; // konversi tinggi dari cm ke meter
  return (berat / (tinggi * tinggi)).toFixed(1);
}

const berat = 70; // kg
const tinggi = 175; // cm
const bmi = hitungBMI(berat, tinggi);
console.log(`BMI Anda adalah ${bmi}`);
