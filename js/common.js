document.addEventListener('DOMContentLoaded', () => {
  // 高亮当前导航
  const navLinks = document.querySelectorAll('header .nav-links a');
  const current = location.pathname.split('/').pop();
  navLinks.forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });

  // 搜索建议功能
  const searchInput = document.getElementById('searchInput');
  const suggestionList = document.getElementById('suggestionList');
  const suggestions = ['阿莫西林胶囊', '阿司匹林', '布洛芬', '感冒灵', '头孢克肟'];

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const value = this.value.trim();
      suggestionList.innerHTML = '';
      if (value) {
        const matched = suggestions.filter(item => item.includes(value));
        matched.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          li.onclick = () => {
            searchInput.value = item;
            suggestionList.style.display = 'none';
            window.location.href = 'detail.html'; // 可改为带参数跳转
          };
          suggestionList.appendChild(li);
        });
        suggestionList.style.display = matched.length ? 'block' : 'none';
      } else {
        suggestionList.style.display = 'none';
      }
    });

    document.body.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target)) {
        suggestionList.style.display = 'none';
      }
    });
  }
});