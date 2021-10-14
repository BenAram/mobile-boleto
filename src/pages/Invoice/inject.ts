export default `
    if (location.href.includes("https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx")) {
        setTimeout(() => {
            document.querySelector(".txtChaveAcesso").value = "{code}";

            const bar = document.getElementById("barra-brasil");
            const form = document.getElementById("aspnetForm");
            const evr = document.getElementById("tudoSemRodape");
            const content = document.getElementById("conteudo");
            const footer = document.getElementById("rodape");

            document.body.removeChild(bar);
            form.removeChild(footer);

            for (let i = 0; i < evr.children.length; i++) {
                if (evr.children[i].id !== "conteudo") {
                    evr.removeChild(evr.children[i]);
                }
            }
            for (let i = 0; i < evr.children.length; i++) {
                if (evr.children[i].id !== "conteudo") {
                    evr.removeChild(evr.children[i]);
                }
            }
            for (let i = 0; i < content.children.length; i++) {
                if (content.children[i].id !== "conteudoDinamico") {
                    content.removeChild(content.children[i]);
                }
            }
            for (let i = 0; i < content.children.length; i++) {
                if (content.children[i].id !== "conteudoDinamico") {
                    content.removeChild(content.children[i]);
                }
            }
        }, 1)
    }
    if (location.href.includes("https://www.nfe.fazenda.gov.br/portal/consultaResumo.aspx")) {
        const namesItem = document.querySelectorAll("#aba_nft_0 .box tr td label");
        const valuesItem = document.querySelectorAll("#aba_nft_0 .box tr td span");

        const items = [];
        namesItem.forEach((el, index) => {
            items.push({
                name: el.textContent,
                value: valuesItem[index].textContent
            })
        })
        mostraAba(3);


        const $descriptions = document.querySelectorAll(".fixo-prod-serv-descricao span");
        const $quantitys = document.querySelectorAll(".fixo-prod-serv-qtd span");
        const $comercialUnitys = document.querySelectorAll(".fixo-prod-serv-uc span");
        const $values = document.querySelectorAll(".fixo-prod-serv-vb span");

        $descriptions.forEach((description, index) => {
            items.push({
                name: "Descrição",
                value: description.textContent
            })
            items.push({
                name: "Quantidade",
                value: $quantitys[index].textContent
            })
            items.push({
                name: "Unidade Comercial",
                value: $comercialUnitys[index].textContent
            })
            items.push({
                name: "Valor(R$)",
                value: $values[index].textContent
            })
        })

        ReactNativeWebView.postMessage(JSON.stringify(items));
    }
`