# 🗺️ Mapa Interativo do Ecossistema de Inovação

Este projeto é uma visualização de dados interativa, em formato de "gráfico roleta", que mapeia os atores de um ecossistema de inovação. A aplicação foi desenvolvida com HTML, CSS e TypeScript, utilizando a biblioteca Chart.js para a renderização dos gráficos.

O exemplo atual está focado no ecossistema da cidade de Paracatu-MG, mas pode ser facilmente adaptado para qualquer região.

## ✨ Funcionalidades

* **Visualização em Gráfico:** Apresenta as principais categorias do ecossistema (Governo, Academia, Empresas, etc.) em um gráfico de pizza (doughnut).
* **Filtro Interativo:** Ao clicar em uma fatia do gráfico, a lista ao lado é filtrada, exibindo apenas os atores daquela categoria.
* **Tooltip com Detalhes:** Ao passar o mouse sobre o nome de um ator na lista, um card flutuante exibe sua logo e uma breve descrição.
* **Links Externos:** Ao clicar no nome de um ator, o usuário é redirecionado para o site oficial em uma nova aba.
* **Limpar Filtro:** Um botão permite limpar a seleção e exibir todos os atores de todas as categorias.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica da página.
* **CSS3:** Estilização moderna, layout com Flexbox e animações do tooltip.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática, garantindo um código mais robusto e organizado.
* **Chart.js:** Biblioteca para a criação do gráfico de pizza interativo.
* **Node.js (Ambiente):** Necessário para instalar os pacotes e executar os scripts.
* **serve:** Pacote npm para rodar um servidor web local simples.

## 🛠️ Como Executar o Projeto

Para rodar este projeto localmente, você precisará ter o [Node.js](https://nodejs.org/en/) (que inclui o npm) instalado em sua máquina.

1.  **Clone o repositório** (ou simplesmente use os arquivos locais):
    ```bash
    # Se você já tem os arquivos, pule este passo
    git clone https://[URL-DO-SEU-REPOSITORIO].git
    cd mapa
    ```

2.  **Instale as dependências:**
    Este projeto usa TypeScript e o Chart.js.
    ```bash
    npm install typescript chart.js
    ```

3.  **Compile o TypeScript:**
    O código-fonte está em `src/script.ts`. Precisamos compilá-lo para JavaScript (o que o navegador entende), o que criará a pasta `dist/`:
    ```bash
    npx tsc
    ```

4.  **Inicie o servidor local:**
    O navegador bloqueia módulos (`type="module"`) de rodarem a partir de arquivos locais (`file:///`). Precisamos de um servidor. Usaremos o pacote `serve` do npm para isso.
    ```bash
    npx serve
    ```

5.  **Acesse no navegador:**
    Após rodar o comando acima, o terminal mostrará um endereço. Abra seu navegador e acesse:
    ```
    http://localhost:3000
    ```
    (A porta pode ser diferente, como 5000 ou 8080. Use o endereço que aparecer no seu terminal).

## 🗂️ Estrutura de Pastas

```
mapa/
├── dist/
│   └── script.js         <-- (JavaScript compilado, usado pelo HTML)
├── node_modules/
│   └── ...               <-- (Dependências instaladas)
├── src/
│   ├── global.d.ts       <-- (Definição de tipos globais para o Chart.js)
│   └── script.ts         <-- (Código-fonte principal em TypeScript)
├── index.html            <-- (Arquivo principal da página)
├── package.json
├── package-lock.json
├── README.md             <-- (Este arquivo)
├── style.css             <-- (Arquivo de estilos)
└── tsconfig.json         <-- (Configurações do compilador TypeScript)
```

## 🎨 Como Personalizar (Adicionar Seus Próprios Dados)

Toda a lógica e os dados do ecossistema estão centralizados no arquivo **`src/script.ts`**.

1.  Abra o arquivo `src/script.ts`.
2.  Encontre a variável `const ecosystemData: EcosystemCategory[]`.
3.  Você pode editar, adicionar ou remover categorias (níveis) e atores (actors) dentro desta variável. A estrutura é a seguinte:

```typescript
const ecosystemData: EcosystemCategory[] = [
    {
        level: "Nome da Categoria",
        color: "#corHex",
        actors: [
            {
                name: "Nome do Ator",
                logo: "caminho/para/logo.png", // ou um link https://...
                link: "[https://site-do-ator.com](https://site-do-ator.com)",
                description: "Breve descrição do que o ator faz."
            },
            // ...outros atores
        ]
    },
    // ...outras categorias
];
```
4. Após qualquer alteração no src/script.ts, você precisa recompilar o código rodando npx tsc no terminal.
5. Recarregue a página no navegador (dê um Ctrl+Shift+R para limpar o cache) para ver suas mudanças.

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. (Você pode adicionar um arquivo `LICENSE` se quiser, o MIT é uma boa escolha padrão).
