//membuat program interaktif bernama "covert tanggal" untuk mengubah input tanggal 24-04-2015 menjadi format 24/04/2015 menggunakan package "moment"
// jika input user tidak sesuai format maka outputkan pesan "Format tanggal salah"
// membuat padanan program tanpa external package, tapi dengan menggunakan alur sendiri

const moment = require('moment'); 
const readline = require('readline'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukkan tanggal dalam format DD-MM-YYYY: ', (input) => {
  try {
    const date = moment(input, 'DD-MM-YYYY', true);

    if (date.isValid()) {
      console.log(`Tanggal dalam format baru: ${date.format('DD/MM/YYYY')}`);
    } else {
      throw new Error('Format tanggal salah'); 
    }
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    rl.close(); 
  }
});


