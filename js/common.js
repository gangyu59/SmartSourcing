document.addEventListener('DOMContentLoaded', () => {

  /* ── 导航高亮 ── */
  const current = location.pathname.split('/').pop();
  document.querySelectorAll('header .nav-links a').forEach(a=>{
    if(a.getAttribute('href')===current) a.classList.add('active');
  });

  /* ── 搜索建议 ── */
  const searchInput    = document.getElementById('searchInput');
  const suggestionList = document.getElementById('suggestionList');
  const dataMock = ['阿莫西林胶囊','阿司匹林','布洛芬','头孢克肟'];

  if(searchInput){
    searchInput.addEventListener('input',()=> {
      const kw = searchInput.value.trim();
      suggestionList.innerHTML='';
      if(!kw){ suggestionList.style.display='none'; return; }

      dataMock.filter(x=>x.includes(kw)).forEach(item=>{
        const li = document.createElement('li');
        li.textContent = item;
        li.onclick = ()=> {
          suggestionList.style.display='none';
          alert('批量报价场景请先创建采购计划并等待供应商报价，无法直接查看单品价格。');
        };
        suggestionList.appendChild(li);
      });
      suggestionList.style.display = suggestionList.children.length?'block':'none';
    });

    document.body.addEventListener('click',e=>{
      if(!searchInput.contains(e.target)) suggestionList.style.display='none';
    });
  }

});