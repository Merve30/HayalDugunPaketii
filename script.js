function calculateInstallments(price) {
    const result = `
        6 Ay: ${(price / 6).toFixed(2)} TL/ay | 
        12 Ay: ${(price / 12).toFixed(2)} TL/ay | 
        18 Ay: ${(price / 18).toFixed(2)} TL/ay
    `;
    document.getElementById("installmentResult").innerText = result;
}