document.getElementById("topupForm").addEventListener("submit", function(e){
  e.preventDefault();

  const playerId = document.getElementById("playerId").value;
  const game = document.getElementById("game").value;
  const amount = document.getElementById("amount").value;
  const payment = document.getElementById("payment").value;

  const status = document.getElementById("status");

  // simulasi proses otomatis
  status.innerText = "⏳ Memproses top up kamu...";

  setTimeout(() => {
    status.innerText = `✅ Top up ${amount} untuk ID ${playerId} (${game}) berhasil melalui ${payment.toUpperCase()}!`;
  }, 2000);
});
