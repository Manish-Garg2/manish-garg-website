/* =============================================================
   MANISH GARG — Business Analytics & Decision Practice
   Multi-Page Interactions & Dynamic UI Engine
   ============================================================= */
(function () {
    'use strict';

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* =========================================================
       NAVIGATION (Active states, mobile menu, smooth scroll)
       ========================================================= */
    function initNav() {
        var nav = document.getElementById('nav');
        var toggle = document.getElementById('navToggle');
        var links = document.getElementById('navLinks');

        // Scroll background effect
        window.addEventListener('scroll', function () {
            if (window.scrollY > 40) {
                if (nav) nav.classList.add('scrolled');
            } else {
                if (nav) nav.classList.remove('scrolled');
            }
        }, { passive: true });

        // Mobile drawer toggle
        if (toggle && links) {
            toggle.addEventListener('click', function () {
                var open = links.classList.toggle('open');
                toggle.setAttribute('aria-expanded', String(open));
            });
            links.querySelectorAll('.nav-link').forEach(function (link) {
                link.addEventListener('click', function () {
                    links.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                });
            });
        }

        // Active page indicator
        var currentPage = document.body.getAttribute('data-page') || '';
        if (!currentPage) {
            var path = window.location.pathname.toLowerCase();
            if (path.indexOf('work') !== -1) currentPage = 'work';
            else if (path.indexOf('method') !== -1) currentPage = 'method';
            else if (path.indexOf('about') !== -1) currentPage = 'about';
            else currentPage = 'home';
        }

        if (links) {
            links.querySelectorAll('.nav-link').forEach(function (link) {
                var page = link.getAttribute('data-page');
                if (page && page === currentPage) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                } else {
                    link.classList.remove('active');
                    link.removeAttribute('aria-current');
                }
            });
        }

        // Smooth scroll for in-page anchors
        document.querySelectorAll('a[href^="#"]').forEach(function (a) {
            a.addEventListener('click', function (e) {
                var id = this.getAttribute('href');
                if (id === '#' || id === '') return;
                var target = document.querySelector(id);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    /* =========================================================
       HOME HERO: ELEVATED PROJECT COLLAGE PARALLAX
       ========================================================= */
    function initCollageParallax() {
        if (reducedMotion) return;

        var stage = document.getElementById('collageStage');
        var canvas = document.getElementById('collageCanvas');
        if (!stage || !canvas) return;

        var isMobile = window.innerWidth <= 768;
        if (isMobile) return;

        var ticking = false;

        stage.addEventListener('mousemove', function (e) {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(function () {
                var rect = stage.getBoundingClientRect();
                var relX = (e.clientX - rect.left) / rect.width - 0.5;
                var relY = (e.clientY - rect.top) / rect.height - 0.5;

                // Subtle organic tilt
                var rotX = -relY * 8;
                var rotY = relX * 10;

                canvas.style.transform = 'rotateX(' + rotX.toFixed(2) + 'deg) rotateY(' + rotY.toFixed(2) + 'deg)';
                ticking = false;
            });
        });

        stage.addEventListener('mouseleave', function () {
            canvas.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }

    /* =========================================================
       HOME: INTERACTIVE "WHAT ARE YOU TRYING TO MAKE SENSE OF?"
       ========================================================= */
    var SITUATIONS_DATA = {
        '01': {
            badge: 'SITUATION 01 · PROFITABILITY',
            subtitle: 'Finding what changed',
            heading: 'First, find out what changed.',
            lead: 'Was it price discounting, volume shifts, changing product mix, or creeping fulfillment costs? When top-line revenue hides margin erosion, you need to dissect the drivers before making cuts.',
            approaches: [
                'Map unit economics across product lines and customer groups',
                'Disentangle volume growth from margin dilution',
                'Identify which customer segments generate genuine profit',
                'Turn the evidence into clear pricing and inventory adjustments'
            ],
            evidenceTag: 'APPLIED ANALYSIS',
            evidenceName: 'Margin & product trade-off analysis',
            evidenceDesc: 'Modeled conflicting objectives between margin returns and volume fulfillment to find the optimal operating boundary.',
            evidenceLink: 'See how I approached margin and pricing trade-offs in Work',
            visual: '<svg viewBox="0 0 260 50" class="frag-chart" aria-hidden="true"><line x1="5" y1="42" x2="255" y2="42" stroke="rgba(26,26,26,0.12)" stroke-width="1"/><polyline points="10,38 70,30 130,22 190,16 250,10" fill="none" stroke="#1A1A1A" stroke-width="1.8"/><polyline points="10,20 70,24 130,30 190,36 250,40" fill="none" stroke="#D64545" stroke-width="1.5" stroke-dasharray="3,2"/><circle cx="250" cy="10" r="3" fill="#BFFF00" stroke="#1A1A1A" stroke-width="1"/></svg>'
        },
        '02': {
            badge: 'SITUATION 02 · RETENTION',
            subtitle: 'Finding where engagement breaks',
            heading: 'Find where engagement actually breaks down.',
            lead: 'Acquiring new customers is expensive. When repeat rates decline, the drop-off rarely happens by chance — it usually traces back to early onboarding friction, communication cadence, or unmet expectations.',
            approaches: [
                'Track cohort behaviour from first purchase forward',
                'Pinpoint the exact timing when customers drop away',
                'Test whether early engagement cadence influences long-term commitment',
                'Focus effort on the moments that protect customer relationships'
            ],
            evidenceTag: 'APPLIED ANALYSIS',
            evidenceName: 'Customer journey and retention analysis',
            evidenceDesc: 'Investigated engagement timing and cohort retention patterns across 55,000+ supporter journeys to uncover true attrition drivers.',
            evidenceLink: 'See how I investigated retention in Work',
            visual: '<svg viewBox="0 0 260 50" class="frag-chart" aria-hidden="true"><line x1="5" y1="42" x2="255" y2="42" stroke="rgba(26,26,26,0.12)" stroke-width="1"/><path d="M10,12 C40,14 70,36 120,38 C170,40 220,41 250,42" fill="none" stroke="#1A1A1A" stroke-width="1.8"/><line x1="70" y1="12" x2="70" y2="42" stroke="#D64545" stroke-width="1.2" stroke-dasharray="2,2"/><circle cx="70" cy="36" r="3.5" fill="#BFFF00" stroke="#1A1A1A" stroke-width="1"/></svg>'
        },
        '03': {
            badge: 'SITUATION 03 · OPERATIONS',
            subtitle: 'Finding where costs come from',
            heading: 'Find where costs come from — and what changes the outcome.',
            lead: 'Cutting costs across the board often damages customer service. The goal is to find where money is spent inefficiently without compromising what customers rely on.',
            approaches: [
                'Map operational flows and cost accumulation points',
                'Model alternative routing, inventory, and resource choices',
                'Balance cost reductions against customer service commitments',
                'Build a resilient plan that holds up under disruptions'
            ],
            evidenceTag: 'SIMULATION',
            evidenceName: 'Network distribution and cost trade-off model',
            evidenceDesc: 'Formulated a mathematical constraint model across multiple distribution facilities balancing operating expenses against delivery SLAs.',
            evidenceLink: 'See how I modeled distribution efficiency in Work',
            visual: '<svg viewBox="0 0 260 50" class="frag-chart" aria-hidden="true"><line x1="5" y1="42" x2="255" y2="42" stroke="rgba(26,26,26,0.12)" stroke-width="1"/><path d="M10,40 Q80,38 140,24 T250,12" fill="none" stroke="#1A1A1A" stroke-width="1.8"/><circle cx="45" cy="39" r="3" fill="#1A1A1A"/><circle cx="120" cy="27" r="3" fill="#1A1A1A"/><circle cx="195" cy="18" r="4" fill="#BFFF00" stroke="#1A1A1A" stroke-width="1.2"/><circle cx="250" cy="12" r="3" fill="#1A1A1A"/></svg>'
        },
        '04': {
            badge: 'SITUATION 04 · CLARITY',
            subtitle: 'Cutting through the clutter',
            heading: 'Cut through the clutter to find the signal.',
            lead: 'More dashboards usually produce more confusion. Having thousands of numbers doesn\'t help if nobody agrees on what is causing the problem or what decision needs to be made.',
            approaches: [
                'Frame the specific business question first, before opening spreadsheets',
                'Filter out day-to-day noise from genuine underlying trends',
                'Translate messy data into clear, understandable evidence',
                'Connect analytical findings directly to executive decisions'
            ],
            evidenceTag: 'APPLIED ANALYSIS',
            evidenceName: 'Signal extraction and diagnostic analysis',
            evidenceDesc: 'Analyzed thousands of customer records and operational metrics to extract dominant sentiment and eliminate reporting blind spots.',
            evidenceLink: 'See how I turn raw data into clear evidence in Work',
            visual: '<svg viewBox="0 0 260 50" class="frag-chart" aria-hidden="true"><line x1="5" y1="42" x2="255" y2="42" stroke="rgba(26,26,26,0.12)" stroke-width="1"/><rect x="20" y="28" width="16" height="14" fill="rgba(26,26,26,0.2)"/><rect x="55" y="16" width="16" height="26" fill="rgba(26,26,26,0.2)"/><rect x="90" y="8" width="16" height="34" fill="#BFFF00" stroke="#1A1A1A" stroke-width="1.2"/><rect x="125" y="22" width="16" height="20" fill="rgba(26,26,26,0.2)"/><rect x="160" y="30" width="16" height="12" fill="rgba(26,26,26,0.2)"/><rect x="195" y="14" width="16" height="28" fill="#1A1A1A"/><rect x="230" y="34" width="16" height="8" fill="rgba(26,26,26,0.2)"/></svg>'
        },
        '05': {
            badge: 'SITUATION 05 · SCENARIOS',
            subtitle: 'Testing outcomes under risk',
            heading: 'Test different outcomes before committing capital.',
            lead: 'A single forecast is almost always wrong because the real world is volatile. The smart approach is to stress-test your plans against uncertainty before committing resources.',
            approaches: [
                'Test hundreds of possible demand, weather, or cost scenarios',
                'Identify worst-case risks and where the business is vulnerable',
                'Compare different operational choices under pressure',
                'Create realistic operating boundaries with clear safety margins'
            ],
            evidenceTag: 'PROTOTYPE',
            evidenceName: 'Uncertainty and cashflow simulation',
            evidenceDesc: 'Executed a 1,000-scenario simulation stress-testing operating cash flow and capacity constraints against volatile seasonal shocks.',
            evidenceLink: 'See how I simulated uncertainty scenarios in Work',
            visual: '<svg viewBox="0 0 260 50" class="frag-chart" aria-hidden="true"><line x1="5" y1="42" x2="255" y2="42" stroke="rgba(26,26,26,0.12)" stroke-width="1"/><path d="M15,42 Q75,41 125,12 Q175,41 245,42 Z" fill="rgba(191,255,0,0.2)" stroke="#1A1A1A" stroke-width="1.6"/><line x1="85" y1="14" x2="85" y2="42" stroke="#D64545" stroke-width="1.5" stroke-dasharray="3,2"/><circle cx="125" cy="12" r="3" fill="#1A1A1A"/></svg>'
        },
        '06': {
            badge: 'SITUATION 06 · DECISION AI',
            subtitle: 'Where intelligent tools help',
            heading: 'Find where intelligent tools add genuine decision value.',
            lead: 'Most AI initiatives fail because companies start with the tool rather than the problem. AI should assist human judgement where pattern recognition at scale creates real leverage.',
            approaches: [
                'Identify where automated analysis saves human time and catches blind spots',
                'Test whether machine learning or simpler analysis solves the problem better',
                'Design human-in-the-loop workflows that maintain accountability',
                'Ensure the solution is explainable, reliable, and actually used'
            ],
            evidenceTag: 'APPLIED ANALYSIS',
            evidenceName: 'Decision-support AI workflows',
            evidenceDesc: 'Applied predictive models and text clustering to surface latent customer patterns while keeping human reasoning in the decision loop.',
            evidenceLink: 'See how I explore practical decision AI in Work',
            visual: '<svg viewBox="0 0 260 50" class="frag-chart" aria-hidden="true"><line x1="5" y1="42" x2="255" y2="42" stroke="rgba(26,26,26,0.12)" stroke-width="1"/><line x1="10" y1="20" x2="250" y2="20" stroke="rgba(26,26,26,0.2)" stroke-dasharray="2,3"/><polyline points="15,36 50,30 85,24 120,16 155,18 190,12 225,14 250,8" fill="none" stroke="#1A1A1A" stroke-width="1.8"/><circle cx="190" cy="12" r="3.5" fill="#BFFF00" stroke="#1A1A1A" stroke-width="1"/><circle cx="250" cy="8" r="3.5" fill="#BFFF00" stroke="#1A1A1A" stroke-width="1"/></svg>'
        }
    };

    function initSenseWorkspace() {
        var workspace = document.getElementById('senseWorkspace');
        if (!workspace) return;

        var choices = workspace.querySelectorAll('.sense-choice');
        var card = document.getElementById('responseCard');
        var badge = document.getElementById('responseBadge');
        var subtitle = document.getElementById('responseSubtitle');
        var heading = document.getElementById('responseHeading');
        var lead = document.getElementById('responseLead');
        var approachList = document.getElementById('approachList');
        var evidenceTag = document.getElementById('evidenceTag');
        var evidenceName = document.getElementById('evidenceName');
        var evidenceVisual = document.getElementById('evidenceVisual');
        var evidenceDesc = document.getElementById('evidenceDesc');
        var evidenceLink = document.getElementById('evidenceLink');

        function selectSituation(id) {
            var data = SITUATIONS_DATA[id];
            if (!data) return;

            choices.forEach(function (c) {
                var isMatch = c.getAttribute('data-situation') === id;
                c.classList.toggle('active', isMatch);
                c.setAttribute('aria-selected', isMatch ? 'true' : 'false');
            });

            if (card) {
                card.style.opacity = '0.35';
                card.style.transform = 'translateY(5px)';

                setTimeout(function () {
                    if (badge) badge.textContent = data.badge;
                    if (subtitle) subtitle.textContent = data.subtitle;
                    if (heading) heading.textContent = data.heading;
                    if (lead) lead.textContent = data.lead;

                    if (approachList) {
                        approachList.innerHTML = '';
                        data.approaches.forEach(function (step) {
                            var li = document.createElement('li');
                            li.textContent = step;
                            approachList.appendChild(li);
                        });
                    }

                    if (evidenceTag && data.evidenceTag) evidenceTag.textContent = data.evidenceTag;
                    if (evidenceName) evidenceName.textContent = data.evidenceName;
                    if (evidenceVisual && data.visual) evidenceVisual.innerHTML = data.visual;
                    if (evidenceDesc) evidenceDesc.textContent = data.evidenceDesc;
                    if (evidenceLink) {
                        evidenceLink.innerHTML = data.evidenceLink + ' <span aria-hidden="true">→</span>';
                    }

                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 140);
            }
        }

        choices.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var id = btn.getAttribute('data-situation');
                selectSituation(id);
            });

            btn.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    var id = btn.getAttribute('data-situation');
                    selectSituation(id);
                }
            });
        });
    }

    /* =========================================================
       HOME: ROTATING PROOF TICKER
       ========================================================= */
    function initProofTicker() {
        var ticker = document.getElementById('proofTicker');
        if (!ticker) return;

        var proofs = [
            '55,621 donors analysed.',
            '4 distribution hubs modeled.',
            '1,000 risk scenarios simulated.',
            '270k+ transaction records audited.',
            '5,000 customer feedback reviews parsed.'
        ];
        var index = 0;

        setInterval(function () {
            ticker.classList.add('fading');
            setTimeout(function () {
                index = (index + 1) % proofs.length;
                ticker.textContent = proofs[index];
                ticker.classList.remove('fading');
            }, 350);
        }, 3800);
    }

    /* =========================================================
       GLOBAL CONFIGURATION (CONTACT & SOCIAL ENDPOINTS)
       ========================================================= */
    var CONFIG = {
        LINKEDIN_URL: 'https://www.linkedin.com/in/manish-garg-51b072228',
        INSTAGRAM_URL: 'https://www.instagram.com/',
        EMAIL_ADDRESS: 'mailto:garg38396@gmail.com',
        PHONE_NUMBER: 'tel:8178304673'
    };

    /* =========================================================
       SHARED FOOTER ENGINE
       ========================================================= */
    function initSharedFooter() {
        // Wire configurable contact endpoints
        var linkedinLinks = document.querySelectorAll('[data-config-link="linkedin"]');
        var instagramLinks = document.querySelectorAll('[data-config-link="instagram"]');
        var emailLinks = document.querySelectorAll('[data-config-link="email"]');

        linkedinLinks.forEach(function (el) { el.href = CONFIG.LINKEDIN_URL; });
        instagramLinks.forEach(function (el) { el.href = CONFIG.INSTAGRAM_URL; });
        emailLinks.forEach(function (el) { el.href = CONFIG.EMAIL_ADDRESS; });

        // Highlight active page link in footer
        var currentPage = document.body.getAttribute('data-page') || '';
        if (!currentPage) {
            var path = window.location.pathname.toLowerCase();
            if (path.indexOf('work') !== -1) currentPage = 'work';
            else if (path.indexOf('method') !== -1) currentPage = 'method';
            else if (path.indexOf('about') !== -1) currentPage = 'about';
            else currentPage = 'home';
        }

        var footerLinks = document.querySelectorAll('.footer-link');
        footerLinks.forEach(function (link) {
            var page = link.getAttribute('data-page');
            if (page && page === currentPage) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    }

    /* =========================================================
       SIGNATURE VISITOR COUNT DETAIL
       ========================================================= */
    function initVisitorCounter() {
        var counterEl = document.getElementById('visitorCounter');
        var valEl = document.getElementById('visitorCountVal');
        if (!counterEl || !valEl) return;

        var targetCount = null;
        var inViewport = false;
        var hasAnimated = false;

        function formatCount(num) {
            if (typeof num !== 'number' || isNaN(num) || num <= 0) return '—';
            var str = String(num);
            while (str.length < 5) {
                str = '0' + str;
            }
            return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        function triggerEntrance() {
            if (hasAnimated || targetCount === null) return;
            hasAnimated = true;

            if (reducedMotion || targetCount <= 0) {
                valEl.textContent = formatCount(targetCount);
                counterEl.classList.add('is-active');
                return;
            }

            var duration = 900;
            var startTime = null;

            function frame(now) {
                if (!startTime) startTime = now;
                var progress = Math.min((now - startTime) / duration, 1);
                var ease = 1 - Math.pow(1 - progress, 3);
                var current = Math.floor(ease * targetCount);
                valEl.textContent = formatCount(current);

                if (progress < 1) {
                    requestAnimationFrame(frame);
                } else {
                    valEl.textContent = formatCount(targetCount);
                    counterEl.classList.add('is-active');
                }
            }
            requestAnimationFrame(frame);
        }

        if ('IntersectionObserver' in window) {
            var obs = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        inViewport = true;
                        if (targetCount !== null) {
                            triggerEntrance();
                        }
                        obs.unobserve(counterEl);
                    }
                });
            }, { threshold: 0.1 });
            obs.observe(counterEl);
        } else {
            inViewport = true;
        }

        try {
            var sessionKey = 'mg_portfolio_session_v1';
            var hasVisited = false;
            try {
                hasVisited = !!sessionStorage.getItem(sessionKey);
            } catch (e) {}

            var endpoint = hasVisited
                ? 'https://countapi.mileshilliard.com/api/v1/get/manishgarg_portfolio_visits'
                : 'https://countapi.mileshilliard.com/api/v1/hit/manishgarg_portfolio_visits';

            var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
            var timeoutId = controller ? setTimeout(function () { controller.abort(); }, 5000) : null;

            fetch(endpoint, { signal: controller ? controller.signal : undefined })
                .then(function (res) {
                    if (timeoutId) clearTimeout(timeoutId);
                    if (!res.ok) throw new Error('Counter offline');
                    return res.json();
                })
                .then(function (data) {
                    if (data && typeof data.value === 'number') {
                        targetCount = data.value;
                        try {
                            sessionStorage.setItem(sessionKey, '1');
                        } catch (e) {}
                        if (inViewport) {
                            triggerEntrance();
                        }
                    }
                })
                .catch(function () {
                    // Graceful fallback: keeps initial '—' placeholder intact without broken text or error
                });
        } catch (e) {}
    }

    /* =========================================================
       WORK PAGE: INTERACTIVE PERSPECTIVE LENS FILTER
       ========================================================= */
    function initWorkLensFilter() {
        var buttons = document.querySelectorAll('.work-lens-btn');
        var cards = document.querySelectorAll('.work-card');
        if (!buttons.length || !cards.length) return;

        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var filter = btn.getAttribute('data-filter');

                buttons.forEach(function (b) {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');

                cards.forEach(function (card) {
                    if (filter === 'all') {
                        card.classList.remove('filtered-out');
                        return;
                    }

                    var lens = card.getAttribute('data-lens') || '';
                    if (lens.indexOf(filter) !== -1) {
                        card.classList.remove('filtered-out');
                    } else {
                        card.classList.add('filtered-out');
                    }
                });
            });
        });
    }

    /* =========================================================
       WORK PAGE: HERO ANALYTICAL JOURNEY VISUAL
       ========================================================= */
    function initWorkHeroVisual() {
        var visual = document.getElementById('workJourneyVisual');
        if (!visual) return;

        var steps = visual.querySelectorAll('.journey-step');
        if (!steps.length) return;

        steps.forEach(function (step) {
            step.addEventListener('mouseenter', function () {
                steps.forEach(function (s) { s.classList.remove('active'); });
                step.classList.add('active');
            });
        });
    }

    /* =========================================================
       METHOD PAGE: 6-STAGE INTERACTIVE SIGNAL PATH ENGINE
       ========================================================= */
    var METHOD_STAGES_DATA = {
        '01': {
            num: '01',
            name: 'Question',
            badge: 'STAGE 01 · PROBLEM FRAMING',
            question: 'What exactly are we trying to understand?',
            summary: 'Most analytical projects fail before spreadsheets are opened because the business starts with a vague symptom instead of a decision. We isolate the specific trade-off or mechanism that requires an answer.',
            inputs: 'Stakeholder interviews · Initial business tension · Unit economics',
            deliverable: 'Precise decision question with testable hypotheses'
        },
        '02': {
            num: '02',
            name: 'Context',
            badge: 'STAGE 02 · BOUNDARY CONDITIONS',
            question: 'What else affects the problem?',
            summary: 'Data without context is dangerous. A metric can look alarming in isolation but completely expected when paired with seasonality, competitive pressure, regulatory shifts, or supply constraints. Context defines the operating boundaries.',
            inputs: 'Operational workflow · Seasonal calendars · Cost structures',
            deliverable: 'Constraint map & variable relationship diagram'
        },
        '03': {
            num: '03',
            name: 'Data',
            badge: 'STAGE 03 · EVIDENCE COLLECTION',
            question: 'What evidence do we actually have?',
            summary: 'Collecting data is not about stockpiling every table. It is about identifying which specific signals could prove or disprove the hypotheses. We audit data quality, reconcile anomalies, and eliminate reporting blind spots.',
            inputs: 'Transaction logs · Cohort behavioral records · Operational metrics',
            deliverable: 'Cleaned, audited analytical dataset focused on key signals'
        },
        '04': {
            num: '04',
            name: 'Signal',
            badge: 'STAGE 04 · PATTERN EXTRACTION',
            question: 'What pattern is genuinely meaningful?',
            summary: 'Separating signal from daily noise. We use statistical modeling, diagnostic decomposition, and machine learning to uncover underlying relationships that raw dashboards obscure.',
            inputs: 'Decomposition models · Clustering algorithms · Scenario stress-tests',
            deliverable: 'Quantified drivers, correlation boundaries, and causal indications'
        },
        '05': {
            num: '05',
            name: 'Judgement',
            badge: 'STAGE 05 · HUMAN INTERPRETATION',
            question: 'What does the evidence NOT tell us?',
            summary: 'Algorithms don\'t make business decisions; people do. Here machine output meets human reasoning: we stress-test assumptions, account for unmodeled realities, evaluate ethical implications, and weigh conflicting stakeholder trade-offs.',
            inputs: 'Executive sanity-checking · Risk appetite · Organizational reality',
            deliverable: 'Evaluated scenarios with explicit risk-benefit trade-offs'
        },
        '06': {
            num: '06',
            name: 'Decision',
            badge: 'STAGE 06 · STRATEGIC ACTION',
            question: 'What could the business do next?',
            summary: 'An insight without action is merely trivia. Analysis concludes with clear, prioritized actions: which policy to adjust, which route to reassign, which customer tier to safeguard, or which capital reserve to establish.',
            inputs: 'Scenario priority matrix · Operational capacity · Execution roadmap',
            deliverable: 'Actionable policy adjustments and clear operating boundaries'
        }
    };

    function initMethodInteractive() {
        var workspace = document.getElementById('methodWorkspace');
        if (!workspace) return;

        var stageButtons = document.querySelectorAll('.method-stage-btn');
        var milestoneNodes = document.querySelectorAll('.milestone-group');
        var card = document.getElementById('methodDetailCard');
        var badge = document.getElementById('detailBadge');
        var question = document.getElementById('detailQuestion');
        var summary = document.getElementById('detailSummary');
        var inputs = document.getElementById('detailInputs');
        var deliverable = document.getElementById('detailDeliverable');
        var activePath = document.getElementById('signalFlowActive');
        var signalStage = document.getElementById('signalPathStage');

        var STAGE_STROKE_OFFSETS = {
            '01': 0.15,
            '02': 0.32,
            '03': 0.50,
            '04': 0.70,
            '05': 0.86,
            '06': 1.00
        };

        var currentActiveStage = '01';
        var cardTransitionTimer = null;

        function selectStage(stageId) {
            if (!stageId || stageId === currentActiveStage) return;
            var data = METHOD_STAGES_DATA[stageId];
            if (!data) return;

            currentActiveStage = stageId;

            if (workspace) workspace.setAttribute('data-active-stage', stageId);
            if (signalStage) signalStage.setAttribute('data-active-stage', stageId);
            document.documentElement.setAttribute('data-active-stage', stageId);

            stageButtons.forEach(function (btn) {
                var isMatch = btn.getAttribute('data-stage') === stageId;
                btn.classList.toggle('active', isMatch);
                btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
            });

            milestoneNodes.forEach(function (node) {
                var isMatch = node.getAttribute('data-stage') === stageId;
                node.classList.toggle('active', isMatch);
            });

            if (activePath && activePath.getTotalLength) {
                try {
                    var totalLen = activePath.getTotalLength();
                    var fraction = STAGE_STROKE_OFFSETS[stageId] || 1;
                    activePath.style.strokeDasharray = totalLen;
                    activePath.style.strokeDashoffset = totalLen * (1 - fraction);
                } catch (e) {}
            }

            if (card) {
                if (cardTransitionTimer) {
                    clearTimeout(cardTransitionTimer);
                }
                card.style.opacity = '0.35';
                card.style.transform = 'translateY(2px)';

                cardTransitionTimer = setTimeout(function () {
                    if (badge) badge.textContent = data.badge;
                    if (question) question.textContent = data.question;
                    if (summary) summary.textContent = data.summary;
                    if (inputs) inputs.textContent = data.inputs;
                    if (deliverable) deliverable.textContent = data.deliverable;

                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 80);
            }
        }

        if (activePath && activePath.getTotalLength) {
            try {
                var totalLen = activePath.getTotalLength();
                activePath.style.strokeDasharray = totalLen;
                activePath.style.strokeDashoffset = totalLen * (1 - 0.15);
            } catch (e) {}
        }

        stageButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var stageId = btn.getAttribute('data-stage');
                selectStage(stageId);
            });

            btn.addEventListener('pointerenter', function () {
                var stageId = btn.getAttribute('data-stage');
                selectStage(stageId);
            });

            btn.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    var stageId = btn.getAttribute('data-stage');
                    selectStage(stageId);
                }
            });
        });

        milestoneNodes.forEach(function (node) {
            node.addEventListener('click', function () {
                var stageId = node.getAttribute('data-stage');
                selectStage(stageId);
            });

            node.addEventListener('pointerenter', function () {
                var stageId = node.getAttribute('data-stage');
                selectStage(stageId);
            });
        });
    }

    /* =========================================================
       SCROLL ANIMATIONS (Intersection Observer)
       ========================================================= */
    function initScrollAnimations() {
        var els = document.querySelectorAll('[data-animate]');

        if (reducedMotion) {
            els.forEach(function (el) { el.classList.add('in-view'); });
            return;
        }

        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    var delay = parseInt(el.getAttribute('data-delay') || '0', 10);
                    setTimeout(function () { el.classList.add('in-view'); }, delay);
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        els.forEach(function (el) { obs.observe(el); });
    }

    /* =========================================================
       ABOUT PAGE — PROGRESSIVE DISCOVERY ENGINE
       ========================================================= */
    function initAboutInteractive() {
        var section = document.getElementById('aboutInteractive');
        if (!section) return;

        var layerButtons = section.querySelectorAll('.layer-item');
        var panes = section.querySelectorAll('.narrative-pane');
        var nextButtons = section.querySelectorAll('.pane-next-btn');

        function switchLayer(layerId) {
            if (!layerId) return;

            layerButtons.forEach(function (btn) {
                var isMatch = btn.getAttribute('data-layer') === layerId;
                btn.classList.toggle('active', isMatch);
                btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
            });

            panes.forEach(function (pane) {
                var isMatch = pane.getAttribute('data-layer') === layerId;
                if (isMatch) {
                    pane.hidden = false;
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                    pane.hidden = true;
                }
            });
        }

        layerButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var layerId = btn.getAttribute('data-layer');
                switchLayer(layerId);
            });

            btn.addEventListener('mouseenter', function () {
                var layerId = btn.getAttribute('data-layer');
                switchLayer(layerId);
            });

            btn.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    var layerId = btn.getAttribute('data-layer');
                    switchLayer(layerId);
                }
            });
        });

        nextButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var nextLayer = btn.getAttribute('data-next');
                switchLayer(nextLayer);
            });
        });
    }

    /* =========================================================
       METHOD HERO OUTCOMES & SCROLL CUE
       ========================================================= */
    function initMethodOutcomes() {
        var outcomesBlock = document.getElementById('methodOutcomesBlock');
        var signalStage = document.getElementById('signalPathStage');
        var scrollCue = document.getElementById('methodScrollCue');

        if (outcomesBlock && signalStage) {
            var nodes = outcomesBlock.querySelectorAll('.outcome-node');
            nodes.forEach(function (node) {
                var target = node.getAttribute('data-target');
                node.addEventListener('mouseenter', function () {
                    signalStage.classList.remove('highlight-understand', 'highlight-find', 'highlight-decide');
                    signalStage.classList.add('highlight-' + target);
                });
                node.addEventListener('mouseleave', function () {
                    signalStage.classList.remove('highlight-' + target);
                });
            });
        }

        if (scrollCue) {
            var onScroll = function () {
                if (window.scrollY > 50) {
                    scrollCue.classList.add('scrolled');
                } else {
                    scrollCue.classList.remove('scrolled');
                }
            };
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
        }
    }

    /* =========================================================
       INIT
       ========================================================= */
    function init() {
        initNav();
        initSharedFooter();
        initVisitorCounter();
        initScrollAnimations();
        initCollageParallax();
        initSenseWorkspace();
        initProofTicker();
        initWorkLensFilter();
        initWorkHeroVisual();
        initMethodInteractive();
        initMethodOutcomes();
        initAboutInteractive();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
