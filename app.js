const I18N = {
  id: {
    nav_dashboard:"Dashboard", nav_kalkulator:"Kalkulator & 3D", nav_laporan:"Laporan Muat",
    nav_master:"Master Barang", nav_riwayat:"Riwayat Muat", nav_manajemen:"Manajemen User", nav_pengaturan:"Pengaturan",
    title_dashboard:"Dashboard", title_kalkulator:"Kalkulator & Simulasi Kargo 3D", title_laporan:"Laporan Muat",
    title_master:"Master Barang", title_riwayat:"Riwayat Muat", title_manajemen:"Manajemen User", title_pengaturan:"Pengaturan",
    role_super_admin:"Super Admin", role_admin:"Admin", role_staff:"Staff", db_status:"Database: Lokal (Browser)",
    login_subtitle:"Masuk untuk melanjutkan", login_username_label:"Nama Pengguna", login_username_placeholder:"Masukan Username Anda",
    login_password_label:"Kata Sandi", login_password_placeholder:"Masukkan kata sandi", login_btn:"Masuk",
    login_error_invalid:"Nama pengguna atau kata sandi salah.",
    logout_btn:"Keluar", confirm_logout_title:"Keluar dari akun?", confirm_logout_desc:"Anda perlu masuk kembali untuk melanjutkan.",
    toast_login_success:"Selamat datang, {name}!",
    dash_master:"Barang di Master", dash_master_sub:"Jenis barang terdaftar",
    dash_riwayat:"Riwayat Muat", dash_riwayat_sub:"Sesi perhitungan tersimpan",
    dash_avgvol:"Rata-rata Util. Volume", dash_avgweight:"Rata-rata Util. Berat",
    dash_avg_sub:"Dari seluruh riwayat", dash_avg_sub2:"Dari seluruh riwayat",
    dash_quickstart_title:"Mulai Cepat", dash_quickstart_desc:"Hitung dan visualisasikan simulasi muat kargo dalam kontainer 3D dalam hitungan detik.",
    dash_quickstart_btn:"Buka Kalkulator & 3D", dash_recent_title:"Riwayat Terbaru", dash_seeall:"Lihat semua →",
    dash_no_history:"Belum ada riwayat.",
    calc_add_title:"Pilih & Tambah Barang", calc_custom_input:"Input Kustom", calc_pick_master:"Pilih dari Database Master",
    calc_custom_name:"Nama Barang", calc_qty:"Jumlah Unit (Pcs)", calc_weight:"Total Berat Tambahan",
    calc_add_btn:"Masukkan Ke Daftar Muat", calc_list_title:"Daftar Barang yang Dimasukkan", calc_clear_all:"Hapus Semua",
    calc_project_name:"Nama Proyek (opsional)",
    calc_list_empty:"Belum ada barang di daftar muat.", calc_run_btn:"Hitung (3D)", calc_save_btn:"Simpan",
    th_name:"Nama Barang", th_size:"Ukuran (cm)", th_qty:"Jumlah", th_weight:"Berat (kg)", th_action:"Aksi",
    th_date:"Tanggal", th_items:"Jml. Item",
    viz_hint:"Seret untuk putar · Scroll untuk zoom", viz_empty:'Tambahkan barang lalu klik "Hitung (3D)" untuk melihat simulasi muat.',
    viz_fullscreen:"Layar Penuh", viz_exit_fullscreen:"Keluar Layar Penuh",
    axis_x:"Sisi Panjang (X)", axis_y:"Sisi Lebar (Y)", axis_z:"Sisi Tinggi (Z)",
    util_volume:"Utilisasi Volume Kontainer", util_weight:"Utilisasi Beban Berat",
    util_volume_short:"Util. Volume", util_weight_short:"Util. Berat",
    util_total_filled:"Total Diisi", util_remaining:"Sisa Ruang Kosong",
    util_total_load:"Total Beban", util_remaining_safe:"Sisa Batas Aman",
    util_density:"Kerapatan Susunan Aktual", util_density_desc:"Volume unit yang berhasil disusun ÷ volume kontainer (memperhitungkan celah antar susunan).",
    util_unfit:"Unit Tidak Termuat", util_unfit_desc:"Melebihi kapasitas ruang atau berat kontainer.",
    lap_title:"Laporan Muat", lap_pick:"Pilih Sesi Riwayat", lap_empty:"Belum ada laporan. Simpan sesi kalkulator terlebih dahulu.",
    lap_print:"Cetak Laporan / PDF", lap_summary:"Ringkasan", lap_container:"Kontainer",
    lap_default_project:"Proyek Tanpa Nama",
    lap_doc_subtitle:"Sistem Kalkulasi & Visualisasi Kontainer 3D",
    lap_print_date:"Tanggal Cetak", lap_operator:"Operator",
    lap_shipment_info:"Informasi Pengiriman", lap_project:"Proyek", lap_container_type:"Jenis Kontainer",
    lap_capacity_max:"Kapasitas Maksimum", lap_max_volume:"Batas Maks Volume", lap_max_weight:"Batas Maks Berat",
    lap_terpakai:"Terpakai", lap_sisa:"Sisa",
    lap_projection_title:"Proyeksi Spasial Layout 2D (Sesuai Skala)",
    lap_top_view:"Proyeksi Atas (Top View — Sumbu X & Y)", lap_side_view:"Proyeksi Samping (Side View — Sumbu X & Z)",
    lap_top_view_caption:"Panjang Kontainer (X) horizontal, Lebar Kontainer (Y) vertikal — lapisan dasar",
    lap_side_view_caption:"Panjang Kontainer (X) horizontal, Tinggi Tumpukan (Z) vertikal — baris terdepan",
    lap_projection_unavailable:"Data proyeksi 2D tidak tersedia untuk riwayat ini. Jalankan ulang perhitungan pada sesi baru untuk menyertakan proyeksi.",
    lap_ai_insights_title:"AI Insights Desk & Safety Manifest (Analisa Spasial & Risiko Teknis)",
    lap_spatial_analysis_title:"Analisis Spasial & Logistik", lap_risk_analysis_title:"Analisis Risiko & Safety Manifest",
    lap_stack_pattern_label:"Pola Penataan Sumbu:", lap_stack_pattern_val:"Gravity-Heuristic Stack (Mengikuti Sisi Panjang X)",
    lap_stack_index_label:"Batas Susunan Maksimum (Stacking Index):",
    lap_stack_index_val:"Maksimal {n} Tingkat (Berdasarkan tinggi nominal boks terkecil {h} cm)",
    lap_density_label:"Rekomendasi Distribusi Ruang:",
    lap_density_high:"Kepadatan tinggi. Tidak perlu dunnage bag tambahan karena boks sudah mengunci satu sama lain secara alami.",
    lap_density_mid:"Kepadatan sedang. Disarankan dunnage bag di celah tersisa agar muatan tidak bergeser saat transit.",
    lap_density_low:"Kepadatan rendah. Ruang kosong signifikan — pertimbangkan dunnage bag atau ganjal tambahan untuk mengunci muatan.",
    lap_loadpoint_label:"Distribusi Titik Beban:",
    lap_loadpoint_heavy:"Sangat Berat (Titik Berat Rendah). Memerlukan perhatian pada suspensi belakang armada pengangkut.",
    lap_loadpoint_mid:"Sedang. Distribusi beban masih dalam batas aman untuk pengangkutan standar.",
    lap_loadpoint_light:"Ringan. Beban jauh di bawah kapasitas maksimum kontainer.",
    lap_deflection_label:"Stabilitas Struktural (Defleksi):",
    lap_deflection_high:"Beban Kritis (Risiko deformasi dasar kontainer meningkat jika terjadi hentakan keras).",
    lap_deflection_mid:"Beban Moderat (Masih dalam ambang aman, tetap hindari hentakan berlebihan).",
    lap_deflection_low:"Beban Ringan (Risiko defleksi dasar kontainer minimal).",
    lap_safety_label:"Rekomendasi Teknis Pengamanan:",
    lap_safety_overload:"Muatan melebihi kapasitas — wajib pasang shoring (balok penyangga kayu) di lantai dasar dan gunakan lashing belt bersertifikasi kekuatan tinggi. Evaluasi ulang jumlah barang sebelum pengiriman.",
    lap_safety_normal:"Wajib pasang shoring (balok penyangga kayu) di lantai dasar dan gunakan lashing belt bersertifikasi kekuatan tinggi.",
    lap_products_loaded_title:"Daftar Produk Berhasil Dimuat (Termuat)",
    lap_products_unfit_title:"Sisa Kargo Tidak Termuat (Overload / Melebihi Batas)",
    lap_no_unfit:"Seluruh barang berhasil dimuat — tidak ada sisa kargo yang melebihi kapasitas kontainer.",
    lap_footer_brand:"Cargo3D Calculator", lap_footer_doc:"Dokumen Resmi Hasil Verifikasi Spasial Kontainer",
    th_unit_volume:"Volume / Unit", th_unit_weight:"Berat / Unit", th_qty_loaded:"Qty Dimuat",
    th_total_volume:"Total Volume", th_total_weight:"Total Berat", th_qty_unfit:"Qty Tidak Muat",
    th_remaining_volume:"Volume Sisa", th_remaining_weight:"Berat Sisa", th_box_size:"Ukuran Kotak (CM)",
    master_add_title:"Tambah Barang Master", master_edit_title:"Ubah Barang Master", master_name:"Nama Barang",
    master_weight_unit:"Berat per Unit (kg)", master_weight_unit_short:"Berat/Unit",
    master_save_btn:"Simpan Barang", master_update_btn:"Perbarui Barang", master_cancel_btn:"Batal",
    master_list_title:"Daftar Barang Master",
    riw_title:"Riwayat Muat", riw_empty:"Belum ada riwayat perhitungan tersimpan.",
    riw_load:"Muat ke Kalkulator", riw_delete:"Hapus",
    user_add_title:"Tambah User", user_name:"Nama", user_role:"Role", user_add_btn:"Tambah User", user_list_title:"Daftar User",
    user_password:"Kata Sandi Login", user_password_placeholder:"Kosongkan jika tidak perlu kata sandi",
    user_reset_pwd_title:"Ubah Kata Sandi", user_reset_pwd_desc:"Kosongkan untuk menghapus kata sandi (login tanpa kata sandi).", user_save_pwd_btn:"Simpan",
    set_title:"Pengaturan Kontainer", set_container_name:"Nama Kontainer", set_length:"Panjang (cm)",
    set_fleet_type:"Jenis Armada", set_fleet_custom_opt:"— Kustom (isi manual) —",
    set_fleet_cont40hc:"Container 40ft High Cube", set_fleet_cont20ft:"Container 20ft", set_fleet_wingbox:"Wingbox (BWB)",
    set_width:"Lebar (cm)", set_height:"Tinggi (cm)", set_maxweight:"Berat Maksimum (kg)", set_save_btn:"Simpan Pengaturan",
    set_user_section_title:"Manajemen User",
    modal_cancel:"Batal", modal_confirm:"Hapus",
    toast_added:"Barang ditambahkan ke daftar muat", toast_calc_done:"Perhitungan 3D selesai",
    toast_saved:"Sesi berhasil disimpan ke Riwayat Muat", toast_settings_saved:"Pengaturan kontainer disimpan",
    toast_master_saved:"Barang master disimpan", toast_master_deleted:"Barang master dihapus",
    toast_user_added:"User ditambahkan", toast_user_deleted:"User dihapus", toast_cant_delete_last_user:"Minimal harus ada 1 user.",
    toast_user_exists:"Nama pengguna sudah digunakan.", toast_cant_delete_self:"Tidak dapat menghapus akun yang sedang login.", toast_pwd_updated:"Kata sandi diperbarui",
    toast_riwayat_loaded:"Riwayat dimuat ke kalkulator", toast_riwayat_deleted:"Riwayat dihapus", toast_list_empty:"Daftar muat kosong.",
    toast_fill_fields:"Lengkapi nama, ukuran, dan jumlah unit terlebih dahulu.",
    toast_report_downloaded:"Tab baru diblokir — laporan diunduh sebagai file HTML, buka lalu cetak dari sana.",
    confirm_delete_item_title:"Hapus barang ini?", confirm_delete_item_desc:"Barang akan dihapus dari daftar muat saat ini.",
    confirm_delete_all_title:"Hapus semua barang?", confirm_delete_all_desc:"Seluruh daftar muat saat ini akan dikosongkan.",
    confirm_delete_master_title:"Hapus barang master?", confirm_delete_master_desc:"Barang akan dihapus permanen dari database master.",
    confirm_delete_riwayat_title:"Hapus riwayat ini?", confirm_delete_riwayat_desc:"Data riwayat perhitungan ini akan dihapus permanen.",
    confirm_delete_user_title:"Hapus user ini?", confirm_delete_user_desc:"User akan dihapus dari daftar pengguna.",
    overflow_warning:"Volume/berat melebihi kapasitas kontainer!", partial_warning:"unit tidak muat dalam kontainer.",
    select_placeholder:"-- Pilih Barang di Sini --", no_riwayat_option:"Belum ada riwayat tersimpan",
  },
  en: {
    nav_dashboard:"Dashboard", nav_kalkulator:"Calculator & 3D", nav_laporan:"Load Reports",
    nav_master:"Item Master", nav_riwayat:"Load History", nav_manajemen:"User Management", nav_pengaturan:"Settings",
    title_dashboard:"Dashboard", title_kalkulator:"3D Cargo Calculator & Simulation", title_laporan:"Load Reports",
    title_master:"Item Master", title_riwayat:"Load History", title_manajemen:"User Management", title_pengaturan:"Settings",
    role_super_admin:"Super Admin", role_admin:"Admin", role_staff:"Staff", db_status:"Database: Local (Browser)",
    login_subtitle:"Sign in to continue", login_username_label:"Username", login_username_placeholder:"e.g. Administrator Utama",
    login_password_label:"Password", login_password_placeholder:"Enter your password", login_btn:"Sign In",
    login_error_invalid:"Incorrect username or password.",
    logout_btn:"Log Out", confirm_logout_title:"Log out?", confirm_logout_desc:"You'll need to sign in again to continue.",
    toast_login_success:"Welcome, {name}!",
    dash_master:"Items in Master", dash_master_sub:"Registered item types",
    dash_riwayat:"Load History", dash_riwayat_sub:"Saved calculation sessions",
    dash_avgvol:"Avg. Volume Utilization", dash_avgweight:"Avg. Weight Utilization",
    dash_avg_sub:"Across all history", dash_avg_sub2:"Across all history",
    dash_quickstart_title:"Quick Start", dash_quickstart_desc:"Calculate and visualize cargo loading simulations in a 3D container within seconds.",
    dash_quickstart_btn:"Open Calculator & 3D", dash_recent_title:"Recent History", dash_seeall:"See all →",
    dash_no_history:"No history yet.",
    calc_add_title:"Select & Add Item", calc_custom_input:"Custom Input", calc_pick_master:"Select from Item Master",
    calc_custom_name:"Item Name", calc_qty:"Quantity (Pcs)", calc_weight:"Total Added Weight",
    calc_add_btn:"Add To Load List", calc_list_title:"Items Added to Load", calc_clear_all:"Clear All",
    calc_project_name:"Project Name (optional)",
    calc_list_empty:"No items in the load list yet.", calc_run_btn:"Calculate (3D)", calc_save_btn:"Save",
    th_name:"Item Name", th_size:"Size (cm)", th_qty:"Qty", th_weight:"Weight (kg)", th_action:"Action",
    th_date:"Date", th_items:"Items",
    viz_hint:"Drag to rotate · Scroll to zoom", viz_empty:'Add items then click "Calculate (3D)" to see the load simulation.',
    viz_fullscreen:"Fullscreen", viz_exit_fullscreen:"Exit Fullscreen",
    axis_x:"Length Side (X)", axis_y:"Width Side (Y)", axis_z:"Height Side (Z)",
    util_volume:"Container Volume Utilization", util_weight:"Weight Load Utilization",
    util_volume_short:"Vol. Util.", util_weight_short:"Weight Util.",
    util_total_filled:"Total Filled", util_remaining:"Remaining Space",
    util_total_load:"Total Load", util_remaining_safe:"Remaining Safe Margin",
    util_density:"Actual Packing Density", util_density_desc:"Volume of units actually placed ÷ container volume (accounts for gaps between stacks).",
    util_unfit:"Units That Didn't Fit", util_unfit_desc:"Exceeds the container's space or weight capacity.",
    lap_title:"Load Reports", lap_pick:"Select History Session", lap_empty:"No reports yet. Save a calculator session first.",
    lap_print:"Print Report / PDF", lap_summary:"Summary", lap_container:"Container",
    lap_default_project:"Untitled Project",
    lap_doc_subtitle:"3D Container Calculation & Visualization System",
    lap_print_date:"Print Date", lap_operator:"Operator",
    lap_shipment_info:"Shipment Information", lap_project:"Project", lap_container_type:"Container Type",
    lap_capacity_max:"Maximum Capacity", lap_max_volume:"Max Volume Limit", lap_max_weight:"Max Weight Limit",
    lap_terpakai:"Used", lap_sisa:"Remaining",
    lap_projection_title:"2D Spatial Layout Projection (To Scale)",
    lap_top_view:"Top View (X & Y Axis)", lap_side_view:"Side View (X & Z Axis)",
    lap_top_view_caption:"Container Length (X) horizontal, Container Width (Y) vertical — bottom layer",
    lap_side_view_caption:"Container Length (X) horizontal, Stack Height (Z) vertical — front row",
    lap_projection_unavailable:"2D projection data is not available for this history entry. Re-run the calculation on a new session to include projections.",
    lap_ai_insights_title:"AI Insights Desk & Safety Manifest (Spatial & Technical Risk Analysis)",
    lap_spatial_analysis_title:"Spatial & Logistics Analysis", lap_risk_analysis_title:"Risk Analysis & Safety Manifest",
    lap_stack_pattern_label:"Axis Packing Pattern:", lap_stack_pattern_val:"Gravity-Heuristic Stack (Following Length Side X)",
    lap_stack_index_label:"Maximum Stack Limit (Stacking Index):",
    lap_stack_index_val:"Maximum {n} Tiers (Based on the smallest box height of {h} cm)",
    lap_density_label:"Space Distribution Recommendation:",
    lap_density_high:"High density. No extra dunnage bags needed — boxes already interlock naturally.",
    lap_density_mid:"Moderate density. Dunnage bags are recommended in remaining gaps to prevent cargo shift in transit.",
    lap_density_low:"Low density. Significant empty space — consider dunnage bags or extra bracing to secure the load.",
    lap_loadpoint_label:"Load Point Distribution:",
    lap_loadpoint_heavy:"Very Heavy (Low Center of Gravity). Requires attention to the carrier's rear suspension.",
    lap_loadpoint_mid:"Moderate. Load distribution is within a safe range for standard transport.",
    lap_loadpoint_light:"Light. Load is well below the container's maximum capacity.",
    lap_deflection_label:"Structural Stability (Deflection):",
    lap_deflection_high:"Critical Load (Increased risk of container floor deformation under hard impacts).",
    lap_deflection_mid:"Moderate Load (Still within a safe margin, avoid excessive jolting).",
    lap_deflection_low:"Light Load (Minimal risk of container floor deflection).",
    lap_safety_label:"Technical Safety Recommendation:",
    lap_safety_overload:"Load exceeds capacity — shoring (timber bracing) on the floor and certified high-strength lashing belts are mandatory. Re-evaluate the quantity before shipping.",
    lap_safety_normal:"Shoring (timber bracing) on the floor and certified high-strength lashing belts are mandatory.",
    lap_products_loaded_title:"Products Successfully Loaded",
    lap_products_unfit_title:"Remaining Cargo Not Loaded (Overload / Over Capacity)",
    lap_no_unfit:"All items were successfully loaded — no cargo exceeded the container's capacity.",
    lap_footer_brand:"Cargo3D Calculator", lap_footer_doc:"Official Container Spatial Verification Document",
    th_unit_volume:"Volume / Unit", th_unit_weight:"Weight / Unit", th_qty_loaded:"Qty Loaded",
    th_total_volume:"Total Volume", th_total_weight:"Total Weight", th_qty_unfit:"Qty Unfit",
    th_remaining_volume:"Remaining Volume", th_remaining_weight:"Remaining Weight", th_box_size:"Box Size (CM)",
    master_add_title:"Add Master Item", master_edit_title:"Edit Master Item", master_name:"Item Name",
    master_weight_unit:"Weight per Unit (kg)", master_weight_unit_short:"Weight/Unit",
    master_save_btn:"Save Item", master_update_btn:"Update Item", master_cancel_btn:"Cancel",
    master_list_title:"Master Item List",
    riw_title:"Load History", riw_empty:"No saved calculation history yet.",
    riw_load:"Load into Calculator", riw_delete:"Delete",
    user_add_title:"Add User", user_name:"Name", user_role:"Role", user_add_btn:"Add User", user_list_title:"User List",
    user_password:"Login Password", user_password_placeholder:"Leave blank if no password needed",
    user_reset_pwd_title:"Change Password", user_reset_pwd_desc:"Leave blank to remove the password (login without a password).", user_save_pwd_btn:"Save",
    set_title:"Container Settings", set_container_name:"Container Name", set_length:"Length (cm)",
    set_fleet_type:"Fleet / Vehicle Type", set_fleet_custom_opt:"— Custom (manual entry) —",
    set_fleet_cont40hc:"Container 40ft High Cube", set_fleet_cont20ft:"Container 20ft", set_fleet_wingbox:"Wingbox (BWB)",
    set_width:"Width (cm)", set_height:"Height (cm)", set_maxweight:"Maximum Weight (kg)", set_save_btn:"Save Settings",
    set_user_section_title:"User Management",
    modal_cancel:"Cancel", modal_confirm:"Delete",
    toast_added:"Item added to load list", toast_calc_done:"3D calculation complete",
    toast_saved:"Session saved to Load History", toast_settings_saved:"Container settings saved",
    toast_master_saved:"Master item saved", toast_master_deleted:"Master item deleted",
    toast_user_added:"User added", toast_user_deleted:"User deleted", toast_cant_delete_last_user:"At least 1 user is required.",
    toast_user_exists:"That username is already in use.", toast_cant_delete_self:"You can't delete the account you're logged in as.", toast_pwd_updated:"Password updated",
    toast_riwayat_loaded:"History loaded into calculator", toast_riwayat_deleted:"History deleted", toast_list_empty:"Load list is empty.",
    toast_fill_fields:"Fill in name, size, and quantity first.",
    toast_report_downloaded:"New tab was blocked — the report was downloaded as an HTML file, open it and print from there.",
    confirm_delete_item_title:"Delete this item?", confirm_delete_item_desc:"The item will be removed from the current load list.",
    confirm_delete_all_title:"Delete all items?", confirm_delete_all_desc:"The entire current load list will be cleared.",
    confirm_delete_master_title:"Delete master item?", confirm_delete_master_desc:"The item will be permanently deleted from the master database.",
    confirm_delete_riwayat_title:"Delete this history?", confirm_delete_riwayat_desc:"This calculation history will be permanently deleted.",
    confirm_delete_user_title:"Delete this user?", confirm_delete_user_desc:"The user will be removed from the user list.",
    overflow_warning:"Volume/weight exceeds container capacity!", partial_warning:"units did not fit in the container.",
    select_placeholder:"-- Select an Item --", no_riwayat_option:"No saved history yet",
  }
};
let currentLang = (function(){ try{ return localStorage.getItem('cargo3d_lang') || 'id'; }catch(e){ return 'id'; } })();

function t(key){ return (I18N[currentLang] && I18N[currentLang][key]) || key; }

function applyI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });
  document.getElementById('langID').classList.toggle('active', currentLang==='id');
  document.getElementById('langEN').classList.toggle('active', currentLang==='en');
  document.getElementById('loginLangID').classList.toggle('active', currentLang==='id');
  document.getElementById('loginLangEN').classList.toggle('active', currentLang==='en');
  document.getElementById('logoutBtn').title = t('logout_btn');
  document.getElementById('vizFsBtn').title = t(vizIsFullscreen ? 'viz_exit_fullscreen' : 'viz_fullscreen');
  applyCurrentUserUI();
  renderNav();
  updatePageTitle();
  renderMasterSelect();
  renderLoadList();
  renderMasterList();
  renderRiwayatList();
  renderUserList();
  renderDashboard();
  renderLaporanSelect();
  updateDate();
}
function setLang(l){ currentLang = l; try{ localStorage.setItem('cargo3d_lang', l); }catch(e){} applyI18n(); }

const LS = {
  get(key, fallback){ try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }catch(e){ return fallback; } },
  set(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){ console.error('storage error', e); } }
};

const DEFAULT_MASTER = [
  {id:'m1', name:'Karton Kopi Instan', l:40, w:30, h:30, weight:12},
  {id:'m2', name:'Karton Mie Instan', l:35, w:25, h:20, weight:8},
  {id:'m3', name:'Karton Sabun Cuci', l:38, w:28, h:24, weight:10},
  {id:'m4', name:'Galon Air Mineral', l:30, w:30, h:48, weight:19},
  {id:'m5', name:'Dus Biskuit', l:42, w:32, h:22, weight:9},
  {id:'m6', name:'Karton Elektronik Kecil', l:45, w:35, h:35, weight:14},
];
const DEFAULT_SETTINGS = { name:'Kontainer 40ft High Cube', l:1203, w:235, h:269, maxWeight:26500, type:'cont40hc' };
const DEFAULT_USERS = [{id:'u1', name:'Administrator Utama', role:'Admin', salt:'', hash:''}];

let master = LS.get('cargo3d_master', DEFAULT_MASTER);
let settings = LS.get('cargo3d_settings', DEFAULT_SETTINGS);
let users = LS.get('cargo3d_users', DEFAULT_USERS);
let riwayat = LS.get('cargo3d_riwayat', []);
let loadList = LS.get('cargo3d_loadlist', []);
let lastCalc = null;

function persistAll(){
  LS.set('cargo3d_master', master);
  LS.set('cargo3d_settings', settings);
  LS.set('cargo3d_users', users);
  LS.set('cargo3d_riwayat', riwayat);
  LS.set('cargo3d_loadlist', loadList);
}


function sha256(str){
  const rr = (v, a) => (v >>> a) | (v << (32 - a));
  const K = [], H = [];
  for(let c = 0, n = 2; c < 64; n++){
    let prime = true;
    for(let i = 2; i * i <= n; i++){ if(n % i === 0){ prime = false; break; } }
    if(!prime) continue;
    if(c < 8) H[c] = (Math.pow(n, 0.5) % 1 * 4294967296) | 0;
    K[c] = (Math.pow(n, 1 / 3) % 1 * 4294967296) | 0;
    c++;
  }
  const data = Array.from(new TextEncoder().encode(str));
  const bitLen = data.length * 8;
  data.push(0x80);
  while(data.length % 64 !== 56) data.push(0);
  const hi = Math.floor(bitLen / 4294967296), lo = bitLen >>> 0;
  for(let i = 3; i >= 0; i--) data.push((hi >>> (i * 8)) & 255);
  for(let i = 3; i >= 0; i--) data.push((lo >>> (i * 8)) & 255);
  const h = H.slice();
  for(let off = 0; off < data.length; off += 64){
    const w = new Array(64);
    for(let i = 0; i < 16; i++){
      w[i] = (data[off + i * 4] << 24) | (data[off + i * 4 + 1] << 16) | (data[off + i * 4 + 2] << 8) | data[off + i * 4 + 3];
    }
    for(let i = 16; i < 64; i++){
      const s0 = rr(w[i - 15], 7) ^ rr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
      const s1 = rr(w[i - 2], 17) ^ rr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
    }
    let a = h[0], b = h[1], c = h[2], d = h[3], e = h[4], f = h[5], g = h[6], hh = h[7];
    for(let i = 0; i < 64; i++){
      const S1 = rr(e, 6) ^ rr(e, 11) ^ rr(e, 25);
      const ch = (e & f) ^ (~e & g);
      const t1 = (hh + S1 + ch + K[i] + w[i]) | 0;
      const S0 = rr(a, 2) ^ rr(a, 13) ^ rr(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const t2 = (S0 + maj) | 0;
      hh = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
    }
    h[0] = (h[0] + a) | 0; h[1] = (h[1] + b) | 0; h[2] = (h[2] + c) | 0; h[3] = (h[3] + d) | 0;
    h[4] = (h[4] + e) | 0; h[5] = (h[5] + f) | 0; h[6] = (h[6] + g) | 0; h[7] = (h[7] + hh) | 0;
  }
  return h.map(v => (v >>> 0).toString(16).padStart(8, '0')).join('');
}

const HASH_ROUNDS = 2000;

function makeSalt(){
  const bytes = new Uint8Array(16);
  if(window.crypto && window.crypto.getRandomValues){
    window.crypto.getRandomValues(bytes);
  } else {
    for(let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
}

function hashPassword(password, salt){
  let digest = salt + ':' + password;
  for(let i = 0; i < HASH_ROUNDS; i++) digest = sha256(digest + salt);
  return digest;
}

function setUserPassword(user, password){
  delete user.password;
  if(!password){
    user.salt = '';
    user.hash = '';
    return;
  }
  user.salt = makeSalt();
  user.hash = hashPassword(password, user.salt);
}

function verifyPassword(user, password){
  if(!user.hash) return true;
  return hashPassword(password, user.salt) === user.hash;
}

const SUPER_ADMIN = {
  id: 'super',
  name: 'septa aji',
  role: 'Super Admin',
  salt: 'c25304f1c15b216432f4f2cd0be87384',
  hash: '7237d839472c9ca045fb6b03d3487a38248852916972e22f3534b718e160030e'
};

function isSuperAdminName(name){
  return String(name || '').trim().toLowerCase() === SUPER_ADMIN.name.toLowerCase();
}

function generateSuperAdminHash(password){
  const salt = makeSalt();
  const result = { salt: salt, hash: hashPassword(password, salt) };
  console.log("salt: '" + result.salt + "'\nhash: '" + result.hash + "'");
  return result;
}

function migrateUsers(){
  let changed = false;
  const before = users.length;
  users = users.filter(u => !isSuperAdminName(u.name));
  if(users.length !== before) changed = true;
  users.forEach(u => {
    if(typeof u.password === 'string'){
      setUserPassword(u, u.password);
      changed = true;
    } else if(typeof u.hash !== 'string'){
      u.salt = '';
      u.hash = '';
      changed = true;
    }
  });
  if(changed) persistAll();
}
migrateUsers();

let currentUser = null;

function applyCurrentUserUI(){
  const name = currentUser ? currentUser.name : (users[0] ? users[0].name : 'Administrator Utama');
  const role = currentUser ? currentUser.role : (users[0] ? users[0].role : 'Admin');
  document.getElementById('userAvatar').textContent = (name.charAt(0)||'A').toUpperCase();
  document.getElementById('userNameLabel').textContent = name;
  document.getElementById('userRoleLabel').textContent = role==='Super Admin' ? t('role_super_admin') : (role==='Admin' ? t('role_admin') : t('role_staff'));
}

function showLoginScreen(){
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('loginError').classList.remove('active');
  document.getElementById('loginUsername').value='';
  document.getElementById('loginPassword').value='';
  setTimeout(()=>{ document.getElementById('loginUsername').focus(); }, 50);
}
function hideLoginScreen(){
  document.getElementById('loginScreen').classList.add('hidden');
}

function tryLogin(){
  const uname = document.getElementById('loginUsername').value.trim();
  const pass = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  if(!uname){ errEl.textContent = t('login_error_invalid'); errEl.classList.add('active'); return; }
  const match = isSuperAdminName(uname) ? SUPER_ADMIN : users.find(u=>u.name.trim().toLowerCase()===uname.toLowerCase());
  const ok = !!match && (match === SUPER_ADMIN ? (!!SUPER_ADMIN.hash && verifyPassword(match, pass)) : verifyPassword(match, pass));
  if(!ok){
    errEl.textContent = t('login_error_invalid');
    errEl.classList.add('active');
    return;
  }
  errEl.classList.remove('active');
  currentUser = match;
  try{ localStorage.setItem('cargo3d_session_uid', match.id); }catch(e){  }
  applyCurrentUserUI();
  hideLoginScreen();
  toast(t('toast_login_success').replace('{name}', match.name));
}

function tryLogout(){
  askConfirm('confirm_logout_title','confirm_logout_desc', ()=>{
    currentUser = null;
    try{ localStorage.removeItem('cargo3d_session_uid'); }catch(e){}
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlayMask').classList.remove('active');
    showLoginScreen();
  });
}

function restoreSession(){
  let uid = null;
  try{ uid = localStorage.getItem('cargo3d_session_uid'); }catch(e){ uid = null; }
  const match = uid === SUPER_ADMIN.id ? SUPER_ADMIN : (uid ? users.find(u=>u.id===uid) : null);
  if(match){
    currentUser = match;
    applyCurrentUserUI();
    hideLoginScreen();
  } else {
    applyCurrentUserUI();
    showLoginScreen();
  }
}

function toast(msg, type){
  const host = document.getElementById('toastHost');
  const el = document.createElement('div');
  el.className = 'toast' + (type==='warn' ? ' warn' : type==='err' ? ' err' : '');
  el.textContent = msg;
  host.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='opacity .3s'; setTimeout(()=>el.remove(), 300); }, 3200);
}

function askConfirm(titleKey, descKey, onOk){
  document.getElementById('confirmTitle').textContent = t(titleKey);
  document.getElementById('confirmDesc').textContent = t(descKey);
  const modal = document.getElementById('confirmModal');
  modal.classList.add('active');
  const btn = document.getElementById('confirmOkBtn');
  const clone = btn.cloneNode(true);
  btn.parentNode.replaceChild(clone, btn);
  clone.addEventListener('click', ()=>{ onOk(); closeConfirm(); });
}
function closeConfirm(){ document.getElementById('confirmModal').classList.remove('active'); }

const NAV_ITEMS = [
  {id:'dashboard', icon:'<path d="M3 13h8V3H3v10zM13 21h8V11h-8v10zM3 21h8v-6H3v6zM13 3v6h8V3h-8z"/>'},
  {id:'kalkulator', icon:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>'},
  {id:'laporan', icon:'<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>'},
  {id:'master', icon:'<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12l8.73-5.04M12 22.08V12"/>'},
  {id:'riwayat', icon:'<path d="M12 8v4l3 3M12 3a9 9 0 100 18 9 9 0 000-18z"/>'},
  {id:'pengaturan', icon:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>'},
];
let currentView = 'dashboard';

function renderNav(){
  const nav = document.getElementById('navList');
  nav.innerHTML = '';
  NAV_ITEMS.forEach((item,idx)=>{
    if(idx===2){ const div=document.createElement('div'); div.className='nav-divider'; nav.appendChild(div); }
    const a = document.createElement('div');
    a.className = 'nav-item' + (item.id===currentView ? ' active' : '');
    a.onclick = ()=>navigate(item.id);
    a.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${item.icon}</svg><span>${t('nav_'+item.id)}</span>`;
    nav.appendChild(a);
  });
}

function navigate(viewId){
  currentView = viewId;
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+viewId).classList.add('active');
  renderNav();
  updatePageTitle();
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlayMask').classList.remove('active');
  if(viewId==='kalkulator'){ setTimeout(()=>{ initThreeIfNeeded(); onWindowResize(); drawContainerOnly(); }, 30); }
  if(viewId==='laporan'){ renderLaporanSelect(); renderLaporan(); }
}
function updatePageTitle(){ document.getElementById('pageTitle').textContent = t('title_'+currentView); }

function updateDate(){
  const now = new Date();
  const locale = currentLang==='id' ? 'id-ID' : 'en-US';
  document.getElementById('pageDate').textContent = now.toLocaleDateString(locale, {weekday:'long', day:'numeric', month:'long', year:'numeric'});
}

document.getElementById('hamburgerBtn').addEventListener('click', ()=>{
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlayMask').classList.toggle('active');
});
document.getElementById('overlayMask').addEventListener('click', ()=>{
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlayMask').classList.remove('active');
});

let usingCustom = false;
function toggleCustomInput(){
  usingCustom = !usingCustom;
  document.getElementById('customInputBlock').style.display = usingCustom ? 'block' : 'none';
  document.getElementById('masterSelectBlock').style.display = usingCustom ? 'none' : 'block';
}

function renderMasterSelect(){
  const sel = document.getElementById('masterSelect');
  if(!sel) return;
  const prev = sel.value;
  sel.innerHTML = `<option value="">${t('select_placeholder')}</option>` +
    master.map(m=>`<option value="${m.id}">${escapeHtml(m.name)} (${m.l}×${m.w}×${m.h} cm)</option>`).join('');
  if(prev) sel.value = prev;
}
function onMasterSelect(){ recalcWeightSuggestion(); }
function recalcWeightSuggestion(){
  if(usingCustom) return;
  const sel = document.getElementById('masterSelect');
  const item = master.find(m=>m.id===sel.value);
  const qty = parseFloat(document.getElementById('qtyInput').value) || 0;
  if(item && qty>0){
    document.getElementById('weightInput').value = +(item.weight*qty).toFixed(2);
  }
}

function addToLoadList(){
  const qty = parseFloat(document.getElementById('qtyInput').value);
  let weight = parseFloat(document.getElementById('weightInput').value);
  let entry;
  if(usingCustom){
    const name = document.getElementById('customName').value.trim();
    const l = parseFloat(document.getElementById('customL').value);
    const w = parseFloat(document.getElementById('customW').value);
    const h = parseFloat(document.getElementById('customH').value);
    if(!name || !l || !w || !h || !qty){ toast(t('toast_fill_fields'),'warn'); return; }
    if(isNaN(weight)) weight = 0;
    entry = {id:'e'+Date.now(), name, l, w, h, qty, weight};
  } else {
    const sel = document.getElementById('masterSelect');
    const item = master.find(m=>m.id===sel.value);
    if(!item || !qty){ toast(t('toast_fill_fields'),'warn'); return; }
    if(isNaN(weight)) weight = +(item.weight*qty).toFixed(2);
    entry = {id:'e'+Date.now(), name:item.name, l:item.l, w:item.w, h:item.h, qty, weight};
  }
  loadList.push(entry);
  persistAll();
  renderLoadList();
  toast(t('toast_added'));
  document.getElementById('qtyInput').value='';
  document.getElementById('weightInput').value='';
  document.getElementById('customName').value='';
  document.getElementById('customL').value='';
  document.getElementById('customW').value='';
  document.getElementById('customH').value='';
}

function removeLoadItem(id){
  askConfirm('confirm_delete_item_title','confirm_delete_item_desc', ()=>{
    loadList = loadList.filter(x=>x.id!==id);
    persistAll(); renderLoadList();
  });
}
function clearLoadList(){
  if(loadList.length===0) return;
  askConfirm('confirm_delete_all_title','confirm_delete_all_desc', ()=>{
    loadList = []; persistAll(); renderLoadList();
    lastCalc = null; drawContainerOnly();
    document.getElementById('vizEmptyOverlay').style.display='flex';
    resetUtilDisplay();
  });
}

function renderLoadList(){
  const body = document.getElementById('loadListBody');
  const emptyEl = document.getElementById('loadListEmpty');
  if(!body) return;
  document.getElementById('loadListCount').textContent = '('+loadList.length+')';
  if(loadList.length===0){ body.innerHTML=''; emptyEl.style.display='block'; return; }
  emptyEl.style.display='none';
  body.innerHTML = loadList.map(item=>`
    <tr>
      <td>${escapeHtml(item.name)}</td>
      <td class="mono text-dim">${item.l}×${item.w}×${item.h}</td>
      <td><span class="pill pill-purple">${item.qty} Pcs</span></td>
      <td class="mono">${item.weight.toLocaleString(currentLang==='id'?'id-ID':'en-US')}</td>
      <td><button class="icon-btn danger" onclick="removeLoadItem('${item.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button></td>
    </tr>`).join('');
}

function resetUtilDisplay(){
  document.getElementById('volPct').textContent='0%';
  document.getElementById('volBar').style.width='0%';
  document.getElementById('volFilled').textContent='0.00 m³';
  document.getElementById('volRemain').textContent='0.00 m³';
  document.getElementById('weightPct').textContent='0%';
  document.getElementById('weightBar').style.width='0%';
  document.getElementById('weightFilled').textContent='0.0 kg';
  document.getElementById('weightRemain').textContent='0.0 kg';
  document.getElementById('densityPct').textContent='0%';
  document.getElementById('densityBar').style.width='0%';
  document.getElementById('unfitCount').textContent='0';
  document.getElementById('colorLegend').innerHTML='';
}

function getItemColor(idx){
  const hue = (idx * 137.508) % 360;
  const sat = 62 + (idx % 3) * 11;
  const light = 48 + (idx % 4) * 6;
  return `hsl(${hue.toFixed(1)}, ${sat}%, ${light}%)`;
}

function runCalculation(){
  if(loadList.length===0){ toast(t('toast_list_empty'),'warn'); return; }
  const Lc = settings.l, Wc = settings.w, Hc = settings.h;
  const placements = [];
  let unplacedUnits = 0;
  const MAX_RENDER = 9000;
  let renderedCount = 0;
  const placedByIdx = {};
  const EPS = 1e-6;

  loadList.forEach((item, itemIdx)=>{
    if(item.h > Hc || item.l > Lc || item.w > Wc){
      unplacedUnits += item.qty;
      placedByIdx[itemIdx] = 0;
    }
  });

  const packItems = loadList
    .map((item, itemIdx)=>({item, itemIdx}))
    .filter(({itemIdx})=> placedByIdx[itemIdx] === undefined)
    .map(({item, itemIdx})=>{
      const capAsGiven = Math.floor(Wc/item.w);
      const capRotated = Math.floor(Wc/item.l);
      const rotate = capRotated > capAsGiven;
      const crossW = rotate ? item.l : item.w;
      const depth = rotate ? item.w : item.l;
      const tilesY = Math.floor(Wc/crossW);
      const tilesZ = Math.floor(Hc/item.h);
      return {item, itemIdx, depth, crossW, h:item.h, tilesY, tilesZ, perColumnCap: tilesY*tilesZ, remaining:item.qty, placedTotal:0, color:getItemColor(itemIdx)};
    })
    .sort((a,b)=> (b.h - a.h) || ((b.crossW*b.h) - (a.crossW*a.h)));

  function placeGrid(itemP, colX, zStart, tilesY, tilesZ, qty){
    let placedSoFar = 0;
    outer:
    for(let rz=0; rz<tilesZ; rz++){
      for(let ry=0; ry<tilesY; ry++){
        if(placedSoFar>=qty) break outer;
        if(renderedCount < MAX_RENDER){
          placements.push({x:colX, y:ry*itemP.crossW, z:zStart+rz*itemP.h, l:itemP.depth, w:itemP.crossW, h:itemP.h, color:itemP.color, itemIdx:itemP.itemIdx});
          renderedCount++;
        }
        placedSoFar++;
      }
    }
    return placedSoFar;
  }

  let x = 0;
  while(x < Lc - EPS){
    const primary = packItems.find(p=> p.remaining>0 && p.perColumnCap>0 && p.depth <= Lc - x + EPS);
    if(!primary) break;

    const columnQty = Math.min(primary.perColumnCap, primary.remaining);
    const placedCount = placeGrid(primary, x, 0, primary.tilesY, primary.tilesZ, columnQty);
    primary.remaining -= placedCount;
    primary.placedTotal += placedCount;

    const usedZ = Math.min(primary.tilesZ, Math.ceil(placedCount / primary.tilesY)) * primary.h;
    const leftoverH = Hc - usedZ;

    if(leftoverH > EPS){

      let secondaryX = x;
      const regionEnd = x + primary.depth;
      let progressedSecondary = true;
      while(progressedSecondary && secondaryX < regionEnd - EPS){
        progressedSecondary = false;
        for(const secondary of packItems){
          if(secondary === primary || secondary.remaining<=0 || secondary.h > leftoverH+EPS) continue;
          if(secondaryX + secondary.depth > regionEnd + EPS) continue;
          const secTilesY = Math.floor(Wc/secondary.crossW);
          const secTilesZ = Math.floor((leftoverH+EPS)/secondary.h);
          const secCap = secTilesY*secTilesZ;
          if(secCap<=0) continue;
          const qty = Math.min(secCap, secondary.remaining);
          const placed = placeGrid(secondary, secondaryX, usedZ, secTilesY, secTilesZ, qty);
          secondary.remaining -= placed;
          secondary.placedTotal += placed;
          secondaryX += secondary.depth;
          progressedSecondary = true;
          if(secondaryX >= regionEnd - EPS) break;
        }
      }
    }

    x += primary.depth;
  }

  packItems.forEach(p=>{
    placedByIdx[p.itemIdx] = p.placedTotal;
    unplacedUnits += p.remaining;
  });

  const itemResults = loadList.map((item, itemIdx)=>{
    const color = getItemColor(itemIdx);
    const unitWeight = item.qty>0 ? item.weight/item.qty : 0;
    const placedQty = placedByIdx[itemIdx] || 0;
    return {name:item.name, l:item.l, w:item.w, h:item.h, color, unitWeight, qty:item.qty, placedQty, unplacedQty:item.qty-placedQty};
  });

  const topViewBoxes = placements.filter(p=>p.z===0).map(p=>({x:p.x,y:p.y,l:p.l,w:p.w,color:p.color}));
  const sideViewBoxes = placements.filter(p=>p.y===0).map(p=>({x:p.x,z:p.z,l:p.l,h:p.h,color:p.color}));

  const totalVolumeM3 = loadList.reduce((s,it)=> s + (it.l*it.w*it.h*it.qty)/1e6, 0);
  const containerVolumeM3 = (Lc*Wc*Hc)/1e6;
  const totalWeightKg = loadList.reduce((s,it)=> s + it.weight, 0);
  const maxWeightKg = settings.maxWeight;

  const volPct = containerVolumeM3>0 ? (totalVolumeM3/containerVolumeM3*100) : 0;
  const weightPct = maxWeightKg>0 ? (totalWeightKg/maxWeightKg*100) : 0;

  const placedVolumeM3 = itemResults.reduce((s,it)=> s + (it.l*it.w*it.h*it.placedQty)/1e6, 0);
  const packingDensityPct = containerVolumeM3>0 ? (placedVolumeM3/containerVolumeM3*100) : 0;

  lastCalc = {
    totalVolumeM3, containerVolumeM3, volPct,
    totalWeightKg, maxWeightKg, weightPct,
    placedVolumeM3, packingDensityPct,
    placements, unplacedUnits, itemResults, topViewBoxes, sideViewBoxes,
    itemsSnapshot: JSON.parse(JSON.stringify(loadList)),
    settingsSnapshot: JSON.parse(JSON.stringify(settings)),
  };

  renderUtilCards(lastCalc);
  renderColorLegend();
  drawPlacements(placements, Lc, Wc, Hc);
  document.getElementById('vizEmptyOverlay').style.display='none';

  if(unplacedUnits>0){
    toast(unplacedUnits + ' ' + t('partial_warning'), 'warn');
  } else if(volPct>100 || weightPct>100){
    toast(t('overflow_warning'), 'err');
  } else {
    toast(t('toast_calc_done'));
  }
}

function renderUtilCards(calc){
  const volPctClamped = Math.min(100, calc.volPct);
  const weightPctClamped = Math.min(100, calc.weightPct);
  document.getElementById('volPct').textContent = calc.volPct.toFixed(2)+'%';
  document.getElementById('volBar').style.width = volPctClamped+'%';
  document.getElementById('volBar').style.background = calc.volPct>100 ? 'linear-gradient(90deg,#f0506e,#f5a524)' : 'linear-gradient(90deg,#7c4dff,#9166ff)';
  document.getElementById('volFilled').textContent = calc.totalVolumeM3.toFixed(2)+' m³';
  const remainVol = calc.containerVolumeM3 - calc.totalVolumeM3;
  document.getElementById('volRemain').textContent = (remainVol>=0? remainVol.toFixed(2) : '0.00') + ' m³ ('+Math.max(0,100-calc.volPct).toFixed(2)+'%)';

  document.getElementById('weightPct').textContent = calc.weightPct.toFixed(2)+'%';
  document.getElementById('weightBar').style.width = weightPctClamped+'%';
  document.getElementById('weightBar').style.background = calc.weightPct>100 ? 'linear-gradient(90deg,#f0506e,#f5a524)' : 'linear-gradient(90deg,#22c55e,#16a34a)';
  document.getElementById('weightFilled').textContent = calc.totalWeightKg.toLocaleString(currentLang==='id'?'id-ID':'en-US')+' kg';
  const remainW = calc.maxWeightKg - calc.totalWeightKg;
  document.getElementById('weightRemain').textContent = (remainW>=0? remainW.toLocaleString(currentLang==='id'?'id-ID':'en-US') : '0') + ' kg ('+Math.max(0,100-calc.weightPct).toFixed(2)+'%)';

  document.getElementById('densityPct').textContent = calc.packingDensityPct.toFixed(2)+'%';
  document.getElementById('densityBar').style.width = Math.min(100, calc.packingDensityPct)+'%';
  document.getElementById('unfitCount').textContent = calc.unplacedUnits.toLocaleString(currentLang==='id'?'id-ID':'en-US');
}

function renderColorLegend(){
  const legend = document.getElementById('colorLegend');
  legend.innerHTML = loadList.map((item,idx)=>{
    const color = getItemColor(idx);
    return `<div class="item"><span class="sw" style="background:${color};"></span>${escapeHtml(item.name)}</div>`;
  }).join('');
}

function saveCurrentSession(){
  if(loadList.length===0){ toast(t('toast_list_empty'),'warn'); return; }
  if(!lastCalc){ runCalculation(); }
  const projectNameRaw = (document.getElementById('projectNameInput').value||'').trim();
  const session = {
    id:'r'+Date.now(),
    date:new Date().toISOString(),
    projectName: projectNameRaw || t('lap_default_project'),
    items: JSON.parse(JSON.stringify(loadList)),
    volPct: lastCalc.volPct, weightPct: lastCalc.weightPct,
    totalVolumeM3: lastCalc.totalVolumeM3, containerVolumeM3: lastCalc.containerVolumeM3,
    totalWeightKg: lastCalc.totalWeightKg, maxWeightKg: lastCalc.maxWeightKg,
    unplacedUnits: lastCalc.unplacedUnits,
    itemResults: lastCalc.itemResults,
    topViewBoxes: lastCalc.topViewBoxes,
    sideViewBoxes: lastCalc.sideViewBoxes,
    settingsSnapshot: JSON.parse(JSON.stringify(settings)),
    operatorName: currentUser ? currentUser.name : (users[0] ? users[0].name : 'Administrator'),
  };
  riwayat.unshift(session);
  persistAll();
  renderRiwayatList(); renderDashboard(); renderLaporanSelect();
  document.getElementById('projectNameInput').value='';
  toast(t('toast_saved'));
}

let scene, camera, renderer, containerGroup, boxesGroup;
let sph = {radius:340, theta:0.9, phi:1.05};
let dragging=false, lastX=0, lastY=0;
let threeInited = false;
const SCALE = 0.12;

function initThreeIfNeeded(){
  if(threeInited) return;
  const host = document.getElementById('canvasHost');
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(42, host.clientWidth/host.clientHeight, 1, 5000);
  renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(host.clientWidth, host.clientHeight);
  host.appendChild(renderer.domElement);

  const amb = new THREE.AmbientLight(0xffffff, 0.65);
  scene.add(amb);
  const dir = new THREE.DirectionalLight(0xffffff, 0.9);
  dir.position.set(120,220,160);
  scene.add(dir);
  const dir2 = new THREE.DirectionalLight(0x7c9cff, 0.35);
  dir2.position.set(-150,80,-120);
  scene.add(dir2);

  containerGroup = new THREE.Group();
  boxesGroup = new THREE.Group();
  scene.add(containerGroup);
  scene.add(boxesGroup);

  host.addEventListener('pointerdown', (e)=>{ dragging=true; lastX=e.clientX; lastY=e.clientY; host.setPointerCapture(e.pointerId); });
  host.addEventListener('pointerup', ()=>{ dragging=false; });
  host.addEventListener('pointerleave', ()=>{ dragging=false; });
  host.addEventListener('pointermove', (e)=>{
    if(!dragging) return;
    const dx = e.clientX-lastX, dy = e.clientY-lastY;
    sph.theta -= dx*0.006;
    sph.phi = Math.min(Math.max(sph.phi - dy*0.006, 0.25), Math.PI-0.25);
    lastX=e.clientX; lastY=e.clientY;
    updateCamera();
  });
  host.addEventListener('wheel', (e)=>{
    e.preventDefault();
    sph.radius = Math.min(Math.max(sph.radius + e.deltaY*0.25, 90), 900);
    updateCamera();
  }, {passive:false});

  window.addEventListener('resize', onWindowResize);
  threeInited = true;
  animate();
}

function updateCamera(){
  const x = sph.radius * Math.sin(sph.phi) * Math.sin(sph.theta);
  const y = sph.radius * Math.cos(sph.phi);
  const z = sph.radius * Math.sin(sph.phi) * Math.cos(sph.theta);
  camera.position.set(x,y,z);
  camera.lookAt(0, (settings.h*SCALE)/2 * 0.35, 0);
}

function onWindowResize(){
  if(!threeInited) return;
  const host = document.getElementById('canvasHost');
  if(host.clientWidth===0) return;
  camera.aspect = host.clientWidth/host.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(host.clientWidth, host.clientHeight);
}

let vizIsFullscreen = false;
let vizSavedScrollY = 0;
function toggleVizFullscreen(){
  const wrap = document.getElementById('vizWrap');
  const btn = document.getElementById('vizFsBtn');
  vizIsFullscreen = !vizIsFullscreen;

  if(vizIsFullscreen){

    vizSavedScrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
  }

  wrap.classList.toggle('viz-fullscreen', vizIsFullscreen);
  btn.innerHTML = vizIsFullscreen
    ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3"/></svg>'
    : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>';
  btn.title = t(vizIsFullscreen ? 'viz_exit_fullscreen' : 'viz_fullscreen');

  if(!vizIsFullscreen){
    document.body.style.overflow = '';
    window.scrollTo(0, vizSavedScrollY);
  }

  setTimeout(onWindowResize, 60);
}
document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape' && vizIsFullscreen) toggleVizFullscreen();
});

function animate(){
  requestAnimationFrame(animate);
  if(renderer && scene && camera) renderer.render(scene, camera);
}

function buildContainerWireframe(){
  containerGroup.clear();
  const Lc=settings.l*SCALE, Wc=settings.w*SCALE, Hc=settings.h*SCALE;
  const geo = new THREE.BoxGeometry(Lc, Hc, Wc);
  const edges = new THREE.EdgesGeometry(geo);
  const mat = new THREE.LineBasicMaterial({color:0x8a93b8, transparent:true, opacity:0.55});
  const wire = new THREE.LineSegments(edges, mat);
  wire.position.set(0, Hc/2, 0);
  containerGroup.add(wire);

  const floorGeo = new THREE.PlaneGeometry(Lc*1.5, Wc*1.5, 10, 10);
  const floorMat = new THREE.MeshBasicMaterial({color:0x141b2c, transparent:true, opacity:0.35, side:THREE.DoubleSide});
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI/2;
  floor.position.y = -0.4;
  containerGroup.add(floor);

  addContainerRibs(Lc, Wc, Hc);
  addContainerDoors(Lc, Wc, Hc);

  sph.radius = Math.max(Lc,Wc,Hc)*2.05;
  updateCamera();
}

function addContainerRibs(Lc, Wc, Hc){
  const ribMat = new THREE.LineBasicMaterial({color:0x4d5a86, transparent:true, opacity:0.3});
  const ribCount = Math.max(6, Math.round(Lc/9));
  const spacing = Lc/ribCount;
  const pos = [];
  for(let i=1; i<ribCount; i++){
    const wx = -Lc/2 + i*spacing;

    pos.push(wx,0,-Wc/2,  wx,Hc,-Wc/2);
    pos.push(wx,0, Wc/2,  wx,Hc, Wc/2);
  }

  [0, Hc].forEach(y=>{
    pos.push(-Lc/2,y,-Wc/2,  Lc/2,y,-Wc/2);
    pos.push(-Lc/2,y, Wc/2,  Lc/2,y, Wc/2);
  });
  const ribGeo = new THREE.BufferGeometry();
  ribGeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  containerGroup.add(new THREE.LineSegments(ribGeo, ribMat));
}

function addContainerDoors(Lc, Wc, Hc){
  const doorMat = new THREE.LineBasicMaterial({color:0xb9c2e6, transparent:true, opacity:0.75});

  const frontX = Lc/2;
  const doorW = Wc/2;
  const theta = 1.85;

  function buildLeaf(hingeZ, closedDirSign){

    const farX = frontX + doorW*Math.sin(theta);
    const farZ = hingeZ + closedDirSign*doorW*Math.cos(theta);
    const pos = [
      frontX,0,hingeZ,  farX,0,farZ,
      farX,0,farZ,      farX,Hc,farZ,
      farX,Hc,farZ,     frontX,Hc,hingeZ,
      frontX,Hc,hingeZ, frontX,0,hingeZ,
    ];

    [0.35, 0.68].forEach(t=>{
      const y = Hc*t;
      pos.push(frontX,y,hingeZ,  farX,y,farZ);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    return new THREE.LineSegments(geo, doorMat);
  }

  containerGroup.add(buildLeaf(-Wc/2, 1));
  containerGroup.add(buildLeaf(Wc/2, -1));
}

function drawContainerOnly(){
  initThreeIfNeeded();
  buildContainerWireframe();
  boxesGroup.clear();
}

function drawPlacements(placements, Lc, Wc, Hc){
  initThreeIfNeeded();
  buildContainerWireframe();
  boxesGroup.clear();

  const groups = {};
  placements.forEach(p=>{ (groups[p.color] = groups[p.color]||[]).push(p); });

  const LcS = Lc*SCALE, WcS = Wc*SCALE;
  const geo = new THREE.BoxGeometry(1,1,1);
  const edgeGeo = new THREE.EdgesGeometry(geo);

  Object.keys(groups).forEach(color=>{
    const arr = groups[color];
    const mat = new THREE.MeshStandardMaterial({color:new THREE.Color(color), roughness:0.55, metalness:0.08});
    const inst = new THREE.InstancedMesh(geo, mat, arr.length);
    const dummy = new THREE.Object3D();
    arr.forEach((p, i)=>{
      const sx = p.l*SCALE*0.94, sy = p.h*SCALE*0.94, sz = p.w*SCALE*0.94;
      const px = (p.x + p.l/2 - Lc/2)*SCALE;
      const py = (p.z + p.h/2)*SCALE;
      const pz = (p.y + p.w/2 - Wc/2)*SCALE;
      dummy.position.set(px,py,pz);
      dummy.scale.set(sx,sy,sz);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    });
    inst.instanceMatrix.needsUpdate = true;
    boxesGroup.add(inst);
  });
}

let editingMasterId = null;
function renderMasterList(){
  const body = document.getElementById('masterListBody');
  if(!body) return;
  body.innerHTML = master.map(m=>`
    <tr>
      <td>${escapeHtml(m.name)}</td>
      <td class="mono text-dim">${m.l}×${m.w}×${m.h}</td>
      <td class="mono">${m.weight} kg</td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="icon-btn" onclick="editMasterItem('${m.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></button>
          <button class="icon-btn danger" onclick="deleteMasterItem('${m.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"/></svg></button>
        </div>
      </td>
    </tr>`).join('');
}
function saveMasterItem(){
  const name = document.getElementById('mName').value.trim();
  const l = parseFloat(document.getElementById('mL').value);
  const w = parseFloat(document.getElementById('mW').value);
  const h = parseFloat(document.getElementById('mH').value);
  const weight = parseFloat(document.getElementById('mWeight').value);
  if(!name || !l || !w || !h || isNaN(weight)){ toast(t('toast_fill_fields'),'warn'); return; }
  if(editingMasterId){
    const idx = master.findIndex(m=>m.id===editingMasterId);
    if(idx>-1) master[idx] = {id:editingMasterId, name, l, w, h, weight};
  } else {
    master.push({id:'m'+Date.now(), name, l, w, h, weight});
  }
  persistAll();
  resetMasterForm();
  renderMasterList(); renderMasterSelect(); renderDashboard();
  toast(t('toast_master_saved'));
}
function editMasterItem(id){
  const m = master.find(x=>x.id===id);
  if(!m) return;
  editingMasterId = id;
  document.getElementById('mName').value = m.name;
  document.getElementById('mL').value = m.l;
  document.getElementById('mW').value = m.w;
  document.getElementById('mH').value = m.h;
  document.getElementById('mWeight').value = m.weight;
  document.getElementById('masterFormTitle').textContent = t('master_edit_title');
  document.getElementById('masterSaveBtn').querySelector('span').textContent = t('master_update_btn');
  document.getElementById('masterCancelBtn').style.display='inline-flex';
  window.scrollTo({top:0, behavior:'smooth'});
}
function resetMasterForm(){
  editingMasterId = null;
  document.getElementById('mName').value='';
  document.getElementById('mL').value='';
  document.getElementById('mW').value='';
  document.getElementById('mH').value='';
  document.getElementById('mWeight').value='';
  document.getElementById('masterFormTitle').textContent = t('master_add_title');
  document.getElementById('masterSaveBtn').querySelector('span').textContent = t('master_save_btn');
  document.getElementById('masterCancelBtn').style.display='none';
}
function deleteMasterItem(id){
  askConfirm('confirm_delete_master_title','confirm_delete_master_desc', ()=>{
    master = master.filter(m=>m.id!==id);
    persistAll(); renderMasterList(); renderMasterSelect(); renderDashboard();
    toast(t('toast_master_deleted'));
  });
}

function renderRiwayatList(){
  const body = document.getElementById('riwayatListBody');
  const emptyEl = document.getElementById('riwayatEmpty');
  if(!body) return;
  if(riwayat.length===0){ body.innerHTML=''; emptyEl.style.display='block'; return; }
  emptyEl.style.display='none';
  const locale = currentLang==='id'?'id-ID':'en-US';
  body.innerHTML = riwayat.map(r=>{
    const d = new Date(r.date);
    const itemCount = r.items.reduce((s,it)=>s+it.qty,0);
    return `<tr>
      <td>${d.toLocaleDateString(locale,{day:'2-digit',month:'short',year:'numeric'})} <span class="text-faint" style="font-size:11px;">${d.toLocaleTimeString(locale,{hour:'2-digit',minute:'2-digit'})}</span></td>
      <td class="mono">${itemCount.toLocaleString(locale)} pcs</td>
      <td><span class="pill ${r.volPct>100?'pill-amber':'pill-purple'}">${r.volPct.toFixed(1)}%</span></td>
      <td><span class="pill ${r.weightPct>100?'pill-amber':'pill-green'}">${r.weightPct.toFixed(1)}%</span></td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-outline btn-sm" onclick="loadRiwayatToCalc('${r.id}')">${t('riw_load')}</button>
          <button class="icon-btn danger" onclick="deleteRiwayat('${r.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"/></svg></button>
        </div>
      </td>
    </tr>`;
  }).join('');
}
function loadRiwayatToCalc(id){
  const r = riwayat.find(x=>x.id===id);
  if(!r) return;
  loadList = JSON.parse(JSON.stringify(r.items));
  persistAll();
  navigate('kalkulator');
  renderLoadList();
  setTimeout(()=>{ runCalculation(); }, 60);
  toast(t('toast_riwayat_loaded'));
}
function deleteRiwayat(id){
  askConfirm('confirm_delete_riwayat_title','confirm_delete_riwayat_desc', ()=>{
    riwayat = riwayat.filter(r=>r.id!==id);
    persistAll(); renderRiwayatList(); renderDashboard(); renderLaporanSelect(); renderLaporan();
    toast(t('toast_riwayat_deleted'));
  });
}

function getReportItemResults(r){
  if(r.itemResults) return r.itemResults;
  return r.items.map((it,idx)=>({
    name:it.name, l:it.l, w:it.w, h:it.h, color:getItemColor(idx),
    unitWeight: it.qty>0 ? it.weight/it.qty : 0,
    qty:it.qty, placedQty:it.qty, unplacedQty:0,
  }));
}

function generateInsights(r){
  const items = getReportItemResults(r).filter(it=>it.placedQty>0);
  const minH = items.length ? Math.min(...items.map(it=>it.h)) : r.settingsSnapshot.h;
  const stackIndex = minH>0 ? Math.floor(r.settingsSnapshot.h/minH) : 0;
  const volPct = r.volPct, weightPct = r.weightPct;
  const densityKey = volPct>=90 ? 'lap_density_high' : volPct>=60 ? 'lap_density_mid' : 'lap_density_low';
  const loadpointKey = weightPct>=90 ? 'lap_loadpoint_heavy' : weightPct>=50 ? 'lap_loadpoint_mid' : 'lap_loadpoint_light';
  const deflectionKey = weightPct>=90 ? 'lap_deflection_high' : weightPct>=60 ? 'lap_deflection_mid' : 'lap_deflection_low';
  const overloaded = (r.unplacedUnits||0) > 0 || volPct>100 || weightPct>100;
  return {
    stackIndexText: t('lap_stack_index_val').replace('{n}', stackIndex).replace('{h}', minH),
    densityText: t(densityKey),
    loadpointText: t(loadpointKey),
    deflectionText: t(deflectionKey),
    safetyText: t(overloaded ? 'lap_safety_overload' : 'lap_safety_normal'),
  };
}

function buildProjectionSvg(boxes, spanCm, depthCm, posKey, sizeKey, posKey2, sizeKey2, theme){
  const vw = 640;
  const scale = spanCm>0 ? vw/spanCm : 1;
  const vh = Math.max(depthCm*scale, 20);
  const rects = (boxes||[]).map(b=>{
    const w = Math.max(b[sizeKey]*scale-1, 0.6);
    const h = Math.max(b[sizeKey2]*scale-1, 0.6);
    const x = b[posKey]*scale;
    const y = vh - (b[posKey2]*scale) - (b[sizeKey2]*scale);
    return `<rect x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${w.toFixed(2)}" height="${h.toFixed(2)}" fill="${b.color}" stroke="${theme.stroke}" stroke-width="0.5"/>`;
  }).join('');
  return `<svg viewBox="0 0 ${vw} ${vh.toFixed(2)}" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; display:block;"><rect x="0.5" y="0.5" width="${vw-1}" height="${(vh-1).toFixed(2)}" fill="${theme.bg}" stroke="${theme.outline}" stroke-width="1.5"/>${rects}</svg>`;
}
function buildTopViewSvg(r, theme){
  return buildProjectionSvg(r.topViewBoxes, r.settingsSnapshot.l, r.settingsSnapshot.w, 'x','l','y','w', theme);
}
function buildSideViewSvg(r, theme){
  return buildProjectionSvg(r.sideViewBoxes, r.settingsSnapshot.l, r.settingsSnapshot.h, 'x','l','z','h', theme);
}

const DARK_SVG_THEME  = {stroke:'#0a0e17', bg:'#0d1220', outline:'#7c4dff'};
const LIGHT_SVG_THEME = {stroke:'#ffffff', bg:'#eef0f6', outline:'#7c4dff'};

function loadedProductRowsHtml(r, locale){
  return getReportItemResults(r).filter(it=>it.placedQty>0).map(it=>`
    <tr>
      <td><span class="sw" style="display:inline-block;width:10px;height:10px;border-radius:3px;background:${it.color};margin-right:8px;vertical-align:middle;"></span>${escapeHtml(it.name)}</td>
      <td class="mono text-dim">${it.l}×${it.w}×${it.h}</td>
      <td class="mono">${((it.l*it.w*it.h)/1e6).toFixed(4)} m³</td>
      <td class="mono">${it.unitWeight.toLocaleString(locale)} kg</td>
      <td class="mono" style="color:var(--purple-2); font-weight:700;">${it.placedQty.toLocaleString(locale)} Unit</td>
      <td class="mono">${((it.l*it.w*it.h*it.placedQty)/1e6).toFixed(2)} m³</td>
      <td class="mono">${(it.unitWeight*it.placedQty).toLocaleString(locale)} kg</td>
    </tr>`).join('');
}
function unfitProductRowsHtml(r, locale){
  return getReportItemResults(r).filter(it=>it.unplacedQty>0).map(it=>`
    <tr>
      <td>${escapeHtml(it.name)}</td>
      <td class="mono text-dim">${it.l}×${it.w}×${it.h}</td>
      <td class="mono">${((it.l*it.w*it.h)/1e6).toFixed(4)} m³</td>
      <td class="mono">${it.unitWeight.toLocaleString(locale)} kg</td>
      <td class="mono" style="color:var(--red); font-weight:700;">${it.unplacedQty.toLocaleString(locale)} Unit</td>
      <td class="mono">${((it.l*it.w*it.h*it.unplacedQty)/1e6).toFixed(2)} m³</td>
      <td class="mono">${(it.unitWeight*it.unplacedQty).toLocaleString(locale)} kg</td>
    </tr>`).join('');
}

function renderLaporanSelect(){
  const sel = document.getElementById('laporanSelect');
  if(!sel) return;
  const prev = sel.value;
  const locale = currentLang==='id'?'id-ID':'en-US';
  if(riwayat.length===0){
    sel.innerHTML = `<option value="">${t('no_riwayat_option')}</option>`;
  } else {
    sel.innerHTML = riwayat.map(r=>{
      const d = new Date(r.date);
      return `<option value="${r.id}">${d.toLocaleDateString(locale,{day:'2-digit',month:'short',year:'numeric', hour:'2-digit', minute:'2-digit'})} — ${r.items.length} ${currentLang==='id'?'jenis barang':'item types'}</option>`;
    }).join('');
  }
  if(prev) sel.value = prev;
}

function renderLaporan(){
  const body = document.getElementById('laporanBody');
  const sel = document.getElementById('laporanSelect');
  if(!body || !sel) return;
  const r = riwayat.find(x=>x.id===sel.value);
  if(!r){
    body.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg><p>${t('lap_empty')}</p></div>`;
    return;
  }
  const locale = currentLang==='id'?'id-ID':'en-US';
  const d = new Date(r.date);
  const insights = generateInsights(r);
  const hasProjection = r.topViewBoxes && r.topViewBoxes.length && r.sideViewBoxes && r.sideViewBoxes.length;
  const unfitRows = unfitProductRowsHtml(r, locale);

  const projectionHtml = hasProjection ? `
    <div class="grid-2" style="margin-bottom:20px;">
      <div class="stat-card">
        <div class="stat-label" style="text-align:center;">${t('lap_top_view')}</div>
        <div style="margin-top:10px; border-radius:8px; overflow:hidden;">${buildTopViewSvg(r, DARK_SVG_THEME)}</div>
        <div class="stat-sub" style="text-align:center; margin-top:8px;">${t('lap_top_view_caption')}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label" style="text-align:center;">${t('lap_side_view')}</div>
        <div style="margin-top:10px; border-radius:8px; overflow:hidden;">${buildSideViewSvg(r, DARK_SVG_THEME)}</div>
        <div class="stat-sub" style="text-align:center; margin-top:8px;">${t('lap_side_view_caption')}</div>
      </div>
    </div>` : `<p class="text-faint" style="font-size:12.5px; margin-bottom:20px;">${t('lap_projection_unavailable')}</p>`;

  body.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; margin-bottom:18px; padding-bottom:16px; border-bottom:1px solid var(--border-soft);">
      <div style="display:flex; align-items:center; gap:12px;">
        <div class="brand-mark" style="width:42px;height:42px;">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/><path d="M3 7l9 5 9-5M12 12v10" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/></svg>
        </div>
        <div>
          <div style="font-weight:700; font-size:15.5px;">Cargo3D Calculator</div>
          <div class="text-faint" style="font-size:11px;">${t('lap_doc_subtitle')}</div>
        </div>
      </div>
      <div style="text-align:right; font-size:11.8px;" class="text-dim">
        <div>${t('lap_print_date')}: <b class="mono">${d.toLocaleString(locale)}</b></div>
        <div>${t('lap_operator')}: <b class="mono">${escapeHtml(r.operatorName||'—')}</b></div>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:16px;">
      <div class="stat-card">
        <div class="stat-label">${t('lap_shipment_info')}</div>
        <div style="margin-top:8px; font-size:14px;"><span class="text-dim">${t('lap_project')}: </span><b style="color:var(--purple-2)">${escapeHtml(r.projectName || t('lap_default_project'))}</b></div>
        <div style="margin-top:6px; font-size:13.5px;"><span class="text-dim">${t('lap_container_type')}: </span><b>${escapeHtml(r.settingsSnapshot.name)}</b></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">${t('lap_capacity_max')}</div>
        <div style="margin-top:8px; font-size:13.5px;"><span class="text-dim">${t('lap_max_volume')}: </span><b>${r.containerVolumeM3.toFixed(2)} m³</b></div>
        <div style="margin-top:6px; font-size:13.5px;"><span class="text-dim">${t('lap_max_weight')}: </span><b>${r.maxWeightKg.toLocaleString(locale)} kg</b></div>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:20px;">
      <div class="stat-card util-card">
        <div class="stat-label">${t('util_volume')}</div>
        <div class="stat-value">${r.volPct.toFixed(2)}%</div>
        <div class="bar-track"><div class="bar-fill" style="width:${Math.min(100,r.volPct)}%; background:${r.volPct>100?'linear-gradient(90deg,#f0506e,#f5a524)':'linear-gradient(90deg,#7c4dff,#9166ff)'};"></div></div>
        <div class="stat-sub">${t('lap_terpakai')}: <b class="text-dim">${r.totalVolumeM3.toFixed(2)} m³</b> &nbsp;·&nbsp; ${t('lap_sisa')}: <b class="text-dim">${Math.max(0,r.containerVolumeM3-r.totalVolumeM3).toFixed(2)} m³</b></div>
      </div>
      <div class="stat-card util-card">
        <div class="stat-label">${t('util_weight')}</div>
        <div class="stat-value">${r.weightPct.toFixed(2)}%</div>
        <div class="bar-track"><div class="bar-fill" style="width:${Math.min(100,r.weightPct)}%; background:${r.weightPct>100?'linear-gradient(90deg,#f0506e,#f5a524)':'linear-gradient(90deg,#22c55e,#16a34a)'};"></div></div>
        <div class="stat-sub">${t('lap_terpakai')}: <b class="text-dim">${r.totalWeightKg.toLocaleString(locale)} kg</b> &nbsp;·&nbsp; ${t('lap_sisa')}: <b class="text-dim">${Math.max(0,r.maxWeightKg-r.totalWeightKg).toLocaleString(locale)} kg</b></div>
      </div>
    </div>

    <div class="panel-title" style="margin-bottom:12px;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
      <span>${t('lap_projection_title')}</span>
    </div>
    ${projectionHtml}

    <div class="panel-title" style="margin-bottom:12px;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
      <span>${t('lap_ai_insights_title')}</span>
    </div>
    <div class="grid-2" style="margin-bottom:20px;">
      <div class="stat-card" style="border-left:3px solid var(--purple-2);">
        <div class="stat-label" style="color:var(--purple-2);">${t('lap_spatial_analysis_title')}</div>
        <div style="margin-top:10px; font-size:12.6px; line-height:1.7;" class="text-dim">
          <p style="margin:0 0 10px;"><b style="color:var(--text);">${t('lap_stack_pattern_label')}</b><br>${t('lap_stack_pattern_val')}</p>
          <p style="margin:0 0 10px;"><b style="color:var(--text);">${t('lap_stack_index_label')}</b><br>${insights.stackIndexText}</p>
          <p style="margin:0;"><b style="color:var(--text);">${t('lap_density_label')}</b><br>${insights.densityText}</p>
        </div>
      </div>
      <div class="stat-card" style="border-left:3px solid #4ade80;">
        <div class="stat-label" style="color:#4ade80;">${t('lap_risk_analysis_title')}</div>
        <div style="margin-top:10px; font-size:12.6px; line-height:1.7;" class="text-dim">
          <p style="margin:0 0 10px;"><b style="color:var(--text);">${t('lap_loadpoint_label')}</b><br>${insights.loadpointText}</p>
          <p style="margin:0 0 10px;"><b style="color:var(--text);">${t('lap_deflection_label')}</b><br>${insights.deflectionText}</p>
          <p style="margin:0;"><b style="color:var(--text);">${t('lap_safety_label')}</b><br>${insights.safetyText}</p>
        </div>
      </div>
    </div>

    <div class="panel-title" style="margin-bottom:12px; color:#4ade80;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
      <span>${t('lap_products_loaded_title')}</span>
    </div>
    <div class="tbl-wrap" style="margin-bottom:20px;">
      <table>
        <thead><tr><th>${t('th_name')}</th><th>${t('th_box_size')}</th><th>${t('th_unit_volume')}</th><th>${t('th_unit_weight')}</th><th>${t('th_qty_loaded')}</th><th>${t('th_total_volume')}</th><th>${t('th_total_weight')}</th></tr></thead>
        <tbody>${loadedProductRowsHtml(r, locale)}</tbody>
      </table>
    </div>

    ${unfitRows ? `
    <div class="panel-title" style="margin-bottom:12px; color:var(--red);">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>
      <span>${t('lap_products_unfit_title')}</span>
    </div>
    <div class="tbl-wrap" style="margin-bottom:20px;">
      <table>
        <thead><tr><th>${t('th_name')}</th><th>${t('th_box_size')}</th><th>${t('th_unit_volume')}</th><th>${t('th_unit_weight')}</th><th>${t('th_qty_unfit')}</th><th>${t('th_remaining_volume')}</th><th>${t('th_remaining_weight')}</th></tr></thead>
        <tbody>${unfitRows}</tbody>
      </table>
    </div>` : `<p class="text-faint" style="font-size:12.5px; margin-bottom:20px;">${t('lap_no_unfit')}</p>`}

    <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; padding-top:16px; border-top:1px solid var(--border-soft); font-size:10.8px; letter-spacing:.03em; text-transform:uppercase;" class="text-faint">
      <span>${t('lap_footer_brand')}</span><span>${t('lap_footer_doc')}</span>
    </div>

    <button class="btn btn-outline no-print" style="margin-top:16px;" onclick="printLaporan('${r.id}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6v-8z"/></svg>
      ${t('lap_print')}
    </button>
  `;
}

function printLaporan(reportId){
  const r = riwayat.find(x=>x.id===reportId);
  if(!r) return;
  const html = buildPrintableReportHtml(r);
  let win = null;
  try{ win = window.open('', '_blank'); }catch(e){ win = null; }
  if(win && !win.closed){
    try{
      win.document.open();
      win.document.write(html);
      win.document.close();
      win.focus();
      return;
    }catch(e){  }
  }
  downloadReportHtml(html, r);
  toast(t('toast_report_downloaded'), 'warn');
}

function buildPrintableReportHtml(r){
  const locale = currentLang==='id'?'id-ID':'en-US';
  const d = new Date(r.date);
  const insights = generateInsights(r);
  const hasProjection = r.topViewBoxes && r.topViewBoxes.length && r.sideViewBoxes && r.sideViewBoxes.length;
  const unfitRows = unfitProductRowsHtml(r, locale);
  const title = t('lap_title') + ' — ' + escapeHtml(r.projectName || r.settingsSnapshot.name);

  const projectionHtml = hasProjection ? `
    <div class="proj-grid">
      <div class="card">
        <div class="lbl" style="text-align:center;">${t('lap_top_view')}</div>
        <div class="proj-box">${buildTopViewSvg(r, LIGHT_SVG_THEME)}</div>
        <div class="cap">${t('lap_top_view_caption')}</div>
      </div>
      <div class="card">
        <div class="lbl" style="text-align:center;">${t('lap_side_view')}</div>
        <div class="proj-box">${buildSideViewSvg(r, LIGHT_SVG_THEME)}</div>
        <div class="cap">${t('lap_side_view_caption')}</div>
      </div>
    </div>` : `<p class="muted">${t('lap_projection_unavailable')}</p>`;

  return `<!DOCTYPE html>
<html lang="${currentLang}">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<style>
  *{box-sizing:border-box;}
  body{font-family:Arial,Helvetica,sans-serif; color:#111; background:#f3f4f8; padding:32px; margin:0;}
  .sheet{max-width:900px; margin:0 auto; background:#fff; border:1px solid #e2e4ea; border-radius:10px; padding:34px;}
  .head{display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; padding-bottom:18px; border-bottom:1px solid #e2e4ea; margin-bottom:22px;}
  .brand{display:flex; align-items:center; gap:13px;}
  .brand .mark{width:44px;height:44px;border-radius:10px;background:linear-gradient(140deg,#7c4dff,#4d2fb0); display:flex;align-items:center;justify-content:center; flex-shrink:0;}
  .brand h1{font-size:17px; margin:0;}
  .brand .sub{font-size:11.5px; color:#666; margin-top:2px;}
  .meta{text-align:right; font-size:11.8px; color:#444;}
  .meta b{font-family:'Courier New',monospace;}
  .grid2{display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:18px;}
  .card{border:1px solid #e2e4ea; border-radius:8px; padding:16px 18px; background:#fbfbfd;}
  .lbl{font-size:10.5px; text-transform:uppercase; letter-spacing:.05em; color:#777; font-weight:700; margin-bottom:8px;}
  .val{font-size:24px; font-weight:800;}
  .val.purple{color:#7c4dff;} .val.green{color:#16a34a;}
  .sub2{font-size:11.5px; color:#666; margin-top:6px;}
  .bar{height:7px; border-radius:20px; background:#e7e8ee; margin-top:10px; overflow:hidden;}
  .bar > div{height:100%; border-radius:20px;}
  .section-title{display:flex; align-items:center; gap:8px; font-size:13.5px; font-weight:700; margin:26px 0 12px;}
  .section-title.risk{color:#d13a55;}
  .section-title.ok{color:#16a34a;}
  .proj-grid{display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:8px;}
  .proj-box{margin-top:8px; border-radius:8px; overflow:hidden; border:1px solid #e2e4ea;}
  .cap{text-align:center; font-size:10.8px; color:#777; margin-top:8px;}
  .insight-grid{display:grid; grid-template-columns:1fr 1fr; gap:16px;}
  .insight-card{border-radius:8px; border:1px solid #e2e4ea; background:#fbfbfd; padding:16px 18px; border-left:3px solid #7c4dff;}
  .insight-card.risk{border-left-color:#16a34a;}
  .insight-card p{margin:0 0 10px; font-size:12px; line-height:1.65; color:#444;}
  .insight-card p:last-child{margin-bottom:0;}
  .insight-card p b{color:#111;}
  table{width:100%; border-collapse:collapse; font-size:12px;}
  th{text-align:left; font-size:10px; text-transform:uppercase; letter-spacing:.04em; color:#666; padding:8px 8px; border-bottom:1px solid #ccc;}
  td{padding:8px 8px; border-bottom:1px solid #eceef2;}
  .sw{display:inline-block; width:9px; height:9px; border-radius:3px; margin-right:7px; vertical-align:middle;}
  .muted{font-size:12px; color:#888;}
  .foot{display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap; padding-top:16px; margin-top:24px; border-top:1px solid #e2e4ea; font-size:10px; letter-spacing:.04em; text-transform:uppercase; color:#999;}
  .print-btn{margin-top:22px; padding:10px 16px; font-size:13px; font-weight:700; border-radius:6px; border:1px solid #999; background:#f4f4f4; cursor:pointer;}
  @media print{ body{background:#fff; padding:0;} .sheet{border:none; border-radius:0; max-width:100%; padding:0;} .print-btn{display:none;} }
</style>
</head>
<body>
<div class="sheet">
  <div class="head">
    <div class="brand">
      <div class="mark"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/><path d="M3 7l9 5 9-5M12 12v10" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/></svg></div>
      <div><h1>Cargo3D Calculator</h1><div class="sub">${t('lap_doc_subtitle')}</div></div>
    </div>
    <div class="meta">
      <div>${t('lap_print_date')}: <b>${d.toLocaleString(locale)}</b></div>
      <div>${t('lap_operator')}: <b>${escapeHtml(r.operatorName||'—')}</b></div>
    </div>
  </div>

  <div class="grid2">
    <div class="card">
      <div class="lbl">${t('lap_shipment_info')}</div>
      <div style="font-size:14px; margin-bottom:6px;">${t('lap_project')}: <b style="color:#7c4dff;">${escapeHtml(r.projectName || t('lap_default_project'))}</b></div>
      <div style="font-size:12.5px;">${t('lap_container_type')}: <b>${escapeHtml(r.settingsSnapshot.name)}</b></div>
    </div>
    <div class="card">
      <div class="lbl">${t('lap_capacity_max')}</div>
      <div style="font-size:12.5px; margin-bottom:6px;">${t('lap_max_volume')}: <b>${r.containerVolumeM3.toFixed(2)} m³</b></div>
      <div style="font-size:12.5px;">${t('lap_max_weight')}: <b>${r.maxWeightKg.toLocaleString(locale)} kg</b></div>
    </div>
  </div>

  <div class="grid2">
    <div class="card">
      <div class="lbl">${t('util_volume')}</div>
      <div class="val purple">${r.volPct.toFixed(2)}%</div>
      <div class="bar"><div style="width:${Math.min(100,r.volPct)}%; background:${r.volPct>100?'#e0455f':'#7c4dff'};"></div></div>
      <div class="sub2">${t('lap_terpakai')}: <b>${r.totalVolumeM3.toFixed(2)} m³</b> · ${t('lap_sisa')}: <b>${Math.max(0,r.containerVolumeM3-r.totalVolumeM3).toFixed(2)} m³</b></div>
    </div>
    <div class="card">
      <div class="lbl">${t('util_weight')}</div>
      <div class="val green">${r.weightPct.toFixed(2)}%</div>
      <div class="bar"><div style="width:${Math.min(100,r.weightPct)}%; background:${r.weightPct>100?'#e0455f':'#16a34a'};"></div></div>
      <div class="sub2">${t('lap_terpakai')}: <b>${r.totalWeightKg.toLocaleString(locale)} kg</b> · ${t('lap_sisa')}: <b>${Math.max(0,r.maxWeightKg-r.totalWeightKg).toLocaleString(locale)} kg</b></div>
    </div>
  </div>

  <div class="section-title">◆ ${t('lap_projection_title')}</div>
  ${projectionHtml}

  <div class="section-title">◈ ${t('lap_ai_insights_title')}</div>
  <div class="insight-grid">
    <div class="insight-card">
      <div class="lbl" style="color:#7c4dff;">${t('lap_spatial_analysis_title')}</div>
      <p><b>${t('lap_stack_pattern_label')}</b><br>${t('lap_stack_pattern_val')}</p>
      <p><b>${t('lap_stack_index_label')}</b><br>${insights.stackIndexText}</p>
      <p><b>${t('lap_density_label')}</b><br>${insights.densityText}</p>
    </div>
    <div class="insight-card risk">
      <div class="lbl" style="color:#16a34a;">${t('lap_risk_analysis_title')}</div>
      <p><b>${t('lap_loadpoint_label')}</b><br>${insights.loadpointText}</p>
      <p><b>${t('lap_deflection_label')}</b><br>${insights.deflectionText}</p>
      <p><b>${t('lap_safety_label')}</b><br>${insights.safetyText}</p>
    </div>
  </div>

  <div class="section-title ok">✓ ${t('lap_products_loaded_title')}</div>
  <table>
    <thead><tr><th>${t('th_name')}</th><th>${t('th_box_size')}</th><th>${t('th_unit_volume')}</th><th>${t('th_unit_weight')}</th><th>${t('th_qty_loaded')}</th><th>${t('th_total_volume')}</th><th>${t('th_total_weight')}</th></tr></thead>
    <tbody>${loadedProductRowsHtml(r, locale)}</tbody>
  </table>

  ${unfitRows ? `
  <div class="section-title risk">⚠ ${t('lap_products_unfit_title')}</div>
  <table>
    <thead><tr><th>${t('th_name')}</th><th>${t('th_box_size')}</th><th>${t('th_unit_volume')}</th><th>${t('th_unit_weight')}</th><th>${t('th_qty_unfit')}</th><th>${t('th_remaining_volume')}</th><th>${t('th_remaining_weight')}</th></tr></thead>
    <tbody>${unfitRows}</tbody>
  </table>` : `<p class="muted">${t('lap_no_unfit')}</p>`}

  <div class="foot"><span>${t('lap_footer_brand')}</span><span>${t('lap_footer_doc')}</span></div>
  <button class="print-btn" onclick="window.print()">${t('lap_print')}</button>
</div>
<script>
  window.addEventListener('load', function(){
    setTimeout(function(){ try{ window.print(); }catch(e){} }, 150);
  });
<\/script>
</body>
</html>`;
}

function downloadReportHtml(html, r){
  const blob = new Blob([html], {type:'text/html'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const d = new Date(r.date);
  a.href = url;
  a.download = 'laporan-muat-' + d.toISOString().slice(0,10) + '.html';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 4000);
}

function renderUserList(){
  const body = document.getElementById('userListBody');
  if(!body) return;
  body.innerHTML = users.map(u=>`
    <tr>
      <td>${escapeHtml(u.name)}</td>
      <td><span class="pill ${u.role==='Admin'?'pill-purple':'pill-green'}">${u.role}</span></td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="icon-btn" title="${t('user_reset_pwd_title')}" onclick="openPwdModal('${u.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></button>
          <button class="icon-btn danger" onclick="deleteUser('${u.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"/></svg></button>
        </div>
      </td>
    </tr>`).join('');
}
function addUser(){
  const name = document.getElementById('uName').value.trim();
  const role = document.getElementById('uRole').value;
  const password = document.getElementById('uPassword').value;
  if(!name){ toast(t('toast_fill_fields'),'warn'); return; }
  if(isSuperAdminName(name) || users.some(u=>u.name.trim().toLowerCase()===name.toLowerCase())){ toast(t('toast_user_exists'),'warn'); return; }
  const newUser = {id:'u'+Date.now(), name, role, salt:'', hash:''};
  setUserPassword(newUser, password);
  users.push(newUser);
  persistAll(); renderUserList();
  document.getElementById('uName').value='';
  document.getElementById('uPassword').value='';
  toast(t('toast_user_added'));
}
function deleteUser(id){
  if(users.length<=1){ toast(t('toast_cant_delete_last_user'),'warn'); return; }
  if(currentUser && currentUser.id===id){ toast(t('toast_cant_delete_self'),'warn'); return; }
  askConfirm('confirm_delete_user_title','confirm_delete_user_desc', ()=>{
    users = users.filter(u=>u.id!==id);
    persistAll(); renderUserList();
    toast(t('toast_user_deleted'));
  });
}

let pwdModalUserId = null;
function openPwdModal(userId){
  pwdModalUserId = userId;
  document.getElementById('pwdModalInput').value='';
  document.getElementById('pwdModal').classList.add('active');
}
function closePwdModal(){
  document.getElementById('pwdModal').classList.remove('active');
  pwdModalUserId = null;
}
function savePwdModal(){
  const u = users.find(x=>x.id===pwdModalUserId);
  if(!u) return;
  setUserPassword(u, document.getElementById('pwdModalInput').value);
  persistAll();
  toast(t('toast_pwd_updated'));
  closePwdModal();
}

const FLEET_PRESETS = {
  cont40hc: { name:{id:'Kontainer 40ft High Cube', en:'40ft High Cube Container'}, l:1203, w:235, h:269, maxWeight:26500 },
  cont20ft: { name:{id:'Kontainer 20ft', en:'20ft Container'}, l:589, w:235, h:239, maxWeight:28180 },
  wingbox:  { name:{id:'Wingbox (BWB) Tronton', en:'Wingbox (BWB) Tronton'}, l:900, w:240, h:220, maxWeight:14000 },
};
function applyFleetPreset(){
  const key = document.getElementById('setFleetType').value;
  const preset = FLEET_PRESETS[key];
  if(!preset) return;
  document.getElementById('setName').value = preset.name[currentLang] || preset.name.id;
  document.getElementById('setL').value = preset.l;
  document.getElementById('setW').value = preset.w;
  document.getElementById('setH').value = preset.h;
  document.getElementById('setMaxWeight').value = preset.maxWeight;
  updateSetVolumeInfo();
}
function loadSettingsForm(){
  document.getElementById('setName').value = settings.name;
  document.getElementById('setL').value = settings.l;
  document.getElementById('setW').value = settings.w;
  document.getElementById('setH').value = settings.h;
  document.getElementById('setMaxWeight').value = settings.maxWeight;

  let matchKey = (settings.type && settings.type!=='custom' && FLEET_PRESETS[settings.type]) ? settings.type : null;
  if(!matchKey){
    matchKey = Object.keys(FLEET_PRESETS).find(k=>{
      const p = FLEET_PRESETS[k];
      return p.l===settings.l && p.w===settings.w && p.h===settings.h && p.maxWeight===settings.maxWeight;
    });
  }
  document.getElementById('setFleetType').value = matchKey || '';
  updateSetVolumeInfo();
}
function updateSetVolumeInfo(){
  const l = parseFloat(document.getElementById('setL').value)||0;
  const w = parseFloat(document.getElementById('setW').value)||0;
  const h = parseFloat(document.getElementById('setH').value)||0;
  const vol = (l*w*h/1e6).toFixed(2);
  document.getElementById('setVolumeInfo').textContent = (currentLang==='id' ? 'Volume kontainer: ' : 'Container volume: ') + vol + ' m³';
}
['setL','setW','setH'].forEach(id=>{
  document.addEventListener('input', (e)=>{ if(e.target && e.target.id===id) updateSetVolumeInfo(); });
});
function saveSettings(){
  const name = document.getElementById('setName').value.trim() || settings.name;
  const l = parseFloat(document.getElementById('setL').value);
  const w = parseFloat(document.getElementById('setW').value);
  const h = parseFloat(document.getElementById('setH').value);
  const maxWeight = parseFloat(document.getElementById('setMaxWeight').value);
  const type = document.getElementById('setFleetType').value || 'custom';
  if(!l || !w || !h || !maxWeight){ toast(t('toast_fill_fields'),'warn'); return; }
  settings = {name, l, w, h, maxWeight, type};
  persistAll();
  toast(t('toast_settings_saved'));
  if(currentView==='kalkulator'){ drawContainerOnly(); if(lastCalc) runCalculation(); }
}

function renderDashboard(){
  const mc = document.getElementById('dashMasterCount');
  if(!mc) return;
  mc.textContent = master.length;
  document.getElementById('dashRiwayatCount').textContent = riwayat.length;
  if(riwayat.length>0){
    const avgVol = riwayat.reduce((s,r)=>s+r.volPct,0)/riwayat.length;
    const avgW = riwayat.reduce((s,r)=>s+r.weightPct,0)/riwayat.length;
    document.getElementById('dashAvgVol').textContent = avgVol.toFixed(1)+'%';
    document.getElementById('dashAvgWeight').textContent = avgW.toFixed(1)+'%';
  } else {
    document.getElementById('dashAvgVol').textContent = '–';
    document.getElementById('dashAvgWeight').textContent = '–';
  }
  const recentEl = document.getElementById('dashRecentList');
  const locale = currentLang==='id'?'id-ID':'en-US';
  if(riwayat.length===0){
    recentEl.innerHTML = `<p class="text-faint" style="font-size:12.5px;">${t('dash_no_history')}</p>`;
  } else {
    recentEl.innerHTML = riwayat.slice(0,5).map(r=>{
      const d = new Date(r.date);
      return `<div style="display:flex; align-items:center; justify-content:space-between; padding:9px 0; border-bottom:1px solid var(--border-soft); font-size:12.5px;">
        <span class="text-dim">${d.toLocaleDateString(locale,{day:'2-digit',month:'short'})}</span>
        <span class="pill pill-purple">${r.volPct.toFixed(1)}% vol</span>
        <span class="pill pill-green">${r.weightPct.toFixed(1)}% berat</span>
      </div>`;
    }).join('');
  }
}

function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

renderNav();
applyI18n();
loadSettingsForm();
navigate('dashboard');
restoreSession();
