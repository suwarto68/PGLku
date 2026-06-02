import { Question } from '../types';

export const questionsData: Question[] = [
  // --- PILIHAN GANDA (SINGLE CHOICE) --- 10 SOAL
  {
    id: 1,
    type: 'single',
    difficulty: 'mudah',
    stimulus: 'Pak Budi adalah seorang pengemudi ojek online di Kota Semarang. Tarif perjalanan yang ditentukan oleh aplikasi ojek online terdiri dari tarif dasar (biaya awal) sebesar Rp 8.000 ditambah tarif per kilometer sebesar Rp 2.500.',
    questionText: 'Jika x menyatakan jarak perjalanan dalam kilometer dan y menyatakan total biaya dalam rupiah, manakah persamaan garis lurus yang memodelkan tarif ojek online tersebut?',
    choices: [
      'y = 8.000x + 2.500',
      'y = 2.500x + 8.000',
      'y = 10.500x',
      'y = 2.500x - 8.000'
    ],
    correctSingle: 1
  },
  {
    id: 2,
    type: 'single',
    difficulty: 'mudah',
    stimulus: 'Di sebuah taman bermain, terdapat papan seluncuran baru untuk anak-anak. Menurut standar keselamatan, kemiringan tangga seluncuran tidak boleh terlalu curam. Diketahui tinggi tegak tangga seluncuran tersebut adalah 60 cm, sedangkan panjang rebah atau mendatarnya secara horizontal adalah 120 cm.',
    questionText: 'Berapakah nilai kemantapan (gradien atau m) tangga seluncuran tersebut?',
    choices: [
      'm = 2',
      'm = 0,5',
      'm = 1,5',
      'm = 0,2'
    ],
    correctSingle: 1
  },
  {
    id: 3,
    type: 'single',
    difficulty: 'sedang',
    stimulus: 'Sebuah mobil MPV mewah memulai perjalanan dari kota A menuju kota B dengan bahan bakar penuh di dalam tangkinya sebesar 40 liter. Setelah menempuh jarak perjalanan x kilometer, rata-rata konsumsi bahan bakar mobil tersebut adalah sebesar 0,05 liter per kilometer secara konstan.',
    questionText: 'Jika sisa bahan bakar y (dalam liter) dimodelkan sebagai persamaan garis lurus, berapakah nilai gradien (m) dari grafik sisa bensin tersebut dan apa arti fisisnya?',
    choices: [
      'm = 0,05; artinya sisa bensin bertambah 0,05 liter per km perjalanan',
      'm = -0,05; artinya sisa bensin berkurang 0,05 liter per km perjalanan',
      'm = -40; artinya tangki kosong setelah menempuh 40 km perjalanan',
      'm = 20; artinya setiap 20 km bensin berkurang 1 liter'
    ],
    correctSingle: 1
  },
  {
    id: 4,
    type: 'single',
    difficulty: 'sedang',
    stimulus: 'Depresiasi atau penyusutan nilai barang adalah penurunan harga jual barang seiring bertambahnya usia pakai. Sebuah komputer grafis dibeli oleh sekolah dengan harga awal Rp 10.000.000. Setiap tahun, nilai komputer tersebut menyusut secara konsisten sebesar Rp 1.200.000.',
    questionText: 'Bagaimanakah persamaan garis lurus (depresiasi linear) yang menunjukkan perkiraan harga komputer y (dalam rupiah) setelah digunakan selama x tahun?',
    choices: [
      'y = 1.200.000x + 10.000.000',
      'y = -1.200.000x + 10.000.000',
      'y = 10.000.000x - 1.200.000',
      'y = -1.200.000x - 10.000.000'
    ],
    correctSingle: 1
  },
  {
    id: 5,
    type: 'single',
    difficulty: 'sedang',
    stimulus: 'Dalam perencanaan pembangunan rel kereta api cepat, arsitek menggambar peta jalur menggunakan koordinat Cartesius. Dua jalur rel direncanakan mengikuti lintasan matematika berupa garis lurus. Jalur pertama memiliki lintasan 2x - y = 6, sedangkan jalur kedua bercorak x + 2y = 8.',
    questionText: 'Bagaimanakah kedudukan atau hubungan kedua lintasan rel kereta api tersebut?',
    choices: [
      'Kedua jalur rel sejajar satu sama lain',
      'Kedua jalur rel saling berimpit',
      'Kedua jalur rel berpotongan tegak lurus',
      'Kedua jalur rel berpotongan namun tidak tegak lurus'
    ],
    correctSingle: 2
  },
  {
    id: 6,
    type: 'single',
    difficulty: 'sedang',
    stimulus: 'Sebuah tangga kayu disandarkan pada tembok rumah untuk mengecat plafon. Jarak antara pangkal bawah tangga di lantai dengan tembok adalah 3 meter. Jika ujung atas tangga menyentuh tembok setinggi 4 meter dari lantai, kemiringan tangga memegang peran penting demi keselamatan guru/tukang cat.',
    questionText: 'Berapakah gradien dari tangga kayu yang disandarkan tersebut?',
    choices: [
      'm = 4/3',
      'm = 3/4',
      'm = -3/4',
      'm = 5/3'
    ],
    correctSingle: 0
  },
  {
    id: 7,
    type: 'single',
    difficulty: 'sedang',
    stimulus: 'Pada percobaan sains di laboratorium kimia kelas 7, Siswa memanaskan sepanci air steril. Pada menit ke-0, suhu air diukur sebesar 25°C. Setiap menit dipanaskan di atas kompor spiritus, suhu air meningkat secara stabil sebesar 3°C.',
    questionText: 'Tentukan model matematika linier yang menghubungkan suhu air T (dalam °C) terhadap waktu t (dalam menit)!',
    choices: [
      'T(t) = 25t + 3',
      'T(t) = 3t + 25',
      'T(t) = 3t - 25',
      'T(t) = 28t'
    ],
    correctSingle: 1
  },
  {
    id: 8,
    type: 'single',
    difficulty: 'sulit',
    stimulus: 'Dua perusahaan taksi menawarkan tarif berbeda kepada pelanggan di stasiun. Taksi "Aman" menggunakan tarif y = 4.000x + 10.000 (y biaya dalam rupiah, x jarak dalam km). Taksi "Bahagia" menawarkan tarif lebih hemat untuk jarak jauh dengan persamaan y = 3.000x + 15.000.',
    questionText: 'Pada jarak berapakah biaya sewa kedua taksi tersebut bernilai sama pesis, dan perusahaan taksi mana yang lebih murah jika Anda ingin bepergian sejauh 10 km?',
    choices: [
      'Sama pada jarak 5 km, dan Taksi Aman lebih murah untuk jarak 10 km',
      'Sama pada jarak 4 km, dan Taksi Bahagia lebih murah untuk jarak 10 km',
      'Sama pada jarak 5 km, dan Taksi Bahagia lebih murah untuk jarak 10 km',
      'Sama pada jarak 10 km, dan tarifnya selalu sama sejak awal'
    ],
    correctSingle: 2
  },
  {
    id: 9,
    type: 'single',
    difficulty: 'mudah',
    stimulus: 'Sebuah jalan raya lurus melintasi kawasan perumahan dan memotong saluran air drainase. Dalam aplikasi grafik komputer, drainase dimodelkan sebagai Sumbu-Y, dan jalan raya tersebut dimodelkan dengan persamaan matematika garis lurus 3x - 2y = 12.',
    questionText: 'Pada koordinat berapakah jalan raya tersebut memotong saluran drainase (Sumbu-Y)?',
    choices: [
      '(4, 0)',
      '(0, 6)',
      '(0, -6)',
      '(-4, -6)'
    ],
    correctSingle: 2
  },
  {
    id: 10,
    type: 'single',
    difficulty: 'sedang',
    stimulus: 'Di sebuah pertambangan minyak bumi, permukaan fluida di dalam tangki penyimpan dihitung mengalir keluar. Setelah dianalisis pada grafik, kemiringan aliran permukaan fluida tersebut bergradien m = -2 dan lintasan tingkat ketinggian melewati titik koordinat (2, 3), di mana x waktu dan y ketinggian fluid.',
    questionText: 'Tentukan persamaan garis lurus yang sesuai dengan data aliran fluida tersebut!',
    choices: [
      'y = -2x + 7',
      'y = -2x + 1',
      'y = 2x - 1',
      'y = -2x - 7'
    ],
    correctSingle: 0
  },

  // --- PILIHAN GANDA KOMPLEKS (MULTIPLE CHOICE - MORE THAN 1 ANSWER) --- 5 SOAL
  {
    id: 11,
    type: 'complex',
    difficulty: 'mudah',
    stimulus: 'Persamaan matematika memiliki berbagai bentuk tergantung pangkat variabelnya. Persamaan garis lurus atau sering disebut persamaan linier memiliki karakteristik khusus di mana variabel x dan y memiliki derajat paling tinggi bernilai 1.',
    questionText: 'Dari daftar persamaan di bawah ini, pilihlah SEMUA persamaan yang merupakan bentuk representasi dari Persamaan Garis Lurus! (Pilihan boleh lebih dari satu)',
    choices: [
      'y = 4x - 7',
      '3x + 2y - 12 = 0',
      'y = x² + 5',
      'x = 5',
      'y = 4/x + 2'
    ],
    correctComplex: [0, 1, 3]
  },
  {
    id: 12,
    type: 'complex',
    difficulty: 'sedang',
    stimulus: 'Sebuah lintasan taman kota berbentuk lurus dimodelkan dalam bidang koordinat Cartesius dengan persamaan matematis y = 2x - 4.',
    questionText: 'Berdasarkan persamaan garis tersebut, analisis mana saja dari pernyataan-pernyataan berikut yang bernilai BENAR? (Pilihlah semua jawaban benar!)',
    choices: [
      'Garis tersebut memiliki nilai gradien m = 2',
      'Garis tersebut memotong Sumbu-Y di koordinat (0, -4)',
      'Garis tersebut memotong Sumbu-X di koordinat (2, 0)',
      'Garis tersebut melewati titik asal (0,0)',
      'Garis tersebut sejajar dengan garis y = -2x + 8'
    ],
    correctComplex: [0, 1, 2]
  },
  {
    id: 13,
    type: 'complex',
    difficulty: 'sedang',
    stimulus: 'Gradien menyatakan kemiringan dan arah perubahan nilai suatu persamaan garis. Gradien negatif menunjukkan bahwa nilai variabel y akan selalu menurun seiring berjalannya pertambahan nilai variabel x (hubungan berbanding terbalik).',
    questionText: 'Pilihlah fenomena-fenomena dunia nyata berikut yang jika digambarkan pada diagram akan menghasilkan grafik garis lurus bergradien NEGATIF! (Pilihlah semua yang sesuai!)',
    choices: [
      'Sisa daya baterai HP pintar (persentase) terhadap lama waktu pemakaian aktif',
      'Volume air di dalam bak mandi yang sedang dikuras habis melalui pipa pembuangan',
      'Tinggi tanaman jagung hias (cm) yang diukur secara berkala setiap hari',
      'Ketinggian posisi kapal selam penjelajah samudera ketika sedang bersiap menyelam lebih dalam',
      'Jumlah tabungan uang di celengan jika setiap hari ditabung uang saku sebesar Rp 5.000 secara ajek'
    ],
    correctComplex: [0, 1, 3]
  },
  {
    id: 14,
    type: 'complex',
    difficulty: 'sedang',
    stimulus: 'Sebuah kabel fiber optik internet dipasang lurus dari atap gedung A ke panel distribusi di tanah. Dalam desain arsitek, letak ujung atas kabel di atap adalah di titik koordinat (0, 3) pada sumbu vertikal, dan pangkal bawah kabel terhubung di koordinat (4, 0) pada sumbu datar.',
    questionText: 'Manakah di antara pernyataan berikut mengenai model linier kabel tersebut yang BENAR? (Jawaban benar boleh lebih dari satu!)',
    choices: [
      'Gradien kemiringan kabel tersebut adalah m = -3/4',
      'Persamaan garis lurus kabel tersebut adalah 3x + 4y - 12 = 0',
      'Kabel tersebut tegak lurus dengan kabel lain yang memiliki gradien m = 4/3',
      'Panjang bentangan lurus kabel tersebut berdasarkan teorema Pythagoras adalah 5 satuan panjang',
      'Persamaan garis kabel tersebut adalah y = 4/3x + 3'
    ],
    correctComplex: [0, 1, 2, 3]
  },
  {
    id: 15,
    type: 'complex',
    difficulty: 'sulit',
    stimulus: 'Konsep kemiringan garis dalam bidang geometris menyatakan bahwa dua buah garis dikatakan sejajar jika memiliki gradien sama (m1 = m2). Sebaliknya, dua garis saling berpotongan tegak lurus jika hasil kali kedua gradiennya bernilai -1 (m1 × m2 = -1).',
    questionText: 'Diketahui sebuah garis referensi memiliki persamaan y = -1/2x + 5. Manakah persamaan garis di bawah ini yang hubungannya tepat sejajar ATAU tegak lurus dengannya? (Pilihan boleh lebih dari satu)',
    choices: [
      'y = -1/2x - 3 (Sejajar)',
      'x + 2y - 10 = 0 (Sejajar)',
      'y = 2x + 1 (Tegak Lurus)',
      '2x - y + 4 = 0 (Tegak Lurus)',
      'y = -2x + 7 (Sejajar)'
    ],
    correctComplex: [0, 1, 2, 3]
  },

  // --- BENAR / SALAH (TRUE / FALSE) --- 5 SOAL (Masing-masing 3 pernyataan)
  {
    id: 16,
    type: 'tf',
    difficulty: 'mudah',
    stimulus: 'Koordinat Cartesius ditemukan oleh ilmuwan besar René Descartes. Sistem ini menggunakan dua sumbu berpotongan tegak lurus: Sumbu-X (horizontal) dan Sumbu-Y (vertikal). Bidang koordinat terbagi menjadi empat daerah rata yang disebut kuadran: Kuadran I, II, III, dan IV.',
    questionText: 'Tentukan kebenaran dari masing-masing pernyataan berikut berdasarkan aturan diagram koordinat Cartesius!',
    tfStatements: [
      {
        statement: 'Titik A(-3, -5) terletak di daerah Kuadran III karena sumbu-X dan sumbu-Y keduanya bertanda negatif.',
        isCorrect: true
      },
      {
        statement: 'Titik B(0, 4) terletak tepat di atas sumbu horizontal (Sumbu-X).',
        isCorrect: false
      },
      {
        statement: 'Jarak titik C(6, -8) terhadap Sumbu-X adalah sebesar 8 satuan panjang (selalu bernilai positif).',
        isCorrect: true
      }
    ]
  },
  {
    id: 17,
    type: 'tf',
    difficulty: 'sedang',
    stimulus: 'Diberikan tiga buah garis lurus pada bidang rata matematika: \n- Garis K: y = 3x - 1 \n- Garis L: 3x - y + 5 = 0 \n- Garis M: y = -1/3x + 4',
    questionText: 'Analisislah hubungan dan gradien dari masing-masing garis di atas, lalu tentukan Benar atau Salah pernyataan berikut!',
    tfStatements: [
      {
        statement: 'Garis K dan Garis L saling sejajar satu sama lain karena memiliki nilai gradien yang sama m = 3.',
        isCorrect: true
      },
      {
        statement: 'Garis K dan Garis M berpotongan tegak lurus karena hasil perkalian gradien keduanya adalah m_K × m_M = 3 × (-1/3) = -1.',
        isCorrect: true
      },
      {
        statement: 'Garis M adalah garis lurus yang condong/miring ke sebelah kanan atas.',
        isCorrect: false
      }
    ]
  },
  {
    id: 18,
    type: 'tf',
    difficulty: 'sedang',
    stimulus: 'Berikut adalah grafik lintasan jalan layang tol yang dimodelkan oleh dinas Pekerjaan Umum (PU) dengan rumus persamaan garis lurus y = -3x + 6.',
    questionText: 'Telaah sifat grafik persamaannya dan buktikan kebenaran dari pernyataan-pernyataan di bawah ini!',
    tfStatements: [
      {
        statement: 'Garis tersebut memotong sumbu mendatar (Sumbu-X) tepat di koordinat titik (2, 0).',
        isCorrect: true
      },
      {
        statement: 'Titik koordinat P(1, 3) berada tepat di dalam lintasan garis tersebut.',
        isCorrect: true
      },
      {
        statement: 'Nilai konstanta c = 6 menunjukkan bahwa titik potong di Sumbu-X berada di atas titik pusat (0,0).',
        isCorrect: false
      }
    ]
  },
  {
    id: 19,
    type: 'tf',
    difficulty: 'sedang',
    stimulus: 'Gradien garis (m) yang menghubungkan dua titik sembarang pada koordinat A(x1, y1) dan B(x2, y2) dihitung dengan perbandingan perubahan tinggi tegak dibanding perubahan alas rebah mendatar, yaitu m = (y2 - y1) / (x2 - x1).',
    questionText: 'Ujilah rumus tersebut pada titik-titik koordinat spesifik berikut untuk menentukan Benar atau Salah!',
    tfStatements: [
      {
        statement: 'Gradien garis yang melalui pasangan titik P(1, 2) dan Q(3, 8) adalah m = 3.',
        isCorrect: true
      },
      {
        statement: 'Garis yang mendatar sejajar Sumbu-X yang melewati titik (2,3) dan (5,3) memiliki gradien m = 0.',
        isCorrect: true
      },
      {
        statement: 'Gradien garis tegak lurus vertikal yang melewati titik (4,1) dan (4,5) dinyatakan m = 1.',
        isCorrect: false
      }
    ]
  },
  {
    id: 20,
    type: 'tf',
    difficulty: 'sulit',
    stimulus: 'Sebuah bak penampungan air bersih di rumah adat mula-mula berisi air sebanyak 150 liter untuk keperluan memasak. Sayangnya, terjadi kebocoran kecil di dasar bak air sehingga air mengalir keluar secara ajek dengan debit kebocoran sebesar 6 liter per menit.',
    questionText: 'Jika t waktu dalam menit berkurangnya air dan V sisa air dalam liter, tentukan Benar atau Salah pernyataan analisis berikut!',
    tfStatements: [
      {
        statement: 'Persamaan sisa air di dalam bak mandi tersebut adalah V(t) = -6t + 150.',
        isCorrect: true
      },
      {
        statement: 'Sisa air di dalam bak setelah bocor selama 15 menit adalah sebesar 90 liter.',
        isCorrect: false
      },
      {
        statement: 'Bak penampungan air bersih tersebut akan habis kosong tanpa sisa tepat pada menit ke-25.',
        isCorrect: true
      }
    ]
  },

  // --- MENJODOHKAN (MATCHING) --- 5 SOAL (Masing-masing 4 pasang menjodohkan)
  {
    id: 21,
    type: 'matching',
    difficulty: 'mudah',
    stimulus: 'Menemukan kemiringan (gradien) dari bermacam-macam representasi bentuk persamaan linier adalah langkah awal yang sangat penting dalam mempelajari grafik linier.',
    questionText: 'Jodohkan Persamaan Garis di sebelah kiri dengan nilai Gradien (m) yang tepat di sebelah kanan!',
    matchingData: {
      leftItems: [
        'y = 3x - 5',
        '2x - y = 4',
        '2y = -4x + 6',
        '3x + 6y = 12'
      ],
      rightItems: [
        'm = -2',
        'm = 3',
        'm = -0,5',
        'm = 2',
        'm = 1/3'
      ],
      correctPairs: {
        0: 1, // y = 3x - 5 -> m = 3
        1: 3, // 2x - y = 4 -> y = 2x - 4 -> m = 2
        2: 0, // 2y = -4x + 6 -> y = -2x + 3 -> m = -2
        3: 2  // 3x + 6y = 12 -> y = -1/2x + 2 -> m = -0,5
      }
    }
  },
  {
    id: 22,
    type: 'matching',
    difficulty: 'sedang',
    stimulus: 'Kita dapat merumuskan satu persamaan garis lurus yang unik jika diberikan data berupa titik koordinat yang dilewati serta nilai kemiringan gradiennya.',
    questionText: 'Jodohkan Keterangan Garis di sebelah kiri dengan Persamaan Garis yang sesuai di sebelah kanan!',
    matchingData: {
      leftItems: [
        'Garis bergradien m=2, melalui titik asal (0,0)',
        'Garis bergradien m=-1, melalui titik (0,4)',
        'Garis melalui titik (1,2) dengan gradien m=3',
        'Garis mendatar sejajar Sumbu-X melalui titik (3,5)'
      ],
      rightItems: [
        'y = 3x - 1',
        'y = 2x',
        'y = 5',
        'y = -x + 4',
        'x = 3'
      ],
      correctPairs: {
        0: 1, // y = 2x
        1: 3, // y = -x + 4
        2: 0, // y = 3x - 1
        3: 2  // y = 5
      }
    }
  },
  {
    id: 23,
    type: 'matching',
    difficulty: 'sedang',
    stimulus: 'Titik potong garis terhadap Sumbu-X adalah letak di mana nilai koordinat tegak y bernilai 0 (x, 0). Mari temukan titik potong dari persamaan-persamaan berikut.',
    questionText: 'Jodohkan Persamaan Garis di sebelah kiri dengan Titik Potong terhadap Sumbu-X di sebelah kanan!',
    matchingData: {
      leftItems: [
        'y = 2x - 6',
        '2x + 3y = 12',
        '3x - y = 9',
        'x - 4y + 2 = 0'
      ],
      rightItems: [
        'Titik (3, 0)',
        'Titik (-2, 0)',
        'Titik (6, 0)',
        'Titik (0, -6)',
        'Titik (-6, 0)'
      ],
      correctPairs: {
        0: 0, // y = 2x - 6 => 0 = 2x-6 => x=3 => (3,0)
        1: 2, // 2x + 3y = 12 => 2x = 12 => x=6 => (6,0)
        2: 0, // 3x - y = 9 => 3x = 9 => x=3 => (3,0)
        3: 1  // x - 4y + 2 = 0 => x = -2 => (-2,0)
      }
    }
  },
  {
    id: 24,
    type: 'matching',
    difficulty: 'sedang',
    stimulus: 'Memahami kedudukan dua buah garis di bidang koordinat sangat membantu dalam ilmu navigasi dan pemodelan jalur.',
    questionText: 'Jodohkan Persamaan Garis Kategori di sebelah kiri dengan Hubungan Kelurusan yang benar di sebelah kanan!',
    matchingData: {
      leftItems: [
        'Garis y = 4x - 1 dan Garis y = 4x + 10',
        'Garis y = -2x - 5 dan Garis y = 1/2x + 7',
        'Garis y = x dan Garis y = -x',
        'Garis 2x - 3y = 6 dan Garis 4x - 6y = 12'
      ],
      rightItems: [
        'Saling Tegak Lurus',
        'Saling Sejajar',
        'Saling Berimpit',
        'Saling Berpotongan Biasa'
      ],
      correctPairs: {
        0: 1, // Sejajar (m = 4)
        1: 0, // Tegak lurus (m1 = -2, m2 = 1/2)
        2: 0, // Tegak lurus (m1 = 1, m2 = -1)
        3: 2  // Berimpit (persamaan yang sama dikali 2)
      }
    }
  },
  {
    id: 25,
    type: 'matching',
    difficulty: 'sulit',
    stimulus: 'Persamaan garis banyak memodelkan dinamika kehidupan sehari-hari, mulai dari fisika termal hingga ekonomi industri kreatif.',
    questionText: 'Hubungkan Deskripsi Situasi Kontekstual di sebelah kiri dengan nilai Gradien (m) atau Nilai Awal yang dimilikinya di sebelah kanan!',
    matchingData: {
      leftItems: [
        'Lilin setinggi 12 cm mencair setinggi 2 cm setiap jam pemakaian',
        'Biaya langganan air bersih Rp15.000 pokok + Rp3.000 tiap meter kubik air',
        'Suhu sebuah lemari es turun 1,5 derajat Celsius setiap menit sehabis listrik padam',
        'Tabungan Aji mula-mula Rp 50.000 dan bertambah Rp 2.000 per hari'
      ],
      rightItems: [
        'Gradien m = -2 (Laju Mencair)',
        'Nilai Awal (c) = 50.000',
        'Gradien m = 3.000',
        'Gradien m = -1,5 (Laju Pendinginan)',
        'Nilai Awal (c) = 12'
      ],
      correctPairs: {
        0: 0, // m = -2
        1: 2, // m = 3.000
        2: 3, // m = -1,5
        3: 1  // c = 50.000
      }
    }
  }
];
