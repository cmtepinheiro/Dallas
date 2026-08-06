// =====================================================
// LOADER — FLIGHT COMPUTER BOOT SEQUENCE
// =====================================================
const BOOT_LINES = [
    { label: "GNSS + INS", status: "ONLINE" },
    { label: "RADAR ALTIMETER", status: "ONLINE" },
    { label: "LIDAR", status: "ONLINE" },
    { label: "NIGHT VISION CAM", status: "ONLINE" },
    { label: "AUTOPILOT DO-178C", status: "CERTIFIED" },
    { label: "SATCOM DATALINK", status: "LINKED" },
    { label: "AUTOROTATION SAFETY", status: "ARMED" },
    { label: "FLIGHT COMPUTER", status: "READY" }
];

function playStartBeep() {
    try {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;
        const ctx = new Ctx();
        const now = ctx.currentTime;

        [880, 1320].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "square";
            osc.frequency.value = freq;
            const t0 = now + i * 0.11;
            gain.gain.setValueAtTime(0.0001, t0);
            gain.gain.exponentialRampToValueAtTime(0.12, t0 + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.09);
            osc.connect(gain).connect(ctx.destination);
            osc.start(t0);
            osc.stop(t0 + 0.1);
        });

        setTimeout(() => ctx.close(), 500);
    } catch (e) {
        /* audio not available — proceed silently */
    }
}

function runBootSequence(onComplete) {
    const loader = document.getElementById("loader");
    const bootLog = document.getElementById("bootLog");
    const startVideo = document.getElementById("bootStartVideo");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!bootLog || !startVideo) {
        onComplete();
        return;
    }

    // Start buffering the video immediately so it's ready to play the
    // instant the boot log finishes, instead of stalling on mobile networks.
    try {
        startVideo.load();
    } catch (e) {
        /* ignore */
    }

    if (reducedMotion) {
        // Respect reduced motion (no staggered animation, no video/beep)
        // but still show the systems log briefly instead of skipping entirely.
        BOOT_LINES.forEach((line) => {
            const row = document.createElement("div");
            row.className = "boot-line";
            row.style.animation = "none";
            row.style.opacity = "1";
            row.style.transform = "none";
            row.innerHTML = `<span>${line.label}</span><span class="boot-status">${line.status}</span>`;
            bootLog.appendChild(row);
        });
        setTimeout(onComplete, 1900);
        return;
    }

    const stepDelay = 160;

    BOOT_LINES.forEach((line, i) => {
        setTimeout(() => {
            const row = document.createElement("div");
            row.className = "boot-line";
            row.innerHTML = `<span>${line.label}</span><span class="boot-status">${line.status}</span>`;
            bootLog.appendChild(row);
        }, i * stepDelay);
    });

    const revealDelay = BOOT_LINES.length * stepDelay + 300;

    setTimeout(() => {
        startVideo.hidden = false;
        startVideo.classList.add("boot-start-video--fullscreen");
        if (loader) loader.classList.add("video-active");

        let finished = false;
        const finish = () => {
            if (finished) return;
            finished = true;
            playStartBeep();
            setTimeout(onComplete, 250);
        };

        startVideo.addEventListener("ended", finish);

        // Try to play with sound first; if the browser blocks unmuted
        // autoplay (iOS Safari, Chrome mobile without a user gesture yet),
        // fall back to a muted play so the video still shows visually.
        const tryPlay = () => {
            startVideo.muted = false;
            const playPromise = startVideo.play();
            if (playPromise && typeof playPromise.catch === "function") {
                playPromise.catch(() => {
                    startVideo.muted = true;
                    startVideo.play().catch(() => {
                        /* still blocked — fall back to timer below */
                    });
                });
            }
        };

        if (startVideo.readyState >= 2) {
            tryPlay();
        } else {
            startVideo.addEventListener("canplay", tryPlay, { once: true });
            tryPlay();
        }

        // Safety fallback in case the video can't play or 'ended' never fires.
        setTimeout(finish, 6200);
    }, revealDelay);
}

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        runBootSequence(() => loader.classList.add("hidden"));
    }
});

// =====================================================
// FLIGHT COMPUTER CLOCKS
// =====================================================
function pad(n) {
    return n.toString().padStart(2, "0");
}

function updateClocks() {
    const now = new Date();

    const utc = `${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())}`;
    const local = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    const utcEl = document.getElementById("utcClock");
    const localEl = document.getElementById("localClock");

    if (utcEl) utcEl.textContent = utc;
    if (localEl) localEl.textContent = local;
}

updateClocks();
setInterval(updateClocks, 1000);

// =====================================================
// REVEAL ON SCROLL
// =====================================================
const revealTargets = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

revealTargets.forEach((el) => revealObserver.observe(el));

// =====================================================
// MISSION DATA COUNTERS
// =====================================================
function animateCounter(el) {
    const target = parseInt(el.dataset.counter, 10) || 0;
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);

        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            el.textContent = target;
        }
    }

    requestAnimationFrame(tick);
}

const counterEls = document.querySelectorAll("[data-counter]");

const counterObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.7 }
);

counterEls.forEach((el) => counterObserver.observe(el));

// =====================================================
// FLIGHT PERFORMANCE GAUGES — ANALOG INSTRUMENT DIALS
// =====================================================
const DIAL_CX = 125;
const DIAL_CY = 125;
const DIAL_START_ANGLE = -135; // degrees, 0 = top, clockwise positive
const DIAL_SWEEP = 270;

function dialPoint(angleDeg, radius) {
    const rad = (angleDeg * Math.PI) / 180;
    return {
        x: DIAL_CX + radius * Math.sin(rad),
        y: DIAL_CY - radius * Math.cos(rad)
    };
}

function dialArcPath(a1, a2, radius) {
    const p1 = dialPoint(a1, radius);
    const p2 = dialPoint(a2, radius);
    const largeArc = a2 - a1 > 180 ? 1 : 0;
    return `M ${p1.x.toFixed(2)},${p1.y.toFixed(2)} A ${radius},${radius} 0 ${largeArc} 1 ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
}

function buildDialSVG(max) {
    const ZONE_R = 98;
    const TICK_OUTER = 86;
    const TICK_INNER = 76;
    const LABEL_R = 60;
    const NEEDLE_LEN = 50;

    const greenEnd = DIAL_START_ANGLE + 0.72 * DIAL_SWEEP;
    const yellowEnd = DIAL_START_ANGLE + 0.9 * DIAL_SWEEP;
    const redEnd = DIAL_START_ANGLE + DIAL_SWEEP;

    let ticks = "";
    let labels = "";
    for (let p = 0; p <= 100; p += 10) {
        const angle = DIAL_START_ANGLE + (p * DIAL_SWEEP) / 100;
        const inner = dialPoint(angle, TICK_INNER);
        const outer = dialPoint(angle, TICK_OUTER);
        const major = p % 20 === 0;
        ticks += `<line x1="${inner.x.toFixed(2)}" y1="${inner.y.toFixed(2)}" x2="${outer.x.toFixed(2)}" y2="${outer.y.toFixed(2)}" class="dial-tick${major ? " dial-tick--major" : ""}"></line>`;

        if (major) {
            const labelPt = dialPoint(angle, LABEL_R);
            const value = Math.round((max * p) / 100);
            labels += `<text x="${labelPt.x.toFixed(2)}" y="${labelPt.y.toFixed(2)}" class="dial-num" text-anchor="middle" dominant-baseline="middle">${value}</text>`;
        }
    }

    const needleTip = dialPoint(DIAL_START_ANGLE, NEEDLE_LEN);

    return `
        <svg viewBox="0 0 250 250">
            <circle cx="${DIAL_CX}" cy="${DIAL_CY}" r="108" class="dial-bezel"></circle>
            <path d="${dialArcPath(DIAL_START_ANGLE, greenEnd, ZONE_R)}" class="dial-zone dial-zone--green"></path>
            <path d="${dialArcPath(greenEnd, yellowEnd, ZONE_R)}" class="dial-zone dial-zone--yellow"></path>
            <path d="${dialArcPath(yellowEnd, redEnd, ZONE_R)}" class="dial-zone dial-zone--red"></path>
            <g>${ticks}</g>
            <g>${labels}</g>
            <line x1="${DIAL_CX}" y1="${DIAL_CY}" x2="${needleTip.x.toFixed(2)}" y2="${needleTip.y.toFixed(2)}" class="dial-needle" data-needle></line>
            <circle cx="${DIAL_CX}" cy="${DIAL_CY}" r="7" class="dial-hub"></circle>
        </svg>
        <div class="dial-readout"><strong class="gauge-number">0</strong><span></span></div>
    `;
}

function initGauges() {
    document.querySelectorAll(".gauge-dial").forEach((el) => {
        const max = parseFloat(el.closest(".gauge").dataset.max) || 100;
        el.innerHTML = buildDialSVG(max);
        const unit = el.closest(".gauge").dataset.unit || "";
        el.querySelector(".dial-readout span").textContent = unit;
    });
}

function animateGauge(el) {
    const value = parseFloat(el.dataset.value) || 0;
    const max = parseFloat(el.dataset.max) || 100;
    const numberEl = el.querySelector(".gauge-number");

    if (el.classList.contains("gauge--altimeter")) {
        const fill = el.querySelector(".altimeter-fill");
        const marker = el.querySelector(".altimeter-marker");
        const pistonTag = el.querySelector(".altimeter-tag--piston");
        const turbineTag = el.querySelector(".altimeter-tag--turbine");
        const targetPercent = Math.min(value / max, 1) * 100;
        const duration = 1700;
        const start = performance.now();

        function altTick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentValue = eased * value;
            const currentPercent = eased * targetPercent;

            if (numberEl) numberEl.textContent = Math.round(currentValue);
            if (fill) fill.style.height = currentPercent + "%";
            if (marker) marker.style.bottom = currentPercent + "%";
            if (pistonTag && currentPercent >= 33.33) pistonTag.classList.add("is-revealed");
            if (turbineTag && currentPercent >= 99.9) turbineTag.classList.add("is-revealed");

            if (progress < 1) {
                requestAnimationFrame(altTick);
            } else {
                if (numberEl) numberEl.textContent = value;
                if (fill) fill.style.height = targetPercent + "%";
                if (marker) marker.style.bottom = targetPercent + "%";
                if (pistonTag && targetPercent >= 33.33) pistonTag.classList.add("is-revealed");
                if (turbineTag && targetPercent >= 99.9) turbineTag.classList.add("is-revealed");
            }
        }

        requestAnimationFrame(altTick);
        return;
    }

    const targetPercent = Math.min(value / max, 1) * 100;
    const targetAngle = (targetPercent * DIAL_SWEEP) / 100;

    const needle = el.querySelector("[data-needle]");

    if (needle) needle.style.transition = "none";

    const duration = 1400;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = eased * value;
        const currentAngle = eased * targetAngle;

        if (numberEl) numberEl.textContent = Math.round(currentValue);
        if (needle) needle.style.transform = `rotate(${currentAngle.toFixed(2)}deg)`;

        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            if (numberEl) numberEl.textContent = value;
            if (needle) needle.style.transform = `rotate(${targetAngle.toFixed(2)}deg)`;
        }
    }

    requestAnimationFrame(tick);
}

initGauges();

const gaugeEls = document.querySelectorAll(".gauge:not(.gauge--map)");

const gaugeObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateGauge(entry.target);
                gaugeObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.7 }
);

gaugeEls.forEach((el) => gaugeObserver.observe(el));

// =====================================================
// INSTRUMENT CLIP — HOVER TO UNMUTE (max 30s)
// =====================================================
(function initInstrumentClip() {
    const clip = document.getElementById("instrumentClip");
    const video = document.getElementById("hoverClipVideo");
    if (!clip || !video) return;

    let muteTimer = null;

    function goLive() {
        video.muted = false;
        video.volume = 1;
        clip.classList.add("is-live");
        clearTimeout(muteTimer);
        muteTimer = setTimeout(goQuiet, 30000);
    }

    function goQuiet() {
        video.muted = true;
        clip.classList.remove("is-live");
        clearTimeout(muteTimer);
        muteTimer = null;
    }

    clip.addEventListener("mouseenter", goLive);
    clip.addEventListener("mouseleave", goQuiet);
    // On touch devices there's no real "hover" — a tap starts the
    // 30s live-audio window instead (it auto-mutes on its own after 30s).
    clip.addEventListener("touchstart", goLive, { passive: true });

    // Cut the sound if the video scrolls out of view, or the user
    // navigates away from the page entirely.
    const clipVisibilityObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) goQuiet();
            });
        },
        { threshold: 0.15 }
    );
    clipVisibilityObserver.observe(clip);

    window.addEventListener("pagehide", goQuiet);
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) goQuiet();
    });
})();

// =====================================================
// SCROLL FLIGHT TRAIL
// =====================================================
(function initScrollTrail() {
    const fill = document.getElementById("scrollTrailFill");
    const dot = document.getElementById("scrollTrailDot");
    if (!fill || !dot) return;

    function update() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
        const pct = (progress * 100).toFixed(2) + "%";
        fill.style.height = pct;
        dot.style.top = pct;
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
})();

// =====================================================
// NAVIGATION CLICK SOUND (reuses the boot-sequence beep)
// =====================================================
(function initClickSounds() {
    const targets = document.querySelectorAll("a, button");
    targets.forEach((el) => {
        el.addEventListener("click", () => playStartBeep());
    });
})();

// =====================================================
// MOBILE NAV TOGGLE
// =====================================================
const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector("nav");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("nav-open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("nav-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// =====================================================
// CONTACT FORM (submits via fetch, no page redirect)
// =====================================================
(function initContactForm() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("contactFormStatus");
    if (!form || !status) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector(".contact-form-submit");
        submitBtn.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            });
            if (response.ok) {
                form.reset();
                form.hidden = true;
                status.hidden = false;
            } else {
                throw new Error("Form submission failed");
            }
        } catch (err) {
            submitBtn.disabled = false;
            alert("Something went wrong sending your message — please email Dallas_Ind@gmail.com directly.");
        }
    });
})();

// =====================================================
// RADAR SWEEP — pause the SMIL rotation for users who
// prefer reduced motion (CSS can't target SMIL directly).
// =====================================================
(function initRadarMotionPreference() {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll(".map-radar svg").forEach((svg) => {
        if (typeof svg.pauseAnimations === "function") svg.pauseAnimations();
    });
})();
