// function tanpa returs
function tampilkan() {
  console.log("halo!");
}

tampilkan();
//function dengan return
function munculkanAngkaDua() {
  return 2
}

var tampung = munculkanAngkaDua();
console.log(tampung)

//function dengan parameter
function kalikanDua(angka) {
  return angka * 2
}

var tampung = kalikanDua(2);
console.log(tampung)

//pengiriman parameter lebih dari 1
function tampilkanAngka(angkaPertama,AngkaKedua) {
return angkaPertama+AngkaKedua;
}
console.log(tampilkanAngka(5,3));

//inisialisasi parameter dengan nilai default
function tampilkanAngka(angka = 1) {
return angka
}
console.log(tampilkanAngka(5)); //sesuai parameter yang dikirim
console.log(tampilkanAngka()); //sesuasi default 1

//anonimus function menampung functionsebabgai variabbbel
var fungsiPerkalian = function(angkaPertama,AngkaKedua){
  return angkaPertama * AngkaKedua
}
console.log(fungsiPerkalian(2,4));


//tugas day 3 pseudocode 1
var a,b,c ;
a = prompt('Simpan')
b = prompt('Simpan')
c = Number(a)+Number(b);
console.log('Hitung a+b');
console.log('Tuliskan hasil hitungan = '+c);
c = Number(a)*Number(b);
console.log('Kalikan a*b');
console.log('Tuliskan hasil kalian = '+c);

//tugas day 3 pseudocode 2
var a,b,c,d;
a = prompt('Tuliskan "Saya Belajar Javascript"')
d = 'Saya Belajar Javascript'
if (a===d) {
  console.log('Pasti Bisa!');
}
else {
  console.log('Perhatikan kapital!');
}

//tugas day 3 pseudocode
var a,b
a = prompt('Masukkan Angka Limit Deret!')
b = 1
c = a;
for(var b=1; b<=a ; b=b+1){
  if (b%3===0) {
    console.log(b);
  }
}
