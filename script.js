// 성적 그래프 예시 (Chart.js 사용)
const ctx = document.getElementById('myGradeChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['국어', '수학', '영어', '과학', 'NPS'], // NPS는 나의 개인 성과 지수
        datasets: [{
            label: '내 성적',
            data: [90, 85, 92, 88, 95], // 임시 데이터
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
