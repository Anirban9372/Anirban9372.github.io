const ideas = document.querySelectorAll('.idea');

ideas.forEach(function (idea) {
    idea.addEventListener('click', function () {
        idea.classList.toggle('expanded');
    });
});