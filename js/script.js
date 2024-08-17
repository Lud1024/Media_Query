document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-image').forEach(item => {
        item.addEventListener('mouseover', function() {
            const originalSrc = this.src;
            const hoverSrc = this.getAttribute('data-hover');
            if (hoverSrc) {
                this.src = hoverSrc;
            }

            this.addEventListener('mouseout', function() {
                this.src = originalSrc;
            }, { once: true }); // El listener de 'mouseout' se elimina después de ejecutarse una vez
        });
    });
});
