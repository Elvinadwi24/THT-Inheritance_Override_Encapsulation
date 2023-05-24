class Siswa {
    nama;
    nik;
    jenisKelamin;
    alamat;

    setNama(nama) {
        this.nama = nama;
    }

    setNik(nik) {
        this.nik = nik;
    }

    setJenisKelamin(jenisKelamin) {
        this.jenisKelamin = jenisKelamin;
    }

    setAlamat(alamat) {
        this.alamat = alamat;
    }

    getNama() {
        return this.nama;
    }

    getNik() {
        return this.nik;
    }

    getJenisKelamin() {
        return this.jenisKelamin;
    }

    getAlamat() {
        return this.alamat
    }
}

class Employee extends Siswa {
    dataSiswa() {
        console.log('data employee.')
    }
}

class karyawan {
    pekerjaan;
    salary;

    setPekerjaan(pekerjaan) {
        this.pekerjaan = pekerjaan;
    }

    setSalary(gaji) {
        this.gaji = gaji;
    }

    getPekerjaan() {
        return this.pekerjaan;
    }

    getSalary() {
        return this.gaji;
    }
}

class Student extends Siswa {
    dataSiswa() {
        console.log('data student...')
    }
}

class mahasiswa {
    kampus;
    jurusan;

    setKampus(kampus) {
        this.kampus = kampus;
    }

    setJurusan(jurusan) {
        this.jurusan = jurusan;
    }

    getKampus() {
        return this.kampus;
    }

    getJurusan() {
        return this.jurusan;
    }
}

const pelajar = new Siswa ();
pelajar.setNama('Elvina');
pelajar.setNik(119876546);
pelajar.setJenisKelamin('perempuan');
pelajar.setAlamat('Medan, perureulak');
console.log(pelajar.getNama());
console.log(pelajar.getNik());
console.log(pelajar.getJenisKelamin());
console.log(pelajar.getAlamat());

console.log('YEAAAHH');

const siswa = new Siswa();
const employee = new Employee();
const student = new Student();

employee.dataSiswa();
student.dataSiswa();

const k = new karyawan();
k.setPekerjaan('HRD');
k.setSalary(9000);
console.log(k.getPekerjaan());
console.log(k.getSalary());

const m = new mahasiswa();
m.setKampus('POLITEKNIK NEGERI MEDAN');
m.setJurusan('TEKNIK TELEKOMNIKASI');
console.log(m.getKampus());
console.log(m.getJurusan());
