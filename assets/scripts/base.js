window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const element = document.querySelector(`#TableOfContents a[href="#${entry.target.getAttribute('id')}"]`);
            if (element !== null) {
                if (entry.intersectionRatio > 0 && element) {
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                }
            }
        });
    });

    document.querySelectorAll('[id]').forEach((section) => {
        observer.observe(section);
    });

});