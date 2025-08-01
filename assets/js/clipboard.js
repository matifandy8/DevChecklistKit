// clipboard.js

function copySection(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied to clipboard!');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-message').textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-16');
  toast.classList.add('opacity-100', 'translate-y-0');
  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-16');
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  const copyCommandBtn = document.getElementById("copy-command");
  if (copyCommandBtn) {
    copyCommandBtn.addEventListener("click", () => {
      const code = document.querySelector("code").innerText;
      navigator.clipboard.writeText(code).then(() => {
        const button = copyCommandBtn;
        const originalText = button.querySelector("span").textContent;
        button.querySelector("span").textContent = "Copied!";
        setTimeout(() => {
          button.querySelector("span").textContent = originalText;
        }, 1500);
      });
    });
  }
});
