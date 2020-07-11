window.addEventListener('DOMContentLoaded', () => {
    // Add nodes with class `toc-include` to the ToC
    let tocExtra = document.querySelector("#toc-extra");
    if (tocExtra !== null) {
        document.querySelectorAll(".toc-include").forEach(item => {
            let liNode = document.createElement("li");
            let aNode = document.createElement("a");
            aNode.href = "#" + item.id;
            aNode.appendChild(document.createTextNode(item.textContent));
            liNode.appendChild(aNode);
            tocExtra.appendChild(liNode);
        });
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const element = document.querySelector(`.toc a[href="#${entry.target.getAttribute('id')}"]`);
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