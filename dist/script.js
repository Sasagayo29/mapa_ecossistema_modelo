"use strict";
// NOTA: Este arquivo NÃO DEVE TER 'import { ... } from "chart.js"'.
// Ele depende do arquivo 'global.d.ts' e do script CDN no index.html.
// 3. SEUS DADOS, AGORA COM TIPAGEM
const ecosystemData = [
    {
        level: "Governo",
        color: "#3498db",
        actors: [
            {
                name: "Prefeitura de Paracatu",
                logo: "https://www.paracatu.mg.gov.br/img/logo_mobile.svg?1752863699",
                link: "https://www.paracatu.mg.gov.br/",
                description: "Órgão executivo municipal, responsável pela administração pública.",
            },
            {
                name: "Secretaria de Desenvolvimento",
                logo: "logos/placeholder.png",
                link: "#",
                description: "Promove o desenvolvimento econômico e social do município.",
            },
            {
                name: "Agência de Fomento Local",
                logo: "logos/placeholder.png",
                link: "#",
                description: "Oferece linhas de crédito e apoio para empresas locais.",
            },
        ],
    },
    {
        level: "Talento (Academia)",
        color: "#2ecc71",
        actors: [
            {
                name: "Unimontes Campus Paracatu",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPi-M_Pxz6Uya49shrCCNVvFAGg4-OffJ6WQ&s",
                link: "http://unimontes.br/campus-paracatu/",
                description: "Universidade estadual com cursos de graduação e pós-graduação.",
            },
            {
                name: "IFTM - Campus Paracatu",
                logo: "https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/eventos/evento-1418-logo_organizador.jpeg",
                link: "https://www.iftm.edu.br",
                description: "Instituto Federal que oferece cursos técnicos, superiores e de extensão.",
            },
            {
                name: "SENAI",
                logo: "https://logodownload.org/wp-content/uploads/2019/08/senai-logo-1.png",
                link: "https://www.fiemg.com.br/senai/",
                description: "Focado na formação profissional para a indústria.",
            },
        ],
    },
    {
        level: "Capital (Investidores)",
        color: "#f1c40f",
        actors: [
            {
                name: "Bancos de Fomento",
                logo: "logos/placeholder.png",
                link: "#",
                description: "Instituições financeiras que apoiam projetos de desenvolvimento.",
            },
            {
                name: "Investidores-Anjo Locais",
                logo: "logos/placeholder.png",
                link: "#",
                description: "Pessoas físicas que investem em startups em troca de participação.",
            },
            {
                name: "Programas de Microcrédito",
                logo: "logos/placeholder.png",
                link: "#",
                description: "Pequenos empréstimos para empreendedores e pequenos negócios.",
            },
        ],
    },
    {
        level: "Empresas",
        color: "#e74c3c",
        actors: [
            {
                name: "Startups de Agrotech",
                logo: "logos/placeholder.png",
                link: "#",
                description: "Empresas de base tecnológica focadas em soluções para o agronegócio.",
            },
            {
                name: "Kinross Brasil Mineração",
                logo: "https://www.idis.org.br/wp-content/uploads/2021/03/final_kinross.png",
                link: "https://www.kinrossbrasil.com.br/",
                description: "Grande empresa do setor de mineração com operação na cidade.",
            },
            {
                name: "Comércio Local Inovador",
                logo: "logos/placeholder.png",
                link: "#",
                description: "Lojas e serviços que utilizam tecnologia para inovar.",
            },
        ],
    },
    {
        level: "Infraestrutura e Suporte",
        color: "#9b59b6",
        actors: [
            {
                name: "Associação Comercial (ACE)",
                logo: "logos/ace.png",
                link: "https://www.acecdlparacatu.com.br/ace",
                description: "Representa e apoia os empresários e comerciantes locais.",
            },
            {
                name: "Sebrae",
                logo: "logos/sebrae.png",
                link: "https://sebrae.com.br/sites/PortalSebrae/ufs/mg",
                description: "Apoio às micro e pequenas empresas, fomentando o empreendedorismo.",
            },
            {
                name: "Espaços de Coworking",
                logo: "logos/placeholder.png",
                link: "#",
                description: "Escritórios compartilhados que promovem networking e colaboração.",
            },
        ],
    },
    {
        level: "Comunidade",
        color: "#e67e22",
        actors: [
            {
                name: "Meetups de Tecnologia",
                logo: "logos/placeholder.png",
                link: "#",
                description: "Encontros informais para profissionais de tecnologia trocarem ideias.",
            },
            {
                name: "Eventos de Empreendedorismo",
                logo: "logos/placeholder.png",
                link: "#",
                description: "Feiras, palestras e competições para fomentar novos negócios.",
            },
            {
                name: "Grupos de Desenvolvedores",
                logo: "logos/placeholder.png",
                link: "#",
                description: "Comunidades online e presenciais para desenvolvedores de software.",
            },
        ],
    },
];
// 4. LÓGICA DA APLICAÇÃO COM TIPAGEM
document.addEventListener("DOMContentLoaded", () => {
    // Selecionar elementos do DOM com checagem de tipo
    const actorsList = document.getElementById("actors-list");
    const actorsDisplay = document.getElementById("actors-display");
    const clearFilterBtn = document.getElementById("clear-filter-btn");
    const tooltip = document.getElementById("tooltip");
    const canvas = document.getElementById("ecosystemChart");
    // Checagem de segurança: garantir que os elementos existem antes de usá-los
    if (!actorsList ||
        !actorsDisplay ||
        !clearFilterBtn ||
        !tooltip ||
        !canvas) {
        console.error("Erro: Um ou mais elementos essenciais do DOM não foram encontrados.");
        return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        console.error("Erro: Não foi possível obter o contexto 2D do canvas.");
        return;
    }
    // NOTA: A linha Chart.register(...) foi removida.
    // Ela não é necessária ao usar o CDN, pois ele auto-registra os componentes.
    // Função para exibir os atores, com parâmetros tipados
    const displayActors = (category) => {
        actorsList.innerHTML = ""; // Limpa a lista
        const actorsToShow = category
            ? category.actors
            : ecosystemData.flatMap((cat) => cat.actors);
        const displayHeader = actorsDisplay.querySelector("h3");
        const displayParagraph = actorsDisplay.querySelector("p");
        if (displayHeader) {
            displayHeader.innerText = category
                ? `Atores de: ${category.level}`
                : "Todos os Atores do Ecossistema";
        }
        if (displayParagraph) {
            displayParagraph.style.display = "none";
        }
        clearFilterBtn.classList.toggle("hidden", !category);
        ecosystemData.forEach((cat) => {
            cat.actors.forEach((actor) => {
                if (actorsToShow.includes(actor)) {
                    const listItem = document.createElement("li");
                    const link = document.createElement("a");
                    link.href = actor.link;
                    link.target = "_blank";
                    link.rel = "noopener noreferrer";
                    link.textContent = actor.name;
                    listItem.appendChild(link);
                    listItem.style.borderLeftColor = cat.color;
                    listItem.addEventListener("mouseenter", (event) => {
                        tooltip.innerHTML = `
                            <img src="${actor.logo}" alt="Logo de ${actor.name}">
                            <p>${actor.description}</p>
                        `;
                        tooltip.style.display = "block";
                    });
                    listItem.addEventListener("mousemove", (event) => {
                        tooltip.style.left = `${event.pageX + 15}px`;
                        tooltip.style.top = `${event.pageY + 15}px`;
                    });
                    listItem.addEventListener("mouseleave", () => {
                        tooltip.style.display = "none";
                    });
                    actorsList.appendChild(listItem);
                }
            });
        });
    };
    // Configuração do Gráfico
    const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ecosystemData.map((item) => item.level),
            datasets: [
                {
                    data: ecosystemData.map(() => 1),
                    backgroundColor: ecosystemData.map((item) => item.color),
                    borderWidth: 2,
                    borderColor: "#ffffff",
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                },
            },
            // CORREÇÃO: Usamos 'any' aqui porque não estamos importando os tipos
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const clickedIndex = elements[0].index;
                    displayActors(ecosystemData[clickedIndex]);
                }
            },
        },
    });
    // Event listener para o botão de limpar
    clearFilterBtn.addEventListener("click", () => displayActors(null));
});
