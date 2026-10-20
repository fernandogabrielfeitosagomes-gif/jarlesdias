# Jarles Dias Personal

Site institucional em HTML, CSS e JavaScript puros (sem build, sem dependências) para Jarles Dias Personal, personal trainer e karatê no Centro de Sobral, CE.

## Estrutura

```
.
├── index.html        # Estrutura e conteúdo da página
├── style.css         # Estilos, cores e responsividade
├── main.js           # Menu, abas, FAQ, animações e formulário
├── config.js         # WhatsApp e telefone (edite aqui)
├── robots.txt
├── .nojekyll
├── .gitignore
└── assets/
    ├── hero.jpg      # Foto do topo
    └── favicon.svg
```

## Rodar localmente

Abra `index.html` no navegador, ou sirva a pasta:

```bash
python3 -m http.server 8000
```

Depois acesse http://localhost:8000.

## Publicar no GitHub Pages

1. Crie um repositório e envie estes arquivos para a branch `main`.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. O site fica disponível em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Personalizar

- **WhatsApp e telefone do formulário:** `config.js`. O telefone também aparece em texto em `index.html` (busque por `99272-6473`) e no link `tel:`.
- **Cores:** variáveis no início de `style.css` (`--sun`, `--dark`, `--ink`).
- **Textos, modalidades e FAQ:** `index.html`.
- **Foto do topo:** substitua `assets/hero.jpg` (ideal: pelo menos 1200 px de largura).

## Como o formulário funciona

Não há backend. Ao enviar, o site valida os campos e abre `wa.me` com a mensagem já escrita no WhatsApp do número configurado. Nenhum dado é armazenado.

## Pendências para fazer antes de divulgar

- Trocar `assets/hero.jpg` por uma foto de resolução maior.
- Incluir valores, horários e redes sociais reais, se desejado.
- Confirmar a autorização dos autores das avaliações citadas do Google.
- Adicionar tag `og:image` com URL absoluta e `<link rel="canonical">` quando o domínio final estiver definido.
- Se coletar dados além do WhatsApp, criar política de privacidade (LGPD).

## Testes realizados

Verificação de sintaxe do JavaScript e da estrutura de arquivos. Não foram executados Lighthouse nem testes em dispositivos reais.
