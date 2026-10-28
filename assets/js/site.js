/* NEXA STUDIO / Experience Engine — JavaScript modular, sem dependências externas. */
(() => {
  'use strict';
  const $ = (selector, scope=document) => scope.querySelector(selector);
  const $$ = (selector, scope=document) => [...scope.querySelectorAll(selector)];
  const config = window.NEXA_CONFIG || {};
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const projects = [
    {id:'control',name:'Nexa Control',category:'SISTEMA MULTIEMPRESAS',description:'Painel para organizar empresas, usuários, acessos, status de clientes e gestão financeira em uma única plataforma.',icon:'⌘',tags:['Multiempresa','Dashboard','Gestão'],gradient:'linear-gradient(135deg,#111f22,#2c2518 70%,#101011)'},
    {id:'veterinaria',name:'Gestão Veterinária',category:'CLÍNICA & TAXIDOG',description:'Agenda integrada, tutores e pets, veterinário, banho e tosa, hospedagem, TaxiDog e acompanhamento financeiro.',icon:'♧',tags:['Agendamentos','Pets','Logística'],gradient:'linear-gradient(135deg,#102c26,#17221e 53%,#372c18)'},
    {id:'barbearia',name:'Gestão de Barbearias',category:'AGENDAMENTOS & COMISSÕES',description:'Controle de atendimentos, combos, comissões de barbeiros, histórico e organização da rotina de uma barbearia.',icon:'✂',tags:['Comissões','Atendimento','Relatórios'],gradient:'linear-gradient(135deg,#29201a,#191a1a 60%,#47321b)'},
    {id:'pulse',name:'Nexa Pulse',category:'GESTÃO INTELIGENTE',description:'Solução empresarial com módulos de cobranças, relatórios, agenda, contratos e ferramentas de relacionamento.',icon:'◈',tags:['Gestão','Automações','Painel'],gradient:'linear-gradient(135deg,#1c1b2b,#181b24 55%,#362716)'},
    {id:'wallet',name:'Nexa Wallet',category:'CONCEITO DE APLICATIVO',description:'Conceito de carteira digital com experiência de uso moderna e fluxos de compra, venda e transferência a integrar.',icon:'◇',tags:['Mobile','Interface','Conceito'],gradient:'linear-gradient(135deg,#10282c,#151b21 55%,#46301b)'},
    {id:'site',name:'Sites Institucionais',category:'EXPERIÊNCIAS WEB',description:'Sites responsivos e personalizados, com conteúdo otimizado, navegação clara e identidade visual de cada empresa.',icon:'▣',tags:['Web','SEO','Responsivo'],gradient:'linear-gradient(135deg,#182627,#212323 55%,#3d2913)'},
    {id:'cobrancas',name:'Controle de Cobranças',category:'GESTÃO FINANCEIRA',description:'Sistema de acompanhamento de pagamentos, vencimentos, clientes e notificações com integrações configuráveis.',icon:'◉',tags:['Financeiro','Clientes','Alertas'],gradient:'linear-gradient(135deg,#211b26,#12191d 55%,#342718)'},
    {id:'apps',name:'Aplicativos Mobile',category:'ANDROID & IOS',description:'Interfaces personalizadas para levar serviços, gestão e relacionamento para o celular dos usuários.',icon:'▯',tags:['Aplicativos','Experiência','Mobile'],gradient:'linear-gradient(135deg,#1b252e,#111618 55%,#332d19)'},
    {id:'ai',name:'Inteligência Artificial',category:'ASSISTENTES INTELIGENTES',description:'Assistentes e integrações de IA para organizar informações e apoiar tarefas e processos de negócio.',icon:'✺',tags:['IA','Integrações','Produtividade'],gradient:'linear-gradient(135deg,#272018,#15191d 55%,#3a331d)'},
    {id:'automation',name:'Automações Empresariais',category:'PROCESSOS & INTEGRAÇÕES',description:'Fluxos digitais para reduzir retrabalho, conectar serviços e tornar o atendimento mais ágil.',icon:'⚡',tags:['Fluxos','APIs','Automação'],gradient:'linear-gradient(135deg,#1b241a,#141b1f 55%,#383018)'}
  ];
  const contactDialog = $('#contactDialog');
  const projectDialog = $('#projectDialog');

  // Cinematic code rain, real snippets, delayed independent columns.
  const snippets = [
    'const future = await build(ideas);', '<section class="innovation">', 'function createExperience() {', 'SELECT * FROM possibilities;',
    'import { motion } from "motion";', 'interface NexaProject { id: string; }', 'print("Hello, Nexa!")',
    'display: grid; gap: 24px;', 'return <DigitalFuture />;', 'async function deploy() {',
    'class NexaStudio extends Technology {}', 'CREATE TABLE projects (id UUID);',
    'const design = { quality: "premium" };', 'transform: translate3d(0,0,0);',
    'def automate(workflow):', 'export default function Experience() {}',
    '<meta name="theme-color" content="#090909" />', 'console.log("transformando ideias");',
    'border: 1px solid var(--gold);', 'await db.from("projects").select();',
    'fn build_solution(input: Idea) -> Result', 'git commit -m "nexa: innovation"',
    'const [active, setActive] = useState(true);', 'let performance = optimize();'
  ];
  function createCodeRain() {
    const rain = $('#codeRain');
    if (!rain) return;
    const count = matchMedia('(max-width: 620px)').matches ? 13 : 27;
    const fragment = document.createDocumentFragment();
    for (let i=0;i<count;i++) {
      const col=document.createElement('div');col.className='code-rain__column';
      const random=((i*37)%count)/count;
      col.style.setProperty('--left',`${Math.round(random*109-5)}%`);
      col.style.setProperty('--duration',`${(10+(i*7)%15)}s`);
      col.style.setProperty('--delay',`${-((i*5)%17)}s`);
      col.style.setProperty('--opacity',String((.24+((i*13)%10)*.04).toFixed(2)));
      col.style.setProperty('--font-size',`${10+(i%4)}px`);
      col.style.setProperty('--color',i%5===0?'#d4b36b':i%3===0?'#e1d8c3':'#8a8d92');
      for(let j=0;j<8;j++) {
        const span=document.createElement('span');span.textContent=snippets[(i*4+j*3)%snippets.length];col.appendChild(span);
      }
      fragment.appendChild(col);
    }
    rain.appendChild(fragment);
  }
  createCodeRain();

  const intro=$('#intro');let entered=false, introTouchY=null;
  function enterSite({scrollTo=null,instant=false}={}) {
    if(entered) {if(scrollTo)document.querySelector(scrollTo)?.scrollIntoView({behavior:reducedMotion.matches?'auto':'smooth'});return;}
    entered=true;
    intro.classList.add('leaving');
    document.body.classList.remove('intro-active');
    document.body.style.height='';
    const wait = instant || reducedMotion.matches ? 0 : 800;
    setTimeout(()=>{
      intro.hidden=true;
      intro.setAttribute('aria-hidden','true');
      if(scrollTo)document.querySelector(scrollTo)?.scrollIntoView({behavior:reducedMotion.matches?'auto':'smooth'});
      document.dispatchEvent(new Event('nexa:entered'));
    },wait);
  }
  $('#enterSite').addEventListener('click',()=>enterSite());
  window.addEventListener('wheel',e=>{if(!entered&&e.deltaY>5){e.preventDefault();enterSite();}},{passive:false});
  window.addEventListener('touchstart',e=>{if(!entered)introTouchY=e.touches[0]?.clientY??null},{passive:true});
  window.addEventListener('touchend',e=>{if(entered||introTouchY===null)return;const end=e.changedTouches[0]?.clientY??introTouchY;if(introTouchY-end>30)enterSite();introTouchY=null},{passive:true});
  window.addEventListener('keydown',e=>{if(entered)return;if(['ArrowDown','PageDown',' ','Enter'].includes(e.key)&&!e.ctrlKey&&!e.altKey){e.preventDefault();enterSite();}},{passive:false});
  $('.skip-link')?.addEventListener('click',e=>{if(!entered){e.preventDefault();enterSite({scrollTo:'#inicio',instant:true});}});
  if(reducedMotion.matches)enterSite({instant:true});

  // Header, navigation and reveal effects.
  const header=$('#siteHeader');const backTop=$('#backTop');
  function onScroll(){header.classList.toggle('scrolled',scrollY>25);backTop.classList.toggle('visible',scrollY>680);updateProgress();}
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  $('#mobileMenuButton').addEventListener('click',()=>{const isOpen=$('#mainNav').classList.toggle('open');$('#mobileMenuButton').setAttribute('aria-expanded',String(isOpen));$('#mobileMenuButton').setAttribute('aria-label',isOpen?'Fechar menu':'Abrir menu');});
  $$('.nav-link').forEach(link=>link.addEventListener('click',()=>{$('#mainNav').classList.remove('open');$('#mobileMenuButton').setAttribute('aria-expanded','false');}));
  backTop.addEventListener('click',()=>scrollTo({top:0,behavior:reducedMotion.matches?'instant':'smooth'}));
  const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});
  },{threshold:.08,rootMargin:'0px 0px -20px 0px'}):null;
  $$('.reveal').forEach((el,i)=>{if(reducedMotion.matches||!revealObserver){el.classList.add('is-visible');return;}el.style.transitionDelay=`${Math.min((i%4)*65,195)}ms`;revealObserver.observe(el);});
  const navObserver='IntersectionObserver' in window ? new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){$$('.nav-link').forEach(link=>link.classList.toggle('active',link.hash===`#${entry.target.id}`));}
  }),{rootMargin:'-30% 0px -56% 0px',threshold:0}):null;
  $$('main section[id]').forEach(el=>navObserver?.observe(el));

  // Gentle 3D parallax, only for a mouse device with normal motion.
  const heroScene=$('#heroScene'),deviceWrap=$('#deviceWrap');
  if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!reducedMotion.matches){
    heroScene.addEventListener('pointermove',e=>{
      const r=heroScene.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;
      deviceWrap.style.setProperty('--ry',`${(x*9).toFixed(2)}deg`);deviceWrap.style.setProperty('--rx',`${(-y*7).toFixed(2)}deg`);
    });
    heroScene.addEventListener('pointerleave',()=>{deviceWrap.style.setProperty('--ry','0deg');deviceWrap.style.setProperty('--rx','0deg');});
  }

  // Cards orbit, dynamic actual X/Y/depth values, drag and touch controls.
  const orbitArena=$('#orbitArena'), orbitCards=$('#orbitCards');
  let phase=-Math.PI/2, pauseOrbit=false, dragOrbit=false, dragMoved=false, dragStartX=0, dragStartPhase=0, lastTime=0, orbitFrame=0;
  const orbitElements=projects.map((project,index)=>{
    const el=document.createElement('button');el.type='button';el.className='orbit-card';
    el.setAttribute('aria-label',`Ver detalhes de ${project.name}`);
    const icon=document.createElement('span');icon.className='orbit-card__icon';icon.textContent=project.icon;
    const title=document.createElement('strong');title.textContent=project.name;
    const caption=document.createElement('small');caption.textContent=project.category;
    const arrow=document.createElement('span');arrow.className='orbit-card__arrow';arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');
    el.append(icon,title,caption,arrow);
    el.addEventListener('click',()=>{if(!dragMoved)openProject(project);});
    el.addEventListener('pointerenter',()=>pauseOrbit=true);
    el.addEventListener('pointerleave',()=>{if(!dragOrbit)pauseOrbit=false;});
    el.addEventListener('focus',()=>pauseOrbit=true);
    el.addEventListener('blur',()=>pauseOrbit=false);
    orbitCards.appendChild(el);
    return el;
  });
  function positionOrbit(){
    const mobile=matchMedia('(max-width:620px)').matches;
    const width=orbitArena.clientWidth,height=orbitArena.clientHeight;
    const centerY=height*(mobile?.72:.50);
    const radiusX=mobile?Math.min(185,width*.44):Math.min(455,(width-170)/2);
    const radiusY=mobile?77:180;
    for(let i=0;i<orbitElements.length;i++){
      const theta=phase+(i*2*Math.PI/orbitElements.length);
      const depth=(Math.sin(theta)+1)/2;
      const x=Math.cos(theta)*radiusX;
      const y=Math.sin(theta)*radiusY;
      const scale=(mobile?.56:.64)+depth*(mobile?.30:.42);
      const opacity=mobile ? (depth>.76 ? Math.min(1,((depth-.76)/.24)*.88+.12) : 0) : (.43+depth*.57);
      const el=orbitElements[i];
      el.style.transform=`translate3d(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${(centerY-height/2+y).toFixed(2)}px), 0) scale(${scale.toFixed(3)})`;
      el.style.opacity=opacity.toFixed(3);
      el.style.zIndex=String(5+Math.round(depth*13));
      el.style.filter=`brightness(${(.65+depth*.4).toFixed(2)})`;
      el.style.pointerEvents=mobile&&depth<=.76?'none':'auto';
      el.tabIndex=depth>(mobile?.76:.25)?0:-1;
    }
  }
  function tick(now){
    if(!lastTime)lastTime=now;
    const dt=Math.min((now-lastTime)/1000,.05);lastTime=now;
    if(!pauseOrbit&&!dragOrbit&&!reducedMotion.matches&&entered&&!document.hidden)phase+=(dt*.21);
    positionOrbit();orbitFrame=requestAnimationFrame(tick);
  }
  orbitFrame=requestAnimationFrame(tick);
  orbitArena.addEventListener('pointerdown',e=>{
    if(e.button!==0)return;
    dragOrbit=true;pauseOrbit=true;dragMoved=false;dragStartX=e.clientX;dragStartPhase=phase;
  });
  window.addEventListener('pointermove',e=>{
    if(!dragOrbit)return;
    const dx=e.clientX-dragStartX;
    if(Math.abs(dx)>9){dragMoved=true;orbitArena.classList.add('dragging');}
    if(dragMoved){phase=dragStartPhase+dx*.009;positionOrbit();}
  },{passive:true});
  window.addEventListener('pointerup',()=>{
    if(!dragOrbit)return;
    dragOrbit=false;pauseOrbit=false;orbitArena.classList.remove('dragging');
    // Defer the flag reset beyond the synthesized click.
    setTimeout(()=>dragMoved=false,50);
  });
  window.addEventListener('pointercancel',()=>{dragOrbit=false;pauseOrbit=false;orbitArena.classList.remove('dragging');});
  $('#orbitPrev').addEventListener('click',()=>{phase-=Math.PI*2/projects.length;positionOrbit();});
  $('#orbitNext').addEventListener('click',()=>{phase+=Math.PI*2/projects.length;positionOrbit();});
  addEventListener('resize',positionOrbit,{passive:true});

  // Project showcase, no invented client testimonials or performance numbers.
  function createMiniMockup(){
    const panel=document.createElement('div');panel.className='mock-panel';
    panel.innerHTML='<div class="mock-panel__header"><i></i><i></i><i></i></div><div class="mock-panel__content"><b>NEXA / DIGITAL SYSTEM</b><div class="mock-panel__bars"><span></span><span></span><span></span></div><div class="mock-panel__graph"></div></div>';
    return panel;
  }
  function openProject(project){
    $('#projectModalTitle').textContent=project.name;
    $('#projectModalDescription').textContent=project.description;
    $('#projectModalCategory').textContent=project.category;
    const art=$('#projectModalArt');art.replaceChildren(createMiniMockup());art.style.setProperty('--project-gradient',project.gradient);
    const tags=$('#projectModalTags');tags.replaceChildren();project.tags.forEach(tag=>{const chip=document.createElement('span');chip.textContent=tag;tags.appendChild(chip);});
    $('#projectModalContact').onclick=()=>{closeDialog(projectDialog);openContact(project.name);};
    showDialog(projectDialog);
  }
  const portfolio=$('#portfolioTrack');
  projects.slice(0,8).forEach(project=>{
    const card=document.createElement('article');card.className='project-card';
    const visual=document.createElement('div');visual.className='project-card__visual';visual.style.setProperty('--project-gradient',project.gradient);visual.appendChild(createMiniMockup());
    const info=document.createElement('div');info.className='project-card__info';
    const label=document.createElement('span');label.className='project-card__label';label.textContent=project.category;
    const name=document.createElement('h3');name.textContent=project.name;
    const para=document.createElement('p');para.textContent=project.description;
    const button=document.createElement('button');button.type='button';button.innerHTML='Ver detalhes <span aria-hidden="true">↗</span>';button.addEventListener('click',()=>openProject(project));
    info.append(label,name,para,button);card.append(visual,info);portfolio.appendChild(card);
  });
  function movePortfolio(direction){const first=$('.project-card',portfolio);if(!first)return;const amount=first.getBoundingClientRect().width+18;const max=portfolio.scrollWidth-portfolio.clientWidth;
    if(direction>0&&portfolio.scrollLeft>=max-amount/2)portfolio.scrollTo({left:0,behavior:reducedMotion.matches?'instant':'smooth'});
    else if(direction<0&&portfolio.scrollLeft<=amount/2)portfolio.scrollTo({left:max,behavior:reducedMotion.matches?'instant':'smooth'});
    else portfolio.scrollBy({left:amount*direction,behavior:reducedMotion.matches?'instant':'smooth'});
  }
  $('#portfolioPrev').addEventListener('click',()=>movePortfolio(-1));
  $('#portfolioNext').addEventListener('click',()=>movePortfolio(1));
  let portfolioPaused=false;
  portfolio.addEventListener('pointerenter',()=>portfolioPaused=true);
  portfolio.addEventListener('pointerleave',()=>portfolioPaused=false);
  portfolio.addEventListener('focusin',()=>portfolioPaused=true);
  portfolio.addEventListener('focusout',()=>portfolioPaused=false);
  if(!reducedMotion.matches)setInterval(()=>{const rect=portfolio.getBoundingClientRect();if(!portfolioPaused&&entered&&!document.hidden&&rect.top<innerHeight&&rect.bottom>0)movePortfolio(1);},5800);

  // Scroll line progress.
  function updateProgress(){const steps=$('#processSteps');const bar=$('#processProgress');if(!steps||!bar)return;
    const rect=steps.getBoundingClientRect();const progress=Math.max(0,Math.min(1,(innerHeight*.8-rect.top)/(innerHeight*.6+rect.height)));
    bar.style.width=`${progress*76}%`;
  }

  // Optional real, pre-authorized testimonials only.
  if(Array.isArray(config.testimonials)&&config.testimonials.length){
    $('#depoimentos').hidden=false;
    const track=$('#testimonialsTrack');
    config.testimonials.forEach(item=>{if(!item||!item.name||!item.quote)return;
      const card=document.createElement('article');card.className='testimonial-card';
      const quote=document.createElement('p');quote.textContent=`“${item.quote}”`;
      const person=document.createElement('strong');person.textContent=item.name;
      const company=document.createElement('p');company.textContent=item.company||'';
      card.append(quote,person,company);track.appendChild(card);
    });
  }
  if(config.instagramUrl&&/^https:\/\//i.test(config.instagramUrl)){$('#footerInstagram').href=config.instagramUrl;$('#footerInstagram').hidden=false;}
  $('#year').textContent=new Date().getFullYear();

  // Native, accessible dialogs.
  function showDialog(dialog){if(!dialog.open)dialog.showModal();document.body.classList.add('dialog-open');}
  function closeDialog(dialog){if(dialog.open)dialog.close();document.body.classList.remove('dialog-open');}
  [contactDialog,projectDialog].forEach(dialog=>{
    $('[data-dialog-close]',dialog).addEventListener('click',()=>closeDialog(dialog));
    dialog.addEventListener('click',e=>{if(e.target===dialog)closeDialog(dialog);});
    dialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
  });
  function openContact(subject='Outro projeto'){
    const select=$('#contactService');
    const categories=['Criação de sites','Sistema personalizado','Aplicativo mobile','Automação empresarial','Inteligência artificial','Suporte e manutenção'];
    const normalized=subject.toLocaleLowerCase('pt-BR');
    const found=categories.find(label=>normalized.includes(label.toLocaleLowerCase('pt-BR')));
    select.value=found||'Outro projeto';
    if(subject&&!found&&subject!=='Outro projeto'){
      const text=$('#contactMessage');if(!text.value.trim())text.value=`Olá! Tenho interesse em: ${subject}. Gostaria de saber mais sobre as possibilidades para meu negócio.`;
    }
    $('#contactStatus').textContent='';$('#contactStatus').classList.remove('error');
    $('#copyContactButton').hidden=true;showDialog(contactDialog);
    $('#contactName').focus({preventScroll:true});
  }
  $$('[data-contact-trigger]').forEach(btn=>btn.addEventListener('click',()=>openContact(btn.dataset.contactTrigger)));
  let preparedMessage='';
  function buildMessage(){const name=$('#contactName').value.trim();const phone=$('#contactPhone').value.trim();const service=$('#contactService').value;const message=$('#contactMessage').value.trim();return `Olá, Nexa Studio! Gostaria de conversar sobre um projeto.\n\n*Nome:* ${name}\n*Contato:* ${phone}\n*Serviço:* ${service}\n*Detalhes:* ${message}`;}
  $('#contactForm').addEventListener('submit',e=>{
    e.preventDefault();const form=e.currentTarget;
    const name=$('#contactName').value.trim(),phone=$('#contactPhone').value.replace(/\D/g,''),details=$('#contactMessage').value.trim();
    const status=$('#contactStatus');status.classList.remove('error');
    if(!form.reportValidity()||name.length<2||phone.length<8||details.length<10){status.textContent='Preencha nome, contato válido, serviço e descrição com pelo menos 10 caracteres.';status.classList.add('error');return;}
    preparedMessage=buildMessage();
    const number=String(config.whatsappNumber||'').replace(/\D/g,'');
    if(number.length>=12&&number.length<=15){
      status.textContent='Abrindo WhatsApp com sua mensagem preparada. Confirme o envio no aplicativo.';
      $('#copyContactButton').hidden=false;
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(preparedMessage)}`,'_blank','noopener,noreferrer');
    }else if(config.email){
      status.textContent='Abrindo seu aplicativo de e-mail com os detalhes. Confirme o envio.';
      $('#copyContactButton').hidden=false;
      location.href=`mailto:${config.email}?subject=${encodeURIComponent('Novo projeto — Nexa Studio')}&body=${encodeURIComponent(preparedMessage)}`;
    }else{
      status.textContent='Sua mensagem está pronta. Configure o WhatsApp ou e-mail em assets/js/config.js para liberar o envio direto; por enquanto, copie a mensagem abaixo.';
      $('#copyContactButton').hidden=false;
    }
  });
  $('#copyContactButton').addEventListener('click',async()=>{
    if(!preparedMessage)return;
    const status=$('#contactStatus');
    try{
      if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(preparedMessage);
      else{const t=document.createElement('textarea');t.value=preparedMessage;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();if(!document.execCommand('copy'))throw Error('clipboard unavailable');t.remove();}
      status.classList.remove('error');status.textContent='Mensagem copiada! Agora é só colar no canal de atendimento desejado.';
    }catch{status.classList.add('error');status.textContent='Não foi possível copiar automaticamente neste navegador. Selecione os dados preenchidos para copiar manualmente.';}
  });
})();
