const fs = require('fs');
const path = require('path');

const dataJsonPath = path.join(__dirname, '..', 'gcc-tracker', 'gcc-data.json');
const rawRefPath = path.join(__dirname, 'raw-reference-data.json');
const outputJsPath = path.join(__dirname, '..', 'gcc-tracker', 'gcc-tracker.js');

const gccData = JSON.parse(fs.readFileSync(dataJsonPath, 'utf8'));
const rawRef = JSON.parse(fs.readFileSync(rawRefPath, 'utf8'));

const indiaSvgPath = rawRef.indiaPath;
const cityCoords = rawRef.cityCoords;

const jsContent = `/* =============================================================
   INDIA GCC INTELLIGENCE & TRACKER — INTERACTIVE ENGINE
   Independent analytical dashboard module
   Scoped to .gcc-app / .gcc-page
   ============================================================= */

(function () {
    'use strict';

    // SVG India Boundaries & Projection
    const INDIA_MAP_PATH = "${indiaSvgPath}";
    const CITY_COORDINATES = ${JSON.stringify(cityCoords, null, 2)};

    // Fallback authentic database for offline/local file:// access
    const EMBEDDED_GCC_DATA = ${JSON.stringify(gccData, null, 2)};

    // App State
    let AppState = {
        data: EMBEDDED_GCC_DATA,
        records: EMBEDDED_GCC_DATA.records || [],
        filteredRecords: [],
        filters: {
            search: '',
            city: 'ALL',
            sector: 'ALL',
            eventType: 'ALL',
            sourceType: 'ALL'
        },
        sort: 'date-desc',
        page: 1,
        pageSize: 15,
        chartView: 'years',
        selectedRecord: null
    };

    // DOM Elements Cache
    let DOM = {};

    function init() {
        cacheDOM();
        bindEvents();
        loadLiveData();
        applyFiltersAndRender();
        renderRecentAnnouncements();
        renderStatePolicies();
    }

    function cacheDOM() {
        DOM.kpiTotal = document.getElementById('gccKpiTotal');
        DOM.kpiNew = document.getElementById('gccKpiNew');
        DOM.kpiExpansion = document.getElementById('gccKpiExpansion');
        DOM.kpiJobs = document.getElementById('gccKpiJobs');
        DOM.kpiCities = document.getElementById('gccKpiCities');
        DOM.kpiPrimary = document.getElementById('gccKpiPrimary');
        DOM.kpiRatioBarNew = document.getElementById('gccKpiRatioBarNew');
        DOM.kpiRatioBarExp = document.getElementById('gccKpiRatioBarExp');

        DOM.mapWrapper = document.getElementById('gccMapWrapper');
        DOM.mapTooltip = document.getElementById('gccMapTooltip');
        DOM.cityPills = document.getElementById('gccCityPills');

        DOM.chartContainer = document.getElementById('gccChartContainer');
        DOM.chartSubtitle = document.getElementById('gccChartSubtitle');

        DOM.searchInput = document.getElementById('gccSearchInput');
        DOM.citySelect = document.getElementById('gccCitySelect');
        DOM.sectorSelect = document.getElementById('gccSectorSelect');
        DOM.eventTypeSelect = document.getElementById('gccEventTypeSelect');
        DOM.sourceTypeSelect = document.getElementById('gccSourceTypeSelect');
        DOM.sortSelect = document.getElementById('gccSortSelect');
        DOM.resetBtn = document.getElementById('gccResetBtn');

        DOM.resultCount = document.getElementById('gccResultCount');
        DOM.tableBody = document.getElementById('gccTableBody');
        DOM.pagePrev = document.getElementById('gccPagePrev');
        DOM.pageNext = document.getElementById('gccPageNext');
        DOM.pageIndicator = document.getElementById('gccPageIndicator');

        DOM.modalBackdrop = document.getElementById('gccModalBackdrop');
        DOM.modalContent = document.getElementById('gccModalContent');
        DOM.modalCloseBtn = document.getElementById('gccModalCloseBtn');

        DOM.methodModal = document.getElementById('gccMethodModal');
        DOM.methodModalClose = document.getElementById('gccMethodModalClose');
        DOM.openMethodBtn = document.getElementById('gccOpenMethodBtn');

        DOM.announcementsList = document.getElementById('gccAnnouncementsList');
        DOM.policiesList = document.getElementById('gccPoliciesList');
    }

    function bindEvents() {
        // Search & Filter listeners
        if (DOM.searchInput) {
            DOM.searchInput.addEventListener('input', function (e) {
                AppState.filters.search = e.target.value.toLowerCase().trim();
                AppState.page = 1;
                applyFiltersAndRender();
            });
        }

        if (DOM.citySelect) {
            DOM.citySelect.addEventListener('change', function (e) {
                AppState.filters.city = e.target.value;
                AppState.page = 1;
                applyFiltersAndRender();
            });
        }

        if (DOM.sectorSelect) {
            DOM.sectorSelect.addEventListener('change', function (e) {
                AppState.filters.sector = e.target.value;
                AppState.page = 1;
                applyFiltersAndRender();
            });
        }

        if (DOM.eventTypeSelect) {
            DOM.eventTypeSelect.addEventListener('change', function (e) {
                AppState.filters.eventType = e.target.value;
                AppState.page = 1;
                applyFiltersAndRender();
            });
        }

        if (DOM.sourceTypeSelect) {
            DOM.sourceTypeSelect.addEventListener('change', function (e) {
                AppState.filters.sourceType = e.target.value;
                AppState.page = 1;
                applyFiltersAndRender();
            });
        }

        if (DOM.sortSelect) {
            DOM.sortSelect.addEventListener('change', function (e) {
                AppState.sort = e.target.value;
                applyFiltersAndRender();
            });
        }

        if (DOM.resetBtn) {
            DOM.resetBtn.addEventListener('click', function () {
                resetFilters();
            });
        }

        // Pagination
        if (DOM.pagePrev) {
            DOM.pagePrev.addEventListener('click', function () {
                if (AppState.page > 1) {
                    AppState.page--;
                    renderTable();
                }
            });
        }

        if (DOM.pageNext) {
            DOM.pageNext.addEventListener('click', function () {
                const totalPages = Math.ceil(AppState.filteredRecords.length / AppState.pageSize);
                if (AppState.page < totalPages) {
                    AppState.page++;
                    renderTable();
                }
            });
        }

        // Chart view switchers
        const chartTabYears = document.getElementById('gccTabYears');
        const chartTabSectors = document.getElementById('gccTabSectors');
        if (chartTabYears && chartTabSectors) {
            chartTabYears.addEventListener('click', function () {
                AppState.chartView = 'years';
                chartTabYears.classList.add('is-active');
                chartTabSectors.classList.remove('is-active');
                renderChart();
            });
            chartTabSectors.addEventListener('click', function () {
                AppState.chartView = 'sectors';
                chartTabSectors.classList.add('is-active');
                chartTabYears.classList.remove('is-active');
                renderChart();
            });
        }

        // Detail Modal close
        if (DOM.modalCloseBtn) {
            DOM.modalCloseBtn.addEventListener('click', closeModal);
        }
        if (DOM.modalBackdrop) {
            DOM.modalBackdrop.addEventListener('click', function (e) {
                if (e.target === DOM.modalBackdrop) closeModal();
            });
        }

        // Methodology Modal
        if (DOM.openMethodBtn && DOM.methodModal) {
            DOM.openMethodBtn.addEventListener('click', function () {
                DOM.methodModal.classList.add('is-open');
            });
        }
        if (DOM.methodModalClose && DOM.methodModal) {
            DOM.methodModalClose.addEventListener('click', function () {
                DOM.methodModal.classList.remove('is-open');
            });
            DOM.methodModal.addEventListener('click', function (e) {
                if (e.target === DOM.methodModal) DOM.methodModal.classList.remove('is-open');
            });
        }

        // Keyboard Escape
        window.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeModal();
                if (DOM.methodModal) DOM.methodModal.classList.remove('is-open');
            }
        });
    }

    function loadLiveData() {
        // Try fetching external gcc-data.json
        const dataPath = 'gcc-tracker/gcc-data.json';
        fetch(dataPath)
            .then(function (res) {
                if (!res.ok) throw new Error('Live data fetch offline');
                return res.json();
            })
            .then(function (json) {
                if (json && json.records && json.records.length > 0) {
                    AppState.data = json;
                    AppState.records = json.records;
                    populateDropdowns();
                    applyFiltersAndRender();
                    renderRecentAnnouncements();
                    renderStatePolicies();
                    updateTimestamp(json.meta?.lastRefreshedDisplay);
                }
            })
            .catch(function () {
                // Smoothly continue using embedded authentic dataset
                populateDropdowns();
                updateTimestamp(AppState.data.meta?.lastRefreshedDisplay);
            });
    }

    function updateTimestamp(displayDate) {
        const timeEl = document.getElementById('gccRefreshDate');
        if (timeEl && displayDate) {
            timeEl.textContent = displayDate;
        }
    }

    function populateDropdowns() {
        if (!DOM.citySelect || !DOM.sectorSelect) return;

        // Populate Cities
        const cities = Array.from(new Set(AppState.records.map(r => r.city))).sort();
        DOM.citySelect.innerHTML = '<option value="ALL">All Cities (' + cities.length + ')</option>';
        cities.forEach(function (c) {
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = c;
            DOM.citySelect.appendChild(opt);
        });

        // Populate Sectors
        const sectors = Array.from(new Set(AppState.records.map(r => r.industry))).sort();
        DOM.sectorSelect.innerHTML = '<option value="ALL">All Sectors (' + sectors.length + ')</option>';
        sectors.forEach(function (s) {
            const opt = document.createElement('option');
            opt.value = s;
            opt.textContent = s;
            DOM.sectorSelect.appendChild(opt);
        });
    }

    function resetFilters() {
        AppState.filters = {
            search: '',
            city: 'ALL',
            sector: 'ALL',
            eventType: 'ALL',
            sourceType: 'ALL'
        };
        AppState.page = 1;

        if (DOM.searchInput) DOM.searchInput.value = '';
        if (DOM.citySelect) DOM.citySelect.value = 'ALL';
        if (DOM.sectorSelect) DOM.sectorSelect.value = 'ALL';
        if (DOM.eventTypeSelect) DOM.eventTypeSelect.value = 'ALL';
        if (DOM.sourceTypeSelect) DOM.sourceTypeSelect.value = 'ALL';

        applyFiltersAndRender();
    }

    function applyFiltersAndRender() {
        const f = AppState.filters;

        AppState.filteredRecords = AppState.records.filter(function (r) {
            if (f.city !== 'ALL' && r.city !== f.city) return false;
            if (f.sector !== 'ALL' && r.industry !== f.sector) return false;
            if (f.eventType !== 'ALL' && r.eventType !== f.eventType) return false;
            if (f.sourceType !== 'ALL' && r.sourceType !== f.sourceType) return false;

            if (f.search) {
                const q = f.search;
                const matchName = r.company.toLowerCase().includes(q);
                const matchFocus = (r.focus || '').toLowerCase().includes(q);
                const matchHq = (r.hq || '').toLowerCase().includes(q);
                const matchCity = r.city.toLowerCase().includes(q);
                if (!matchName && !matchFocus && !matchHq && !matchCity) return false;
            }

            return true;
        });

        // Apply Sorting
        AppState.filteredRecords.sort(function (a, b) {
            if (AppState.sort === 'date-desc') return (b.announcementDate || '').localeCompare(a.announcementDate || '');
            if (AppState.sort === 'date-asc') return (a.announcementDate || '').localeCompare(b.announcementDate || '');
            if (AppState.sort === 'company-asc') return a.company.localeCompare(b.company);
            if (AppState.sort === 'company-desc') return b.company.localeCompare(a.company);
            if (AppState.sort === 'jobs-desc') return (b.headcountTarget || 0) - (a.headcountTarget || 0);
            return 0;
        });

        renderKPIs();
        renderMap();
        renderChart();
        renderTable();
    }

    function renderKPIs() {
        const total = AppState.filteredRecords.length;
        let newCount = 0;
        let expCount = 0;
        let plannedJobs = 0;
        let primaryCount = 0;
        const cities = new Set();

        AppState.filteredRecords.forEach(function (r) {
            if (r.eventType === 'New GCC') newCount++;
            else expCount++;

            if (r.sourceType === 'Verified Primary') primaryCount++;
            if (r.headcountTarget) plannedJobs += r.headcountTarget;
            cities.add(r.city);
        });

        if (DOM.kpiTotal) DOM.kpiTotal.textContent = total.toLocaleString();
        if (DOM.kpiNew) DOM.kpiNew.textContent = newCount.toLocaleString();
        if (DOM.kpiExpansion) DOM.kpiExpansion.textContent = expCount.toLocaleString();
        if (DOM.kpiJobs) DOM.kpiJobs.textContent = plannedJobs > 0 ? plannedJobs.toLocaleString() : '—';
        if (DOM.kpiCities) DOM.kpiCities.textContent = cities.size;
        if (DOM.kpiPrimary) {
            const pct = total > 0 ? Math.round((primaryCount / total) * 100) : 0;
            DOM.kpiPrimary.textContent = pct + '%';
        }

        if (DOM.kpiRatioBarNew && DOM.kpiRatioBarExp) {
            const newPct = total > 0 ? (newCount / total) * 100 : 50;
            const expPct = total > 0 ? (expCount / total) * 100 : 50;
            DOM.kpiRatioBarNew.style.width = newPct + '%';
            DOM.kpiRatioBarExp.style.width = expPct + '%';
        }
    }

    function renderMap() {
        if (!DOM.mapWrapper) return;

        // Calculate count per city from current filtered view
        const cityCounts = {};
        AppState.records.forEach(function (r) {
            cityCounts[r.city] = (cityCounts[r.city] || 0) + 1;
        });

        let nodesHtml = '';
        const coords = CITY_COORDINATES;

        for (const [cityName, coord] of Object.entries(coords)) {
            const count = cityCounts[cityName] || 0;
            if (count === 0) continue;

            const radius = Math.min(Math.max(Math.sqrt(count) * 2.4, 4), 16);
            const isActive = AppState.filters.city === cityName;
            const activeClass = isActive ? 'is-active' : '';

            // Smart label offset to prevent collisions
            let labelDx = radius + 4;
            let labelDy = 3;
            if (cityName === 'Bengaluru') { labelDx = -55; labelDy = 4; }
            if (cityName === 'Pune') { labelDx = -32; labelDy = 10; }
            if (cityName === 'Mumbai' || cityName === 'Navi Mumbai' || cityName === 'Thane') { labelDx = -45; labelDy = -4; }
            if (cityName === 'Gurugram') { labelDx = -52; labelDy = -4; }
            if (cityName === 'Kolkata') { labelDx = radius + 3; labelDy = 3; }

            nodesHtml += \`
                <g class="gcc-map-node \${activeClass}" data-city="\${cityName}" transform="translate(\${coord[0]}, \${coord[1]})">
                    <circle class="gcc-node-outer" r="\${radius}" />
                    <circle class="gcc-node-core" r="3" />
                    <text class="gcc-node-label" x="\${labelDx}" y="\${labelDy}">\${cityName} (\${count})</text>
                </g>
            \`;
        }

        DOM.mapWrapper.innerHTML = \`
            <svg viewBox="0 0 360 440" class="gcc-india-svg" role="img" aria-label="Interactive India GCC Ecosystem Map">
                <path class="gcc-map-path" d="\${INDIA_MAP_PATH}" />
                \${nodesHtml}
            </svg>
            <div class="gcc-map-tooltip" id="gccMapTooltip"></div>
        \`;

        // Bind interactive events to map nodes
        const nodes = DOM.mapWrapper.querySelectorAll('.gcc-map-node');
        const tooltip = document.getElementById('gccMapTooltip');

        nodes.forEach(function (node) {
            const cityName = node.getAttribute('data-city');
            const count = cityCounts[cityName] || 0;

            node.addEventListener('mouseenter', function (e) {
                if (!tooltip) return;
                tooltip.innerHTML = \`
                    <span><strong>\${cityName}</strong> · \${count} GCC Initiatives</span>
                    <span style="font-family: var(--mono); font-size: 0.65rem; color: #BFFF00;">Select to filter →</span>
                \`;
                tooltip.classList.add('is-visible');
            });

            node.addEventListener('mouseleave', function () {
                if (tooltip) tooltip.classList.remove('is-visible');
            });

            node.addEventListener('click', function () {
                if (AppState.filters.city === cityName) {
                    AppState.filters.city = 'ALL';
                    if (DOM.citySelect) DOM.citySelect.value = 'ALL';
                } else {
                    AppState.filters.city = cityName;
                    if (DOM.citySelect) DOM.citySelect.value = cityName;
                }
                AppState.page = 1;
                applyFiltersAndRender();
            });
        });

        renderCityPills();
    }

    function renderCityPills() {
        if (!DOM.cityPills) return;

        const majorCities = ['ALL', 'Hyderabad', 'Bengaluru', 'Pune', 'Chennai', 'Gurugram', 'Noida', 'Mumbai', 'Coimbatore', 'Ahmedabad (GIFT City)', 'Kolkata'];
        let html = '';

        majorCities.forEach(function (c) {
            const isActive = AppState.filters.city === c;
            const label = c === 'ALL' ? 'All Hubs' : c;
            html += \`<button type="button" class="gcc-city-pill \${isActive ? 'is-active' : ''}" data-pill-city="\${c}">\${label}</button>\`;
        });

        DOM.cityPills.innerHTML = html;

        DOM.cityPills.querySelectorAll('.gcc-city-pill').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const target = btn.getAttribute('data-pill-city');
                AppState.filters.city = target;
                if (DOM.citySelect) DOM.citySelect.value = target;
                AppState.page = 1;
                applyFiltersAndRender();
            });
        });
    }

    function generateInsightText(records, currentCity, currentSector) {
        const total = records.length;
        if (total === 0) return 'No initiatives match the active filter criteria.';
        const yr2526 = records.filter(r => (r.year || 2025) >= 2025).length;
        const pct2526 = Math.round((yr2526 / total) * 100);
        const newCount = records.filter(r => r.eventType === 'New GCC').length;
        const expCount = total - newCount;
        const newPct = Math.round((newCount / total) * 100);

        if (currentCity && currentCity !== 'ALL') {
            return 'In ' + currentCity + ', ' + total + ' initiatives are tracked (' + newPct + '% new launches, ' + (100 - newPct) + '% expansions), with ' + pct2526 + '% announced in 2025–2026.';
        }
        if (currentSector && currentSector !== 'ALL') {
            return 'In ' + currentSector + ', ' + total + ' initiatives are tracked across Indian hubs, with ' + newPct + '% representing first-time centre launches.';
        }
        if (pct2526 >= 65) {
            return pct2526 + '% of tracked GCC initiatives occurred in 2025–2026, marking a pronounced post-2024 acceleration as global enterprises expanded beyond core tech into full enterprise functions.';
        }
        return 'Activity spans ' + total + ' verified initiatives across 2022–2026 (' + newCount + ' new launches, ' + expCount + ' expansions).';
    }

    function renderChart() {
        if (!DOM.chartContainer) return;

        if (AppState.chartView === 'years') {
            if (DOM.chartSubtitle) DOM.chartSubtitle.textContent = 'Announcements by Year (New Launches vs Expansions)';
            renderYearChart();
        } else {
            if (DOM.chartSubtitle) DOM.chartSubtitle.textContent = 'Distribution by Leading Industry Sector';
            renderSectorChart();
        }
    }

    function renderYearChart() {
        const yearBuckets = {
            '2022': { new: 0, exp: 0, total: 0 },
            '2023': { new: 0, exp: 0, total: 0 },
            '2024': { new: 0, exp: 0, total: 0 },
            '2025': { new: 0, exp: 0, total: 0 },
            '2026': { new: 0, exp: 0, total: 0 }
        };

        AppState.filteredRecords.forEach(function (r) {
            const yr = String(r.year || '2025');
            if (yearBuckets[yr]) {
                if (r.eventType === 'New GCC') yearBuckets[yr].new++;
                else yearBuckets[yr].exp++;
                yearBuckets[yr].total++;
            }
        });

        let maxVal = 1;
        Object.values(yearBuckets).forEach(function (b) {
            if (b.total > maxVal) maxVal = b.total;
        });

        const years = ['2022', '2023', '2024', '2025', '2026'];
        const xCoords = [50, 140, 230, 320, 410];
        const yBaseline = 162;
        const maxBarH = 125;

        const points = [];
        let svgElements = '';

        // Subtle background gridlines
        svgElements += '<line x1="30" y1="37" x2="430" y2="37" class="gcc-chart-svg-gridline" />' +
            '<line x1="30" y1="78" x2="430" y2="78" class="gcc-chart-svg-gridline" />' +
            '<line x1="30" y1="120" x2="430" y2="120" class="gcc-chart-svg-gridline" />' +
            '<line x1="20" y1="' + yBaseline + '" x2="440" y2="' + yBaseline + '" class="gcc-chart-axis-line" />';

        years.forEach(function (yr, idx) {
            const b = yearBuckets[yr];
            const x = xCoords[idx];
            const total = b.total;
            const hTotal = total > 0 ? Math.round((total / maxVal) * maxBarH) + 4 : 0;
            const hNew = total > 0 ? Math.round((b.new / total) * hTotal) : 0;
            const hExp = hTotal - hNew;
            const yTop = total > 0 ? (yBaseline - hTotal) : yBaseline;

            points.push({ x: x, y: yTop, yr: yr, total: total, newCount: b.new, expCount: b.exp });

            const expRectY = yBaseline - hTotal;
            const expRectH = hNew > 0 ? Math.max(hExp - 1.5, 0) : hExp;
            const newRectY = yBaseline - hNew;

            svgElements += '<g class="gcc-chart-year-group" data-year="' + yr + '" data-new="' + b.new + '" data-exp="' + b.exp + '" data-total="' + total + '">' +
                '<rect x="' + (x - 38) + '" y="10" width="76" height="175" fill="transparent" />' +
                (hExp > 0 ? '<rect class="gcc-bar-rect gcc-bar-rect--exp" x="' + (x - 18) + '" y="' + expRectY + '" width="36" height="' + expRectH + '" rx="2" />' : '') +
                (hNew > 0 ? '<rect class="gcc-bar-rect gcc-bar-rect--new" x="' + (x - 18) + '" y="' + newRectY + '" width="36" height="' + hNew + '" rx="2" />' : '') +
                '<text class="gcc-chart-val-label" x="' + x + '" y="' + (yTop - 6) + '">' + total + '</text>' +
                '<text class="gcc-chart-axis-label" x="' + x + '" y="179">' + yr + '</text>' +
                '</g>';
        });

        // Trajectory Path
        let trajectoryD = 'M ' + points[0].x + ' ' + points[0].y;
        for (let i = 1; i < points.length; i++) {
            trajectoryD += ' L ' + points[i].x + ' ' + points[i].y;
        }

        let trajectoryNodes = '';
        points.forEach(function (p) {
            trajectoryNodes += '<circle class="gcc-traj-dot" cx="' + p.x + '" cy="' + p.y + '" r="3.5" data-yr="' + p.yr + '" />';
        });

        // 2026 Halo indicator
        const p2026 = points[4];
        const haloSvg = '<circle class="gcc-traj-halo" cx="' + p2026.x + '" cy="' + p2026.y + '" r="6.5" />';

        // Momentum Track HTML
        let momentumTrackHtml = '';
        years.forEach(function (yr, idx) {
            const b = yearBuckets[yr];
            const isSurge = yr === '2025';
            const isCurrent = yr === '2026';
            const stepClass = isCurrent ? 'is-current' : (isSurge ? 'is-surge' : '');

            momentumTrackHtml += '<div class="gcc-track-step ' + stepClass + '" data-yr="' + yr + '">' +
                '<span class="gcc-track-val">' + b.total + '</span>' +
                '<span class="gcc-track-node"></span>' +
                '<span class="gcc-track-yr">' + yr + '</span>' +
                '</div>';

            if (idx < years.length - 1) {
                const nextYr = years[idx + 1];
                let connClass = '';
                if (nextYr === '2024' || nextYr === '2025') connClass = 'gcc-track-connector--active';
                if (nextYr === '2026') connClass = 'gcc-track-connector--surge';
                momentumTrackHtml += '<div class="gcc-track-connector ' + connClass + '"></div>';
            }
        });

        const insightText = generateInsightText(AppState.filteredRecords, AppState.filters.city, AppState.filters.sector);

        const refreshDisplay = AppState.data?.meta?.lastRefreshedDisplay || '8 October 2026';

        const statusStripHtml = '<div class="gcc-chart-status-strip">' +
            '<div class="gcc-status-strip-left">' +
            '<span class="gcc-status-label">CURRENT PERIOD</span>' +
            '<span class="gcc-status-period">' +
            '<span class="gcc-status-live-dot" aria-hidden="true"></span>' +
            '<span><strong>2026</strong> — TRACKING ACTIVE</span>' +
            '</span>' +
            '</div>' +
            '<div class="gcc-status-strip-right">' +
            '<span class="gcc-status-refresh-label">LAST REFRESHED:</span>' +
            '<span class="gcc-status-refresh-val">' + refreshDisplay + '</span>' +
            '</div>' +
            '</div>';

        DOM.chartContainer.innerHTML = '<div class="gcc-chart-svg-stage">' +
            '<div class="gcc-chart-live-tooltip" id="gccChartTooltip"></div>' +
            '<svg viewBox="0 0 460 195" class="gcc-chart-svg" role="img" aria-label="Ecosystem Growth Dynamics Stacked Bar Chart with Activity Trajectory">' +
            svgElements +
            '<path class="gcc-trajectory-path" d="' + trajectoryD + '" />' +
            haloSvg +
            trajectoryNodes +
            '</svg>' +
            '</div>' +
            '<div class="gcc-chart-legend">' +
            '<div class="gcc-legend-item"><span class="gcc-legend-swatch" style="background:#2D6A4F;"></span><span>New GCC Launches</span></div>' +
            '<div class="gcc-legend-item"><span class="gcc-legend-swatch" style="background:#1D3557;"></span><span>Expansions</span></div>' +
            '<div class="gcc-legend-item"><span class="gcc-legend-line-swatch"></span><span>Annual Trajectory</span></div>' +
            '</div>' +
            '<div class="gcc-chart-takeaway">' +
            '<div class="gcc-takeaway-header">' +
            '<span class="gcc-takeaway-kicker">WHAT CHANGED?</span>' +
            '<span class="gcc-takeaway-signal">ANNUAL MOMENTUM INFLECTION</span>' +
            '</div>' +
            '<div class="gcc-momentum-track">' +
            momentumTrackHtml +
            '</div>' +
            '<div class="gcc-takeaway-insight">' +
            '<span class="gcc-insight-bullet">▸</span>' +
            '<span class="gcc-insight-text" id="gccChartInsightText">' + insightText + '</span>' +
            '</div>' +
            statusStripHtml +
            '</div>';

        // Wire Hover Events
        const tooltip = document.getElementById('gccChartTooltip');
        const yearGroups = DOM.chartContainer.querySelectorAll('.gcc-chart-year-group');
        const trajDots = DOM.chartContainer.querySelectorAll('.gcc-traj-dot');

        yearGroups.forEach(function (group) {
            const yr = group.getAttribute('data-year');
            const newC = group.getAttribute('data-new');
            const expC = group.getAttribute('data-exp');
            const totC = group.getAttribute('data-total');

            group.addEventListener('mouseenter', function () {
                if (!tooltip) return;
                tooltip.innerHTML = '<div style="font-weight:700; color:#BFFF00; margin-bottom:2px;">' + yr + ' Activity</div>' +
                    '<div>New Launches: <strong>' + newC + '</strong></div>' +
                    '<div>Expansions: <strong>' + expC + '</strong></div>' +
                    '<div style="border-top:1px solid rgba(255,255,255,0.15); margin-top:2px; padding-top:2px;">Total: <strong>' + totC + '</strong></div>';
                tooltip.classList.add('is-active');

                trajDots.forEach(function (d) {
                    if (d.getAttribute('data-yr') === yr) {
                        d.style.r = '5.5';
                        d.style.fill = '#BFFF00';
                    } else {
                        d.style.r = '3.5';
                        d.style.fill = '#FFFFFF';
                    }
                });
            });

            group.addEventListener('mouseleave', function () {
                if (tooltip) tooltip.classList.remove('is-active');
                trajDots.forEach(function (d) {
                    d.style.r = '3.5';
                    d.style.fill = '#FFFFFF';
                });
            });
        });
    }

    function renderSectorChart() {
        const sectorCounts = {};
        AppState.filteredRecords.forEach(function (r) {
            sectorCounts[r.industry] = (sectorCounts[r.industry] || 0) + 1;
        });

        const sorted = Object.entries(sectorCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);
        const maxVal = sorted.length > 0 ? sorted[0][1] : 1;
        const total = AppState.filteredRecords.length;

        let rowsHtml = '';
        sorted.forEach(function ([sector, count]) {
            const pct = Math.round((count / maxVal) * 100);
            rowsHtml += '<div class="gcc-sector-row">' +
                '<span class="gcc-sector-name" title="' + sector + '">' + sector + '</span>' +
                '<div class="gcc-sector-track"><div class="gcc-sector-fill" style="width: ' + pct + '%;"></div></div>' +
                '<span class="gcc-sector-count">' + count + '</span>' +
                '</div>';
        });

        const top2 = sorted.slice(0, 2);
        const top2Count = top2.reduce((s, x) => s + x[1], 0);
        const top2Pct = total > 0 ? Math.round((top2Count / total) * 100) : 0;
        const insightText = sorted.length >= 2
            ? top2[0][0] + ' and ' + top2[1][0] + ' lead deployment, accounting for ' + top2Pct + '% of tracked capability centres across Indian hubs.'
            : 'Tracking ' + total + ' initiatives across active industry categories.';

        const refreshDisplay = AppState.data?.meta?.lastRefreshedDisplay || '8 October 2026';

        const statusStripHtml = '<div class="gcc-chart-status-strip">' +
            '<div class="gcc-status-strip-left">' +
            '<span class="gcc-status-label">CURRENT PERIOD</span>' +
            '<span class="gcc-status-period">' +
            '<span class="gcc-status-live-dot" aria-hidden="true"></span>' +
            '<span><strong>2026</strong> — TRACKING ACTIVE</span>' +
            '</span>' +
            '</div>' +
            '<div class="gcc-status-strip-right">' +
            '<span class="gcc-status-refresh-label">LAST REFRESHED:</span>' +
            '<span class="gcc-status-refresh-val">' + refreshDisplay + '</span>' +
            '</div>' +
            '</div>';

        DOM.chartContainer.innerHTML = '<div class="gcc-sector-bars-wrap">' +
            rowsHtml +
            '</div>' +
            '<div class="gcc-chart-legend">' +
            '<div class="gcc-legend-item"><span class="gcc-legend-swatch" style="background:#2D6A4F;"></span><span>Verified GCC Initiatives</span></div>' +
            '</div>' +
            '<div class="gcc-chart-takeaway">' +
            '<div class="gcc-takeaway-header">' +
            '<span class="gcc-takeaway-kicker">WHAT CHANGED?</span>' +
            '<span class="gcc-takeaway-signal">CAPABILITY CONCENTRATION</span>' +
            '</div>' +
            '<div class="gcc-takeaway-insight" style="border-top:none; padding-top:0;">' +
            '<span class="gcc-insight-bullet">▸</span>' +
            '<span class="gcc-insight-text">' + insightText + '</span>' +
            '</div>' +
            statusStripHtml +
            '</div>';
    }

    function renderTable() {
        if (!DOM.tableBody) return;

        const total = AppState.filteredRecords.length;
        if (DOM.resultCount) {
            DOM.resultCount.textContent = total === 1 ? '1 initiative found' : total + ' initiatives found';
        }

        if (total === 0) {
            DOM.tableBody.innerHTML = \`
                <tr>
                    <td colspan="7" style="text-align: center; padding: 2.5rem; color: var(--light);">
                        No verified GCC records match the current filters.
                        <div style="margin-top: 0.5rem;"><button type="button" class="gcc-reset-btn" onclick="document.getElementById('gccResetBtn').click()">Clear All Filters</button></div>
                    </td>
                </tr>
            \`;
            if (DOM.pageIndicator) DOM.pageIndicator.textContent = 'Page 0 of 0';
            if (DOM.pagePrev) DOM.pagePrev.disabled = true;
            if (DOM.pageNext) DOM.pageNext.disabled = true;
            return;
        }

        const totalPages = Math.ceil(total / AppState.pageSize);
        if (AppState.page > totalPages) AppState.page = totalPages;

        const startIdx = (AppState.page - 1) * AppState.pageSize;
        const pageItems = AppState.filteredRecords.slice(startIdx, startIdx + AppState.pageSize);

        let rowsHtml = '';
        pageItems.forEach(function (r) {
            const eventBadgeClass = r.eventType === 'New GCC' ? 'gcc-badge-new' : 'gcc-badge-expansion';
            const sourceBadgeClass = r.sourceType === 'Verified Primary' ? 'gcc-badge-primary' : 'gcc-badge-news';
            
            let jobsDisplay = '—';
            if (r.headcountTarget) {
                jobsDisplay = \`<strong>\${r.headcountTarget.toLocaleString()}</strong> <span style="font-size:0.6rem; color:var(--light);">planned</span>\`;
            } else if (r.headcountNow) {
                jobsDisplay = \`<strong>\${r.headcountNow.toLocaleString()}</strong> <span style="font-size:0.6rem; color:var(--light);">current</span>\`;
            }

            rowsHtml += \`
                <tr>
                    <td>
                        <div class="gcc-company-name-cell">
                            <span>\${r.company}</span>
                            <span class="gcc-hq-pill" title="Global Headquarters">\${r.hq || 'Intl'}</span>
                        </div>
                    </td>
                    <td>\${r.city}, <span style="color:var(--light); font-size:0.75rem;">\${r.state}</span></td>
                    <td>\${r.industry}</td>
                    <td><span style="font-size:0.75rem; color:var(--muted); max-width:240px; display:inline-block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">\${r.focus || 'Technology & Operations'}</span></td>
                    <td><span class="gcc-badge \${eventBadgeClass}">\${r.eventType}</span></td>
                    <td>\${jobsDisplay}</td>
                    <td>
                        <button type="button" class="gcc-action-btn" data-record-id="\${r.id}">Inspect →</button>
                    </td>
                </tr>
            \`;
        });

        DOM.tableBody.innerHTML = rowsHtml;

        // Bind inspect buttons
        DOM.tableBody.querySelectorAll('.gcc-action-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const id = btn.getAttribute('data-record-id');
                const found = AppState.records.find(item => item.id === id);
                if (found) openModal(found);
            });
        });

        // Update pagination controls
        if (DOM.pageIndicator) {
            DOM.pageIndicator.textContent = \`Page \${AppState.page} of \${totalPages}\`;
        }
        if (DOM.pagePrev) DOM.pagePrev.disabled = AppState.page <= 1;
        if (DOM.pageNext) DOM.pageNext.disabled = AppState.page >= totalPages;
    }

    function openModal(record) {
        if (!DOM.modalContent || !DOM.modalBackdrop) return;
        AppState.selectedRecord = record;

        let jobsDetail = 'No specific hiring volume announced in initial public disclosure.';
        if (record.headcountTarget) {
            jobsDetail = \`<strong>\${record.headcountTarget.toLocaleString()} planned hires / target capacity</strong>\`;
            if (record.jobsNote) jobsDetail += \`<div style="font-size:0.75rem; color:var(--light); margin-top:4px;">Context: \${record.jobsNote}</div>\`;
        } else if (record.headcountNow) {
            jobsDetail = \`<strong>\${record.headcountNow.toLocaleString()} current headcount in India</strong>\`;
        }

        DOM.modalContent.innerHTML = \`
            <div class="gcc-modal-header">
                <div>
                    <div class="gcc-kicker-group">
                        <span>\${record.industry}</span> · <span>\${record.city}</span>
                    </div>
                    <h2 class="gcc-title" style="font-size: 1.6rem; margin: 0.25rem 0;">\${record.company}</h2>
                    <span class="gcc-hq-pill">Headquarters: \${record.hq || 'International'}</span>
                </div>
            </div>
            <div class="gcc-modal-body">
                <div class="gcc-detail-section">
                    <div class="gcc-detail-title">Initiative Classification</div>
                    <div class="gcc-detail-val">
                        <span class="gcc-badge \${record.eventType === 'New GCC' ? 'gcc-badge-new' : 'gcc-badge-expansion'}">\${record.eventType}</span>
                        <span style="margin-left: 0.5rem; font-family: var(--mono); font-size: 0.72rem; color: var(--light);">Announced: \${record.announcementDate}</span>
                    </div>
                </div>

                <div class="gcc-detail-section">
                    <div class="gcc-detail-title">Stated Capabilities & Focus Areas</div>
                    <div class="gcc-detail-val">\${record.focus || 'Enterprise Technology, R&D and Global Operations'}</div>
                </div>

                <div class="gcc-detail-section">
                    <div class="gcc-detail-title">Talent & Headcount Disclosures</div>
                    <div class="gcc-detail-val">\${jobsDetail}</div>
                </div>

                <div class="gcc-detail-section">
                    <div class="gcc-detail-title">Source Provenance & Verification</div>
                    <div class="gcc-detail-val">
                        <div style="font-size: 0.8rem; margin-bottom: 0.4rem;">
                            <strong>Source:</strong> \${record.sourceTitle} (<span style="color: var(--light);">\${record.sourceType}</span>)
                        </div>
                        <div style="font-size: 0.72rem; color: var(--light); font-family: var(--mono); margin-bottom: 0.75rem;">
                            Audited / Last Verified: \${record.lastVerified}
                        </div>
                        <a href="\${record.sourceUrl}" target="_blank" rel="noopener noreferrer" class="gcc-source-link-btn">
                            Open Official Reporting Link ↗
                        </a>
                    </div>
                </div>
            </div>
        \`;

        DOM.modalBackdrop.classList.add('is-open');
    }

    function closeModal() {
        if (DOM.modalBackdrop) {
            DOM.modalBackdrop.classList.remove('is-open');
        }
        AppState.selectedRecord = null;
    }

    function renderRecentAnnouncements() {
        if (!DOM.announcementsList) return;

        // Take recent items from 2026/2025
        const recents = AppState.records.filter(r => r.announcementDate && r.announcementDate.startsWith('2026')).slice(0, 6);
        let html = '';

        recents.forEach(function (r) {
            html += \`
                <div class="gcc-announcement-item">
                    <div class="gcc-announcement-header">
                        <strong style="font-size: 0.85rem;">\${r.company}</strong>
                        <span style="font-family: var(--mono); font-size: 0.65rem; color: var(--light);">\${r.announcementDate}</span>
                    </div>
                    <div style="font-size: 0.78rem; color: var(--muted);">
                        \${r.eventType} in <strong>\${r.city}</strong> · \${r.focus}
                    </div>
                    <div>
                        <a href="\${r.sourceUrl}" target="_blank" rel="noopener noreferrer" style="font-family: var(--mono); font-size: 0.62rem; color: #2D6A4F; text-decoration: underline;">
                            Source: \${r.sourceTitle} ↗
                        </a>
                    </div>
                </div>
            \`;
        });

        DOM.announcementsList.innerHTML = html;
    }

    function renderStatePolicies() {
        if (!DOM.policiesList || !AppState.data.statePolicies) return;

        let html = '';
        AppState.data.statePolicies.forEach(function (p) {
            html += \`
                <div class="gcc-policy-card">
                    <div class="gcc-policy-state">\${p.state}: \${p.policyName}</div>
                    <div style="font-size: 0.78rem; color: var(--ink); margin-bottom: 0.35rem;">\${p.targetSummary}</div>
                    <div style="font-size: 0.72rem; color: var(--light); margin-bottom: 0.4rem;"><em>\${p.keyIncentive}</em></div>
                    <a href="\${p.sourceUrl}" target="_blank" rel="noopener noreferrer" style="font-family: var(--mono); font-size: 0.62rem; color: var(--ink); text-decoration: underline;">
                        Official Framework Link ↗
                    </a>
                </div>
            \`;
        });

        DOM.policiesList.innerHTML = html;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
`;

fs.writeFileSync(outputJsPath, jsContent, 'utf8');
console.log(`Successfully built gcc-tracker.js at: ${outputJsPath}`);
