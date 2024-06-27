const btnGenerate = document.getElementById("gerar-pdf");

btnGenerate.addEventListener("click", () => {
    const conteudo = document.getElementById("conteudo");

    const options = {
        margin: [5, -2, 5, 5],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        JsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    html2pdf().set(options).from(conteudo).save();
});