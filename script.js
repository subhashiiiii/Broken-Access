
// Simulated backend user data
const users = {
    "101": {
        username: "jane",
        email: "jane@example.com",
        message: "Welcome back, Jane!"
    },
    "102": {
        username: "admin",
        email: "admin@example.com",
        message: "FLAG: THM{IDOR_Exploited}"
    }
};

// Function to display profile based on user ID
function displayProfile(userId) {
    const profile = users[userId];
    const profileDiv = document.getElementById("profile");

    if (profile) {
        profileDiv.innerHTML = `
            <h2>Profile of ${profile.username}</h2>
            <p><strong>Email:</strong> ${profile.email}</p>
            <p><strong>Message:</strong> ${profile.message}</p>
        `;
    } else {
        profileDiv.innerHTML = `<p>User not found.</p>`;
    }
}

// Check for userId in URL parameters when page loads
window.addEventListener("load", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    if (userId) {
        displayProfile(userId);
    }
});

// Handle form submission
document.getElementById("profileForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const userId = document.getElementById("userId").value;
    displayProfile(userId);
});
