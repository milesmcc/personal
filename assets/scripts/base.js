window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`#TableOfContents a[href="#${id}"]`).classList.add('active');
            } else {
                document.querySelector(`#TableOfContents a[href="#${id}"]`).classList.remove('active');
            }
        });
    });

    document.querySelectorAll('[id]').forEach((section) => {
        observer.observe(section);
    });

});