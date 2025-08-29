---
title: About
date: 2025-08-25T00:00:00.000Z
type: page
---

<section class="contact-page about-us">
  <div class="container">
  <div class="why-qbo-hero-content">
  <h1>GPU Cloud at the Edge Beyond</h1>
  <p>Delivering high performance, streamlined infrastructure, and flexible AI/ML deployment—wherever you need it.</p>
</div>
</div>
</section>
<script>
    (function () {
  // guard to avoid double-initializing
  if (window.__missionTimelineInitialized) return;
  window.__missionTimelineInitialized = true;
  function initTimeline() {
    const root = document.querySelector(".mission-timeline");
    if (!root) return;
    const yearsContainer = root.querySelector(".mission-years");
    if (!yearsContainer) return;
    const yearNodes = Array.from(yearsContainer.querySelectorAll("span"));
    if (!yearNodes.length) return;
    const titleNode = root.querySelector("#timeline-title");
    const descNode = root.querySelector("#timeline-description");
    // create progress-line if missing
    let progress = yearsContainer.querySelector(".progress-line");
    if (!progress) {
      progress = document.createElement("div");
      progress.className = "progress-line";
      yearsContainer.insertBefore(progress, yearsContainer.firstChild);
    }
    function updateTimeline(targetEl) {
      if (!targetEl || yearNodes.indexOf(targetEl) === -1) return;
      const idx = yearNodes.indexOf(targetEl);
      // active / completed classes
      yearNodes.forEach((n, i) => {
        n.classList.toggle("active", n === targetEl);
        n.classList.toggle("completed", i < idx);
      });
      // update title & description
      if (titleNode)
        titleNode.textContent = targetEl.dataset.year || targetEl.textContent;
      if (descNode) descNode.textContent = targetEl.dataset.text || "";
      // set progress width
      const pct =
        yearNodes.length > 1 ? (idx / (yearNodes.length - 1)) * 100 : 0;
      progress.style.width = pct + "%";
    }
    // add click handlers + keyboard nav
    yearNodes.forEach((el, i) => {
      el.setAttribute("tabindex", "0");
      el.addEventListener("click", () => updateTimeline(el));
      el.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          updateTimeline(el);
        } else if (ev.key === "ArrowRight" || ev.key === "ArrowDown") {
          ev.preventDefault();
          if (i < yearNodes.length - 1) yearNodes[i + 1].focus();
        } else if (ev.key === "ArrowLeft" || ev.key === "ArrowUp") {
          ev.preventDefault();
          if (i > 0) yearNodes[i - 1].focus();
        }
      });
    });
    // initialize (pick .active or fallback to first)
    const initial = yearsContainer.querySelector("span.active") || yearNodes[0];
    updateTimeline(initial);
  }
  // ✅ document ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTimeline);
  } else {
    initTimeline();
  }
})();
</script>
<section class="mission-section">
  <div class="container">
  <h2 class="mission-title">Our Mission &amp; Milestones</h2>
  <div class="mission-wrapper">
  <div class="mission-timeline">
  <h3 id="timeline-title">2023</h3>
  <div class="mission-years"><span class="active" data-year="2023" data-text="QBO was founded in 2023 to transform the cloud compute landscape.">2023</span>
    <span data-year="2024" data-text="Launched blogs, videos, and social media posts to inform, inspire, and engage with our tech community.">2024</span>
    <span data-year="2025" data-text="Expanding global reach with scalable infrastructure to support AI-driven innovation worldwide.">2025</span></div>
  <p id="timeline-description" class="mission-description">
    QBO was founded in 2023 to transform the cloud compute landscape.
  </p>
</div>
  <div class="mission-image">
  <img src="http://localhost:4000/img/clouddd.png" alt="Cloud Image">
</div>
</div>
</div>
</section>

<section class="vision-section">
  <div class="container">
  <div class="vision-wrapper">
  <div class="vision-image">
  <img src="http://localhost:4000/img/cloudd.png" alt="Data Center Image">
</div>
  <div class="vision-text">
  <p>
QBO is a San Francisco–based technology company reimagining cloud infrastructure for AI and GPU-powered workloads. Built in the heart of the Financial District, QBO combines performance, simplicity, and sovereignty—enabling organizations to run high-performance compute anywhere.
        </p>
  <p>Our founding team brings decades of experience from industry leaders such as Sysdig, Riverbed, NGINX, F5, Portworx, Pure Storage, Splunk, and Cisco. With deep roots in cloud, data infrastructure, observability, and scalable systems, we’re building infrastructure that meets the demands of modern AI—without the complexity of legacy cloud providers.</p>
  <h3>Our Vision</h3>
  <p>To democratize access to high-performance GPU compute, empowering innovators of all backgrounds to create, build, and scale without technical or financial barriers.
        </p>
</div>
</div>
</div>
</section>
