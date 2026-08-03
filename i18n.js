// =====================================================
// I18N - DALLAS AUTONOMOUS (EN / PT)
// =====================================================
const translations = {
    en: {
        nav: {
            mission: "Mission",
            technology: "Technology",
            specifications: "Specifications",
            performance: "Performance",
            platforms: "Platforms",
            investment: "Investment",
            applications: "Applications",
            contact: "Contact"
        },
        hero: {
            tag: "DEVELOPED IN BRAZIL",
            title: "Autonomous<br>Rotary Aircraft",
            desc: "Engineering the next generation of heavy-duty autonomous helicopter platforms for defense, offshore, agribusiness and critical missions.",
            btnPrimary: "Explore Technology",
            btnSecondary: "Our Vision"
        },
        manifesto: {
            small: "OUR PURPOSE",
            title: "We are not adapting helicopters.<br>We are engineering autonomous aircraft from the ground up.",
            desc: "Dallas exists to redefine how medium and heavy autonomous aircraft operate. Our mission is to build robust rotary platforms capable of performing critical operations where reliability, payload and endurance matter."
        },
        cockpit: {
            header: "FLIGHT COMPUTER",
            local: "LOCAL",
            status: "STATUS",
            statusValue: "MISSION READY",
            navigation: "NAVIGATION",
            control: "CONTROL",
            controlValue: "AUTONOMOUS",
            feedLabel: "GCS — REFERENCE FEED",
            clipLabel: "HOVER TEST — HOVER FOR AUDIO"
        },
        technology: {
            title: "Core Technologies",
            card1: { title: "Autonomous Flight", desc: "Mission execution with minimal operator intervention." },
            card2: { title: "Heavy Payload", desc: "Designed for demanding logistics and military operations." },
            card3: { title: "Precision Navigation", desc: "Centimeter-level positioning using advanced GNSS integration." },
            card4: { title: "Fail Safe", desc: "Redundant architecture for maximum operational reliability." }
        },
        stats: {
            payload: "kg Payload",
            autonomous: "% Autonomous",
            ready: "Hours Endurance",
            datalink: "km Range"
        },
        blueprint: {
            small: "AIRCRAFT SPECIFICATIONS",
            title: "Engineered for the mission, not the marketing render.",
            mtow: "MTOW",
            payload: "Payload",
            empty: "Empty Weight",
            power: "Power",
            engine: "Engine",
            trl: "Maturity",
            trlValue: "TRL 6 — Real-world flight testing"
        },
        performance: {
            small: "FLIGHT PERFORMANCE",
            title: "Real telemetry, not projected specs.",
            cruise: "Cruise Speed",
            max: "Max Speed",
            range: "Autonomous Mission Range",
            note: "Extended range via fixed antenna (200 km) or satellite link (unlimited)."
        },
        platforms: {
            small: "PLATFORMS",
            title: "Built for multiple missions, from one airframe.",
            explore: "Explore Operations →",
            defense: { name: "Defense", desc: "ISR, logistics resupply and force protection in contested environments, without risking a crew." },
            offshore: { name: "Offshore", desc: "Cargo and equipment transfer to platforms, reducing exposure in high-risk maritime operations." },
            agro: { name: "Agribusiness", desc: "Heavy-duty aerial support for large-scale operations across remote and difficult terrain." }
        },
        applications: {
            title: "No Limits.",
            desc: "A single platform, engineered to operate where crewed aircraft cannot, and where the mission cannot wait."
        },
        footer: {
            tagline: "Autonomous rotary aircraft, engineered in Brazil.",
            contact: "Get in touch"
        },
        scroll: "SCROLL",
        investment: {
            small: "INVESTMENT OPPORTUNITY",
            title: "Backed by real market demand, not projection.",
            desc: "Brazil is the world's largest and most professionalized agricultural export market — and precision aerial application is its clearest technology gap.",
            market: "Addressable Market",
            roi: "Dallas Annual ROI",
            roiNote: "(vs. 56% market avg.)",
            cagr: "Revenue CAGR, 2023–2033e",
            footnote: "Backed by FAPESP PIPE research grant (Phase II approved)."
        },
        positioning: {
            small: "MARKET POSITIONING",
            title: "A unique balance of precision, versatility and scale.",
            axis1: "PRODUCTIVITY (HA/H)",
            axis2: "UNINTERRUPTED OPS",
            axis3: "APPLICATION PRECISION",
            axis4: "LARGE-AREA FIT",
            axis5: "COST-EFFICIENCY",
            axis6: "DIFFICULT-ACCESS OPS",
            legendDallas: "Dallas",
            legendAg: "Agricultural Aviation",
            legendDrones: "Current Drones",
            legendTraditional: "Traditional (Tractors)"
        },
        platform: {
            back: "← All Platforms",
            comingSoon: "Full mission dossier for this platform is being finalized. Contact us for the complete briefing.",
            capabilities: "MISSION CAPABILITIES",
            why: "WHY DALLAS",
            scenarioTag: "ILLUSTRATIVE CAPABILITY — TRL 6, FLIGHT TESTING",
            defense: {
                tag: "ISR / FORCE PROTECTION", name: "Defense",
                lead: "Autonomous ISR and tactical support in contested environments — without risking a crew.",
                cap1: "Border surveillance and patrol",
                cap2: "Tactical mobile support, armed or unarmed",
                cap3: "Search and rescue",
                cap4: "Aerial, road and maritime interception and tracking",
                cap5: "Cargo and supply transport to remote areas",
                cap6: "Training for piloted and unpiloted operations",
                whyValue: "DO-178C", whyLabel: "Military-Certified Autopilot",
                scenarioTitle: "MISSION CAPABILITY",
                scenarioHeadline: "Extended Border Coverage, Without Risking a Crew",
                scenarioBody: "With up to 8 hours of endurance on the auxiliary tank and a 500 km autonomous mission range, a single platform is designed to hold a border or perimeter watch for an extended window, feeding ISR back to command without putting a crew in the aircraft. VTOL means it can operate from unprepared terrain close to the area of interest — no runway or hangar required."
            },
            offshore: {
                tag: "MARITIME LOGISTICS", name: "Offshore",
                lead: "Cargo and inspection flights between shore and platform, cutting crew exposure in high-risk waters.",
                cap1: "Oil platform support and maritime surveillance",
                cap2: "Power line, pipeline and gas pipeline monitoring",
                cap3: "Cargo and equipment transfer to remote areas",
                cap4: "Aerial filming and visual inspection",
                cap5: "Maritime interception and tracking",
                cap6: "Search and rescue at sea",
                whyValue: "Unlimited", whyLabel: "Range via Satellite Datalink",
                scenarioTitle: "MISSION CAPABILITY",
                scenarioHeadline: "Platform Resupply, Without Committing a Crew to Open Water",
                scenarioBody: "A routine supply run to an offshore platform normally means committing a vessel or a manned helicopter — and its crew — to open water. With satellite datalink for effectively unlimited range and autonomous VTOL operation, a Dallas platform is designed to fly that leg unmanned, cutting personnel exposure on the highest-risk part of the operation."
            },
            agribusiness: {
                tag: "REMOTE AERIAL SUPPORT", name: "Agribusiness",
                lead: "Precision input application at aircraft scale — reaching where tractors and drones can't.",
                cap1: "Precision input application (spraying)",
                cap2: "Seed distribution for reforestation",
                cap3: "Wildfire combat support",
                cap4: "Multispectral sensor mapping",
                cap5: "Power line and railway monitoring near farmland",
                cap6: "Aerial filming for crop monitoring",
                whyValue: "2x", whyLabel: "Productivity vs. Current Drones (ha/h)",
                econTitle: "UNIT ECONOMICS",
                econMarket: "Market Avg.",
                econDallas: "Dallas",
                econHa: "Hectares / hour",
                econCost: "Cost per hectare",
                econServed: "Hectares served / month",
                econRevenue: "Monthly revenue",
                econRoi: "Annual ROI",
                econSource: "Source: Dallas Autonomous investor deck, base-case scenario.",
                marketTitle: "ADDRESSABLE MARKET",
                funnelTotal: "Total Market · 54.4M ha",
                funnelAddressable: "Addressable · 35.5M ha",
                funnelEarly: "Early Adopters · 2.1M ha",
                funnelNote: "Core crops: coffee, cotton, sugarcane, citrus, cerrado grains, forestry."
            }
        }
    },
    pt: {
        nav: {
            mission: "Missão",
            technology: "Tecnologia",
            specifications: "Especificações",
            performance: "Desempenho",
            platforms: "Plataformas",
            investment: "Investimento",
            applications: "Aplicações",
            contact: "Contato"
        },
        hero: {
            tag: "DESENVOLVIDO NO BRASIL",
            title: "Aeronave Rotativa<br>Autônoma",
            desc: "Desenvolvendo a próxima geração de plataformas de helicópteros autônomos de alta capacidade para defesa, offshore, agronegócio e missões críticas.",
            btnPrimary: "Conhecer Tecnologia",
            btnSecondary: "Nossa Visão"
        },
        manifesto: {
            small: "NOSSO PROPÓSITO",
            title: "Não estamos adaptando helicópteros.<br>Estamos projetando aeronaves autônomas desde a origem.",
            desc: "A Dallas existe para redefinir como aeronaves autônomas de médio e grande porte operam. Nossa missão é construir plataformas rotativas robustas, capazes de realizar operações críticas onde confiabilidade, capacidade de carga e autonomia de voo são essenciais."
        },
        cockpit: {
            header: "COMPUTADOR DE VOO",
            local: "LOCAL",
            status: "STATUS",
            statusValue: "PRONTO PARA MISSÃO",
            navigation: "NAVEGAÇÃO",
            control: "CONTROLE",
            controlValue: "AUTÔNOMO",
            feedLabel: "GCS — FEED DE REFERÊNCIA",
            clipLabel: "TESTE DE VOO — PASSE O MOUSE PARA O ÁUDIO"
        },
        technology: {
            title: "Tecnologias Principais",
            card1: { title: "Voo Autônomo", desc: "Execução de missões com intervenção mínima do operador." },
            card2: { title: "Alta Capacidade de Carga", desc: "Projetado para operações logísticas e militares de alta exigência." },
            card3: { title: "Navegação de Precisão", desc: "Posicionamento de precisão centimétrica com integração GNSS avançada." },
            card4: { title: "Redundância de Segurança", desc: "Arquitetura redundante para máxima confiabilidade operacional." }
        },
        stats: {
            payload: "kg de Carga",
            autonomous: "% Autônomo",
            ready: "Horas de Autonomia",
            datalink: "km de Alcance"
        },
        blueprint: {
            small: "ESPECIFICAÇÕES DA AERONAVE",
            title: "Projetada para a missão, não para o render de marketing.",
            mtow: "Peso Máx. Decolagem",
            payload: "Carga Útil",
            empty: "Peso Vazio",
            power: "Potência",
            engine: "Motor",
            trl: "Maturidade",
            trlValue: "TRL 6 — Testes em situação real de voo"
        },
        performance: {
            small: "DESEMPENHO DE VOO",
            title: "Telemetria real, não especificação projetada.",
            cruise: "Velocidade de Cruzeiro",
            max: "Velocidade Máxima",
            range: "Alcance em Missão Autônoma",
            note: "Alcance estendido via antena fixa (200 km) ou link satélite (ilimitado)."
        },
        platforms: {
            small: "PLATAFORMAS",
            title: "Construída para múltiplas missões, a partir de uma única aeronave.",
            explore: "Conhecer Operação →",
            defense: { name: "Defesa", desc: "ISR, reabastecimento logístico e proteção de força em ambientes hostis, sem arriscar tripulação." },
            offshore: { name: "Offshore", desc: "Transferência de carga e equipamentos para plataformas, reduzindo a exposição em operações marítimas de alto risco." },
            agro: { name: "Agronegócio", desc: "Suporte aéreo de alta capacidade para operações em larga escala em terrenos remotos e de difícil acesso." }
        },
        applications: {
            title: "Sem Limites.",
            desc: "Uma única plataforma, projetada para operar onde aeronaves tripuladas não podem, e onde a missão não pode esperar."
        },
        footer: {
            tagline: "Aeronave rotativa autônoma, desenvolvida no Brasil.",
            contact: "Fale Conosco"
        },
        scroll: "ROLAR",
        investment: {
            small: "OPORTUNIDADE DE INVESTIMENTO",
            title: "Sustentada por demanda real de mercado, não projeção.",
            desc: "O Brasil é o maior e mais profissionalizado mercado de exportação agrícola do mundo — e a aplicação aérea de precisão é sua lacuna tecnológica mais clara.",
            market: "Mercado Endereçável",
            roi: "ROI Anual da Dallas",
            roiNote: "(vs. 56% média de mercado)",
            cagr: "CAGR de Receita, 2023–2033e",
            footnote: "Respaldada por fomento FAPESP PIPE (Fase II aprovada)."
        },
        positioning: {
            small: "POSICIONAMENTO DE MERCADO",
            title: "Um equilíbrio único entre precisão, versatilidade e escala.",
            axis1: "PRODUTIVIDADE (HA/H)",
            axis2: "TRABALHO ININTERRUPTO",
            axis3: "PRECISÃO NA APLICAÇÃO",
            axis4: "VOCAÇÃO P/ GRANDES ÁREAS",
            axis5: "CUSTO-BENEFÍCIO",
            axis6: "ÁREAS DE DIFÍCIL ACESSO",
            legendDallas: "Dallas",
            legendAg: "Aviação Agrícola",
            legendDrones: "Drones Atuais",
            legendTraditional: "Tradicionais (Tratores)"
        },
        platform: {
            back: "← Todas as Plataformas",
            comingSoon: "O dossiê completo de missão para esta plataforma está sendo finalizado. Fale conosco para o briefing completo.",
            capabilities: "CAPACIDADES DE MISSÃO",
            why: "POR QUE A DALLAS",
            scenarioTag: "CAPACIDADE ILUSTRATIVA — TRL 6, EM TESTES DE VOO",
            defense: {
                tag: "ISR / PROTEÇÃO DE FORÇA", name: "Defesa",
                lead: "ISR autônomo e apoio tático em ambientes hostis — sem arriscar tripulação.",
                cap1: "Vigilância e patrulhamento de fronteiras",
                cap2: "Apoio tático móvel, municiado ou não",
                cap3: "Resgate",
                cap4: "Interceptação e rastreamento aéreo, rodoviário e marítimo",
                cap5: "Transporte de cargas e suprimentos em áreas remotas",
                cap6: "Treinamento para operações tripuladas e não tripuladas",
                whyValue: "DO-178C", whyLabel: "Piloto Automático com Certificação Militar",
                scenarioTitle: "CAPACIDADE DE MISSÃO",
                scenarioHeadline: "Cobertura Estendida de Fronteira, Sem Arriscar Tripulação",
                scenarioBody: "Com até 8 horas de autonomia no tanque auxiliar e alcance de missão autônoma de 500 km, uma única plataforma é projetada para manter vigilância de fronteira ou perímetro por uma janela estendida, alimentando ISR para o comando sem colocar tripulação na aeronave. O VTOL permite operar de terreno sem preparo, próximo à área de interesse — sem necessidade de pista ou hangar."
            },
            offshore: {
                tag: "LOGÍSTICA MARÍTIMA", name: "Offshore",
                lead: "Voos de carga e inspeção entre a costa e a plataforma, reduzindo a exposição da tripulação em águas de alto risco.",
                cap1: "Apoio a plataformas de petróleo e vigilância marítima",
                cap2: "Monitoramento de linhas de transmissão, oleodutos e gasodutos",
                cap3: "Transferência de carga e equipamentos para áreas remotas",
                cap4: "Filmagens aéreas e inspeção visual",
                cap5: "Interceptação e rastreamento marítimo",
                cap6: "Resgate no mar",
                whyValue: "Ilimitado", whyLabel: "Alcance via Link Satélite",
                scenarioTitle: "CAPACIDADE DE MISSÃO",
                scenarioHeadline: "Reabastecimento de Plataforma, Sem Expor Tripulação em Alto-Mar",
                scenarioBody: "Um transporte de suprimentos de rotina até uma plataforma offshore normalmente significa comprometer uma embarcação ou um helicóptero tripulado — e sua tripulação — em mar aberto. Com link satélite para alcance praticamente ilimitado e operação VTOL autônoma, uma plataforma Dallas é projetada para realizar esse trajeto sem tripulação, reduzindo a exposição de pessoal na etapa de maior risco da operação."
            },
            agribusiness: {
                tag: "SUPORTE AÉREO REMOTO", name: "Agronegócio",
                lead: "Aplicação de insumos de precisão em escala de aeronave — chegando onde trator e drone não chegam.",
                cap1: "Aplicação de insumos de precisão (pulverização)",
                cap2: "Distribuição de sementes para reflorestamento",
                cap3: "Apoio no combate a incêndios florestais",
                cap4: "Mapeamento com sensores multiespectrais",
                cap5: "Monitoramento de linhas de transmissão e ferrovias próximas à lavoura",
                cap6: "Filmagens aéreas para monitoramento de cultura",
                whyValue: "2x", whyLabel: "Produtividade vs. Drones Atuais (ha/h)",
                econTitle: "UNIT ECONOMICS",
                econMarket: "Média de Mercado",
                econDallas: "Dallas",
                econHa: "Hectares / hora",
                econCost: "Custo por hectare",
                econServed: "Hectares atendidos / mês",
                econRevenue: "Receita mensal",
                econRoi: "ROI Anual",
                econSource: "Fonte: Deck de investidores da Dallas Autonomous, cenário base.",
                marketTitle: "MERCADO ENDEREÇÁVEL",
                funnelTotal: "Mercado Total · 54,4 Mi ha",
                funnelAddressable: "Endereçável · 35,5 Mi ha",
                funnelEarly: "Early Adopters · 2,1 Mi ha",
                funnelNote: "Culturas-alvo: café, algodão, cana-de-açúcar, citros, grãos do cerrado, florestal."
            }
        }
    }
};

function getNested(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : null, obj);
}

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const value = getNested(dict, el.getAttribute("data-i18n"));
        if (value !== null) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const value = getNested(dict, el.getAttribute("data-i18n-html"));
        if (value !== null) el.innerHTML = value;
    });

    document.documentElement.lang = lang;
    window.__dallasLang = lang;

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
}

function initLanguage() {
    const browserLang = (navigator.language || "en").toLowerCase().startsWith("pt") ? "pt" : "en";
    const initial = window.__dallasLang || browserLang;

    applyLanguage(initial);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });
}

document.addEventListener("DOMContentLoaded", initLanguage);
