const getData = () => {
  return [
    {
      id: 1,
      title: 'Babel',
      body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
      archived: false,
      createdAt: '19 June 2022',
    },
    {
      id: 2,
      title: 'Javascript',
      body: 'JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT.',
      archived: true,
      createdAt: '19 June 2022',
    },
    {
      id: 3,
      title: 'Dicoding',
      body: 'Dicoding adalah sebuah perusahaan startup yang bertujuan mengembangkan ekosistem developer di Indonesia. Berdiri sejak 5 Januari 2015, Dicoding memiliki platform pembelajaran elektronik di laman Dicoding.com',
      archived: false,
      createdAt: '19 June 2022',
    },
    {
      id: 4,
      title: 'Bangkit',
      body: 'Program Bangkit (Bangun Kualitas Manusia Indonesia) adalah program yang disediakan bagi 3.000 bakat-bakat digital di kalangan mahasiswa S1/D4 yang dibuka dan diadakan oleh Kementerian Pendidikan Kebudayaan, Riset dan Teknologi (Kemdikbudristek) Direktorat Jenderal Pendidikan Tinggi Riset dan Teknologi (Ditjen Dikti Ristek).',
      archived: true,
      createdAt: '19 June 2022',
    },
  ];
};

export { getData };
