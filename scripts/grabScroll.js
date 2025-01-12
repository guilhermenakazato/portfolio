document.addEventListener('DOMContentLoaded', function () {
  const projectImageDiv = document.getElementById('project-images');
  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
      projectImageDiv.style.cursor = 'grabbing';
      projectImageDiv.style.userSprojectImageDivct = 'none';

      pos = {
          left: projectImageDiv.scrollLeft,
          top: projectImageDiv.scrollTop,
          x: e.clientX,
          y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      projectImageDiv.scrollTop = pos.top - dy;
      projectImageDiv.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
      projectImageDiv.style.cursor = 'grab';
      projectImageDiv.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
  };

  projectImageDiv.addEventListener('mousedown', mouseDownHandler);
});