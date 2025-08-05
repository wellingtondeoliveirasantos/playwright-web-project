# Playwright Automation Project

Automação de testes utilizando Playwright para a aplicação PHP Travels ([automationexercise](automationexercise)). Este projeto é voltado para estudos, evolução e prática em testes automatizados end-to-end.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
  - [Instalação](#instalação)
  - [Execução dos Testes](#execução-dos-testes)
  - [Modo Interativo](#modo-interativo)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configurações Importantes](#configurações-importantes)
- [Boas Práticas](#boas-práticas)
- [Próximos Passos](#próximos-passos)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor](#autor)

---

## Sobre o Projeto

Este projeto tem como objetivo criar uma base sólida para automação de testes utilizando Playwright, configurado para rodar testes contra a aplicação [AutomationExercise](https://automationexercise.com/). Ele serve como um ambiente de aprendizado para explorar diferentes recursos da ferramenta, desde testes simples até configurações mais avançadas.

---

## Tecnologias Utilizadas

- Node.js
- Playwright
- JavaScript/TypeScript (conforme evolução do projeto)
- Git & GitHub

---

## Pré-requisitos

- Node.js (versão 18.x ou superior recomendada)
- npm (gerenciador de pacotes do Node.js)
- Navegador Chromium, Firefox ou WebKit (Playwright baixa automaticamente)

---

## Como Rodar o Projeto

### Instalação

1. Clone o repositório:

   ```bash
   git clone git@github.com:wellingtondeoliveirasantos/playwright-web-project.git
   cd seu-repo
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

### Execução dos Testes

Execute todos os testes com o comando:

```bash
npx playwright test
```

Esse comando executa os testes configurados na pasta `./tests`, com as configurações definidas no arquivo `playwright.config.ts` ou `playwright.config.js`.

### Modo Interativo (Playwright Test Runner)

Para abrir a interface visual dos testes, que facilita a execução seletiva e debug:

```bash
npx playwright test --ui
```

---

## Estrutura do Projeto

```
/
├── tests/                  (Diretório com os testes automatizados)
│   └── example.spec.js     (Exemplo de teste)
├── playwright.config.js    (Configurações do Playwright)
├── package.json            (Dependências e scripts do Node.js)
├── README.md               (Este arquivo)
└── .gitignore              (Arquivo para ignorar arquivos no git)
```

---

## Configurações Importantes

O arquivo `playwright.config.js` contém as principais configurações do projeto:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,            // Timeout padrão de 30 segundos por teste
  retries: 1,                // Tenta rodar novamente 1 vez em caso de falha
  use: {
    headless: false,         // Executa com navegador visível para facilitar debug
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,    // Timeout para ações como clicks e navegações
    baseURL: 'https://automationexercise.com',
  },
});
```

---

## Boas Práticas

- Escrever testes independentes e pequenos
- Utilizar seletores robustos para garantir estabilidade
- Usar `beforeEach` e `afterEach` para setup e teardown quando necessário
- Comentar testes e cenários importantes para melhor manutenção
- Controlar retries para balancear entre falhas pontuais e problemas reais
- Usar o modo headless para integração contínua e headful para debug local
- Manter os testes organizados na pasta `tests` e criar subpastas por funcionalidade

---

## Próximos Passos

- Adicionar mais testes que cubram os principais fluxos da aplicação
- Implementar geração de relatórios (HTML, JSON, etc)
- Integrar com CI/CD usando GitHub Actions para execução automática dos testes a cada push ou PR
- Explorar paralelismo e execução em múltiplos navegadores (Chromium, Firefox, WebKit)
- Adicionar testes com dados dinâmicos e mocks de API
- Aprender e aplicar page objects para melhor organização e reaproveitamento

---

## Contribuindo

Contribuições são bem-vindas! Para sugerir melhorias, por favor:

1. Faça um fork do projeto
2. Crie uma branch com a sua feature:

   ```bash
   git checkout -b minha-feature
   ```

3. Commit suas alterações:

   ```bash
   git commit -m 'Adiciona nova feature'
   ```

4. Faça push para a branch:

   ```bash
   git push origin minha-feature
   ```

5. Abra um Pull Request

---

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Autor

Wellington Santos  
[GitHub](https://github.com/wellingtondeoliveirasantos) | [LinkedIn](https://www.linkedin.com/in/wellington-staff-qa-expert/)