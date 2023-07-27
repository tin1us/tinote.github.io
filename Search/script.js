
const searchData = [
  { title: '阅读须知', url: 'https://tin1us.github.io/tinote.github.io/readme' },
  { title: '哦！大青虫！垃圾桶！复兴号CR200j动力集中式动车组列车深度测评。', url: 'https://tin1us.github.io/tinote.github.io/200jcd' },
  { title: '【CRVlog】5631次 SS7C本务 25G车厢 达州～重庆北运转记录', url: 'https://tin1us.github.io/tinote.github.io/25gcd' },
  { title: '我用最便宜的方式摆烂了你的ae作业', url: 'https://tin1us.github.io/tinote.github.io/2023nbl' }
  { title: 'github index 源代码', url: 'https://github.com/tin1us/tinote.github.io' }
  { title: 'tin的哔哩哔哩', url: 'https://space.bilibili.com/523273411' }
  { title: 'tin的outlook邮箱', url: 'https://www.imagehub.cc/image/rweVBS' }
];

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', function() {
  const keyword = this.value.trim().toLowerCase();
  if(keyword.length > 0) {
    const filteredData = searchData.filter(function(item) {
      return item.title.toLowerCase().includes(keyword);
    });
    
    displayResults(filteredData);
  } else {
    clearResults();
  }
});

function displayResults(results) {
  searchResults.innerHTML = '';
  
  results.forEach(function(item) {
    const li = document.createElement('li');
    li.textContent = item.title;
    
    li.addEventListener('click', function() {
      window.location.href = item.url;
    });
    
    searchResults.appendChild(li);
  });
  
  searchResults.style.display = 'block';
}

function clearResults() {
  searchResults.innerHTML = '';
  searchResults.style.display = 'none';
}
