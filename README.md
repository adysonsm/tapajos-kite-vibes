# Tapajos Kite Vibes 🪁

## 📖 Sobre o Projeto

Tapajos Kite Vibes é uma aplicação web moderna para a comunidade de kitesurf na região do Rio Tapajós. A plataforma conecta entusiastas do esporte, oferece informações sobre condições de vento, spots locais, eventos e facilita o agendamento de aulas com instrutores certificados.

## 🚀 Funcionalidades

- **Monitoramento de Condições**: Acompanhe em tempo real as condições de vento e maré
- **Mapa de Spots**: Descubra os melhores locais para praticar kitesurf na região
- **Agenda de Eventos**: Fique por dentro de campeonatos e encontros da comunidade
- **Booking de Aulas**: Agende aulas com instrutores qualificados
- **Comunidade**: Conecte-se com outros praticantes e compartilhe experiências
- **Marketplace**: Compre e venda equipamentos usados

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)
- Git
- Virtualenv (recomendado)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/tapajos-kite-vibes.git
cd tapajos-kite-vibes
```

2. Crie e ative um ambiente virtual:
```bash
# Linux/Mac
python3 -m venv venv
source venv/bin/activate

# Windows
python -m venv venv
venv\Scripts\activate
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

4. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

5. Execute as migrações do banco de dados:
```bash
python manage.py migrate
```

6. Crie um superusuário (opcional):
```bash
python manage.py createsuperuser
```

## 💻 Como Executar

### Ambiente de Desenvolvimento

```bash
# Ativar ambiente virtual
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate  # Windows

# Executar servidor de desenvolvimento
python manage.py runserver

# A aplicação estará disponível em http://localhost:8000
```

### Ambiente de Produção

```bash
# Coletar arquivos estáticos
python manage.py collectstatic --noinput

# Executar com Gunicorn (exemplo)
gunicorn --workers 4 --bind 0.0.0.0:8000 tapajos_kite.wsgi:application
```

## 🛠️ Tecnologias Utilizadas

### Backend
- **Django 4.2** - Framework web Python
- **Django REST Framework** - API RESTful
- **PostgreSQL** - Banco de dados principal
- **Redis** - Cache e filas de tarefas
- **Celery** - Processamento assíncrono de tarefas

### Frontend
- **HTML5/CSS3** - Estrutura e estilização
- **JavaScript ES6+** - Interatividade
- **Bootstrap 5** - Framework CSS responsivo
- **Alpine.js** - Framework JavaScript reativo
- **Chart.js** - Visualização de dados

### Ferramentas e Serviços
- **Docker** - Containerização
- **Nginx** - Servidor web e proxy reverso
- **AWS S3** - Armazenamento de arquivos estáticos
- **SendGrid** - Envio de emails
- **Stripe** - Processamento de pagamentos

## 📁 Estrutura do Projeto

```
tapajos-kite-vibes/
├── apps/
│   ├── users/          # Gestão de usuários e autenticação
│   ├── spots/          # Informações sobre locais de prática
│   ├── weather/        # Dados meteorológicos e condições
│   ├── events/         # Eventos e campeonatos
│   ├── lessons/        # Sistema de agendamento de aulas
│   └── marketplace/    # Compra e venda de equipamentos
├── config/             # Configurações do Django
├── static/            # Arquivos estáticos (CSS, JS, imagens)
├── templates/         # Templates HTML
├── media/            # Arquivos enviados pelos usuários
├── requirements/     # Dependências do projeto
├── tests/           # Testes automatizados
└── docker/          # Configurações Docker
```

## 🤝 Como Contribuir

Adoramos contribuições da comunidade! Para contribuir com o projeto:

### 1. Fork e Clone
```bash
# Fork o projeto no GitHub
# Clone seu fork
git clone https://github.com/seu-usuario/tapajos-kite-vibes.git
cd tapajos-kite-vibes
```

### 2. Crie uma Branch
```bash
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
```

### 3. Padrões de Código

- **Python**: Seguimos PEP 8
  - Use `black` para formatação automática
  - Use `flake8` para linting
  - Docstrings em todas as funções públicas

- **JavaScript**: ESLint com configuração padrão
  - Use camelCase para variáveis e funções
  - Use CONST para valores imutáveis

- **Commits**: Mensagens claras e descritivas
  ```
  feat: adiciona nova funcionalidade X
  fix: corrige bug na validação de Y
  docs: atualiza documentação de Z
  style: formata código segundo padrões
  refactor: refatora módulo W
  test: adiciona testes para funcionalidade K
  ```

### 4. Testes
```bash
# Execute os testes antes de submeter
python manage.py test

# Com coverage
coverage run --source='.' manage.py test
coverage report
```

### 5. Submeta um Pull Request

1. Faça commit das suas mudanças
2. Push para seu fork
3. Abra um Pull Request descrevendo:
   - O que foi alterado
   - Por que foi alterado
   - Como testar as mudanças
   - Screenshots (se aplicável)

### Diretrizes para PR

- PRs devem ter descrição clara do problema e solução
- Incluir testes para novas funcionalidades
- Atualizar documentação quando necessário
- Aguardar aprovação de pelo menos 1 revisor
- Resolver todos os comentários antes do merge

## 🐛 Reportando Bugs

Encontrou um bug? Abra uma issue com:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots ou logs de erro
- Ambiente (OS, browser, versão Python)

## 📞 Contato

- **Website**: [www.tapajoskitevibes.com.br](https://www.tapajoskitevibes.com.br)
- **Email**: contato@tapajoskitevibes.com.br
- **Instagram**: [@tapajoskitevibes](https://instagram.com/tapajoskitevibes)
- **WhatsApp**: +55 (93) 99999-9999

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- Comunidade de kitesurf do Tapajós
- Todos os contribuidores do projeto
- Instrutores e escolas parceiras
- Patrocinadores e apoiadores

---

Feito com ❤️ pela comunidade kitesurf do Tapajós