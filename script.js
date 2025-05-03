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

document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userId = document.getElementById("userId").value;
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
});
