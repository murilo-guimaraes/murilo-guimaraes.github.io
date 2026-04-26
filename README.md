# Portfólio Acadêmico & Tech Hub

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=murilo-guimaraes&show_icons=true&theme=transparent&title_color=ff6b00&icon_color=ff6b00&text_color=ededed&hide_border=true" width="600" alt="GitHub Stats" />
</div>

<br />

### Proposta do Projeto

Desenvolvido para unir estética e performance, o ecossistema atua como um hub central de documentação. O foco é a organização estratégica da trajetória estudantil, produção científica e projetos de engenharia de software dentro do curso de ADS, através de uma interface leve e intuitiva.

---

### Tech Stack & Ferramentas

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  &nbsp;
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  &nbsp;
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  &nbsp;
  <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white"/>
  &nbsp;
  <img src="https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white"/>
  &nbsp;
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
</p>

---
### Visualização Online

O ecossistema está publicado e opera em uma arquitetura de **Bento Grid** modular, oferecendo uma experiência fluida com suporte nativo a **Adaptive Themes**.

**Acesse o projeto:** [murilo-guimaraes.github.io/website-portfolio/](https://murilo-guimaraes.github.io/website-portfolio/)

---

### Filosofia e Evolução do Projeto

A transição para esta nova arquitetura foi motivada pela necessidade de superar os gargalos da versão anterior. O projeto antigo, embora funcional, carregava uma **complexidade excessiva** e uma **má performance**, resultado direto de uma grande quantidade de efeitos visuais pesados, um alto número de dependências externas e o acúmulo de scripts desnecessários.

Nesta reconstrução, o foco total foi o **Refinamento Técnico**. O objetivo foi converter uma estrutura anteriormente pesada em uma interface de alta fidelidade, baseada em três pilares:

* **Arquitetura Zero-Dependency**: Migração integral para *Vanilla JS*, eliminando o overhead de bibliotecas externas e garantindo carregamento instantâneo.
* **Design Bento Modular**: Organização visual baseada em grids escaneáveis, otimizando a hierarquia de informações e o equilíbrio estético.
* **Minimalismo Estrutural**: Foco em contraste nítido, estados dinâmicos e tipografia Inter, unindo a sobriedade acadêmica à eficiência da engenharia moderna.

---

### Changelog v26.4.26

Esta iteração consolida a robustez da manipulação de dados via DOM e a maturidade da UX:

* **Advanced Control Panel**: Centralização de ferramentas e opções avançadas em um painel lateral retrátil para limpeza da interface principal.
* **Engine de Ordenação Multicritério**: Lógica de filtragem por Data, Nome e Status com feedback visual imediato.
* **Algoritmo de Prioridade Dinâmica**: Reorganização inteligente do DOM para destacar projetos finalizados e pesquisas concluídas.
* **Global Reset State**: Função de limpeza que restaura o estado original da aplicação (filtros e ordem) em um único ciclo de execução.
* **Otimização de Renderização**: Auditoria completa de scripts para garantir que cada função respeite o ciclo de vida do navegador, reduzindo drasticamente o consumo de memória.

---
### Estrutura de Arquivos

```
├── Colaboratory/           # Documentação técnica e notas de aula
│   ├── Artigos/            # Notas e resumos em formato Markdown/Notebook
│   └── Relatórios/         # Documentação de algoritmos e protocolos
├── Pesquisas/              # Produção acadêmica formal
│   ├── Artigos/            # Arquivos .tex e exportações em PDF
│   └── Relatórios/         # Relatórios técnicos e científicos (PDF/LaTeX)
├── src/                    # Recursos do sistema
│   └── Projetos/           # Módulos específicos da interface de projetos
├── index.html              # Núcleo da aplicação (Bento Grid)
├── script.js               # Lógica de manipulação do DOM e estados
├── style.css               # Design System e definições visuais
└── destaque.png            # Ativo visual principal da interface
