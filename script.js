
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
