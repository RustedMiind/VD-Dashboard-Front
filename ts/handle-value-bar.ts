setTimeout(() => {
  const ProjectsBar = document.getElementById("porjectsBar");
  // console.log(ProjectsBar);
  if (ProjectsBar) {
    const outerBarValue = ProjectsBar.getElementsByClassName(
      "outer-bar-value"
    )[0] as HTMLDivElement;
    const innerBarValue = ProjectsBar.getElementsByClassName(
      "inner-bar"
    )[0] as HTMLDivElement;
    console.log(outerBarValue);
    const requiredValue = parseInt(outerBarValue.getAttribute("value"));
    const doneValue = parseInt(innerBarValue.getAttribute("value"));
    const totalBar = requiredValue + doneValue;
    const innerBarWidth = 100 * (doneValue / totalBar);

    outerBarValue.innerText = requiredValue.toString();
    innerBarValue.innerText = doneValue.toString();
    innerBarValue.style.width = `${innerBarWidth}%`;

    console.log(requiredValue, doneValue, totalBar, `${innerBarWidth}%`);
  }
}, 0);
