export default function IGSWebsite() {
  const navItems = [
    'Karyawan',
    'Karier',
    'Moodle IGS',
    'PPDB',
    'Administrasi',
    'Prestasi',
    'Galeri',
    'Kontak'
  ];

  const achievements = Array.from({ length: 9 }, (_, i) => ({
    title: `Prestasi Internasional ${i + 1}`,
    desc: 'Siswa IGS berhasil membawa nama sekolah ke tingkat internasional dengan pencapaian luar biasa.',
    category: 'Olympiad',
  }));

  const teachers = [
    'English Program',
    'Mandarin Program',
    'Japanese Program',
    'German Program',
    'French Program',
    'Korean Program',
  ];

  const gallery = Array.from({ length: 18 }, (_, i) => i + 1);

  return (
    <div className="bg-[#f4f7fb] text-gray-900 overflow-x-hidden font-sans">

      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-indigo-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-xl">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex items-center justify-center text-2xl font-black shadow-2xl">
              IGS
            </div>

            <div>
              <h1 className="font-black text-2xl">Ignatius Global School</h1>
              <p className="text-gray-500 text-sm">Future International Education</p>
            </div>
          </div>

          <nav className="hidden xl:flex gap-8 font-semibold text-[15px]">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-blue-700 transition duration-300 relative group"
              >
                {item}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#07152d] via-[#0c1f48] to-[#000814] text-white">

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center pt-40">

          <div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-10">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span>International Premium Education Platform</span>
            </div>

            <h1 className="text-7xl lg:text-8xl font-black leading-[1.05] mb-8">
              Build The
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                Future Leader
              </span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
              Ignatius Global School menghadirkan pengalaman pendidikan kelas dunia dengan teknologi modern, sistem internasional, fasilitas premium, dan pengembangan karakter generasi masa depan.
            </p>

            <div className="flex gap-5 flex-wrap">
              <button className="px-10 py-5 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105 transition duration-300 shadow-[0_20px_80px_rgba(37,99,235,0.5)] font-bold text-lg">
                Explore Campus
              </button>

              <button className="px-10 py-5 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 transition duration-300 font-bold text-lg">
                Virtual Tour
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16">
              {[
                ['10K+', 'Students'],
                ['250+', 'Teachers'],
                ['98%', 'University Accepted']
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <h3 className="text-4xl font-black mb-2">{item[0]}</h3>
                  <p className="text-blue-100">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 blur-3xl opacity-40 rounded-full"></div>

            <div className="relative bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-[0_30px_100px_rgba(0,0,0,0.4)]">

              <div className="grid grid-cols-2 gap-6">

                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    className="h-52 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center text-center p-6 hover:scale-105 transition duration-500"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-2xl bg-white/20 mx-auto mb-5"></div>
                      <h3 className="font-bold text-xl">Premium Facility</h3>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-24">
            <h2 className="text-6xl font-black mb-6">
              Why Choose IGS?
            </h2>

            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Sekolah premium dengan pengalaman belajar modern berbasis teknologi dan pengembangan global mindset.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="group bg-white rounded-[40px] p-10 shadow-xl hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition duration-700 hover:-translate-y-4 border border-gray-100"
              >
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 mb-8 flex items-center justify-center text-white text-3xl font-black group-hover:rotate-6 transition duration-500">
                  {i + 1}
                </div>

                <h3 className="text-3xl font-black mb-5">
                  Premium Education
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  Kurikulum internasional modern dengan pendekatan pembelajaran kreatif, inovatif, dan berbasis teknologi masa depan.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* LANGUAGE PROGRAM */}
      <section className="py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
            <div>
              <p className="text-blue-700 font-bold text-xl mb-4">International Language Program</p>
              <h2 className="text-6xl font-black leading-tight">
                Bahasa Asing
                <span className="block text-blue-700">Berstandar Global</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
              Program bahasa asing terbaik dengan sistem pembelajaran modern dan mentor profesional internasional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[40px] bg-white border border-gray-100 shadow-xl p-10 hover:-translate-y-3 transition duration-700"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 mb-10"></div>

                  <h3 className="text-4xl font-black mb-4">{teacher}</h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Program pembelajaran premium dengan pendekatan speaking, listening, writing, dan communication skill.
                  </p>

                  <button className="px-6 py-4 rounded-2xl bg-black text-white font-bold hover:bg-blue-700 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ACHIEVEMENT */}
      <section className="py-32 bg-[#07152d] text-white">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-24">
            <p className="text-cyan-300 font-bold text-xl mb-4">IGS Achievement</p>
            <h2 className="text-7xl font-black mb-6">Prestasi Dunia</h2>
            <p className="text-blue-100 text-xl max-w-3xl mx-auto">
              Prestasi luar biasa siswa Ignatius Global School di tingkat nasional dan internasional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {achievements.map((item, index) => (
              <div
                key={index}
                className="group rounded-[40px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-4 transition duration-700"
              >
                <div className="h-72 bg-gradient-to-br from-blue-700 to-indigo-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>

                  <div className="absolute top-6 left-6 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl">
                    {item.category}
                  </div>
                </div>

                <div className="p-10">
                  <h3 className="text-3xl font-black mb-5 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-blue-100 leading-relaxed text-lg mb-8">
                    {item.desc}
                  </p>

                  <button className="w-full py-5 rounded-2xl bg-white text-black font-bold hover:bg-cyan-300 transition duration-300">
                    Read Full Story
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-24">
            <h2 className="text-6xl font-black mb-6">IGS Gallery</h2>
            <p className="text-gray-600 text-xl">
              Modern Campus & Student Activity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">

            {gallery.map((item, index) => (
              <div
                key={index}
                className="group aspect-square rounded-[30px] bg-gradient-to-br from-blue-100 to-indigo-200 overflow-hidden relative hover:scale-105 transition duration-500 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700/0 to-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition duration-500 translate-y-6 group-hover:translate-y-0">
                  <h3 className="font-bold text-lg">IGS Campus</h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-32 bg-gradient-to-br from-blue-700 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-8">

          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6">Kritik & Saran</h2>
            <p className="text-blue-100 text-xl">
              Kirim pesan terbaik untuk perkembangan Ignatius Global School.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[50px] p-12 shadow-[0_30px_100px_rgba(0,0,0,0.3)]">

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full bg-white/10 border border-white/10 rounded-2xl p-5 placeholder:text-blue-100 outline-none"
              />

              <input
                type="email"
                placeholder="Alamat Email"
                className="w-full bg-white/10 border border-white/10 rounded-2xl p-5 placeholder:text-blue-100 outline-none"
              />
            </div>

            <textarea
              rows="8"
              placeholder="Masukkan kritik dan saran terbaik Anda"
              className="w-full bg-white/10 border border-white/10 rounded-3xl p-6 placeholder:text-blue-100 outline-none mb-8"
            ></textarea>

            <button className="w-full py-6 rounded-3xl bg-white text-black font-black text-xl hover:bg-cyan-300 transition duration-300 shadow-2xl">
              Kirim Pesan
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-24 relative overflow-hidden">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-700 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-4 gap-16 mb-20">

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-2xl font-black">
                  IGS
                </div>

                <div>
                  <h3 className="text-2xl font-black">Ignatius Global School</h3>
                  <p className="text-gray-400">Premium Education</p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed text-lg">
                Sekolah internasional modern dengan sistem pembelajaran global terbaik dan fasilitas premium.
              </p>
            </div>

            {Array.from({ length: 3 }, (_, i) => (
              <div key={i}>
                <h4 className="text-2xl font-black mb-8">Quick Access</h4>

                <div className="space-y-5 text-gray-400 text-lg">
                  <p className="hover:text-white transition duration-300 cursor-pointer">Moodle IGS</p>
                  <p className="hover:text-white transition duration-300 cursor-pointer">PPDB Online</p>
                  <p className="hover:text-white transition duration-300 cursor-pointer">Student Achievement</p>
                  <p className="hover:text-white transition duration-300 cursor-pointer">Career Center</p>
                </div>
              </div>
            ))}

          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-lg">
              © 2026 Ignatius Global School — Designed by Andrew Wang / AI
            </p>

            <div className="flex gap-5">
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-700 transition duration-300"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
