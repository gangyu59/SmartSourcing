// 高亮当前页面导航（基于文件名）
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('header .right a');
  const current = location.pathname.split('/').pop();
  links.forEach(link => {
    if (link.getAttribute('href') === current) {
      link.style.fontWeight = 'bold';
      link.style.color = '#165ec9';
    }
  });
});