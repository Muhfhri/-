(function() {
    var darkThemeSelected = localStorage.getItem("darkSwitch") === "dark";
    document.documentElement.setAttribute("data-theme", darkThemeSelected ? "dark" : "light");
})();

// Timeline Pendidikan Animation (trigger saat section masuk 150px dari atas viewport)
function animateTimelineOnAnchor() {
  const section = document.getElementById('timeline-pendidikan');
  if (!section) return;
  const steps = section.querySelectorAll('.timeline-step');
  const timeline = section.querySelector('.timeline.timeline-center');
  const rect = section.getBoundingClientRect();
  // Trigger jika bagian atas section sudah masuk 150px dari atas viewport
  if (rect.top <= 150) {
    steps.forEach((step, i) => {
      setTimeout(() => {
        step.classList.add('active');
        updateTimelineLine();
      }, 500 + i * 600);
    });
    window.removeEventListener('scroll', animateTimelineOnAnchor);
  }
  function updateTimelineLine() {
    // Hitung posisi step terakhir yang aktif
    const activeSteps = section.querySelectorAll('.timeline-step.active');
    if (activeSteps.length === 0) return;
    const firstStep = steps[0];
    const lastActiveStep = activeSteps[activeSteps.length - 1];
    const timelineRect = timeline.getBoundingClientRect();
    const dotYear = lastActiveStep.querySelector('.timeline-dot-year');
    if (!dotYear) return;
    const dotYearRect = dotYear.getBoundingClientRect();
    // Hitung jarak dari atas timeline ke bawah .timeline-dot-year terakhir
    const offset = (dotYearRect.top + dotYearRect.height) - timelineRect.top;
    timeline.style.setProperty('--timeline-line-height', offset + 'px');
  }
}
window.addEventListener('scroll', animateTimelineOnAnchor);