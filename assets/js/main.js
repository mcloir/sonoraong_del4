/*=============================================
  APP SONORA MISSÃO MUSICAL - MAIN.JS
=============================================*/

// Espera o DOM carregar para executar o script
document.addEventListener("DOMContentLoaded", () => {
  /*=============================================
    1. COMPONENTES (Ex: Menu Hambúrguer)
  =============================================*/
  const initMobileMenu = () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    if (menuToggle && mobileNav) {
      menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("is-active");
        mobileNav.classList.toggle("is-active");
      });
    }
  };

  /*=============================================
    2. SISTEMA DE TEMPLATES (Conteúdo das Páginas)
  =============================================*/
  const templates = {
    // Template da Página Inicial
    home: `
      <section id="hero" class="container">
        <h2>Música, Futuro e Oportunidade</h2>
        <p>
          Ensinamos música para crianças e adolescentes em situação de
          vulnerabilidade na Paraíba, oferecendo um caminho de expressão,
          cultura e apoio psicossocial.
        </p>
        <a href="/cadastro" class="btn btn-primary nav-link" data-route="cadastro">Quero Apoiar</a>
      </section>
      <div class="container">
        <section id="sobre" class="row">
          <div class="col-md-6">
            <h2>Nossa Missão</h2>
            <p>
              A Sonora Missão Musical nasceu do sonho de unir gerações através
              da música. Nossa missão é oferecer gratuitamente aulas de
              instrumentos tradicionais da Paraíba, rock e música clássica,
              criando um ambiente seguro para o desenvolvimento social e
              emocional de nossos alunos.
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="assets/images/missao-imagem.jpg"
              alt="Crianças aprendendo música"
              style="border-radius: var(--border-radius)"
            />
          </div>
        </section>
        <hr style="border-color: var(--color-tertiary-earth)" />
        <section id="contato" class="row">
          <div class="col-md-6">
            <h2>Entre em Contato</h2>
            <p>
              Adoraríamos ouvir você. Seja para parcerias, dúvidas ou para
              conhecer nosso espaço.
            </p>
          </div>
          <div class="col-md-6">
            <address>
              <strong>Sonora Missão Musical</strong><br />
              Rua da Esperança, 14 - Bairro da Música<br />
              Campina Grande, PB, CEP: 58400-530<br />
              <br />
              <strong>Telefone:</strong>
              <a href="tel:+5583999991414">(83) 99999-1414</a><br />
              <strong>Email:</strong>
              <a href="mailto:contato@sonoramm.org">contato@sonoramm.org</a>
            </address>
          </div>
        </section>
      </div>
    `,
    // Template da Página de Projetos
    projetos: `
      <main class="container">
        <section id="nossos-projetos">
          <h2 style="text-align: center; margin-bottom: var(--space-xl)">
            Nossos Projetos Sociais
          </h2>
          <div class="row">
            <div class="col-lg-4 col-md-6" id="pifanos">
              <article class="card">
                <div class="card-image">
                  <picture>
                    <source
                      srcset="assets/images/pifanosezabumba.webp"
                      type="image/webp"
                    />
                    <img
                      src="assets/images/pifanosezabumba.jpg"
                      alt="Alunos tocando pífanos e zabumbas"
                    />
                  </picture>
                </div>
                <div class="card-body">
                  <h3 class="card-title">Orquestra de Pífanos e Percussão</h3>
                  <div class="card-tags">
                    <span class="badge badge-sand">Cultura Local</span>
                    <span class="badge badge-blue">Percussão</span>
                  </div>
                  <p>
                    Resgatando os sons tradicionais da Paraíba, este projeto
                    ensina pífano, zabumba e triângulo, conectando os alunos com
                    suas raízes.
                  </p>
                  <a href="/cadastro" class="btn btn-primary nav-link" data-route="cadastro">Quero Ajudar</a>
                </div>
              </article>
            </div>
            <div class="col-lg-4 col-md-6" id="rock">
              <article class="card">
                <div class="card-image">
                  <picture>
                    <source srcset="assets/images/rock.webp" type="image/webp" />
                    <img
                      src="assets/images/rock.jpg"
                      alt="Banda de rock de jovens"
                    />
                  </picture>
                </div>
                <div class="card-body">
                  <h3 class="card-title">Acordes do Rock</h3>
                  <div class="card-tags">
                    <span class="badge badge-pink">Moderno</span>
                    <span class="badge badge-blue">Cordas</span>
                  </div>
                  <p>
                    Aulas de guitarra, baixo, bateria e vocal, focadas na
                    expressão pessoal, disciplina e no trabalho em equipe.
                  </p>
                  <a href="/cadastro" class="btn btn-primary nav-link" data-route="cadastro">Quero Ajudar</a>
                </div>
              </article>
            </div>
            <div class="col-lg-4 col-md-6" id="classica">
              <article class="card">
                <div class="card-image">
                  <picture>
                    <source
                      srcset="assets/images/camerata.webp"
                      type="image/webp"
                    />
                    <img
                      src="assets/images/camerata.jpg"
                      alt="Crianças em aula de violino"
                    />
                  </picture>
                </div>
                <div class="card-body">
                  <h3 class="card-title">Camerata Clássica Infantil</h3>
                  <div class="card-tags">
                    <span class="badge badge-sand">Clássico</span>
                    <span class="badge badge-blue">Orquestra</span>
                  </div>
                  <p>
                    Focado na beleza da música clássica, este projeto oferece
                    aulas de violino, violoncelo e teoria musical avançada.
                  </p>
                  <a href="/cadastro" class="btn btn-primary nav-link" data-route="cadastro">Quero Ajudar</a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    `,
    // Template da Página de Cadastro (COM VALIDAÇÃO)
    cadastro: `
      <div class="container">
        <div class="row">
          <div class="col-lg-8" style="grid-column: 3 / span 8; margin: 0 auto">
            <h1 style="text-align: center">Junte-se a Nós!</h1>
            <p style="text-align: center">
              Preencha o formulário abaixo para se cadastrar como voluntário ou
              apoiador. Entraremos em contato em breve.
            </p>

            <form id="cadastro-form" method="POST" novalidate>
              <fieldset>
                <legend>Seus Dados Pessoais</legend>

                <div id="form-status-message"></div>

                <div class="form-group">
                  <label for="nome">Nome Completo:</label>
                  <input type="text" id="nome" name="nome_completo" required />
                  <p class="form-error-message" id="error-nome"></p>
                </div>

                <div class="form-group">
                  <label for="email">E-mail:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="seu.email@exemplo.com"
                  />
                  <p class="form-error-message" id="error-email"></p>
                </div>

                <div class="row">
                  <div class="col-md-6 form-group">
                    <label for="cpf">CPF:</label>
                    <input
                      type="text"
                      id="cpf"
                      name="cpf"
                      required
                      placeholder="000.000.000-00"
                    />
                    <p class="form-error-message" id="error-cpf"></p>
                  </div>
                  <div class="col-md-6 form-group">
                    <label for="telefone">Telefone (com DDD):</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      placeholder="(00) 00000-0000"
                    />
                    <p class="form-error-message" id="error-telefone"></p>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="nascimento">Data de Nascimento:</label>
                  <input
                    type="date"
                    id="nascimento"
                    name="data_nascimento"
                    required
                  />
                  <p class="form-error-message" id="error-nascimento"></p>
                </div>
              </fieldset>

              <fieldset>
                <legend>Seu Endereço</legend>
                <div class="row">
                  <div class="col-md-4 form-group">
                    <label for="cep">CEP:</label>
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      required
                      placeholder="00000-000"
                    />
                    <p class="form-error-message" id="error-cep"></p>
                  </div>
                  <div class="col-md-8 form-group">
                    <label for="endereco">Endereço (Rua, Nº, Bairro):</label>
                    <input type="text" id="endereco" name="endereco" required />
                    <p class="form-error-message" id="error-endereco"></p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 form-group">
                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required />
                    <p class="form-error-message" id="error-cidade"></p>
                  </div>
                  <div class="col-md-6 form-group">
                    <label for="estado">Estado:</label>
                    <select id="estado" name="estado" required>
                      <option value="">Selecione...</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option valuea="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </select>
                    <p class="form-error-message" id="error-estado"></p>
                  </div>
                </div>
              </fieldset>
              <button type="submit" class="btn btn-primary" style="width: 100%">
                Enviar Cadastro
              </button>
            </form>
          </div>
        </div>
      </div>
    `,
  };

  /*=============================================
    3. VALIDAÇÃO AVANÇADA DE FORMULÁRIO
  =============================================*/

  // Função de consistência de dados para CPF (Algoritmo real)
  const validaCPF = (cpf) => {
    cpf = String(cpf).replace(/[^\d]+/g, ""); // Remove caracteres não numéricos
    if (cpf.length !== 11) return false;
    if (/^(\d)\1+$/.test(cpf)) return false; // Verifica se todos os dígitos são iguais

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++)
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++)
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true; // CPF válido
  };

  // Função para validar email
  const validaEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Função para exibir/limpar erros
  const setErro = (id, mensagem) => {
    const el = document.getElementById(id);
    if (el) {
      el.innerText = mensagem;
      el.style.display = mensagem ? "block" : "none";
    }
  };

  // Função principal que "liga" a validação na página de cadastro
  const initCadastroForm = () => {
    const form = document.getElementById("cadastro-form");
    if (!form) return; // Só executa se o formulário existir na página

    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Impede o envio tradicional
      let isValid = true; // Flag de validação

      // Seleciona campos
      const nome = document.getElementById("nome");
      const email = document.getElementById("email");
      const cpf = document.getElementById("cpf");
      const telefone = document.getElementById("telefone");
      const nascimento = document.getElementById("nascimento");
      const statusMessage = document.getElementById("form-status-message");

      // *** NOVOS CAMPOS DE ENDEREÇO ***
      const cep = document.getElementById("cep");
      const endereco = document.getElementById("endereco");
      const cidade = document.getElementById("cidade");
      const estado = document.getElementById("estado");

      // Limpa erros antigos
      setErro("error-nome", "");
      setErro("error-email", "");
      setErro("error-cpf", "");
      setErro("error-telefone", "");
      setErro("error-nascimento", "");
      statusMessage.className = "";
      statusMessage.innerText = "";

      // *** NOVOS ERROS DE ENDEREÇO LIMPOS ***
      setErro("error-cep", "");
      setErro("error-endereco", "");
      setErro("error-cidade", "");
      setErro("error-estado", "");

      // 1. Valida Nome
      if (nome.value.trim().length < 3) {
        setErro("error-nome", "Nome deve ter no mínimo 3 caracteres.");
        isValid = false;
      }

      // 2. Valida Email
      if (!validaEmail(email.value)) {
        setErro("error-email", "Por favor, insira um e-mail válido.");
        isValid = false;
      }

      // 3. Valida CPF (Consistência de Dados)
      if (!validaCPF(cpf.value)) {
        setErro("error-cpf", "Este CPF é inválido. Verifique os dígitos.");
        isValid = false;
      }

      // 4. Valida Telefone (Exemplo simples)
      if (telefone.value.replace(/[^\d]+/g, "").length < 10) {
        setErro("error-telefone", "Telefone inválido. Inclua o DDD.");
        isValid = false;
      }

      // 5. Valida Nascimento
      if (nascimento.value === "") {
        setErro("error-nascimento", "Data de nascimento é obrigatória.");
        isValid = false;
      }

      // *** // 6. VALIDAÇÃO DE ENDEREÇO
      // ***
      if (cep.value.replace(/[^\d]+/g, "").length !== 8) {
        setErro("error-cep", "CEP inválido. Deve conter 8 dígitos.");
        isValid = false;
      }
      if (endereco.value.trim() === "") {
        setErro("error-endereco", "Endereço é obrigatório.");
        isValid = false;
      }
      if (cidade.value.trim() === "") {
        setErro("error-cidade", "Cidade é obrigatória.");
        isValid = false;
      }
      if (estado.value === "") {
        setErro("error-estado", "Selecione um estado.");
        isValid = false;
      }

      // Feedback Final
      if (isValid) {
        statusMessage.className = "success";
        statusMessage.innerText = "Cadastro enviado com sucesso! Obrigado.";
        form.reset(); // Limpa o formulário
      } else {
        statusMessage.className = "error";
        statusMessage.innerText =
          "Um ou mais campos estão incorretos. Por favor, verifique.";
      }
    });
  };

  /*=============================================
    4. ROTEADOR (SPA)
  =============================================*/
  const appRoot = document.getElementById("app-root");
  const navLinks = document.querySelectorAll(".nav-link");

  // Função que carrega o conteúdo da página
  const loadContent = (route) => {
    // Carrega o template correspondente. Se não achar, carrega 'home'.
    appRoot.innerHTML = templates[route] || templates.home;

    // Atualiza a classe 'active' nos links de navegação
    navLinks.forEach((link) => {
      if (link.dataset.route === route) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // "Liga" o JavaScript específico da página carregada
    if (route === "cadastro") {
      initCadastroForm();
    }

    // Recarrega os links de navegação internos da página
    initNavLinks(appRoot);
  };

  // Função que "liga" os cliques nos links de navegação
  const initNavLinks = (container) => {
    const links = container.querySelectorAll(".nav-link");
    links.forEach((link) => {
      // Evita adicionar múltiplos listeners ao mesmo link
      if (link.dataset.listenerAttached) return;

      link.addEventListener("click", (event) => {
        event.preventDefault(); // Previne o recarregamento da página
        const route = link.dataset.route;

        // Atualiza a URL na barra do navegador
        history.pushState({ route }, null, `/${route === "home" ? "" : route}`);

        // Carrega o novo conteúdo
        loadContent(route);

        // Fecha o menu mobile se estiver aberto
        document.getElementById("menu-toggle").classList.remove("is-active");
        document.getElementById("mobile-nav").classList.remove("is-active");
      });
      link.dataset.listenerAttached = true; // Marca o link como "ligado"
    });
  };

  // Lida com os botões "Voltar" e "Avançar" do navegador
  window.addEventListener("popstate", (event) => {
    const route = event.state ? event.state.route : "home";
    loadContent(route);
  });

  // Função de inicialização da Aplicação
  const initApp = () => {
    // "Liga" o menu hambúrguer
    initMobileMenu();

    // "Liga" os links de navegação do header
    initNavLinks(document.querySelector(".main-header"));

    // Carrega a página inicial baseada na URL atual
    let currentRoute = window.location.pathname.replace("/", "") || "home";
    if (!templates[currentRoute]) {
      currentRoute = "home"; // ou uma página 404
    }
    history.replaceState(
      { route: currentRoute },
      null,
      `/${currentRoute === "home" ? "" : currentRoute}`
    );
    loadContent(currentRoute);
  };

  // Inicia a aplicação
  initApp();
});
