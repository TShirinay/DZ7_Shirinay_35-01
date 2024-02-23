const riddle = document.querySelectorAll('.riddle')

riddle.forEach(button => {
    const toggleBtn = button.querySelector('.toggle-btn')
    const answer = button.querySelector('.answer')
    toggleBtn.addEventListener('click',() => {
        answer.classList.toggle('hide')
        const answer2 = answer.classList.contains('hide')
        toggleBtn.innerHTML = answer2 ? 'Скрыть ответ': 'Показать ответ'
        toggleBtn.style.backgroundColor = answer2 ? 'yellow':'pink'
    })
})