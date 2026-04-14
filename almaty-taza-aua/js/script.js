document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();
  
    // 2. Navbar Mobile Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  
    // 3. Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      } else {
        navbar.style.padding = '15px 0';
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
      }
    });
  
    // 4. Initialize Chart.js for AQI
    const ctx = document.getElementById('aqiChart').getContext('2d');
    
    // Sample Data: Almaty AQI over a week (simulated)
    const labels = ['Дүйсенбі', 'Сейсенбі', 'Сәрсенбі', 'Бейсенбі', 'Жұма', 'Сенбі', 'Жексенбі'];
    const dataPoints = [120, 145, 160, 152, 110, 85, 90];
  
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(239, 68, 68, 0.6)'); // Danger Red
    gradient.addColorStop(1, 'rgba(239, 68, 68, 0.05)');
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'AQI (PM2.5 индексі)',
          data: dataPoints,
          borderColor: '#ef4444',
          backgroundColor: gradient,
          borderWidth: 3,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#ef4444',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: '#1f2937',
            padding: 12,
            titleFont: { family: 'Outfit', size: 14 },
            bodyFont: { family: 'Outfit', size: 14 },
            displayColors: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 200,
            grid: {
              color: 'rgba(0,0,0,0.05)',
              drawBorder: false
            },
            ticks: {
              font: { family: 'Outfit' },
              color: '#6b7280'
            }
          },
          x: {
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              font: { family: 'Outfit' },
              color: '#6b7280'
            }
          }
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
      }
    });
  
  });
