document.addEventListener('DOMContentLoaded', () => {
    // Array of members
    const members = [
        'B. Vanisinha',
        'Chetkuri Laxmi Prasanna',
        'Shreya Reddy',
        'Sairam',
        'Nukala Siri Chandana',
        'Thrived',
        'Jangam Pranav Kumar',
        'Divija Reddy',
        'N. Sirichandana',
        'Chiluveru Girish',
        'Abhishek',
        'Kondavathri Sreeja',
        'Maroju Shiva Prasad',
        'D. Deekshita Shubha',
        'Sri Niharika. K',
        'Pranathi',
        'Indira P',
        'Thota Siddartha',
        'Suhas',
        'T Jayashree Indrani',
        'Lalith Srinandan',
        'Chenna Madhu Shalini',
        'Karthika Reddy',
        'D Meghana',
        'Peddi Sreya Reddy',
        'Harshitha',
        'Ravali Thippani',
        'K. Yashwanth Chary',
        'M. Abhigna Sree',
        'Vadithya Saritha',
        'A. Harini',
        'Abhinandan Goud',
        'Shirath Reddy',
        'Akash',
        'Bijjula Dharani',
        'M. Girija Sundari',
        'Hasini Ananthula'
    ];

    // Add members to the list
    const membersList = document.getElementById('membersList');
    members.forEach(member => {
        const li = document.createElement('li');
        li.textContent = member;
        membersList.appendChild(li);
    });

    // Confetti colors
    const confettiColors = ['#ff0', '#f0f', '#0ff', '#0f0', '#f00', '#00f'];

    // Function to create a single confetti piece
    const createConfettiPiece = () => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.setProperty('--confetti-color', confettiColors[Math.floor(Math.random() * confettiColors.length)]);
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 1 + 1}s`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        return confetti;
    };

    // Function to start the confetti animation
    const startConfetti = () => {
        const confettiContainer = document.getElementById('confettiContainer');
        for (let i = 0; i < 200; i++) { // Adjust the number for more or less confetti
            const confettiPiece = createConfettiPiece();
            confettiContainer.appendChild(confettiPiece);
            setTimeout(() => {
                confettiPiece.remove();
            }, 3000); // Remove confetti after 2 seconds
        }
    };

    // Trigger the confetti animation when the page loads
    startConfetti();
});
