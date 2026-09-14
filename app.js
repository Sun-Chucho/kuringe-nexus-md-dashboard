const companies = [
  ['Redstone', 'Nightclub', 'https://www.redstonenightclubtz.com/md', '#301014', '#ff2432'],
  ['HQ', 'Real Estate', 'https://kuringe-real-estate.vercel.app/MD', '#10202a', '#33b3cf'],
  ['Mawio', 'Hospitality', 'https://mawio.vercel.app/MD', '#203126', '#73b75d'],
  ['Lighthouse', 'Hotel · Moshi', 'https://www.lighthousemoshi.com/md', '#1b2730', '#ebaf47'],
  ['Halls Moshi', 'Events & Halls', 'https://kuringehallsmoshi.com/md', '#30233b', '#b586ff'],
  ['Orange', 'Hotel · Arusha', 'https://www.orangehotelarusha.com/md', '#402413', '#ff8a21'],
  ['Mbezi', 'Events & Halls', 'https://www.kuringehallsmbezi.com/md', '#193333', '#27c7b0'],
  ['Casa', 'Hospitality', 'https://casa-cyan-psi.vercel.app/md', '#1a283b', '#50a6f6']
];
const grid = document.querySelector('#companyGrid');
grid.innerHTML = companies.map(([name, category, url, color, glow]) => {
  const domain = new URL(url).hostname;
  return `<a class="card" href="${url}" style="--card:${color};--glow:${glow}" aria-label="Open ${name} management system">
    <div class="card-header"><img class="company-logo" src="https://www.google.com/s2/favicons?domain=${domain}&sz=128" alt="${name} logo" onerror="this.style.display='none'"><span class="open-icon">↗</span></div>
    <div><p class="category">${category}</p><h2 class="company-name">${name}</h2></div>
    <div class="card-footer"><span>Management system</span><span>Enter</span></div></a>`;
}).join('');
const login = document.querySelector('#loginView'), dashboard = document.querySelector('#dashboardView'), password = document.querySelector('#password'), error = document.querySelector('#loginError');
function showDashboard(){login.classList.add('hidden');dashboard.classList.remove('hidden');password.value='';}
document.querySelector('#loginForm').addEventListener('submit', e => {e.preventDefault(); if(password.value === '1234'){sessionStorage.setItem('kuringe-md-auth','yes'); error.textContent=''; showDashboard();}else{error.textContent='Incorrect password. Please try again.';password.focus();}});
document.querySelector('#togglePassword').addEventListener('click', e => {const hidden=password.type==='password';password.type=hidden?'text':'password';e.currentTarget.textContent=hidden?'Hide':'Show';});
document.querySelector('#logoutButton').addEventListener('click',()=>{sessionStorage.removeItem('kuringe-md-auth');dashboard.classList.add('hidden');login.classList.remove('hidden');password.focus();});
if(sessionStorage.getItem('kuringe-md-auth')==='yes')showDashboard();
document.querySelector('#year').textContent=new Date().getFullYear();
