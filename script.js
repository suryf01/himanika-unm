const editBtn = document.getElementById("editStrukturBtn");

editBtn.addEventListener("click", () => {

    const nama = prompt("Masukkan nama pengurus");
    if (!nama) return;

    const jabatan = prompt("Masukkan jabatan");
    if (!jabatan) return;

    const foto = prompt("Masukkan lokasi foto\nContoh: images/surya.jpg");

    db.pengurus.push({
        id: getNextId(db.pengurus),
        nama: nama,
        jabatan: jabatan,
        foto: foto
    });

    saveData();
    renderStruktur();

});


function hapusPengurus(id) {
    
    if (!confirm("Yakin ingin menghapus pengurus ini?")) return;

    db.pengurus = db.pengurus.filter(p => p.id !== id);

    saveData();
    renderStruktur();
}

function hapusBerita(id) {

    if (!confirm("Yakin ingin menghapus berita ini?")) return;

    db.berita = db.berita.filter(b => b.id !== id);

    saveData();
    renderBerita();
}

function hapusDokumen(id) {

    if (!confirm("Yakin ingin menghapus dokumen ini?")) return;

    db.dokumen = db.dokumen.filter(d => d.id !== id);

    saveData();
    renderDokumen();
}

function hapusPengumuman(id) {

    if (!confirm("Yakin ingin menghapus pengumuman ini?")) return;

    db.pengumuman = db.pengumuman.filter(p => p.id !== id);

    saveData();
    renderPengumuman();
}