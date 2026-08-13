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
            traction: "Traction",
            leadership: "Leadership",
            applications: "Applications",
            contact: "Contact"
        },
        hero: {
            tag: "DEVELOPED IN BRAZIL",
            title: "Autonomous<br>Rotary Aircraft",
            desc: "Developing the next generation of high-capacity platforms.",
            slogan: "Where the mission demands, <span class=\"hero-slogan-accent\">Dallas</span> takes flight."
        },
        manifesto: {
            small: "OUR PURPOSE",
            title: "We are not adapting helicopters.<br>We are engineering autonomous aircraft from the ground up.",
            desc: "Dallas exists to redefine how medium and heavy autonomous aircraft operate. Our mission is to build robust rotary platforms capable of performing critical operations where reliability, payload and endurance matter.",
            note: "Dallas is an autonomous vehicle company at its core — the helicopter is our flagship platform, not our limit.",
            roadmapCaption: "Multi-domain roadmap — additional autonomous platforms in development."
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
            ready: "h Max Endurance",
            datalink: "km Range"
        },
        blueprint: {
            small: "AIRCRAFT SPECIFICATIONS",
            title: "Engineered for the mission.",
            mtow: "MTOW",
            payload: "Payload",
            empty: "Empty Weight",
            power: "Power",
            engine: "Engine",
            trl: "Maturity",
            trlValue: "TRL 6 — Real-world flight testing",
            modularTitle: "ADAPTIVE PLATFORM",
            modularDesc: "One airframe, reconfigured for the mission. The same platform accepts a wide range of interchangeable payloads:",
            modular1: "Imaging Payloads",
            modular2: "Military Arsenal",
            modular3: "Cargo Compartment",
            modular4: "Mounts & Brackets",
            modular5: "Cargo Hooks",
            modular6: "Medical Stretcher — Transport & Rescue",
            modular7: "Auxiliary Fuel Tanks",
            modular8: "Spray Bar",
            modular9: "+ Whatever the Mission Requires"
        },
        performance: {
            small: "FLIGHT PERFORMANCE",
            title: "Real telemetry, not projected specs.",
            cruise: "Cruise Speed",
            max: "Max Speed",
            range: "Autonomous Mission Range",
            ceiling: "Service Ceiling",
            ceilingNote: "10,000 ft (piston) · 30,000 ft (turbine)",
            ceilingPiston: "PISTON",
            ceilingTurbine: "TURBINE",
            note: "Extended range via fixed antenna (200 km) or satellite link (unlimited)."
        },
        platforms: {
            small: "PLATFORMS",
            title: "Built for multiple missions, from one airframe.",
            explore: "Click Here → Explore Operations",
            defense: { name: "Defense", desc: "ISR, logistics resupply and force protection in contested environments, without risking a crew." },
            offshore: { name: "Offshore", desc: "Cargo and equipment transfer to platforms, reducing exposure in high-risk maritime operations." },
            agro: { name: "Agribusiness", desc: "Heavy-duty aerial support for large-scale operations across remote and difficult terrain." }
        },
        applications: {
            title: "There is no work. Only Mission."
        },
        footer: {
            tagline: "Autonomous rotary aircraft, engineered in Brazil.",
            contact: "Get in touch",
            eyebrow: "GET IN TOUCH",
            heading: "Let's talk about the mission.",
            note: "Investors — request our full data room and technical dossier by email.",
            pdfLink: "↓ Download one-pager (PDF)"
        },
        contactForm: {
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message",
            sent: "Message sent — thank you. We'll be in touch shortly."
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
            footnote: "Backed by FAPESP PIPE research grant (Phase II approved).",
            pressLink: "↗ Featured in Agência FAPESP: \"Brazilian startup designs self-flying aerial vehicle for crop spraying\"",
            mi: {
                name: "Market Intelligence",
                desc: "Compare all three markets side-by-side — defense, offshore and agribusiness, sized and sourced for investor due diligence.",
                cta: "Click Here → Compare Markets"
            }
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
        traction: {
            small: "TRACTION",
            title: "From first flight to scale-readiness.",
            m1title: "Dallas Autonomous is founded",
            m1desc: "Development begins on an autonomous, heavy-duty rotary aircraft platform.",
            m2title: "FAPESP PIPE Phase II approved",
            m2desc: "The project is approved for Phase II of FAPESP's PIPE program, validating its technical and innovation potential.",
            m3title: "First flight test",
            m3desc: "The prototype completes its first flight test.",
            m4date: "TODAY",
            m4title: "TRL-6 · Featured by <a href=\"https://agencia.fapesp.br/brazilian-startup-designs-self-flying-aerial-vehicle-for-crop-spraying/51590\" target=\"_blank\" rel=\"noopener\" class=\"timeline-link\">FAPESP</a>",
            m4desc: "The platform reaches TRL-6 under ongoing flight validation, with the project also featured in FAPESP's own coverage."
        },
        leadership: {
            small: "LEADERSHIP",
            title: "Built by people who fly, engineer and scale.",
            intro: "Dallas Autonomous is led by a team that combines strategic vision, operational experience and deep technical command of aviation, robotics and applied engineering — a balance essential to running the project with excellence, innovation and practical viability.",
            leaderRole: "Co-Founder & President",
            leaderBio1: "More than 25 years of multidisciplinary experience across engineering, aviation and technology. He began his career in civil engineering and project management, then built a career as a commercial helicopter pilot and flight instructor — training new professionals for the aviation market.",
            leaderBio2: "In recent years he has become one of Brazil's leading figures in the development and operation of large unmanned aircraft, taking Dallas Autonomous from prototyping through to scale-readiness — combining deep platform knowledge, real flight operation experience and engineering leadership with a strategic read of market demand.",
            leaderTag1: "Commercial Helicopter Pilot & Avionics Mechanic",
            leaderTag2: "10+ Years Working With Drones",
            leaderTag3: "Helicopter Flight Instructor",
            scaleTitle: "SCALE & TECHNICAL SUPPORT",
            scaleDesc: "The supporting team includes systems engineers, automation specialists and embedded intelligence developers with backgrounds at centers of excellence and deep-tech startups. Dallas is structured to scale through industrial partnerships, modular assembly and testing infrastructure, hybrid technical support with predictive telemetry monitoring, and training programs for operators and technicians.",
            consultantsTitle: "ENGINEERING CONSULTANTS",
            c1role: "Aeronautical Engineer — Aerodynamics & Design",
            c2role: "Electronic Engineer — Control Systems & Software",
            c3role: "Draftsman — Technical Design & Drawing",
            c4role: "Mechatronics Engineer — Design & Manufacturing",
            c5role: "Composites Modeler"
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
                scenarioBody: "With up to 7 hours of endurance on the auxiliary tank and a 500 km autonomous mission range, a single platform is designed to hold a border or perimeter watch for an extended window, feeding ISR back to command without putting a crew in the aircraft. VTOL means it can operate from unprepared terrain close to the area of interest — no runway or hangar required.",
                marketTitle: "MARKET OPPORTUNITY",
                marketSizeLabel: "Global Military Drone Market by 2033",
                marketCagrLabel: "CAGR, 2026–2033",
                marketIsrLabel: "Largest Application Segment",
                marketSource: "Source: Grand View Research, Military Drone Market Report, 2026–2033."
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
                scenarioBody: "A routine supply run to an offshore platform normally means committing a vessel or a manned helicopter — and its crew — to open water. With satellite datalink for effectively unlimited range and autonomous VTOL operation, a Dallas platform is designed to fly that leg unmanned, cutting personnel exposure on the highest-risk part of the operation.",
                marketTitle: "MARKET OPPORTUNITY",
                marketSizeLabel: "Global Offshore Drilling Market by 2034",
                marketCagrLabel: "CAGR, 2026–2034",
                marketTrendValue: "Unmanned Platforms",
                marketTrendLabel: "Key Growth Trend in the Sector",
                marketSource: "Source: Fortune Business Insights, Offshore Drilling Market Report, 2026–2034."
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
        },
        marketIntel: {
            statusPill: "TRL-6 · FLIGHT TESTED",
            tag: "CROSS-MARKET INTELLIGENCE",
            title: "Three niches. One autonomous platform.",
            lead: "A fast-scan comparison of the three mission verticals Dallas Autonomous targets — sized and sourced for investor due diligence, not projected.",
            chartTitle: "MARKET SIZE BY NICHE (US$ BI EQUIVALENT)",
            chartNote: "*Brazil-specific figure (aerial application sector, Sindag) converted at approx. R$5.4/US$ — not a national share of the global defense/offshore figures shown for comparison.",
            specsTitle: "ONE PLATFORM, ACROSS ALL THREE",
            spec1: "Flight Tested",
            spec2: "Modular Payload",
            spec3: "Autonomous Range",
            spec4: "Max Endurance",
            sources: "Sources: Fortune Business Insights (unmanned helicopter market); Mordor Intelligence (offshore helicopter services); Sindag — Sindicato Nacional das Empresas de Aviação Agrícola (Brazil aerial application sector).",
            table: {
                header: "GROWTH DRIVER",
                customerRow: "Target customer",
                painRow: "Pain Dallas solves"
            },
            agro: {
                name: "Agribusiness",
                marketLabel: "AERIAL APPLICATION SECTOR (BRAZIL)",
                marketSub: "2024 revenue, heading past R$10 Bi by 2028",
                highlight: "World's 2nd-largest fleet",
                chartLabel: "Agribusiness (BR)",
                customer: "Large farms & cooperatives",
                pain: "Pilot shortage, area scale"
            },
            defense: {
                name: "Defense",
                marketLabel: "UNMANNED HELICOPTER MARKET (GLOBAL)",
                marketSub: "2025 market size · 12.5% CAGR",
                highlight: "North America leads, 33% share",
                chartLabel: "Defense (global)",
                customer: "Government & defense agencies",
                pain: "ISR & logistics without crew exposure"
            },
            offshore: {
                name: "Offshore",
                marketLabel: "OFFSHORE HELICOPTER SERVICES (GLOBAL)",
                marketSub: "2026 market size · 4.0% CAGR",
                highlight: "Oil & gas = 70% of demand",
                chartLabel: "Offshore (global)",
                customer: "Oil & gas operators",
                pain: "Cost & risk of crewed flight"
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
            traction: "Tração",
            leadership: "Liderança",
            applications: "Aplicações",
            contact: "Contato"
        },
        hero: {
            tag: "DESENVOLVIDO NO BRASIL",
            title: "Veículos<br>Autônomos",
            desc: "Desenvolvendo a próxima geração de plataformas de alta capacidade.",
            slogan: "Onde a missão exige, a <span class=\"hero-slogan-accent\">Dallas</span> decola."
        },
        manifesto: {
            small: "NOSSO PROPÓSITO",
            title: "Não estamos adaptando helicópteros.<br>Estamos projetando aeronaves autônomas desde a origem.",
            desc: "A Dallas existe para redefinir como aeronaves autônomas de médio e grande porte operam. Nossa missão é construir plataformas robustas, capazes de realizar operações críticas onde confiabilidade, capacidade de carga e autonomia de voo são essenciais.",
            note: "A Dallas é, em sua essência, uma indústria de veículos autônomos — o helicóptero é nossa plataforma principal, não o nosso limite.",
            roadmapCaption: "Roteiro multiplataforma — novas plataformas autônomas em desenvolvimento."
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
            ready: "h Máx. de Autonomia",
            datalink: "km de Alcance"
        },
        blueprint: {
            small: "ESPECIFICAÇÕES DA AERONAVE",
            title: "Projetada para a missão.",
            mtow: "Peso Máx. Decolagem",
            payload: "Carga Útil",
            empty: "Peso Vazio",
            power: "Potência",
            engine: "Motor",
            trl: "Maturidade",
            trlValue: "TRL 6 — Testes em situação real de voo",
            modularTitle: "PLATAFORMA ADAPTATIVA",
            modularDesc: "Uma única aeronave, reconfigurada para a missão. A mesma plataforma aceita uma ampla variedade de equipamentos intercambiáveis:",
            modular1: "Equipamentos de Imagem",
            modular2: "Arsenal Militar",
            modular3: "Compartimento de Carga",
            modular4: "Suportes e Fixações",
            modular5: "Ganchos de Carga",
            modular6: "Maca Médica — Transporte e Resgate",
            modular7: "Tanques Auxiliares de Combustível",
            modular8: "Barra de Pulverização",
            modular9: "+ O que a Missão Exigir"
        },
        performance: {
            small: "DESEMPENHO DE VOO",
            title: "Telemetria real, não especificação projetada.",
            cruise: "Velocidade de Cruzeiro",
            max: "Velocidade Máxima",
            range: "Alcance em Missão Autônoma",
            ceiling: "Teto de Serviço",
            ceilingNote: "10.000 ft (pistão) · 30.000 ft (turbina)",
            ceilingPiston: "PISTÃO",
            ceilingTurbine: "TURBINA",
            note: "Alcance estendido via antena fixa (200 km) ou link satélite (ilimitado)."
        },
        platforms: {
            small: "PLATAFORMAS",
            title: "Construída para múltiplas missões, a partir de uma única aeronave.",
            explore: "Clique aqui → Conhecer Operação",
            defense: { name: "Defesa", desc: "ISR, reabastecimento logístico e proteção de força em ambientes hostis, sem arriscar tripulação." },
            offshore: { name: "Offshore", desc: "Transferência de carga e equipamentos para plataformas, reduzindo a exposição em operações marítimas de alto risco." },
            agro: { name: "Agronegócio", desc: "Suporte aéreo de alta capacidade para operações em larga escala em terrenos remotos e de difícil acesso." }
        },
        applications: {
            title: "Não existe trabalho, e sim Missão."
        },
        footer: {
            tagline: "Aeronave rotativa autônoma, desenvolvida no Brasil.",
            contact: "Fale Conosco",
            eyebrow: "FALE CONOSCO",
            heading: "Vamos conversar sobre a missão.",
            note: "Investidores — solicite nosso data room completo e dossiê técnico por e-mail.",
            pdfLink: "↓ Baixar one-pager (PDF)"
        },
        contactForm: {
            name: "Nome",
            email: "E-mail",
            message: "Mensagem",
            send: "Enviar Mensagem",
            sent: "Mensagem enviada — obrigado. Entraremos em contato em breve."
        },
        scroll: "ROLAR",
        investment: {
            small: "OPORTUNIDADE DE INVESTIMENTO",
            title: "Sustentada por demanda real de mercado, não projeção.",
            desc: "O Brasil é o maior e mais profissionalizado mercado de exportação agrícola do mundo — e a aplicação aérea de precisão é sua lacuna tecnológica mais clara, dentre outros, no setor público-privado.",
            market: "Mercado Endereçável",
            roi: "ROI Anual da Dallas",
            roiNote: "(vs. 56% média de mercado)",
            cagr: "CAGR de Receita, 2023–2033e",
            footnote: "Respaldada por fomento FAPESP PIPE (Fase II aprovada).",
            pressLink: "↗ Destaque na Agência FAPESP: \"Startup brasileira projeta veículo aéreo autônomo para pulverização de culturas\"",
            mi: {
                name: "Inteligência de Mercado",
                desc: "Compare os três mercados lado a lado — defesa, offshore e agronegócio, dimensionados e referenciados para due diligence de investidor.",
                cta: "Clique aqui → Comparar Mercados"
            }
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
        traction: {
            small: "TRAÇÃO",
            title: "Do primeiro voo à preparação para escala.",
            m1title: "Fundação da Dallas Autonomous",
            m1desc: "Início do desenvolvimento de uma plataforma autônoma de aeronave rotativa de grande porte.",
            m2title: "Aprovação do FAPESP PIPE Fase II",
            m2desc: "O projeto é aprovado na Fase II do programa PIPE da FAPESP, validando seu potencial técnico e de inovação.",
            m3title: "Primeiro teste de voo",
            m3desc: "O protótipo realiza seu primeiro teste de voo.",
            m4date: "HOJE",
            m4title: "TRL-6 · Destaque na <a href=\"https://agencia.fapesp.br/brazilian-startup-designs-self-flying-aerial-vehicle-for-crop-spraying/51590\" target=\"_blank\" rel=\"noopener\" class=\"timeline-link\">FAPESP</a>",
            m4desc: "A plataforma atinge o TRL-6 em validação contínua de voo, com o projeto também destacado em matéria da própria FAPESP."
        },
        leadership: {
            small: "LIDERANÇA",
            title: "Construída por quem voa, projeta e escala.",
            intro: "A Dallas Autonomous é liderada por uma equipe que alia visão estratégica, experiência operacional e domínio técnico em aviação, robótica e engenharia aplicada — um equilíbrio essencial para conduzir o projeto com excelência, inovação e viabilidade prática.",
            leaderRole: "Co-Fundador & Presidente",
            leaderBio1: "Mais de 25 anos de trajetória multidisciplinar entre engenharia, aviação e tecnologia. Iniciou a carreira na engenharia civil e gestão de projetos, e se destacou como instrutor e piloto comercial de helicóptero, com atuação intensa na formação de novos profissionais para o mercado de aviação.",
            leaderBio2: "Nos últimos anos, consolidou-se como uma das lideranças nacionais no desenvolvimento e operação de aeronaves não tripuladas de grande porte, conduzindo a Dallas Autonomous da prototipagem até a preparação para escala — unindo conhecimento técnico das plataformas, experiência real de voo, liderança de engenharia e leitura estratégica das demandas de mercado.",
            leaderTag1: "Piloto Comercial de Helicóptero e Mecânico de Aviônica",
            leaderTag2: "Atua com Drones há +10 Anos",
            leaderTag3: "Instrutor de Voos de Helicóptero",
            scaleTitle: "ESCALA E SUPORTE TÉCNICO",
            scaleDesc: "A equipe de apoio conta com engenheiros de sistemas, especialistas em automação e desenvolvedores de inteligência embarcada, com passagens por centros de excelência e startups deep tech. A Dallas está estruturada para escalar por meio de parcerias industriais, infraestrutura modular de montagem e testes, suporte técnico híbrido com monitoramento preditivo via telemetria, e programas de treinamento para operadores e técnicos.",
            consultantsTitle: "ENGENHEIROS-CONSULTORES",
            c1role: "Engenheiro Aeronáutico — Aerodinâmica & Projetos",
            c2role: "Engenheiro Eletrônico — Sistemas de Controle & Software",
            c3role: "Desenhista — Projetos & Desenho Técnico",
            c4role: "Engenheiro Mecatrônico — Projetos & Manufatura",
            c5role: "Modelador de Compósitos"
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
                scenarioBody: "Com até 7 horas de autonomia no tanque auxiliar e alcance de missão autônoma de 500 km, uma única plataforma é projetada para manter vigilância de fronteira ou perímetro por uma janela estendida, alimentando ISR para o comando sem colocar tripulação na aeronave. O VTOL permite operar de terreno sem preparo, próximo à área de interesse — sem necessidade de pista ou hangar.",
                marketTitle: "OPORTUNIDADE DE MERCADO",
                marketSizeLabel: "Mercado Global de Drones Militares até 2033",
                marketCagrLabel: "CAGR, 2026–2033",
                marketIsrLabel: "Maior Segmento de Aplicação",
                marketSource: "Fonte: Grand View Research, Military Drone Market Report, 2026–2033."
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
                scenarioBody: "Um transporte de suprimentos de rotina até uma plataforma offshore normalmente significa comprometer uma embarcação ou um helicóptero tripulado — e sua tripulação — em mar aberto. Com link satélite para alcance praticamente ilimitado e operação VTOL autônoma, uma plataforma Dallas é projetada para realizar esse trajeto sem tripulação, reduzindo a exposição de pessoal na etapa de maior risco da operação.",
                marketTitle: "OPORTUNIDADE DE MERCADO",
                marketSizeLabel: "Mercado Global de Perfuração Offshore até 2034",
                marketCagrLabel: "CAGR, 2026–2034",
                marketTrendValue: "Plataformas Não Tripuladas",
                marketTrendLabel: "Principal Tendência de Crescimento do Setor",
                marketSource: "Fonte: Fortune Business Insights, Offshore Drilling Market Report, 2026–2034."
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
        },
        marketIntel: {
            statusPill: "TRL-6 · TESTADO EM VOO",
            tag: "INTELIGÊNCIA DE MERCADO",
            title: "Três nichos. Uma plataforma autônoma.",
            lead: "Uma comparação de leitura rápida das três verticais de missão que a Dallas Autonomous mira — dimensionada e referenciada para due diligence de investidor, não projetada.",
            chartTitle: "TAMANHO DE MERCADO POR NICHO (US$ BI EQUIVALENTE)",
            chartNote: "*Número específico do Brasil (setor de aviação agrícola, Sindag) convertido a aprox. R$5,4/US$ — não é uma fatia nacional dos números globais de defesa/offshore mostrados para comparação.",
            specsTitle: "UMA PLATAFORMA, NOS TRÊS NICHOS",
            spec1: "Testado em Voo",
            spec2: "Payload Modular",
            spec3: "Alcance Autônomo",
            spec4: "Autonomia Máxima",
            sources: "Fontes: Fortune Business Insights (mercado de helicópteros não tripulados); Mordor Intelligence (serviços de helicóptero offshore); Sindag — Sindicato Nacional das Empresas de Aviação Agrícola (setor aeroagrícola brasileiro).",
            table: {
                header: "MOTOR DE CRESCIMENTO",
                customerRow: "Cliente-alvo",
                painRow: "Dor que a Dallas resolve"
            },
            agro: {
                name: "Agronegócio",
                marketLabel: "SETOR AEROAGRÍCOLA (BRASIL)",
                marketSub: "Faturamento 2024, rumo a R$10 Bi+ em 2028",
                highlight: "2ª maior frota do mundo",
                chartLabel: "Agronegócio (BR)",
                customer: "Grandes fazendas e cooperativas",
                pain: "Escassez de piloto, escala de área"
            },
            defense: {
                name: "Defesa",
                marketLabel: "MERCADO DE HELICÓPTEROS NÃO TRIPULADOS (GLOBAL)",
                marketSub: "Mercado 2025 · CAGR 12,5%",
                highlight: "América do Norte lidera, 33%",
                chartLabel: "Defesa (global)",
                customer: "Agências de governo e defesa",
                pain: "ISR e logística sem expor tripulação"
            },
            offshore: {
                name: "Offshore",
                marketLabel: "SERVIÇOS DE HELICÓPTERO OFFSHORE (GLOBAL)",
                marketSub: "Mercado 2026 · CAGR 4,0%",
                highlight: "Óleo e gás = 70% da demanda",
                chartLabel: "Offshore (global)",
                customer: "Operadoras de óleo e gás",
                pain: "Custo e risco de voo tripulado"
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

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const value = getNested(dict, el.getAttribute("data-i18n-placeholder"));
        if (value !== null) el.setAttribute("placeholder", value);
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
