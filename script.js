 // Pastikan nilai adalah angka dan bukan kosong
    const tempValue = parseFloat(value);
    if (isNaN(tempValue) || value.trim() === '') {
        // Kosongkan semua input jika input sumber kosong
        document.getElementById('celsius').value = '';
        document.getElementById('fahrenheit').value = '';
        document.getElementById('kelvin').value = '';
        return;
    }

    let c = 0;
    let f = 0;
    let k = 0;

    // 1. Konversi Nilai Sumber ke Celsius
    if (sourceId === 'celsius') {
        c = tempValue;
    } else if (sourceId === 'fahrenheit') {
        // F ke C: (F - 32) * 5/9
        c = (tempValue - 32) * 5 / 9;
    } else if (sourceId === 'kelvin') {
        // K ke C: K - 273.15
        c = tempValue - 273.15;
    }

    // 2. Hitung Fahrenheit dan Kelvin dari Celsius (c)
    
    // C ke F: (C * 9/5) + 32
    f = (c * 9 / 5) + 32;
    
    // C ke K: C + 273.15
    k = c + 273.15;

    // 3. Tampilkan Hasil di Input Lain
    
    // Fungsi pembantu untuk membulatkan ke 2 desimal
    const roundToTwo = (num) => Math.round(num * 100) / 100;

    if (sourceId !== 'celsius') {
        document.getElementById('celsius').value = roundToTwo(c);
    }
    if (sourceId !== 'fahrenheit') {
        document.getElementById('fahrenheit').value = roundToTwo(f);
    }
    if (sourceId !== 'kelvin') {
        document.getElementById('kelvin').value = roundToTwo(k);
    }
}
