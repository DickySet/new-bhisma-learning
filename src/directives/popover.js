// src/directives/popover.js
export default {
    mounted(el, binding) {
        // Membuat elemen popover
        let popover = document.createElement('div');
        popover.className = 'popover';
        popover.innerText = binding.value;
        popover.style.position = 'absolute';
        popover.style.background = 'white';
        popover.style.border = '1px solid black';
        popover.style.padding = '5px';
        popover.style.display = 'none';
        popover.style.zIndex = '10000';

        // Menambahkan elemen popover ke elemen induk
        document.body.appendChild(popover);
        el._popover = popover;

        // Menyimpan referensi ke event handler
        el._showPopover = () => {
            const rect = el.getBoundingClientRect();
            popover.style.display = 'block';
            popover.style.top = `${rect.bottom + window.scrollY}px`;
            popover.style.left = `${rect.left + window.scrollX}px`;
        };

        el._hidePopover = () => {
            popover.style.display = 'none';
        };

        // Event listener untuk menampilkan popover
        el.addEventListener('mouseenter', el._showPopover);

        // Event listener untuk menyembunyikan popover
        el.addEventListener('mouseleave', el._hidePopover);
    },
    unmounted(el) {
        // Menghapus event listener ketika elemen dihapus
        el.removeEventListener('mouseenter', el._showPopover);
        el.removeEventListener('mouseleave', el._hidePopover);
        if (el._popover) {
            document.body.removeChild(el._popover);
        }
    },
};
